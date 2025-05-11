
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Nursing Essays",
    description: "Well-researched, properly cited nursing essays tailored to your specific requirements and academic level.",
    icon: "📝",
    link: "/services#essays"
  },
  {
    title: "Case Studies",
    description: "Detailed patient case studies with thorough analysis, nursing interventions, and evidence-based recommendations.",
    icon: "🔍",
    link: "/services#case-studies"
  },
  {
    title: "Care Plans",
    description: "Comprehensive nursing care plans with NANDA diagnoses, goals, interventions, and evaluation criteria.",
    icon: "📋",
    link: "/services#care-plans"
  },
  {
    title: "Research Papers",
    description: "In-depth research on nursing topics with proper literature reviews, methodology, and evidence-based conclusions.",
    icon: "📊",
    link: "/services#research"
  },
  {
    title: "Discussion Posts",
    description: "Thoughtful and engaging discussion posts that demonstrate critical thinking and deep understanding of topics.",
    icon: "💬",
    link: "/services#discussions"
  },
  {
    title: "Presentations",
    description: "Professional PowerPoint presentations on nursing topics with speaker notes and visual aids.",
    icon: "📊",
    link: "/services#presentations"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-nursing-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nursing-navy mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-nursing-navy/80">
            We offer a comprehensive range of nursing assignment services tailored specifically for Chamberlain nursing students at all academic levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-nursing-blue/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">{service.icon}</div>
                <CardTitle className="text-nursing-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-nursing-navy/70">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link}>
                  <Button variant="outline" className="border-nursing-blue text-nursing-blue hover:bg-nursing-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-nursing-blue text-white hover:bg-nursing-navy px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
