import React from 'react';
import { Star } from 'lucide-react';

interface PointsDisplayProps {
  points: number;
  level: string;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({ points, level }) => {
  return (
    <div className="px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 duration-200">
      <Star className="h-5 w-5 text-secondary-500 fill-secondary-500" />
      <span className="font-semibold text-gray-900">{points} pontos</span>
      <div className="bg-white text-xs font-medium px-2 py-0.5 rounded border border-secondary-200 text-secondary-800">
        Nível {level}
      </div>
    </div>
  );
};

export default PointsDisplay;