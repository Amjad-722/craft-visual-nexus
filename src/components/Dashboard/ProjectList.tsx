
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Admin dashboard design",
    description: "Broadcast web app mockup",
    color: "bg-blue-500",
    time: "15 minutes ago",
    tasks: 30,
    issues: 5
  },
  {
    id: 2,
    title: "Wordpress Development",
    description: "Upload theme",
    color: "bg-green-500",
    time: "1 hour ago",
    tasks: 23,
    issues: 8
  },
  {
    id: 3,
    title: "Project meeting",
    description: "New project discussion",
    color: "bg-purple-500",
    time: "35 minutes ago",
    tasks: 15,
    issues: 7
  },
  {
    id: 4,
    title: "Broadcast Mail",
    description: "Send release emails to team",
    color: "bg-red-500",
    time: "55 minutes ago",
    tasks: 18,
    issues: 9
  },
  {
    id: 5,
    title: "UI Design",
    description: "New application planning",
    color: "bg-orange-500",
    time: "50 minutes ago",
    tasks: 27,
    issues: 6
  }
];

const ProjectList = () => {
  return (
    <div className="bg-dashboard-card rounded-lg p-5 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-medium">Open Projects</h2>
        <p className="text-xs text-gray-400">Your tasks today</p>
      </div>
      
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="flex gap-4">
            <div className={`${project.color} w-10 h-10 flex items-center justify-center rounded-lg shrink-0`}>
              <span className="text-white text-lg font-bold">{project.title[0]}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-white text-sm font-medium">{project.title}</h3>
                  <p className="text-gray-400 text-xs">{project.description}</p>
                </div>
                <p className="text-gray-400 text-xs">{project.time}</p>
              </div>
              
              <div className="mt-1 text-xs text-gray-400">
                {project.tasks} tasks, {project.issues} issues
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
