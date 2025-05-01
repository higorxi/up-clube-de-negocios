import React from 'react';
import { Landmark, PlusCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DonationCard from '../components/DonationCard';
import { donations } from '../data/mockData';

const Donations: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Mural de Doações</h1>
          <p className="text-gray-600">Encontre ou ofereça doações para a comunidade</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="flex items-center px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors">
            <PlusCircle className="h-5 w-5 mr-2" />
            <span>Nova doação</span>
          </button>
        </div>
      </div>

      <section>
        <SectionHeader 
          icon={<Landmark />} 
          title="Doações Disponíveis"
          subtitle="Encontre ou ofereça doações para a comunidade"
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map(donation => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Donations;