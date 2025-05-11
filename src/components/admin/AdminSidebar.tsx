
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Edit, Settings, User, Table, Database } from 'lucide-react';

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Database,
  },
  {
    title: "Edit Services",
    url: "/admin/services",
    icon: Edit,
  },
  {
    title: "Edit Testimonials",
    url: "/admin/testimonials",
    icon: User,
  },
  {
    title: "Edit Pricing",
    url: "/admin/pricing",
    icon: Table,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
