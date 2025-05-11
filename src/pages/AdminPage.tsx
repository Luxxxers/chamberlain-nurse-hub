
import React from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminDashboard from '../components/admin/AdminDashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-nursing-white">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <div className="flex flex-col flex-1">
            <AdminHeader />
            <main className="flex-1 p-6">
              <AdminDashboard />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminPage;
