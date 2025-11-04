import { Link } from "react-router";
import type { AboustSlide } from "../../../data/data";

interface AboutSlideProps {
  slide: AboustSlide;
}

const AboutSlide: React.FC<AboutSlideProps> = ({ slide }) => {
  return (
    <li className="w-[370px] h-[564px] relative">
      <div className="relative flex h-[430px] mb-8 justify-end items-center pt-10 px-[67px]">
        <img
          className={`absolute block bottom-0 w-[250px] h-[390px]`}
          src={slide.img}
          alt=""
        />
      </div>
      <div>
        <h2 className="font-Inter font-medium text-[32px] leading-[30px] tracking-wider">
          {slide.name}
        </h2>
        <p className="pt-2 text-Header-16px leading-6">{slide.describe}</p>
        <ul className="flex justify-start items-center gap-4 mt-4">
          {slide.socials.map((social) => (
            <Link
              to={social.path}
              key={social.id}
              className="p-0.5 flex justify-center items-center"
            >
              <img src={social.icon} alt="" />
            </Link>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default AboutSlide;
