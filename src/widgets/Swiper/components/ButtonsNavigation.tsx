// components/NavigationButtons.tsx
import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import type { NavigationButtonsProps } from "../types/swiper-navigation";

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  swiper,
  currentSlide,
  totalSlides,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      swiper?.autoplay.stop();
    } else {
      swiper?.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSlideTo = (index: number) => {
    swiper?.slideTo(index);
  };

  const handleFirst = () => {
    swiper?.slideTo(0);
  };

  const handleLast = () => {
    swiper?.slideTo(totalSlides - 1);
  };

  const isBeginning = swiper?.isBeginning;
  const isEnd = swiper?.isEnd;

  return (
    <div className="flex items-center gap-4">
      {/* Основные кнопки навигации */}
      <div className="flex items-center gap-2">
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 ${
            isBeginning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleFirst}
          disabled={isBeginning}
          title="First slide"
        >
          <FaStepBackward className="text-sm" />
        </button>

        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 ${
            isBeginning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={isBeginning}
          title="Previous slide"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-500"
          onClick={handlePlayPause}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <FaPause className="text-sm" />
          ) : (
            <FaPlay className="text-sm" />
          )}
        </button>

        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 ${
            isEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={isEnd}
          title="Next slide"
        >
          <FaChevronRight className="text-sm" />
        </button>

        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 ${
            isEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLast}
          disabled={isEnd}
          title="Last slide"
        >
          <FaStepForward className="text-sm" />
        </button>
      </div>

      {/* Прогресс и быстрая навигация */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 font-semibold min-w-[60px]">
          {currentSlide + 1} / {totalSlides}
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(totalSlides, 6) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 hover:bg-blue-500 ${
                currentSlide === index ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
              onClick={() => handleSlideTo(index)}
              title={`Go to slide ${index + 1}`}
            />
          ))}
          {totalSlides > 6 && (
            <span className="text-gray-400 text-xs ml-1">...</span>
          )}
        </div>
      </div>
    </div>
  );
};
