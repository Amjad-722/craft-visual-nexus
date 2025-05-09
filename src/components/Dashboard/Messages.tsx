
import React from 'react';

const messages = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=11",
    name: "Leonard",
    message: "Well, it seems to be working now.",
    time: "5 minutes ago"
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=12",
    name: "Luella Mills",
    message: "Well, it seems to be working now.",
    time: "10 Minutes Ago"
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/40?img=13",
    name: "Ethel Kelly",
    message: "Please review the tickets",
    time: "2 Hours Ago"
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/40?img=14",
    name: "Herman May",
    message: "Thanks a lot. It was easy to fix it.",
    time: "4 Hours Ago"
  }
];

const Messages = () => {
  return (
    <div className="bg-dashboard-card rounded-lg p-5 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-medium">Messages</h2>
        <a href="#" className="text-blue-400 text-xs">View all</a>
      </div>
      
      <div className="space-y-4">
        {messages.map(message => (
          <div key={message.id} className="flex gap-3">
            <div className="flex-shrink-0">
              <img src={message.avatar} alt={message.name} className="w-10 h-10 rounded-full" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-white text-sm font-medium">{message.name}</h3>
                <p className="text-gray-400 text-xs">{message.time}</p>
              </div>
              <p className="text-gray-400 text-sm">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
