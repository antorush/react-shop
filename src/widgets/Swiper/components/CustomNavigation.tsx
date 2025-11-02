// components/CustomNavigation.tsx
import React from "react";
import { NavigationButtons } from "./ButtonsNavigation";
import type { CustomNavigationProps } from "../types/swiper-navigation";

interface CustomNavigationComponentProps extends CustomNavigationProps {
  swiper: any;
  currentSlide: number;
  totalSlides: number;
  progress?: number;
}

export const CustomNavigation: React.FC<CustomNavigationComponentProps> = ({
  swiper,
  currentSlide,
  totalSlides,
  progress = 0,
  className = "",
  showProgress = true,
  showNumbers = true,
}) => {
  return (
    <div
      className={`flex items-center justify-between py-4 gap-4 ${className}`}
    >
      <NavigationButtons
        swiper={swiper}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        progress={progress}
      />

      {showProgress && (
        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};
