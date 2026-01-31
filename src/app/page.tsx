"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import DraggableWindow from "./components/DraggableWindow";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from "./components/ToggleTheme"

export default function Home() {
    // open windows state management
    const [openWindows, setOpenWindows] = useState([]);
    // closed windows x,y coordinates to for re-open state
    const [closedPositions, setClosedPositions] = useState({});

    const viewportRef = useRef(null);

    const WINDOW_CONFIG = {
        'About Brian': { width: 'w-[800px]', height: 'h-[450px]', windowId: 1},
        'Projects': { width: 'w-[600px]', height: 'h-[340px]', windowId: 6},
        'Contact': { width: 'w-[575px]', height: 'h-[650px]', windowId: -4},
        'Social Links': { width: 'w-[550px]', height: 'h-[450px]', windowId: -2},
        'default': { width: 'w-[800px]', height: 'h-[500px], windowId: 1'}

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

  return (
    <div 
    ref = {viewportRef}
    className="bg-white dark:bg-secondary-dark h-screen flex flex-col">
      <header className="p-4 flex flex-col justify-end">
      <ThemeToggle/>
      </header>

      <div
        className="flex flex-col items-center justify-center
          w-full h-[calc(100vh-80px)] 
          bg-white dark:bg-secondary-dark"
      >

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
              className="text-center font-medium font-body text-6xl
                    text-[var(--title-size)] pt-[var(--title-padding)] dark:text-gray-100"
            >
              {"Hi! I&apos;m "} <span className="text-primary !text-[#275efe] font-bold ">Brian</span>
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
                    windowId={config.windowId}
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
