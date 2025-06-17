import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import { AIRecommendations } from '@/components/ui/ai-recommendations';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Magic Notebook</h1>
          <p className="text-gray-600">Organize your thoughts, tasks, and ideas in one magical place.</p>
        </div>
        
        {/* AI Recommendations */}
        <div className="mb-8">
          <AIRecommendations theme="orange" />
        </div>
        
        {/* Dashboard Content */}
        <DashboardLayout />
      </div>
    </MainLayout>
  );
};

export default Dashboard;