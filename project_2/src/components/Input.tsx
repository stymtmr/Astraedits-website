"use client"
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, name, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
      />
    </div>
  );
};

export default Input;
