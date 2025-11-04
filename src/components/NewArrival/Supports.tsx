import type { TSupprot } from "../../data/data";

interface SupportsProps {
  supports: TSupprot[];
}

const Supports: React.FC<SupportsProps> = ({ supports }) => {
  return (
    <ul className="flex justify-center items-center gap-[88px] pt-[140px] pb-[168px]">
      {supports.map((item) => (
        <li key={item.id} className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center w-[50px] h-[50px] border-8 border-gray-400 p-2 bg-black rounded-full">
            <img src={item.icon} width={40} height={40} alt="" />
          </div>
          <h3 className="text-h3Size leading-[28px] font-semibold">
            {item.title}
          </h3>
          <p className="text-sm font-regular leading-[21px]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Supports;
