
import React from 'react';
import OrderForm from './OrderForm';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-nursing-white via-nursing-lightBlue/10 to-nursing-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Expert Nursing Assignment Help for Chamberlain Students
            </h1>
            <p className="text-lg mb-8 text-nursing-navy/80">
              Get professional assistance with your nursing assignments from experienced healthcare professionals. We help you achieve academic excellence with original, well-researched, and perfectly formatted papers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                <p className="text-nursing-navy/80">Original, plagiarism-free academic work</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                <p className="text-nursing-navy/80">Written by experienced nursing professionals</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                <p className="text-nursing-navy/80">100% confidential service and secure payments</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                <p className="text-nursing-navy/80">On-time delivery, even on urgent assignments</p>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="flex gap-4">
                <a href="/pricing#order-form">
                  <Button className="bg-nursing-navy text-white hover:bg-opacity-90 px-8 py-2">
                    Order Now
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" className="border-nursing-navy text-nursing-navy hover:bg-nursing-navy hover:text-white px-8 py-2">
                    View Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-1">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
