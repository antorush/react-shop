import { Link } from "react-router";
import type { TNewArrival } from "../../data/data";

interface NewArrivalItemProps {
  item: TNewArrival;
  index: number;
}

const NewArrivalItem: React.FC<NewArrivalItemProps> = ({ item, index }) => {
  return (
    <li
      key={item.id}
      className={`flex ${index === 2 || index === 3 ? "" : ""} ${
        index === 0 ? "row-span-2" : index === 1 ? "col-span-2" : ""
      } bg-alterCol ${index === 1 ? "flex-row-reverse" : ""} ${
        index === 2 || index === 3
          ? "justify-center items-center"
          : index === 1
          ? "justify-center items-end"
          : ""
      } grid- text-primaryCol items-center relative`}
    >
      <img
        src={item.img}
        className={`${
          index === 2 || index === 3
            ? "drop-shadow-white/50 drop-shadow-2xl"
            : ""
        } ${index === 0 ? "absolute bottom-0 right-0 left-0 z-0" : ""}`}
        alt=""
      />
      <div className="block max-w-[255px] absolute left-[24px] bottom-[24px]">
        <h3 className="text-2xl font-semibold leading-6 tracking-wider font-Inter">
          {item.name}
        </h3>
        <p className="text-[14px] font-regular">{item.text}</p>
        <Link to={item.linkPath}>{item.linkName}</Link>
      </div>
    </li>
  );
};

export default NewArrivalItem;
