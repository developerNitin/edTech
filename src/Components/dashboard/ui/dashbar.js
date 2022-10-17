import { differenceInCalendarDays, endOfMonth, startOfMonth } from "date-fns";
import { useState } from "react";
import {
  RiArrowDropRightLine as DropRightIcon,
  RiArrowDropLeftLine as DropLeftIcon,
} from "react-icons/ri";

const MonthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateFunc = new Date();
const theMonth = DateFunc.getMonth();
const theYear = DateFunc.getFullYear();

const DashBar = () => {
  const [month, setMonth] = useState(theMonth);
  let [year, setYear] = useState(theYear);

  const date = new Date();

  date.setMonth(month);
  date.setFullYear(year);

  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);
  const diffDates = differenceInCalendarDays(endDate, startDate) + 1; //dates

  const currentDate = date.getDate(); //date
  const currentMonth = date.getMonth(); //month
  const currentYear = date.getFullYear(); //year

  const prefixDate = startDate.getDay(); //length
  const suffixDate = 6 - endDate.getDay(); //length

  const previousMonthLastDate = endOfMonth(date.setMonth(month - 1)).getDate(); //30 or 31

  let startDateArray = []; //array

  for (let i = 0; i < prefixDate; i++) {
    startDateArray[i] = previousMonthLastDate - prefixDate + i + 1;
  }

  //Schedule components
  const Schedule = ({ children }) => <div className="p-[10px]">{children}</div>;
  const DateCell = (props) => {
    return (
      <div
        className={`text-[16px] h-[45px] text-center flex justify-center flex-col items-center after:w-[5px] after:h-[5px] after:rounded-[10px] ${props.style} ${props.className}`}
      >
        <span
          className={`h-[32px] w-[32px] mb-[4px] flex items-center justify-center hover:bg-black hover:text-white cursor-pointer rounded-[30px] ${props.spanClassName}`}
        >
          {props.children}
        </span>
      </div>
    );
  };

  return (
    <div className="w-[400px] border-l-[1px] border-black p-[30px]">
      <Schedule>
        <div className="mb-[15px] mx-[8px]">
          <h1 className="text-[22px]">Schedule</h1>
        </div>
        <div className="flex mx-[12px] mb-[5px] items-center justify-between">
          <div className="flex items-center ml-[-10px] gap-[10px]">
            <button onClick={() => setYear(--year)} className="text-[22px]">
              <DropLeftIcon />
            </button>
            <span>{currentYear}</span>
            <button onClick={() => setYear(++year)} className="text-[22px]">
              <DropRightIcon />
            </button>
          </div>
          <div className="border">
            <select
              className="py-[7px] pr-[7px] pl-[10px] border-r-[7px] border-white text-[14px] cursor-pointer"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              defaultValue={currentMonth}
            >
              {MonthName.map((month, idx) => (
                <option key={month} value={idx}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-7">
          {["sun", "mon", "tue", "wed", "thr", "fri", "sat"].map((i) => (
            <DateCell key={i} className="text-[14px]">
              {i}
            </DateCell>
          ))}

          {startDateArray.map((i, idx) => (
            <DateCell className="text-[#a1a1a1]" key={idx}>
              {i}
            </DateCell>
          ))}

          {Array.from({ length: diffDates }).map((_, idx) => (
            <DateCell
              className={`${
                (idx + 1 === currentDate) &
                (theMonth === currentMonth) &
                (theYear === currentYear)
                  ? "after:bg-black"
                  : ""
              }`}
              spanClassName={` 
              ${
                (idx + 1 === currentDate) &
                (theMonth === currentMonth) &
                (theYear === currentYear)
                  ? "bg-black text-white"
                  : ""
              }`}
              div={{ hello: "tech", you: "you" }}
              key={idx}
            >
              {idx + 1}
            </DateCell>
          ))}

          {Array.from({ length: suffixDate }).map((_, idx) => (
            <DateCell key={idx} className="text-[#a1a1a1]">
              {idx + 1}
            </DateCell>
          ))}
        </div>
      </Schedule>
    </div>
  );
};

export default DashBar;
