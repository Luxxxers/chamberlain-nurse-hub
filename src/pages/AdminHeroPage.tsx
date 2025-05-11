
import React from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import EditHeroSection from '../components/admin/EditHeroSection';
import { SidebarProvider } from '@/components/ui/sidebar';

const AdminHeroPage = () => {
  return (
    <div className="min-h-screen bg-nursing-white">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar />
          <div className="flex flex-col flex-1">
            <AdminHeader />
            <main className="flex-1 p-6">
              <div>
                <h1 className="text-2xl font-bold text-nursing-navy mb-6">Edit Hero Section</h1>
                <EditHeroSection />
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminHeroPage;
