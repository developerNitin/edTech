import {
  RiCheckFill as Check,
  RiFilter3Fill as FilterIcon,
} from "react-icons/ri";

const Coursebar = ({
  filterTopic,
  setFilterTopic,
  filterLevel,
  setFilterLevel,
}) => {
  const filter = [
    {
      heading: "Topic:",
      state: filterTopic,
      setState: setFilterTopic,
      buttonName: ["Java", "C++", "React", "Python"],
    },
    {
      heading: "Level:",
      state: filterLevel,
      setState: setFilterLevel,
      buttonName: ["Beginner", "Intermediate", "Expert"],
    },
  ];

  return (
    <div className="w-[400px] h-screen fixed right-0 bg-white border-l-[1px] p-[40px] overflow-y-auto">
      <div className="mb-[30px]">
        <h1 className="text-[22px] flex gap-[10px]">
          <FilterIcon /> Filter
        </h1>
      </div>
      {filter.map(({ heading, state, setState, buttonName }) => (
        <div
          key={heading}
          className="grid-inline mb-[20px] pb-[15px] border-b-[1px]"
        >
          <h1 className="mb-[20px]">{heading}</h1>
          {buttonName.map((i, idx) => {
            return (
              <button
                className={`px-[12px] py-[5px] border bg-gray-50 rounded-[20px] mr-[10px] text-[16px] mb-[10px] ${
                  state.includes(i) ? "border-black" : null
                }`}
                onClick={() =>
                  state.includes(i)
                    ? setState((prev) => prev.filter((item) => item !== i))
                    : setState((filter) => [...filter, i])
                }
                key={idx}
              >
                <Check
                  className={`inline h-[15px] mt-[-3px] mr-[5px] ${
                    !state.includes(i) && " hidden"
                  }`}
                />
                <span>{i}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Coursebar;
