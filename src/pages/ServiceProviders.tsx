import React from 'react';
import { Users, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceProviderCard from '../components/ServiceProviderCard';
import { serviceProviders } from '../data/mockData';

const ServiceProviders: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Prestadores de Serviços</h1>
          <p className="text-gray-600">Encontre prestadores de serviços recomendados</p>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar prestadores..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <section>
        <SectionHeader 
          icon={<Users />} 
          title="Prestadores de Serviços"
          subtitle="Encontre prestadores de serviços recomendados"
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceProviders.map(provider => (
            <ServiceProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceProviders;