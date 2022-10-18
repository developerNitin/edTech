const Coursebar = ({ filter, setFilter }) => {
  const data = ["Java", "C++", "React"];
  console.log(filter);
  return (
    <div className="w-[400px] border-l-[1px] border-black p-[40px]">
      <div className="mb-[30px]">
        <h1 className="text-[22px]">Filter by</h1>
      </div>
      <div className="grid-inline">
        {data.map((i, idx) => {
          return (
            <button
              className={`px-[10px] py-[5px] border rounded-[20px] mr-[10px] ${
                filter.includes(i) ? "border-black " : ""
              }`}
              onClick={
                filter.includes(i)
                  ? () => setFilter((prev) => prev.filter((item) => item !== i))
                  : () => setFilter((filter) => [...filter, i])
              }
              key={idx}
            >
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Coursebar;
