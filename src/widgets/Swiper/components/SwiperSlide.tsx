import { Link } from "react-router";
import type { TSlide } from "../../../data/data";

const HeroSlide: React.FC<TSlide> = (props) => {
  const { icon, text, title, image, link, linkPath, linkIcon } = props;

  return (
    <div className="w-full bg-alterCol pt-4 pl-16 text-primaryCol flex justify-between items-center">
      <ul className="flex justify-center items-start gap-6 text-Header-16px flex-col max-w-[300px]">
        <div className="flex justify-start items-center gap-6 font-Poppins leading-[24px]">
          <img src={icon} alt="" />
          <p>{text}</p>
        </div>
        <h1 className="font-Inter font-semibold text-h1Size leading-16 tracking-wider">
          {title}
        </h1>
        <Link
          to={linkPath}
          className="underline leading-6 font-medium flex justify-center items-center gap-2"
        >
          {link}
          <img src={linkIcon} alt="" />
        </Link>
      </ul>
      <div
        className="bg-cover bg-no-repeat bg-center w-[496px] h-[352px]"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default HeroSlide;
