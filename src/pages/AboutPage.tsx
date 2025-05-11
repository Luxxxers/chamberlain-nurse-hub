
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-nursing-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-nursing-navy">About Us</h1>
              <p className="text-lg text-nursing-navy/80 mb-8">
                We're a team of experienced nursing professionals dedicated to helping Chamberlain nursing students excel in their academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-nursing-lightBlue/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Our Story</h2>
                <p className="mb-4 text-nursing-navy/80">
                  Founded in 2015 by a group of nursing educators and practitioners, NursingPro was born from a simple observation: nursing students needed better support with their challenging academic assignments.
                </p>
                <p className="mb-4 text-nursing-navy/80">
                  We saw firsthand how many talented students were struggling not because they lacked knowledge or passion for nursing, but because the academic demands were overwhelming alongside clinical rotations, family responsibilities, and often full-time jobs.
                </p>
                <p className="text-nursing-navy/80">
                  Today, we've grown to a team of over 50 nursing professionals, all with advanced degrees and clinical experience, dedicated to supporting the next generation of nurses through their academic journey.
                </p>
              </div>
              <div className="bg-nursing-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-nursing-navy">Our Mission</h3>
                <p className="mb-4 text-nursing-navy/80">
                  To provide exceptional academic support that empowers nursing students to succeed in their educational journey while developing the critical thinking skills essential for their future careers in healthcare.
                </p>
                <h3 className="text-2xl font-semibold mb-6 mt-8 text-nursing-navy">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold text-nursing-blue mr-2">Excellence:</span>
                    <span className="text-nursing-navy/80">We deliver only the highest quality academic work that exceeds expectations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nursing-blue mr-2">Integrity:</span>
                    <span className="text-nursing-navy/80">We operate with honesty, transparency, and strong ethical principles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nursing-blue mr-2">Empowerment:</span>
                    <span className="text-nursing-navy/80">We help students learn and grow, not just complete assignments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-nursing-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-nursing-navy">Our Expert Team</h2>
              <p className="text-nursing-navy/80">
                Our writers and consultants are all experienced nursing professionals with advanced degrees and years of clinical experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-nursing-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-nursing-lightBlue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-nursing-navy">MS</span>
                </div>
                <h3 className="text-xl font-bold text-nursing-navy">Dr. Maria Stevens</h3>
                <p className="text-nursing-blue">Ph.D in Nursing, 15+ years experience</p>
                <p className="mt-4 text-nursing-navy/70">
                  Specialized in advanced nursing research, evidence-based practice, and nursing education.
                </p>
              </div>
              
              <div className="bg-nursing-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-nursing-lightBlue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-nursing-navy">RJ</span>
                </div>
                <h3 className="text-xl font-bold text-nursing-navy">Robert Johnson</h3>
                <p className="text-nursing-blue">MSN, Nurse Practitioner</p>
                <p className="mt-4 text-nursing-navy/70">
                  Expert in clinical case studies, care plans, and practical nursing applications.
                </p>
              </div>
              
              <div className="bg-nursing-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 bg-nursing-lightBlue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-nursing-navy">AT</span>
                </div>
                <h3 className="text-xl font-bold text-nursing-navy">Dr. Angela Thomas</h3>
                <p className="text-nursing-blue">DNP, Healthcare Administration</p>
                <p className="mt-4 text-nursing-navy/70">
                  Specialized in nursing leadership, healthcare policy, and quality improvement projects.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-nursing-navy/80 mb-6">
                Our team includes dozens more experts in various nursing specialties, ensuring we can match you with the perfect writer for your specific assignment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-nursing-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
              <p className="text-lg mb-8">
                Our team is ready to assist you with any questions about our services. Reach out today!
              </p>
              <Link to="/contact">
                <Button className="bg-white text-nursing-blue hover:bg-nursing-lightBlue hover:text-nursing-navy">
                  Contact Us
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

export default AboutPage;
