
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-nursing-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-nursing-navy">Transparent Pricing</h1>
              <p className="text-lg text-nursing-navy/80 mb-8">
                We offer competitive rates based on your academic level, deadline, and assignment complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 bg-nursing-lightBlue/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Undergraduate Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-nursing-blue text-white text-center">
                  <h3 className="text-2xl font-bold">Undergraduate</h3>
                  <p className="mt-2 opacity-90">BSN Students</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-nursing-navy">$22</span>
                    <span className="text-nursing-navy/70 ml-1">/ page</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Standard essays and assignments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Basic care plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Discussion posts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Free title and reference page</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">7-day free revisions</span>
                    </li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Graduate Plan */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-nursing-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
                <div className="p-6 bg-nursing-navy text-white text-center">
                  <h3 className="text-2xl font-bold">Graduate</h3>
                  <p className="mt-2 opacity-90">MSN Students</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-nursing-navy">$28</span>
                    <span className="text-nursing-navy/70 ml-1">/ page</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Advanced nursing papers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Complex case studies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Evidence-based practice papers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">14-day free revisions</span>
                    </li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-navy text-white hover:bg-nursing-blue">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Doctoral Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-nursing-blue text-white text-center">
                  <h3 className="text-2xl font-bold">Doctoral</h3>
                  <p className="mt-2 opacity-90">DNP Students</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-nursing-navy">$35</span>
                    <span className="text-nursing-navy/70 ml-1">/ page</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Doctoral-level papers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Capstone projects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">Implementation plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">VIP support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <span className="text-nursing-navy/80">30-day free revisions</span>
                    </li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Need a Custom Quote?</h3>
              <p className="text-nursing-navy/80 mb-6">
                For complex projects, dissertations, or specialized work, contact us for a personalized quote tailored to your specific requirements.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-nursing-navy text-nursing-navy hover:bg-nursing-navy hover:text-white">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-nursing-navy text-center">Pricing Factors</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Academic Level</h3>
                  <p className="text-nursing-navy/80">
                    Pricing varies based on whether you're an undergraduate (BSN), graduate (MSN), or doctoral (DNP) student. Higher academic levels require more specialized expertise.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Deadline</h3>
                  <p className="text-nursing-navy/80">
                    Urgent assignments (under 24 hours) have higher rates than those with longer deadlines. Planning ahead can save you money! We offer discounts for projects with 7+ day deadlines.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Assignment Type</h3>
                  <p className="text-nursing-navy/80">
                    Complex assignments like care plans and case studies may have different pricing than standard essays. Specialized work like simulations or presentations are priced according to their complexity.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Additional Services</h3>
                  <p className="text-nursing-navy/80">
                    Optional add-ons like plagiarism reports, priority support, or expert writer selection may incur additional fees. We always provide transparent pricing before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 bg-nursing-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Guarantees</h2>
              <p className="opacity-90">
                We stand behind the quality of our work with solid guarantees for your peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-nursing-lightBlue">Money-Back Guarantee</h3>
                <p className="text-white/80">
                  If we fail to meet your requirements and can't resolve the issues through revisions, we'll provide a partial or full refund.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-nursing-lightBlue">Plagiarism-Free Work</h3>
                <p className="text-white/80">
                  All our assignments are original and written from scratch. We can provide a plagiarism report upon request for your peace of mind.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-nursing-lightBlue">On-Time Delivery</h3>
                <p className="text-white/80">
                  We understand the importance of deadlines. If we miss your deadline, you're eligible for a discount on your current or future order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-nursing-lightBlue/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Ready to Place Your Order?</h2>
              <p className="text-lg mb-8 text-nursing-navy/80">
                Get started with your nursing assignment today. Our experts are ready to help you excel.
              </p>
              <Link to="/#order-form">
                <Button className="bg-nursing-blue text-white hover:bg-nursing-navy px-8 py-6 text-lg">
                  Place Your Order
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
