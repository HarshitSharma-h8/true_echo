import React, { forwardRef } from 'react';

interface InputProps {
  label?: string; // Explicitly optional
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string; // Add id
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = "text",
  value,
  placeholder = "",
  onChange,
  className = "",
  id, // Use id
}, ref) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
      {label && (
        <>
          <label htmlFor={id} className="">{label}</label> {/* htmlFor for accessibility */}
        </>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id} // Add id to input
        ref={ref} // Forward the ref
        className={`border border-gray-300 p-2 rounded w-full ${className}`}
      />
    </div>
  );
});

Input.displayName = 'Input'; // Best practice for forwardRef

export default Input;
