
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { Button } from '@/components/ui/button';
import { School } from 'lucide-react';

const CoursePage = () => {
  const nursingCourses = [
    {
      title: "Adult Health Nursing",
      description: "Focus on the care of adult patients with complex medical and surgical conditions. Students learn to develop comprehensive nursing care plans and implement evidence-based interventions.",
      duration: "16 weeks",
      level: "Intermediate"
    },
    {
      title: "Pediatric Nursing",
      description: "Study of children's health needs and development from infancy through adolescence. Learn specialized assessment skills and family-centered approaches to care.",
      duration: "12 weeks",
      level: "Advanced"
    },
    {
      title: "Mental Health Nursing",
      description: "Understanding psychological disorders and therapeutic approaches. Develop skills in crisis intervention, medication management, and therapeutic communication.",
      duration: "14 weeks",
      level: "Intermediate"
    },
    {
      title: "Community Health Nursing",
      description: "Focus on health promotion and disease prevention in community settings. Learn to assess community health needs and develop appropriate interventions.",
      duration: "10 weeks",
      level: "Advanced"
    },
    {
      title: "Maternal-Newborn Nursing",
      description: "Care for women during pregnancy, labor, delivery, and the postpartum period. Students also learn about neonatal care and family support.",
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      title: "Critical Care Nursing",
      description: "Advanced care for critically ill patients requiring intensive monitoring and intervention. Focus on complex equipment management and rapid response to changing conditions.",
      duration: "18 weeks",
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-nursing-white">
        <section className="bg-gradient-to-b from-nursing-blue to-nursing-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <School className="h-12 w-12 mr-4" />
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                Nursing Programs
              </h1>
            </div>
            <p className="text-center max-w-3xl mx-auto text-lg md:text-xl font-medium text-white drop-shadow-sm">
              Discover our comprehensive nursing units and programs designed to prepare you for 
              excellence in healthcare. Our curriculum blends theoretical knowledge with hands-on 
              clinical experience to develop skilled, compassionate nursing professionals.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-nursing-navy text-center mb-8 drop-shadow-sm">
            Available Nursing Units
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nursingCourses.map((course, index) => (
              <CourseCard 
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                level={course.level}
              />
            ))}
          </div>
        </section>

        <section className="py-12 bg-nursing-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-nursing-navy mb-4 drop-shadow-sm">
              Ready to Start Your Journey in Nursing?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-700 text-lg">
              Our admission counselors are available to answer your questions and help you find 
              the perfect program for your career goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-nursing-blue text-white hover:bg-nursing-navy">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-nursing-blue text-nursing-blue hover:bg-nursing-blue/10">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
