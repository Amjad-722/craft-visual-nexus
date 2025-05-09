
import React from 'react';

type OverviewCardProps = {
  title: string;
  value: string;
  percentage: string;
  percentageType: 'positive' | 'negative';
  subtitle: string;
  icon: React.ReactNode;
};

const OverviewCard = ({ title, value, percentage, percentageType, subtitle, icon }: OverviewCardProps) => {
  const isPositive = percentageType === 'positive';
  
  return (
    <div className="bg-dashboard-card rounded-lg p-5">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-white text-2xl font-bold mb-1">{value}</h2>
          <div className="flex items-center gap-1">
            <span className={`text-xs font-medium ${isPositive ? 'text-positive' : 'text-negative'}`}>
              {percentage}
            </span>
            <span className="text-xs text-gray-400">{subtitle}</span>
          </div>
        </div>
        
        <div className="text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <OverviewCard 
        title="Revenue"
        value="$32,123"
        percentage="+5.5%"
        percentageType="positive"
        subtitle="since last month"
        icon={<div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-blue-500"></div>
        </div>}
      />
      
      <OverviewCard 
        title="Sales"
        value="$45,850"
        percentage="+8.3%"
        percentageType="positive"
        subtitle="since last month"
        icon={<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
            <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="currentColor" />
          </svg>
        </div>}
      />
      
      <OverviewCard 
        title="Purchase"
        value="$2,039"
        percentage="-2.1%"
        percentageType="negative"
        subtitle="since last month"
        icon={<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
            <path d="M19.5 8.25H4.5C4.09 8.25 3.75 8.59 3.75 9V18C3.75 18.41 4.09 18.75 4.5 18.75H19.5C19.91 18.75 20.25 18.41 20.25 18V9C20.25 8.59 19.91 8.25 19.5 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.25 18.75V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 18.75V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.75 13.5H20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 8.25V4.5C7.5 3.67 8.17 3 9 3H15C15.83 3 16.5 3.67 16.5 4.5V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>}
      />
    </div>
  );
};

export default StatsOverview;
