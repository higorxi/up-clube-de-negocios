import React, { useState } from 'react';
import { User, Phone, Mail, Globe } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { ServiceProvider } from '../types';
import { Modal } from './ui/Modal';
import { motion } from 'framer-motion';

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({ provider }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = () => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${
              i < provider.stars ? 'text-secondary-500 fill-secondary-500' : 'text-gray-300'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{provider.name}</h3>
            {provider.isRecommended && <StatusBadge variant="recommended" />}
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <User className="h-4 w-4 mr-1" />
            <span>{provider.profession}</span>
          </div>
          
          <div className="mb-3">{renderStars()}</div>
          
          {provider.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{provider.description}</p>
          )}
          
          <button 
            className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium"
          >
            Ver perfil
          </button>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={provider.name}
        description={provider.profession}
      >
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-4">
              {renderStars()}
              <span className="ml-2 text-sm text-gray-500">{provider.stars} de 5</span>
            </div>
            
            <p className="text-gray-700">{provider.description}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Informações de contato</h4>
            {provider.contactInfo && (
              <div className="space-y-2">
                {provider.contactInfo.phone && (
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{provider.contactInfo.phone}</span>
                  </div>
                )}
                {provider.contactInfo.email && (
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{provider.contactInfo.email}</span>
                  </div>
                )}
                {provider.contactInfo.website && (
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-gray-400 mr-2" />
                    <a 
                      href={provider.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 hover:underline"
                    >
                      {provider.contactInfo.website}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {provider.portfolio && (
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Portfólio</h4>
              <div className="grid grid-cols-2 gap-4">
                {provider.portfolio.map((item, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-lg bg-center bg-cover"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium"
              onClick={() => setIsModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ServiceProviderCard;