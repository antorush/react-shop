// hooks/useSwiperNavigation.ts
import { useState, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';
import type { UseSwiperNavigationReturn } from '../types/swiper-navigation';

export const useSwiperNavigation = (): UseSwiperNavigationReturn => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSwiper = useCallback((swiperInstance: SwiperType) => {
    setSwiper(swiperInstance);
    setTotalSlides(swiperInstance.slides.length);
    
    // Слушатели событий
    swiperInstance.on('slideChange', () => {
      setCurrentSlide(swiperInstance.activeIndex);
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
      setProgress(swiperInstance.progress);
    });

    swiperInstance.on('init', () => {
      setCurrentSlide(swiperInstance.activeIndex);
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
      setProgress(swiperInstance.progress);
    });
  }, []);

  return {
    swiper,
    setSwiper: handleSwiper,
    currentSlide,
    totalSlides,
    isBeginning,
    isEnd,
    progress
  };
};