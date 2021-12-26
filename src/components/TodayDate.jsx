import React from "react";

/**
 * This component is for displaying today's date
 * @returns Today's Date Component
 */
export default function TodayDate(props) {
  console.log("Today Date Ran");
  const current = new Date();
  const dateFormatted = `${getMonth(
    current.getMonth() + 1
  )} ${current.getDate()}`;

  return (
    <div className={`text-center ${props.className}`}>
      <p className="font-sans font-bold text-2xl text-gray-800 dark:text-gray-300">
        {dateFormatted}
      </p>
    </div>
  );
}

const getDayOfWeek = (day) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "";
  }
};

const getMonth = (month) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "";
  }
};
