import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ProgressTrackerProps {
  completed: number;
  total: number;
  percentage: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ completed, total, percentage }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-800">Seu progresso</h3>
        <div className="flex items-center text-blue-600">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">{completed} de {total} aulas concluídas</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">0%</span>
        <span className="text-xs font-medium text-blue-600">{percentage}%</span>
        <span className="text-xs text-gray-500">100%</span>
      </div>
    </div>
  );
};

export default ProgressTracker;