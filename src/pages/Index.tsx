
import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import StatCard from '../components/Dashboard/StatCard';
import TransactionHistory from '../components/Dashboard/TransactionHistory';
import ProjectList from '../components/Dashboard/ProjectList';
import StatsOverview from '../components/Dashboard/StatsOverview';
import OrderStatus from '../components/Dashboard/OrderStatus';
import Messages from '../components/Dashboard/Messages';
import TodoList from '../components/Dashboard/TodoList';
import VisitorMap from '../components/Dashboard/VisitorMap';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Daily Income"
            value="$12.34"
            percentage="-2.4%"
            percentageType="negative"
            subtitle="Compared to previous day"
          />
          <StatCard
            title="Revenue current"
            value="$17.34"
            percentage="+1%"
            percentageType="positive"
            subtitle="Compared to previous day"
          />
          <StatCard
            title="Daily Income"
            value="$12.34"
            percentage="-2.4%"
            percentageType="negative"
            subtitle="Compared to previous day"
          />
          <StatCard
            title="Expense current"
            value="$31.53"
            percentage="+2.6%"
            percentageType="positive"
            subtitle="Compared to previous day"
          />
        </div>

        {/* Transaction & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionHistory />
          <ProjectList />
        </div>

        {/* Revenue, Sales, Purchase */}
        <StatsOverview />

        {/* Order Status Table */}
        <OrderStatus />

        {/* Messages, Portfolio, Todo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Messages />
          <div className="bg-dashboard-card rounded-lg p-5 flex items-center justify-center">
            <div className="aspect-video w-full max-w-md overflow-hidden rounded-md">
              <img 
                src="/lovable-uploads/537ac013-5a04-4068-b9fd-b6a8fdb2f4d6.png" 
                alt="Dashboard Portfolio Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <TodoList />
        </div>

        {/* Visitors Map */}
        <VisitorMap />
      </div>
    </DashboardLayout>
  );
};

export default Index;
