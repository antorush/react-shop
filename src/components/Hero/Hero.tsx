import Container from "../../utility/Container";
import { NavLink } from "react-router";
import type { TCategpry } from "../../data/data";
import { slides } from "../../data/data";
import ReactSwiper from "../../widgets/Swiper/Slider";

interface HeroProps {
  catList: TCategpry[];
}

const Hero: React.FC<HeroProps> = ({ catList }) => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-start ">
          <ul className="w-3xs flex flex-col justify-start items-center gap-4 pt-10 mr-4 pr-4 border-r-[1px] border-black/40">
            {catList.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="w-full flex justify-between py-1 px-2 items-center gap-2 transition-all ease-in-out duration-300 hover:bg-gray-500/50"
              >
                {item.name}

                <button type="button">
                  <img src={item.icon} alt="" />
                </button>
              </NavLink>
            ))}
          </ul>
          <div className="pt-[40px]">
            <ReactSwiper
              sliderType="hero"
              slides={slides}
              autoplay={true}
              effect="flip"
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
