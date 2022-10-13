import { differenceInCalendarDays, endOfMonth, startOfMonth } from "date-fns";
import { useState } from "react";

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

const theDate = new Date();
const theMonth = theDate.getMonth();

const DashBar = () => {
  const [month, setMonth] = useState(theMonth);
  const date = new Date();

  date.setMonth(month);

  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);
  const diffDates = differenceInCalendarDays(endDate, startDate) + 1; //dates

  const currentMonth = date.getMonth(); //date
  const currentDate = date.getDate(); //date

  const prefixDate = startDate.getDay(); //length
  const suffixDate = 6 - endDate.getDay();  //length


  const previousMonthLastDate = endOfMonth(date.setMonth(month-1)).getDate(); //30 or 31
  
  let startDateArray = []; //array

  for(let i = 0; i < prefixDate; i++) {
    startDateArray[i] = previousMonthLastDate - prefixDate + i + 1;
  }

  //component
  const Calendar = ({ children }) => <div>{children}</div>;
  const DateCell = (props) => (
    <div
      className={`text-[16px] h-[45px] text-center flex justify-center items-center ${props.style} ${props.className}`}
    >
      <span>{props.children}</span>
    </div>
  );

  return (
    <div className="w-[400px] border-l-[1px] border-black p-[40px]">
      <Calendar>
        <div className="flex mb-[20px] mx-[8px] justify-between items-center">
          <h1 className="text-[22px]">Schedule</h1>
          <div className=" border flex items-center">
            <select
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              defaultValue={currentMonth}
              className="py-[7px] pr-[7px] pl-[10px] border-r-[7px] border-white text-[14px] cursor-pointer"
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
            <DateCell className="text-[#a1a1a1]" key={idx}>{i}</DateCell>
          ))}

          {Array.from({ length: diffDates }).map((_, idx) => (
            <DateCell
              className="hover:bg-black hover:text-white cursor-pointer"
              style={
                (idx + 1 === currentDate) & (theMonth === currentMonth)
                  ? "bg-black text-white"
                  : ""
              }
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
      </Calendar>
    </div>
  );
};

export default DashBar;
