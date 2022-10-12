const data = [
  26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const DashBar = () => {
  return (
    <div className="w-[380px] border-l-[1px] border-black p-[40px]">
      <div>
        <div className="mb-[30px]">
          <h1 className="text-[22px] ml-[7px]">Schedule</h1>
        </div>
        <div className="">
          {["sun", "mon", "tue", "wed", "thr", "fri", "sat"].map((i) => (
            <div
              className="inline-grid text-[14px]  w-[14.28%] h-[45px] text-center"
              key={i}
            >
              {i}
            </div>
          ))}
          {data.map((i, idx) => (
            <div
              className="inline-grid w-[14.28%] text-[15px] h-[45px] text-center"
              key={idx}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBar;
