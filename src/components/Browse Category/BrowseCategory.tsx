import Container from "../../utility/Container";
import SectionTitle from "../../utility/SectionTitle";
import type { TBrowseCategory } from "../../data/data";
import ReactSwiper from "../../widgets/Swiper/Slider";

interface BrowseCategoryProps {
  CategoryList: TBrowseCategory[];
}

const BrowseCategory: React.FC<BrowseCategoryProps> = ({ CategoryList }) => {
  return (
    <section className="block relative pt-20">
      <Container>
        <SectionTitle title="Browse By Category" subtitle="Categories" />
        <ul className="flex justify-between pt-[60px] pb-[70px] border-b-[0.5px] border-alterCol/30 items-center">
          <ReactSwiper
            slides={CategoryList}
            sliderType="browse"
            slidesPerView={6}
            spaceBetween={50}
          />
        </ul>
      </Container>
    </section>
  );
};

export default BrowseCategory;
