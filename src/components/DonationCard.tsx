import React from 'react';
import { Calendar, User } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { DonationItem } from '../types';

interface DonationCardProps {
  donation: DonationItem;
}

const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-4 hover:shadow-lg transition-shadow duration-200 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg">{donation.title}</h3>
        <StatusBadge 
          variant={donation.status === 'active' ? 'available' : 'completed'} 
          label={donation.status === 'active' ? 'Ativo' : 'Concluído'}
        />
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <User className="h-4 w-4 mr-1" />
        <span>{donation.createdBy.name}</span>
      </div>

      <div className="flex items-center text-gray-500 text-sm mb-3">
        <Calendar className="h-4 w-4 mr-1" />
        <span>Publicado em {formatDate(donation.createdAt)}</span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{donation.description}</p>
      
      <div className="bg-gray-50 p-3 rounded-md mb-4">
        <h4 className="text-xs font-medium text-gray-700 mb-1">Contato:</h4>
        <p className="text-sm text-gray-600">{donation.contactInfo}</p>
      </div>
      
      <button 
        className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium"
      >
        Entrar em contato
      </button>
    </div>
  );
};

export default DonationCard;