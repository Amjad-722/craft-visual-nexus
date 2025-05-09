
import React from 'react';

const orders = [
  {
    id: "02312",
    client: {
      name: "Amjad ali",
      avatar: "https://avatars.githubusercontent.com/u/159441246?v=4"
    },
    cost: "$14,500",
    project: "Dashboard",
    paymentMethod: "Credit card",
    date: "04 Dec 2019",
    status: "Approved"
  },
  {
    id: "02312",
    client: {
      name: "Amjad alian",
      avatar: "https://avatars.githubusercontent.com/u/159441246?v=4"
    },
    cost: "$14,500",
    project: "Website",
    paymentMethod: "Cash on delivered",
    date: "04 Dec 2019",
    status: "Pending"
  },
  {
    id: "02312",
    client: {
      name: "Amjad ali",
      avatar: "https://avatars.githubusercontent.com/u/159441246?v=4"
    },
    cost: "$14,500",
    project: "App design",
    paymentMethod: "Credit card",
    date: "04 Dec 2019",
    status: "Rejected"
  },
  {
    id: "02312",
    client: {
      name: "Amjad ali",
      avatar: "https://avatars.githubusercontent.com/u/159441246?v=4"
    },
    cost: "$14,500",
    project: "Development",
    paymentMethod: "Online Payment",
    date: "04 Dec 2019",
    status: "Approved"
  },
  {
    id: "02312",
    client: {
      name: "Sallie Reyes",
      avatar: "https://avatars.githubusercontent.com/u/159441246?v=4"
    },
    cost: "$14,500",
    project: "Website",
    paymentMethod: "Credit card",
    date: "04 Dec 2019",
    status: "Approved"
  }
];

const OrderStatus = () => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Approved': return 'bg-green-500';
      case 'Pending': return 'bg-yellow-500';
      case 'Rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <div className="bg-dashboard-card rounded-lg p-5">
      <h2 className="text-white text-lg font-medium mb-4">Order Status</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase">
            <tr className="border-b border-dashboard-highlight">
              <th scope="col" className="py-3 px-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 bg-dashboard-darker rounded border-gray-600" />
                </div>
              </th>
              <th scope="col" className="py-3 px-4">Client Name</th>
              <th scope="col" className="py-3 px-4">Order No</th>
              <th scope="col" className="py-3 px-4">Product Cost</th>
              <th scope="col" className="py-3 px-4">Project</th>
              <th scope="col" className="py-3 px-4">Payment Mode</th>
              <th scope="col" className="py-3 px-4">Start Date</th>
              <th scope="col" className="py-3 px-4">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-dashboard-highlight hover:bg-dashboard-highlight/30">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 bg-dashboard-darker rounded border-gray-600" />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img src={order.client.avatar} alt={order.client.name} className="w-8 h-8 rounded-full" />
                    <span className="text-white">{order.client.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-300">{order.id}</td>
                <td className="py-3 px-4 text-gray-300">{order.cost}</td>
                <td className="py-3 px-4 text-gray-300">{order.project}</td>
                <td className="py-3 px-4 text-gray-300">{order.paymentMethod}</td>
                <td className="py-3 px-4 text-gray-300">{order.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs rounded-md text-white ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderStatus;
