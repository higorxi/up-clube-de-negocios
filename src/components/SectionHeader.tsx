import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor?: 'primary' | 'secondary' | 'default';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon, 
  title, 
  subtitle, 
  accentColor = 'default' 
}) => {
  const getAccentColor = () => {
    switch (accentColor) {
      case 'primary':
        return 'border-primary-700';
      case 'secondary':
        return 'border-secondary-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <div className={`flex items-center border-b pb-4 mb-6 ${getAccentColor()}`}>
      <div className="mr-4 text-gray-500">
        {React.cloneElement(icon as React.ReactElement, {
          className: 'h-6 w-6',
          strokeWidth: 2
        })}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionHeader;