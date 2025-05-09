
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const TransactionHistory = () => {
  const data = [
    { name: 'Paypal', value: 236 },
    { name: 'Stripe', value: 595 },
    { name: 'Other', value: 369 },
  ];

  const COLORS = ['#F59E0B', '#10B981', '#6366F1'];
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-dashboard-card rounded-lg p-5 h-full">
      <h2 className="text-white text-lg font-medium mb-4">Transaction History</h2>
      
      <div className="flex justify-center items-center">
        <div className="relative">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-2xl font-bold">${total}</p>
            <p className="text-gray-400 text-xs">Total</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-white text-sm">Transfer to Paypal</p>
            <p className="text-gray-400 text-xs">07 Jan 2019 09:12AM</p>
          </div>
          <span className="text-white font-medium">$236</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-white text-sm">Transfer to Stripe</p>
            <p className="text-gray-400 text-xs">07 Jan 2019 09:12AM</p>
          </div>
          <span className="text-white font-medium">$593</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
