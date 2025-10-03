"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import DraggableWindow from "./components/DraggableWindow";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    // light / dark theme state
    const [theme, setTheme] = useState("light");
    // open windows state management
    const [openWindows, setOpenWindows] = useState([]);
    // closed windows x,y coordinates to for re-open state
    const [closedPositions, setClosedPositions] = useState({});

    const viewportRef = useRef(null);

    const WINDOW_CONFIG = {
        'About Brian': { width: 'w-[400px]', height: 'h-[300px]'},
        'Projects': { width: 'w-[400px]', height: 'h-[300px]'},
        'Contact': { width: 'w-[400px]', height: 'h-[300px]'},
        'Social Links': { width: 'w-[400px]', height: 'h-[300px]'},
        'default': { width: 'w-[800px]', height: 'h-[500px]'}

    }
    // function open new window
    const openNewWindow= (title, content) => {
        const windowExists = openWindows.some(window => window.title === title);

        if (windowExists) {
            console.log(`Window "${title}" is already open.`);
            return;
        }

        const newWin = {
            id: Date.now(),
            title: title,
            content: content,
        };
        setOpenWindows((prev) => [...prev, newWin]);
    };

    // function close window
    const closeWindow = (id, position) => {
        setClosedPositions(prev => ({
            ...prev,
            [id]: position,
        }));

        setOpenWindows((prev) => prev.filter((window) => window.id !== id));
    }

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="bg-white dark:bg-secondary-dark min-h-screen">
      <header className="p-4 flex justify-end">
        <button
          className="text-gray-800 dark:text-gray-200"
          onClick={toggleTheme}
        >
          🌓
        </button>
      </header>

      <div
        ref = {viewportRef}
        className="flex flex-col items-center justify-center
          w-full h-[calc(100vh-80px)] 
          bg-white dark:bg-secondary-dark"
      >
        {/* Star icon / download button top */}
        <div className="absolute -top-[var(--star-margin)] left-0 group">
          <button className="flex flex-col items-center justify-center pointer-events-auto">
            <Image
              src="/images/icon_star.webp"
              alt="downloads icon"
              width={128}
              height={128}
              className="block dark:hidden w-[var(--icon-button-width)] duration-200 cursor-pointer group-hover:scale-110 active:scale-75 group-hover:animate-bounce group-hover:drop-shadow-star"
            />
            <Image
              src="/images/icon_star_dark.webp"
              alt="downloads icon"
              width={128}
              height={128}
              className="hidden dark:block w-[var(--icon-button-width)] duration-200 cursor-pointer group-hover:scale-110 active:scale-75 group-hover:animate-bounce group-hover:drop-shadow-star"
            />
            <div className="absolute mt-8 w-max font-mono font-bold text-primary opacity-0 group-hover:opacity-100">
              fun stuff
            </div>
          </button>
        </div>

        <div className="flex flex-col w-[800px] h-auto m-8">
          {/*Title tab */}
          <div className="rounded-t-lg font-mono flex bg-gray-700 dark:border-x-2 dark:border-t-2 dark:border-black text-white dark:text-black dark:bg-white text-xl px-6 py-3">
            {/* The Traffic Lights Container */}
            <div className="flex space-x-2 mr-4">
              {/* Red Dot (Close) */}
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"></div>
              {/* Yellow Dot (Minimize) */}
              <div className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500"></div>
              {/* Green Dot (Maximize/Zoom) */}
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600"></div>
            </div>
          </div>
          {/* Window Body */}
          <div className="justify-center items-center flex flex-col bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-black rounded-b-xl shadow-xl p-36">
            {/* Main text */}
            <p
              className="text-center font-medium font-body 
                    text-[var(--title-size)] pt-[var(--title-padding)] dark:text-gray-100"
            >
              Hi! I'm <span className="text-primary font-bold ">Brian</span>
            </p>
            <h2 className="text-center mt-4 mb-1 dark:text-gray-100">I code for fun, play sports, and enjoy puzzle games.</h2>
            {/* Icon menu */}
            <div>
              <Navbar onIconClick={openNewWindow}/>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openWindows.map((win) => {
            const lastPosition = closedPositions[win.id];
            const config = WINDOW_CONFIG[win.title] || WINDOW_CONFIG['default'];

            return (
                <DraggableWindow
                    key={win.id}
                    title={win.title}
                    onClose={(position) => closeWindow(win.id, position)}
                    dragConstraintRef={viewportRef}
                    windowWidthClass={config.width}
                    windowHeightClass={config.height}

                    initialX={lastPosition ? lastPosition.x : undefined}
                    initialY={lastPosition ? lastPosition.y : undefined}
                >
                    {win.content()}
                </DraggableWindow>
            );
        })}
      </AnimatePresence>

      {/* Then other sections: About, Work, Gallery, Downloads, Contact, Footer */}
      <footer className=" dark:bg-secondary-dark text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Brian Cheung
      </footer>
    </div>
  );
}
