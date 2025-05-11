
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
}

const CourseCard = ({ title, description, duration, level }: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden border border-nursing-light shadow-md hover:shadow-lg transition-shadow bg-white">
      <CardHeader className="bg-nursing-navy text-white pb-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <CardTitle className="text-lg md:text-xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-white/90 font-medium">{level} Level</CardDescription>
      </CardHeader>
      <CardContent className="pt-5 flex-1">
        <p className="text-gray-700">{description}</p>
        <p className="mt-4 text-sm font-medium text-nursing-navy">Duration: {duration}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 bg-gray-50 p-4">
        <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy font-medium">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
