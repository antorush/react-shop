import Container from "../../utility/Container";
import SectionTitle from "../../utility/SectionTitle";
import type { TOptionProduct } from "../../data/data";
import FLashSalesItem from "../Flash Sales/FlashSalesItem";
import EnchanceMusic from "./EnchaneMusic";
import boombox from "../../../images/Boombox.png";
import ReactSwiper from "../../widgets/Swiper/Slider";

interface BestSellProps {
  data: TOptionProduct[];
}

const BestSell: React.FC<BestSellProps> = ({ data }) => {
  return (
    <section>
      <Container>
        <SectionTitle
          isAddComponent={true}
          title="Best Selling Products"
          subtitle="This Month"
          flexMode="justify-between"
          className="pr-2"
        >
          <button
            type="button"
            className="bg-lightRed block text-center py-4 px-12 cursor-pointer transition-transform duration-300 rounded-sm text-white ease-in-out hover:scale-110"
          >
            View All
          </button>
        </SectionTitle>
        <ul className="flex justify-start gap-7 items-center pt-[60px] pb-[140px]">
          <ReactSwiper
            slides={data}
            sliderType="product"
            slidesPerView={4}
            spaceBetween={250}
          />
        </ul>
        <div>
          <EnchanceMusic
            title="Enhance Your Music Experience"
            subtitle="Categories"
            btnName="Buy Now!"
            isTimer={true}
            bg={boombox}
            className="w-full h-[330px] drop-shadow-2xl drop-shadow-primaryCol/50"
          />
        </div>
      </Container>
    </section>
  );
};

export default BestSell;
