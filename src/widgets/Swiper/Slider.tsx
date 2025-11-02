import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useSwiperNavigation } from "./hook/useSwiperNavigation";
import { CustomNavigation } from "./components/CustomNavigation";
import type { TOptionProduct, TSlide } from "../../data/data";
import HeroSlide from "./components/SwiperSlide";
import FLashSalesItem from "../../components/Flash Sales/FlashSalesItem";
import type { TBrowseCategory } from "../../data/data";
import BrowseItem from "../../components/Browse Category/BrowseItem";

// Типы для пропсов

export interface ReactSwiperProps {
  slides: TSlide[] | TOptionProduct[] | TBrowseCategory[];
  autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
  slidesPerView?: number;
  navigation?: boolean;
  spaceBetween?: number;
  slidesPerGroup?: number;
  withThumbs?: boolean;
  thumbsSwiper?: unknown;
  navigationPosition?: "top" | "bottom" | "side";
  sliderType: "product" | "hero" | "browse";
  pagination?:
    | boolean
    | {
        clickable?: boolean;
        bulletClass?: string;
        bulletActiveClass?: string;
        el?: string;
        renderBullet?: (index: number, className: string) => string;
      };
  loop?: boolean;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  className?: string;
  onSlideChange?: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
}

const ReactSwiper: React.FC<ReactSwiperProps> = ({
  slides,
  autoplay,
  pagination,
  navigation = false,
  slidesPerView,
  sliderType = "hero",
  navigationPosition = "top",
  spaceBetween,
  loop,
  effect,

  onSlideChange,
  onSwiper,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const navigationUse = useSwiperNavigation();

  const handleSlideClick = (index: number) => {
    navigation.swiper?.slideTo(index);
  };

  // Модули в зависимости от конфигурации
  const modules = [Navigation, Pagination, Autoplay, EffectFade].filter(
    Boolean
  );

  return (
    <>
      <Swiper
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        className={`${
          sliderType == "hero"
            ? "w-[1000px] h-[344px]"
            : sliderType == "product"
            ? "w-[100%] h-[350px]"
            : "w-[100%] h-[150px]"
        }`}
        autoplay={autoplay}
        navigation={navigation}
        pagination={pagination}
        effect={effect}
        onSlideChange={onSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          onSwiper?.(swiper);
        }}
      >
        {slides.map((slide) =>
          sliderType === "hero" ? (
            <SwiperSlide key={slide.id}>
              <HeroSlide
                text={slide?.text}
                title={slide?.title}
                image={slide?.image}
                link={slide?.link}
                linkPath={slide?.linkPath}
                linkIcon={slide?.linkIcon}
                icon={slide?.icon}
              />
            </SwiperSlide>
          ) : sliderType === "product" ? (
            <SwiperSlide>
              <FLashSalesItem product={slide} isSale={true} />
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <BrowseItem browseItem={slide} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default ReactSwiper;
