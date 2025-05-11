
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const EditHeroSection = () => {
  const { toast } = useToast();
  const [heroData, setHeroData] = useState({
    heading: 'Expert Nursing Assignment Help for Chamberlain Students',
    subtext: 'Get professional assistance with your nursing assignments from experienced healthcare professionals. We help you achieve academic excellence with original, well-researched, and perfectly formatted papers.',
    features: [
      'Original, plagiarism-free academic work',
      'Written by experienced nursing professionals',
      '100% confidential service and secure payments',
      'On-time delivery, even on urgent assignments'
    ],
    primaryButtonText: 'Order Now',
    secondaryButtonText: 'View Services'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHeroData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setHeroData(prev => {
      const newFeatures = [...prev.features];
      newFeatures[index] = value;
      return { ...prev, features: newFeatures };
    });
  };

  const handleSave = () => {
    // Here you would typically save to a database
    // For now, we'll just show a success message
    toast({
      title: "Hero Section Updated",
      description: "Your changes have been saved successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Hero Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="heading">Heading</Label>
          <Input
            id="heading"
            name="heading"
            value={heroData.heading}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subtext">Subtext</Label>
          <Input
            id="subtext"
            name="subtext"
            value={heroData.subtext}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Features</Label>
          {heroData.features.map((feature, index) => (
            <Input
              key={index}
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="primaryButtonText">Primary Button Text</Label>
          <Input
            id="primaryButtonText"
            name="primaryButtonText"
            value={heroData.primaryButtonText}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
          <Input
            id="secondaryButtonText"
            name="secondaryButtonText"
            value={heroData.secondaryButtonText}
            onChange={handleChange}
          />
        </div>
        
        <Button onClick={handleSave} className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  );
};

export default EditHeroSection;
