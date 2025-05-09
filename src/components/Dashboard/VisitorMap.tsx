
import React from 'react';

interface CountryData {
  country: string;
  flag: string;
  visitors: number;
  percentage: string;
}

const countries: CountryData[] = [
  { country: 'USA', flag: '🇺🇸', visitors: 500, percentage: '56.35%' },
  { country: 'Germany', flag: '🇩🇪', visitors: 800, percentage: '33.25%' },
  { country: 'Australia', flag: '🇦🇺', visitors: 760, percentage: '15.45%' },
  { country: 'United Kingdom', flag: '🇬🇧', visitors: 450, percentage: '25.00%' },
  { country: 'Romania', flag: '🇷🇴', visitors: 620, percentage: '10.25%' },
  { country: 'Brazil', flag: '🇧🇷', visitors: 230, percentage: '75.00%' }
];

const VisitorMap = () => {
  return (
    <div className="bg-dashboard-card rounded-lg p-5">
      <h2 className="text-white text-lg font-medium mb-4">Visitors By Countries</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 uppercase text-xs">
                <th className="py-2 text-left"></th>
                <th className="py-2 text-left">Country</th>
                <th className="py-2 text-right">Visitors</th>
                <th className="py-2 text-right">Percentage</th>
                <th className="py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country, index) => (
                <tr key={index} className="text-gray-300 border-b border-dashboard-highlight">
                  <td className="py-3">{country.flag}</td>
                  <td className="py-3">{country.country}</td>
                  <td className="py-3 text-right">{country.visitors}</td>
                  <td className="py-3 text-right">{country.percentage}</td>
                  <td className="py-3 text-right">
                    {index % 2 === 0 ? (
                      <span className="text-positive">↑</span>
                    ) : (
                      <span className="text-negative">↓</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-center p-4">
          <svg width="320" height="170" viewBox="0 0 960 510" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
            <path d="M954.4,294.8c0.1,101.8-25,198.1-96.3,267c-61.5,59.2-144.8,78.9-226.6,69.4c-66.5-7.7-128.4-33.8-186.2-70.2
            c-50.1-31.4-98.8-68.6-152-94.3c-50.1-24.3-104.4-38.1-159.3-22.7c-34.1,9.5-62.5,28.7-82,57.5c-26,38.3-25.8,85-19.8,128.2
            c-2.6-0.9-5.2-1.8-7.7-2.7c-6.4-2.1-12.8-4.3-19.2-6.4l0,0L954.4,294.8z" fill="#626F90"/>
            <path d="M632,160.2c-0.1-0.2-0.3-0.6-0.4-0.8c0,0.2-0.1,0.5-0.1,0.7C631.7,160.2,631.8,160.2,632,160.2
            C632,160.2,632,160.2,632,160.2z" fill="#95A2C7"/>
            <path d="M944,180.5c0,0,0,0.1,0,0.1c-3-0.8-5.9-1.6-8.9-2.4c-35.9-9.8-69.8-25.8-104.7-38.7c-38.2-14.1-79.7-24.7-116.7-42
            c-35.1-16.5-62.9-41-86.1-71.6c-21.3-28.2-39.7-58.7-66.7-81.9c-53.3-45.6-136.2-28.4-187.5,10c-8.4,6.3-16.3,13.3-23.6,20.9
            c-50.3,52.2-54.2,126.6-96.9,185c-39.4,53.8-107.8,85.1-166.4,115.7c-54.5,28.5-112.4,62-142.1,120.2c-28.9,56.7-16,118.1,17.6,170.2
            c3.1,4.8,6.4,9.5,9.9,14.1c1,1.3,2,2.6,3,3.9c6.4,2.1,12.8,4.3,19.2,6.4c2.6,0.9,5.2,1.8,7.7,2.7c-6-43.2-6.1-89.9,19.8-128.2
            c19.5-28.9,47.9-48,82-57.5c54.9-15.4,109.2-1.6,159.3,22.7c53.3,25.7,101.9,62.9,152,94.3c57.8,36.4,119.7,62.5,186.2,70.2
            c81.8,9.5,165.1-10.2,226.6-69.4c71.3-68.8,96.4-165.2,96.3-267L944,180.5z" fill="#3F4C6B"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VisitorMap;
