
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  percentage: string;
  percentageType: 'positive' | 'negative';
  subtitle: string;
};

const StatCard = ({ title, value, percentage, percentageType, subtitle }: StatCardProps) => {
  const isPositive = percentageType === 'positive';
  
  return (
    <div className="bg-dashboard-card rounded-lg p-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <div className="flex items-center mt-1 gap-2">
            <h3 className="text-xl font-bold text-white">{value}</h3>
            <div className={`flex items-center ${isPositive ? 'text-positive' : 'text-negative'}`}>
              {isPositive ? (
                <ArrowUp size={16} />
              ) : (
                <ArrowDown size={16} />
              )}
              <span className="text-xs font-medium">{percentage}</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
        </div>
        
        <div className="p-2 rounded-full bg-dashboard-highlight">
          {isPositive ? (
            <ArrowUp size={16} className="text-positive" />
          ) : (
            <ArrowDown size={16} className="text-negative" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
