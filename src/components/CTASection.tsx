
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// This would typically be fetched from an API or state management system
// For now we're using static content that matches what would be in the admin panel
const ctaContent = {
  heading: 'Ready to Excel in Your Nursing Assignments?',
  subtext: 'Don't let difficult assignments stress you out. Our team of expert nursing professionals is ready to help you achieve academic excellence.',
  primaryButtonText: 'Get Started Today',
  secondaryButtonText: 'View Pricing',
  features: '24/7 Customer Support • Secure Payment Options • Money-Back Guarantee'
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-nursing-blue to-nursing-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaContent.heading}</h2>
          <p className="text-lg mb-8 text-white/90">
            {ctaContent.subtext}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/pricing#order-form">
              <Button className="bg-white text-nursing-navy hover:bg-nursing-lightBlue hover:text-nursing-navy px-8 py-6 text-lg">
                {ctaContent.primaryButtonText}
              </Button>
            </a>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                {ctaContent.secondaryButtonText}
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            {ctaContent.features}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
