import React from 'react';
import { Gift, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import RewardCard from '../components/RewardCard';
import { rewards, currentUser } from '../data/mockData';

const Rewards: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Recompensas</h1>
          <p className="text-gray-600">Troque seus pontos por recompensas exclusivas</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-secondary-50 text-secondary-700 px-4 py-2 rounded-lg border border-secondary-200 flex items-center">
            <Gift className="h-5 w-5 mr-2" />
            <span className="font-medium">{currentUser.points} pontos disponíveis</span>
          </div>
        </div>
      </div>

      <section>
        <SectionHeader 
          icon={<Gift />} 
          title="Recompensas Disponíveis"
          subtitle="Troque seus pontos por recompensas exclusivas"
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map(reward => (
            <RewardCard key={reward.id} reward={reward} userPoints={currentUser.points} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rewards;