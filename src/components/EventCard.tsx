import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div 
        className="h-40 bg-center bg-cover" 
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">{event.title}</h3>
          <div className="bg-secondary-50 text-secondary-700 px-2 py-0.5 rounded text-xs font-medium">
            +{event.pointsForCheckin} pontos
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(event.date)}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{event.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        
        <button 
          className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default EventCard;