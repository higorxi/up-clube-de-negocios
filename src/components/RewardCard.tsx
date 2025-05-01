import React from 'react';
import { Gift } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Reward } from '../types';

interface RewardCardProps {
  reward: Reward;
  userPoints: number;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward, userPoints }) => {
  const canRedeem = userPoints >= reward.pointsCost && reward.isAvailable;

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div 
        className="h-40 bg-center bg-cover" 
        style={{ backgroundImage: `url(${reward.imageUrl})` }}
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">{reward.title}</h3>
          {reward.isAvailable ? (
            <StatusBadge variant="available" />
          ) : (
            <StatusBadge variant="completed" label="Esgotado" />
          )}
        </div>
        
        <div className="flex items-center text-secondary-700 text-sm font-medium mb-3">
          <Gift className="h-4 w-4 mr-1" />
          <span>{reward.pointsCost} pontos</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{reward.description}</p>
        
        <button 
          disabled={!canRedeem}
          className={`block w-full text-center py-2 rounded-md text-sm font-medium ${
            canRedeem 
              ? 'bg-primary-700 text-white hover:bg-primary-800 transition-colors' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {canRedeem ? 'Resgatar' : 'Pontos insuficientes'}
        </button>
      </div>
    </div>
  );
};

export default RewardCard;