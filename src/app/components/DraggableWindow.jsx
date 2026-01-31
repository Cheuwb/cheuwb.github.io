"use client";

import { motion, useDragControls } from "framer-motion";
import React, { useState} from "react"

const getInitialWindowPosition = (windowId) => {
    const offset = (windowId - 1) * 20;
    return {
        top: `calc(25% + ${offset}px)`,
        left: `calc(25% + ${offset}px)`,
    };
};

const DraggableWindow = ({
    title, 
    children, 
    onClose, 
    dragConstraintRef, 
    windowWidthClass, 
    windowHeightClass,
    initialX, 
    initialY,
    windowId
 }) => {

    const dynamicClassNames = `${windowWidthClass} ${windowHeightClass}`
    const [position, setPosition] = useState({
        x: initialX,
        y: initialY
    });

    const initialPositionProps={
        x: initialX,
        y: initialY
    };

    // grab closing position
    const handleClose = () => {
        onClose(position);
    };

    const handleDragEnd = (event, info) => {
        setPosition({x: info.point.x, y: info.point.y});
    }

    const initialPosition = getInitialWindowPosition(windowId);
    const controls = useDragControls();

    function startDrag(event) {
        controls.start(event);
    }

    return (
        <motion.div
            drag
            dragConstraints={dragConstraintRef} 
            dragElastic={0}
            dragMomentum={false}
            // initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.8, opacity:0 }}
            transition={{duration: 0.3}}
            initial={initialPositionProps}
            onDragEnd={handleDragEnd}
            dragListener={false}
            dragControls={controls}

            className={`absolute z-50 
                flex flex-col rounded-xl cursor-grab active:cursor-grabbing
                bg-white shadow-2xl dark:bg-gray-800
                ${dynamicClassNames}`}

                style={{
                    top: initialPosition.top,
                    left: initialPosition.left,
                }}
        >
            <div 
                className="rounded-t-lg font-mono flex bg-gray-700 dark:border-x-2 dark:border-t-2 dark:border-black
                 text-white dark:text-black dark:bg-white text-xl px-6 py-3 items-center"
                onPointerDown={startDrag}
            >
                {/* Traffic Lights Container */}
                <div className="flex space-x-2 mr-4">
                {/* Red Dot (Close Button) */}
                <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"></button>
                {/* Yellow Dot (Minimize - decorative for now) */}
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                {/* Green Dot (Maximize - decorative for now) */}
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Window Title */}
                <span className="flex-1 text-center font-bold">{title}</span>
                {/* 3. Spacer Offset for Title Center */}
                <div className="flex space-x-2 mr-4 invisible">
                    <div className="w-3 h-3"></div>
                    <div className="w-3 h-3"></div>
                    <div className="w-3 h-3"></div>
                </div>
            </div>

            {/* Window Body - same styling */}
            <div 
                className="justify-start items-start flex flex-col bg-white dark:bg-gray-800 dark:text-gray-100 rounded-b-xl p-8 overflow-y-auto
                cursor-default"
            >
                {children}
            </div>
        </motion.div>
    );
};

export default DraggableWindow;