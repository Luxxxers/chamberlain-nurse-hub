
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const EditCTASection = () => {
  const { toast } = useToast();
  const [ctaData, setCTAData] = useState({
    heading: 'Ready to Excel in Your Nursing Assignments?',
    subtext: "Don't let difficult assignments stress you out. Our team of expert nursing professionals is ready to help you achieve academic excellence.",
    primaryButtonText: 'Get Started Today',
    secondaryButtonText: 'View Pricing',
    features: '24/7 Customer Support • Secure Payment Options • Money-Back Guarantee'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCTAData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here you would typically save to a database
    // For now, we'll just show a success message
    toast({
      title: "CTA Section Updated",
      description: "Your changes have been saved successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit CTA Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="heading">Heading</Label>
          <Input
            id="heading"
            name="heading"
            value={ctaData.heading}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subtext">Subtext</Label>
          <Input
            id="subtext"
            name="subtext"
            value={ctaData.subtext}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="primaryButtonText">Primary Button Text</Label>
          <Input
            id="primaryButtonText"
            name="primaryButtonText"
            value={ctaData.primaryButtonText}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
          <Input
            id="secondaryButtonText"
            name="secondaryButtonText"
            value={ctaData.secondaryButtonText}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="features">Features</Label>
          <Input
            id="features"
            name="features"
            value={ctaData.features}
            onChange={handleChange}
          />
        </div>
        
        <Button onClick={handleSave} className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  );
};

export default EditCTASection;
