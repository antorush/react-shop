import type { TBrowseCategory } from "../../data/data";

interface BrowseItemProps {
  browseItem: TBrowseCategory;
}

const BrowseItem: React.FC<BrowseItemProps> = ({ browseItem }) => {
  const { name, icon } = browseItem;
  return (
    <li className="w-[170px] h-[145px] text-Header-16px leading-6 gap-4 mr-2 flex justify-center items-center flex-col px-14 py-6 border-[1px] border-alterCol/30 group ... rounded-sm cursor-pointer transition-colors ease-in-out duration-300 hover:bg-red-500/80">
      <img src={icon} className="group-hover:text-white" alt="" />
      <span className="text-alterCol group-hover:text-primaryCol">{name}</span>
    </li>
  );
};

export default BrowseItem;
