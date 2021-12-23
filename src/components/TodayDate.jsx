import React from "react";

/**
 * This component is for displaying today's date
 * @returns Today's Date Component
 */
export default function TodayDate() {
  const current = new Date();
  const dateFormatted = `${current.getDay()}/${
    current.getDate() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="">
      <p className="">{dateFormatted}</p>
    </div>
  );
}
