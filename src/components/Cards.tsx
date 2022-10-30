import items from "../data/data.json";
import Card from "./Card";

export type JobType = {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
};

const Cards = ({ filter, setFilter }: Props) => {
  let newItems = items.filter((item) => {
    let value = [item.role, item.level, ...item.languages, ...item.tools];
    if (filter.length > 0) {
      if (value.some((el) => filter.includes(el))) {
        return item;
      }
    } else {
      return item;
    }
  });
  return (
    <div className="flex items-center flex-col justify-center my-5">
      {newItems.map((item: JobType, index: number) => (
        <Card key={index} {...item} setFilter={setFilter} filter={filter} />
      ))}
    </div>
  );
};

export default Cards;
