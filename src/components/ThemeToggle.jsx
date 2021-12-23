import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-black">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Change
      </button>
    </div>
  );
}
