import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Tag } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Store } from '../types';
import { motion } from 'framer-motion';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 h-full flex flex-col"
    >
      <div 
        className="h-48 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${store.imageUrl || 'https://media.istockphoto.com/id/689911172/pt/foto/abstract-blurred-background-of-department-store.jpg?s=612x612&w=0&k=20&c=WX4Y2tLO26qTl4ig6MzpxoMQOs-7qytoqHyv8F8Ry5o='})` }}
      >
        {store.isCertified && (
          <div className="absolute top-4 right-4">
            <StatusBadge variant="certified" />
          </div>
        )}
        {store.rating && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
            <Star className="h-4 w-4 text-secondary-500 fill-secondary-500 mr-1" />
            <span className="text-sm font-medium">{store.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-gray-900">{store.name}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{store.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{store.description}</p>
        
        {store.categories && store.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {store.categories.map(category => (
              <span 
                key={category}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {store.coupons && store.coupons.length > 0 && (
          <div className="mb-4 p-2 bg-secondary-50 rounded-md">
            <div className="flex items-center text-secondary-700 text-sm">
              <Tag className="h-4 w-4 mr-1" />
              <span className="font-medium">{store.coupons[0].discount}</span>
            </div>
          </div>
        )}
        
        <Link 
          to={`/lojas/${store.id}`}
          className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium mt-auto"
        >
          Ver detalhes
        </Link>
      </div>
    </motion.div>
  );
};

export default StoreCard;