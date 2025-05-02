import React, { ReactNode } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ icon, ...props }) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`
          bg-opacity-10 bg-white text-white block w-full 
          ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 
          border border-gray-600 rounded-md
          focus:ring-amber-500 focus:border-amber-500
        `}
        {...props}
      />
    </div>
  );
};

export default FormInput;