const Coursebar = ({
  filterTopic,
  setFilterTopic,
  filterLevel,
  setFilterLevel
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
    <div className="w-[400px] border-l-[1px] border-black p-[40px]">
      <div className="mb-[30px]">
        <h1 className="text-[22px]">Filter</h1>
      </div>
      {filter.map(({ heading, state, setState, buttonName }) => (
        <div key={heading} className="grid-inline mb-[20px]">
          <h1 className="mb-[20px] ml-[15px]">{heading}</h1>
          {buttonName.map((i, idx) => {
            return (
              <button
                className={`px-[15px] py-[5px] border rounded-[20px] mr-[10px] text-[16px] mb-[10px] ${
                  state.includes(i) ? "border-black " : null
                }`}
                onClick={
                  state.includes(i)
                    ? () =>
                        setState((prev) => prev.filter((item) => item !== i))
                    : () => setState((filter) => [...filter, i])
                }
                key={idx}
              >
                {i}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Coursebar;
