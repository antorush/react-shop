import type { TAbout } from "../../data/data";

interface AboutProps {
  aboutContent: TAbout;
}

const AboutTop: React.FC<AboutProps> = ({ aboutContent }) => {
  const { title, description, img } = aboutContent;
  return (
    <div className="flex justify-between items-center">
      <div className="max-w-[525px] block text-left pr-3.5">
        <h1 className="font-Inter mb-10 text-aboutTitleSize leading-16 font-semibold">
          {title}
        </h1>
        {description.map((item, index) => (
          <p key={index} className="block mt-6 text-Header-16px leading-6">
            {item}
          </p>
        ))}
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default AboutTop;
