
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

        {/* Pricing Table */}
        <section className="py-12 bg-nursing-lightBlue/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-nursing-navy text-center">Pricing Per Page</h2>
            <p className="text-center mb-8 text-nursing-navy/80 max-w-2xl mx-auto">
              Our pricing is transparent and depends on your academic level and how soon you need your assignment. Prices shown are per page.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <Table>
                <TableCaption>Pricing per page in USD ($)</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-nursing-navy text-white font-medium">Deadline</TableHead>
                    <TableHead className="bg-nursing-navy text-white text-center font-medium">Undergraduate</TableHead>
                    <TableHead className="bg-nursing-navy text-white text-center font-medium">Graduate</TableHead>
                    <TableHead className="bg-nursing-navy text-white text-center font-medium">Doctoral</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">3 Hours</TableCell>
                    <TableCell className="text-center">$25</TableCell>
                    <TableCell className="text-center">$30</TableCell>
                    <TableCell className="text-center">$35</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">6 Hours</TableCell>
                    <TableCell className="text-center">$22</TableCell>
                    <TableCell className="text-center">$28</TableCell>
                    <TableCell className="text-center">$33</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">12 Hours</TableCell>
                    <TableCell className="text-center">$20</TableCell>
                    <TableCell className="text-center">$25</TableCell>
                    <TableCell className="text-center">$30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">24 Hours</TableCell>
                    <TableCell className="text-center">$18</TableCell>
                    <TableCell className="text-center">$22</TableCell>
                    <TableCell className="text-center">$28</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">48 Hours</TableCell>
                    <TableCell className="text-center">$15</TableCell>
                    <TableCell className="text-center">$20</TableCell>
                    <TableCell className="text-center">$25</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">72 Hours</TableCell>
                    <TableCell className="text-center">$12</TableCell>
                    <TableCell className="text-center">$18</TableCell>
                    <TableCell className="text-center">$22</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium bg-nursing-lightBlue/10">Normal (&gt;72 Hours)</TableCell>
                    <TableCell className="text-center">$10</TableCell>
                    <TableCell className="text-center">$15</TableCell>
                    <TableCell className="text-center">$20</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-nursing-navy/5 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-nursing-navy">Need to calculate your total?</h3>
              <p className="text-nursing-navy/80 mb-4">
                Total price = Price per page × Number of pages
              </p>
              <p className="text-nursing-navy/80">
                <strong>Example:</strong> A 5-page undergraduate paper with a 48-hour deadline would cost $15 × 5 = $75
              </p>
            </div>

            <div className="text-center mt-8">
              <Link to="/#order-form">
                <Button className="bg-nursing-blue hover:bg-nursing-navy text-white px-8 py-2">
                  Order Now
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
