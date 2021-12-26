import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import TodayDate from "../components/TodayDate";
import Total from "../components/Total";
import TotalGraph from "../components/TotalGraph";

export default function Home() {
  return (
    <div className="text-center p-3 text-black dark:text-gray-200">
      <div className=" justify-center items-center ">
        <TodayDate></TodayDate>

        <Total></Total>
      </div>
      <TotalGraph></TotalGraph>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}
