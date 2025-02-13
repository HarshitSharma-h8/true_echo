import React from "react";

interface ButtonProps {
  label: string; // The text displayed on the button
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Custom CSS class for styling
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button", // Default type is "button"
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-950 cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
    
  );
};

export default Button;
