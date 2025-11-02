import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

// Типизация пропсов
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger" | "success" | "info";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

/**
 * Кастомная кнопка с поддержкой различных стилей, размеров и иконок
 * @param props - Пропсы кнопки
 * @returns JSX.Element
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  color = "primary",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  // Определение базовых стилей

  const colorStyles = {
    primary: {
      bg: "bg-blue-600",
      text: "text-white",
      hoverBg: "hover:bg-blue-700",
      border: "border-blue-600",
      focusRing: "focus:ring-blue-500",
    },
    secondary: {
      bg: "bg-gray-600",
      text: "text-white",
      hoverBg: "hover:bg-gray-700",
      border: "border-gray-600",
      focusRing: "focus:ring-gray-500",
    },
    danger: {
      bg: "bg-red-600",
      text: "text-white",
      hoverBg: "hover:bg-red-700",
      border: "border-red-600",
      focusRing: "focus:ring-red-500",
    },
    success: {
      bg: "bg-green-600",
      text: "text-white",
      hoverBg: "hover:bg-green-700",
      border: "border-green-600",
      focusRing: "focus:ring-green-500",
    },
    info: {
      bg: "bg-indigo-600",
      text: "text-white",
      hoverBg: "hover:bg-indigo-700",
      border: "border-indigo-600",
      focusRing: "focus:ring-indigo-500",
    },
  };

  const baseStyles = `
    inline-flex
    items-center
    justify-center
    font-medium
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    rounded-md
    ${fullWidth ? "w-full" : ""}
  `;

  // Стили для разных вариантов (variant)
  const variantStyles = {
    solid: `
      ${colorStyles[color].bg}
      ${colorStyles[color].text}
      ${colorStyles[color].hoverBg}
      ${colorStyles[color].focusRing}
    `,
    outline: `
      ${colorStyles[color].border}
      ${colorStyles[color].text}
      ${colorStyles[color].hoverBg}
      ${colorStyles[color].focusRing}
    `,
    ghost: `
      ${colorStyles[color].text}
      ${colorStyles[color].hoverBg}
      ${colorStyles[color].focusRing}
    `,
  };

  // Стили для разных размеров
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Цветовые стили для разных тем

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
