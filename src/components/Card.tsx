import React from "react";
import { JobType } from "./Cards";

interface CardType extends JobType {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
}

const Card = (props: CardType) => {
  const {
    logo,
    company,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    role,
    level,
    tools,
    setFilter,
    filter,
  } = props;

  let list = [role, level, ...languages, ...tools];

  const handleAdd = (item: string) => {
    let index = filter.findIndex((el) => el === item);

    if (index === -1) {
      setFilter((value) => [...value, item]);
    }
  };
  return (
    <div className="w-[80%] min-h-[100px] bg-white shadow-md my-5 md:my-2 rounded-lg flex items-center justify-between border-l-[5px] border-transparent hover:border-primary-cyan transition-all duration-300 cursor-pointer flex-col md:flex-row pb-2 md:pb-0">
      <div className="flex items-start md:items-center ml-4 flex-col md:flex-row w-full md:w-fit">
        <Avatar src={logo} alt="" />
        <div className="ml-4">
          <div className="flex items-center">
            <h1 className="font-bold text-primary-cyan">{company}</h1>
            {isNew && (
              <button className="rounded-full bg-primary-cyan text-white px-2 font-medium text-sm pb-[2px] mx-2">
                New!
              </button>
            )}

            {featured && (
              <button className="rounded-full bg-neutral-very-dark-grayish-cyan text-white px-2 font-medium text-sm pb-[2px]">
                Featured
              </button>
            )}
          </div>
          <h1 className="font-bold text-lg text-neutral-very-dark-grayish-cyan">
            {position}
          </h1>

          <p className="text-neutral-dark-grayish-cyan text-sm font-medium">
            {postedAt}
            <span className="mx-4">•</span>
            {contract}
            <span className="mx-4">•</span>
            {location}
          </p>
        </div>
      </div>

      <div className="w-full grid place-items-center md:hidden my-4">
        <hr className="h-[0.5px] bg-neutral-dark-grayish-cyan border-0 w-[90%]" />
      </div>

      <div className="flex items-center mx-2 flex-wrap md:flex-nowrap ">
        {list.map((item: string, index: number) => (
          <div
            key={index}
            className="group bg-neutral-light-grayish-cyan-filter flex items-center h-[25px] m-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => handleAdd(item)}
          >
            <p className=" mx-2 text-primary-cyan font-medium text-sm">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Avatar = ({
  src,
  alt = "",
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) => {
  return (
    <div className="w-[50px] h-[50px] md:h-[80px] md:w-[80px] shrink-0 rounded-full overflow-hidden mt-[-25px] md:mt-0">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default Card;
