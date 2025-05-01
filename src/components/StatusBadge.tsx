import React from 'react';

type BadgeVariant = 'certified' | 'recommended' | 'available' | 'inProgress' | 'completed';

interface StatusBadgeProps {
  variant: BadgeVariant;
  label?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  variant, 
  label 
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'certified':
        return 'bg-primary-50 text-primary-700 border-primary-200';
      case 'recommended':
        return 'bg-secondary-50 text-secondary-700 border-secondary-200';
      case 'available':
        return 'bg-success-50 text-success-700 border-success-200';
      case 'inProgress':
        return 'bg-warning-50 text-warning-700 border-warning-200';
      case 'completed':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getDefaultLabel = () => {
    switch (variant) {
      case 'certified':
        return 'Certificada';
      case 'recommended':
        return 'Recomendado';
      case 'available':
        return 'Disponível';
      case 'inProgress':
        return 'Em andamento';
      case 'completed':
        return 'Concluído';
      default:
        return '';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStyles()}`}>
      {label || getDefaultLabel()}
    </span>
  );
};

export default StatusBadge;