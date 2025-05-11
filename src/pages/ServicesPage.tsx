
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-nursing-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-nursing-navy">Our Services</h1>
              <p className="text-lg text-nursing-navy/80 mb-8">
                Comprehensive academic assistance tailored specifically for Chamberlain nursing students at all levels.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Nursing Essays */}
            <div id="essays" className="mb-20 scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Nursing Essays</h2>
                  <p className="mb-4 text-nursing-navy/80">
                    Our expert nursing writers create well-researched, properly cited nursing essays tailored to your specific requirements. Whether you need a reflective essay, analytical paper, or argumentative piece, we deliver high-quality work that demonstrates critical thinking and deep understanding of nursing concepts.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Original content written from scratch</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Proper APA formatting and citations</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Integration of current nursing research</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Customized to your specific assignment guidelines</p>
                    </div>
                  </div>
                </div>
                <div className="bg-nursing-lightBlue/10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Common Nursing Essay Topics</h3>
                  <ul className="space-y-2 mb-6 text-nursing-navy/80 list-disc pl-5">
                    <li>Evidence-Based Practice Implementation</li>
                    <li>Ethical Dilemmas in Nursing</li>
                    <li>Patient Safety and Quality Improvement</li>
                    <li>Leadership in Nursing</li>
                    <li>Cultural Competence in Healthcare</li>
                    <li>Nursing Theory Application</li>
                    <li>Healthcare Policy Analysis</li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy">
                      Order Nursing Essay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div id="case-studies" className="mb-20 scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 lg:order-1 bg-nursing-lightBlue/10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Case Study Elements We Cover</h3>
                  <ul className="space-y-2 mb-6 text-nursing-navy/80 list-disc pl-5">
                    <li>Patient History and Assessment</li>
                    <li>Nursing Diagnoses Identification</li>
                    <li>Prioritization of Patient Needs</li>
                    <li>Evidence-Based Interventions</li>
                    <li>Evaluation Criteria and Outcomes</li>
                    <li>Interdisciplinary Collaboration</li>
                    <li>Recommendations for Continuing Care</li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy">
                      Order Case Study
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Case Studies</h2>
                  <p className="mb-4 text-nursing-navy/80">
                    Our detailed patient case studies include thorough analysis, appropriate nursing diagnoses, evidence-based interventions, and comprehensive recommendations. We provide in-depth examinations of clinical scenarios that demonstrate your ability to apply nursing knowledge to real-world situations.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">NANDA-approved nursing diagnoses</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Current evidence-based practice integration</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Clear rationales for all interventions</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Holistic approach considering all patient factors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Plans */}
            <div id="care-plans" className="mb-20 scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Care Plans</h2>
                  <p className="mb-4 text-nursing-navy/80">
                    We develop comprehensive nursing care plans with accurate NANDA diagnoses, measurable goals, appropriate nursing interventions, and clear evaluation criteria. Our care plans are detailed, personalized to the specific patient scenario, and follow the nursing process framework.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Structured according to the nursing process</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Appropriate nursing interventions with rationales</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">SMART goals for each nursing diagnosis</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-nursing-blue flex-shrink-0 mt-0.5" />
                      <p className="text-nursing-navy/80">Comprehensive evaluation methods</p>
                    </div>
                  </div>
                </div>
                <div className="bg-nursing-lightBlue/10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Types of Care Plans We Develop</h3>
                  <ul className="space-y-2 mb-6 text-nursing-navy/80 list-disc pl-5">
                    <li>Medical-Surgical Nursing Care Plans</li>
                    <li>Pediatric Nursing Care Plans</li>
                    <li>Maternal-Child Nursing Care Plans</li>
                    <li>Psychiatric Nursing Care Plans</li>
                    <li>Geriatric Nursing Care Plans</li>
                    <li>Critical Care Nursing Plans</li>
                    <li>Community Health Nursing Plans</li>
                  </ul>
                  <Link to="/#order-form">
                    <Button className="w-full bg-nursing-blue text-white hover:bg-nursing-navy">
                      Order Care Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Services Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-nursing-white p-6 rounded-lg shadow-md" id="research">
                <h3 className="text-xl font-bold mb-4 text-nursing-navy">Research Papers</h3>
                <p className="text-nursing-navy/80 mb-4">
                  In-depth research on nursing topics with proper literature reviews, methodology, and evidence-based conclusions.
                </p>
                <Link to="/#order-form">
                  <Button variant="outline" className="w-full border-nursing-blue text-nursing-blue hover:bg-nursing-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-nursing-white p-6 rounded-lg shadow-md" id="discussions">
                <h3 className="text-xl font-bold mb-4 text-nursing-navy">Discussion Posts</h3>
                <p className="text-nursing-navy/80 mb-4">
                  Thoughtful and engaging discussion posts that demonstrate critical thinking and deep understanding of topics.
                </p>
                <Link to="/#order-form">
                  <Button variant="outline" className="w-full border-nursing-blue text-nursing-blue hover:bg-nursing-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-nursing-white p-6 rounded-lg shadow-md" id="presentations">
                <h3 className="text-xl font-bold mb-4 text-nursing-navy">Presentations</h3>
                <p className="text-nursing-navy/80 mb-4">
                  Professional PowerPoint presentations on nursing topics with speaker notes and visual aids.
                </p>
                <Link to="/#order-form">
                  <Button variant="outline" className="w-full border-nursing-blue text-nursing-blue hover:bg-nursing-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-nursing-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg mb-8">
                Let us help you excel in your nursing assignments. Place your order today and experience our professional service.
              </p>
              <Link to="/#order-form">
                <Button className="bg-white text-nursing-blue hover:bg-nursing-lightBlue hover:text-nursing-navy px-8 py-6 text-lg">
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

export default ServicesPage;
