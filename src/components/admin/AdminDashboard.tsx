
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-nursing-navy">Admin Dashboard</h1>
        <p className="text-nursing-navy/70 mt-1">Manage your website content from here</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage service offerings and descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/services">
              <Button className="w-full">Edit Services</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
            <CardDescription>Manage customer testimonials and reviews</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/testimonials">
              <Button className="w-full">Edit Testimonials</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
            <CardDescription>Update pricing tables and packages</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/pricing">
              <Button className="w-full">Edit Pricing</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>CTA Sections</CardTitle>
            <CardDescription>Edit call-to-action sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/cta">
              <Button className="w-full">Edit CTAs</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hero Content</CardTitle>
            <CardDescription>Update hero section content</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin/hero">
              <Button className="w-full">Edit Hero</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
