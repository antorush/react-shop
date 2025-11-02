import type React from "react";
import CountdownTimer from "../../widgets/timer";
import Container from "../../utility/Container";
import type { TOptionProduct } from "../../data/data";
import FLashSalesItem from "./FlashSalesItem";
import SectionTitle from "../../utility/SectionTitle";
import ReactSwiper from "../../widgets/Swiper/Slider";

interface FlashSalesProps {
  salesProducts: TOptionProduct[];
  onAddToCart?: (product: TOptionProduct) => void;
}

const FlashSales: React.FC<FlashSalesProps> = ({ salesProducts }) => {
  const endDate = "2025-12-12T23:59:59";
  return (
    <section className="relative pt-36 text-center">
      <Container isRow={true} isBlock={true}>
        <SectionTitle
          title="Flash Sales"
          isAddComponent={true}
          flexMode="justify-start"
          gap="87px"
          subtitle="Today's"
        >
          <CountdownTimer endDate={endDate} />
        </SectionTitle>
        <div>
          <ul className="flex justify-start gap-7 items-center mb-[60px]">
            <ReactSwiper
              slides={salesProducts}
              spaceBetween={60}
              slidesPerView={5}
              sliderType="product"
            />
          </ul>
        </div>
        <div className="flex justify-center items-center border-b-[0.5px] border-b-alterCol/30 pb-[60px]">
          <button
            type="button"
            className="flex justify-center items-center py-4 px-12 bg-lightRed rounded-md text-primaryCol font-medium leading-6 text-Header-16px cursor-pointer transition-colors ease-in-out hover:bg-red-500"
          >
            View All Products
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
