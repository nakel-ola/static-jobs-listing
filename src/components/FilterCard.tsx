import closeIcon from "../assets/images/icon-remove.svg";

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
};

const FilterCard = ({ filter, setFilter }: Props) => {
  const handleRemove = (value: string) => {
    const newFilter = [...filter];

    const index = newFilter.indexOf(value);

    newFilter.splice(index, 1);
    setFilter(newFilter);
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="min-h-[50px] w-[80%] bg-white shadow-md mt-[-25px] z-[10] rounded-lg flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="flex items-center ml-2 flex-wrap md:flex-nowrap ">
          {filter.map((item: string, index: number) => (
            <div
              key={index}
              className="group bg-neutral-light-grayish-cyan-filter flex items-center h-[30px] m-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300"
            >
              <p className=" mx-2 text-primary-cyan font-medium">{item}</p>

              <div
                className="w-[30px] h-full flex items-center justify-center bg-primary-cyan group-hover:bg-neutral-very-dark-grayish-cyan transition-all duration-300"
                onClick={() => handleRemove(item)}
              >
                <img src={closeIcon} alt="" className="" />
              </div>
            </div>
          ))}
        </div>

        <button className="text-primary-cyan m-2 mx-4 md:mr-4 text-sm font-medium hover:underline transition-all duration-300" onClick={() => setFilter([])}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
