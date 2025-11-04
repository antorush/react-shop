import AboutTop from "../../components/About/AboutTop";
import Container from "../../utility/Container";
import { AboutContent, AboutSlide, SupportList } from "../../data/data";
import AboutFeatures from "../../components/About/AboutFeatures";
import { AboutFeaturesContent } from "../../data/data";
import Supports from "../../components/NewArrival/Supports";
import ReactSwiper from "../../widgets/Swiper/Slider";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section>
      <Container>
        <AboutTop aboutContent={AboutContent} />
        <AboutFeatures features={AboutFeaturesContent} />
        <ReactSwiper
          sliderType="aboutSlide"
          slides={AboutSlide}
          slidesPerView={3}
          spaceBetween={50}
        />
        <Supports supports={SupportList} />
      </Container>
    </section>
  );
};

export default About;
