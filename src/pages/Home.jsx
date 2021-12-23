import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import TodayDate from "../components/TodayDate";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <TodayDate></TodayDate>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}
