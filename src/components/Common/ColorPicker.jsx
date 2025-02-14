import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode"; // Assuming useDarkMode.js is in the parent directory

const ColorPicker = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [pickThemeDisable, togglePickThemeDisable] = useState("false")

  return (
    <div>
      <div className={`fixed top-[150px] -right-3 w-[170px] bg-white bg-opacity-30 border-white rounded-md p-3 pr-6 dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-600`}>
        <div className="relative">
          <button className="absolute w-8 h-8 text-white -left-[44px] flex justify-center items-center bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-50 overflow-hidden">❮</button>
          <h1 className="py-2 text-white dark:text-gray-200">Pick Theme</h1>
          <hr className="border-gray-300 dark:border-gray-700" />
          <div className="flex justify-around py-2">
            <button onClick={() => isDarkMode && toggleDarkMode()}>
              <img
                src="./colorpicker/sun.svg"
                width={25}
                height={25}
                alt="Light Mode"
                className="dark:opacity-50"
              />
            </button>
            <button onClick={() => !isDarkMode && toggleDarkMode()}>
              <img
                src="./colorpicker/moon.svg"
                width={20}
                height={20}
                alt="Dark Mode"
                className="dark:opacity-100 opacity-50"
              />
            </button>
          </div>
          <hr className="border-gray-300 dark:border-gray-700" />
          <div className="flex justify-around py-2">
            <button className="w-6 h-6 rounded-full bg-[#ff1212] "></button>
            <button className="w-6 h-6 rounded-full bg-[#9d00ff] "></button>
            <button className="w-6 h-6 rounded-full bg-[#142cff] "></button>
            <button className="w-6 h-6 rounded-full bg-[#18ff5d] "></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
