// types/swiper-navigation.types.ts
import { Swiper as SwiperType } from 'swiper';

export interface CustomNavigationProps {
  className?: string;
  showProgress?: boolean;
  showNumbers?: boolean;
}

export interface NavigationButtonsProps {
  swiper: SwiperType | null;
  currentSlide: number;
  totalSlides: number;
  progress?: number;
}

export interface UseSwiperNavigationReturn {
  swiper: SwiperType | null;
  setSwiper: (swiper: SwiperType) => void;
  currentSlide: number;
  totalSlides: number;
  isBeginning: boolean;
  isEnd: boolean;
  progress: number;
}