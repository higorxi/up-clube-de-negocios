import React from 'react';
import { Clock, Calendar, Play, BookOpen } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Workshop } from '../types';
import { motion } from 'framer-motion';
import { formatDate } from '../lib/utils';
import { Link } from 'react-router-dom';

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const getStatusVariant = () => {
    switch(workshop.status) {
      case 'upcoming':
        return 'available';
      case 'ongoing':
        return 'inProgress';
      case 'completed':
        return 'completed';
      default:
        return 'available';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full flex flex-col group"
    >
      <div className="relative">
        <div 
          className="h-48 bg-center bg-cover relative group-hover:brightness-75 transition-all duration-200"
          style={{ backgroundImage: `url(${workshop.imageUrl || 'https://i.ytimg.com/vi/BVRYviZrjTo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzwfAMCMSrmQ_2ZRo9DKKmKoeSNw'})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
              <Play className="h-6 w-6 text-primary-700" fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="bg-secondary-50 text-secondary-700 px-2 py-0.5 rounded text-xs font-medium">
            {workshop.points} pontos
          </div>
          <StatusBadge variant={getStatusVariant()} />
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{workshop.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(workshop.date)}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{workshop.duration} {workshop.duration > 1 ? 'horas' : 'hora'}</span>
          <span className="mx-2">•</span>
          <span>{workshop.isOnline ? 'Online' : workshop.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{workshop.description}</p>
        
        {workshop.modules && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md">
            <div className="flex items-center text-gray-700 text-sm mb-2">
              <BookOpen className="h-4 w-4 mr-1" />
              <span className="font-medium">Conteúdo do curso</span>
            </div>
            <div className="text-sm text-gray-600">
              <div>{workshop.modules.length} módulos</div>
              <div>{workshop.totalLessons} aulas</div>
            </div>
          </div>
        )}

        <Link 
          to={`/workshops/${workshop.id}`}
          className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium mt-auto"
        >
          Ver detalhes
        </Link>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;