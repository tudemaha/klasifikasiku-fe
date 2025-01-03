import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  const baseStyles =
    "rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeStyles = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  const styles = `${baseStyles} ${sizeStyles[size]} ${
    disabled ? disabledStyles : variantStyles[variant]
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
