import React from "react";

/**
 * Типизация пропсов компонента Container
 */
interface ContainerProps {
  children: React.ReactNode;
  isFlexStart?: boolean;
  isFlexCenter?: boolean;
  isRow?: boolean;
  isBlock?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "" | "none" | "1440px"; // Поддержка разных размеров
  className?: string; // Дополнительные классы
}

/**
 * Компонент контейнера для центрирования и ограничения ширины
 * @param {ContainerProps} props - Пропсы
 * @returns JSX.Element
 */
const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "1440px",
  className = "",
  isFlexStart = false,
  isRow = false,
  isFlexCenter = false,
  isBlock = false,
}) => {
  // Сопоставление maxWidth с классами Tailwind
  const maxWidthClass = maxWidth === "none" ? "" : `max-w-[1440px]`;
  const FlexRow =
    isRow && isFlexStart
      ? `flex flex-row items-start`
      : isRow && isFlexCenter
      ? `flex flex-row items-center`
      : !isRow && isFlexCenter
      ? `flex flex-col items-center`
      : `block`;
  return (
    <div className={`${FlexRow} ${maxWidthClass} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
