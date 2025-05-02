import React from 'react';
import { User, Building2 } from 'lucide-react';

interface UserTypeSelectorProps {
  selectedType: 'professional' | 'company';
  onSelect: (type: 'professional' | 'company') => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ 
  selectedType, 
  onSelect 
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        onClick={() => onSelect('professional')}
        className={`
          flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all
          ${selectedType === 'professional' 
            ? 'border-amber-500 bg-brown-dark' 
            : 'border-gray-700 bg-transparent hover:bg-opacity-10 hover:bg-white'}
        `}
      >
        <div className={`
          w-14 h-14 rounded-full flex items-center justify-center mb-3
          ${selectedType === 'professional' ? 'bg-amber-500 text-burgundy' : 'bg-gray-700 text-gray-300'}
        `}>
          <User size={28} />
        </div>
        <span className="text-white font-medium">Profissional</span>
        <span className="text-gray-400 text-sm">Pessoa física</span>
      </button>
      
      <button
        type="button"
        onClick={() => onSelect('company')}
        className={`
          flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all
          ${selectedType === 'company' 
            ? 'border-amber-500 bg-brown-dark' 
            : 'border-gray-700 bg-transparent hover:bg-opacity-10 hover:bg-white'}
        `}
      >
        <div className={`
          w-14 h-14 rounded-full flex items-center justify-center mb-3
          ${selectedType === 'company' ? 'bg-amber-500 text-burgundy' : 'bg-gray-700 text-gray-300'}
        `}>
          <Building2 size={28} />
        </div>
        <span className="text-white font-medium">Empresa</span>
        <span className="text-gray-400 text-sm">Pessoa jurídica</span>
      </button>
    </div>
  );
};

export default UserTypeSelector;