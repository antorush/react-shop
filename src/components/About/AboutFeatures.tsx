import type { TAboutFeatures } from "../../data/data";

interface AboutFeaturesProps {
  features: TAboutFeatures[];
}

const AboutFeatures: React.FC<AboutFeaturesProps> = ({ features }) => {
  return (
    <ul className="flex justify-center items-center gap-[30px] pt-[140px]">
      {features.map((item) => (
        <li
          key={item.id}
          className="flex cursor-pointer border-[1px] group ... border-black/30 justify-center items-center px-[50px] transition-all ease-in-out duration-300 hover:bg-lightRed py-[30px] w-[270px] h-[230px]"
        >
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center rounded-full p-2 w-[60px] h-[60px] transition-all ease-in-out duration-300 group-hover:border-white/80 bg-black border-8 border-gray-400">
              <img src={item.icon} alt="" />
            </div>
            <div className="text-center block mt-6">
              <h2 className="font-Inter text-[32px] font-bold tracking-widest text-black transition-all ease-in-out duration-300 group-hover:text-white leading-[30px]">
                {item.name}
              </h2>
              <p className="text-Header-16px leading-6 text-black transition-all ease-in-out duration-300 group-hover:text-white ">
                {item.text}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AboutFeatures;
