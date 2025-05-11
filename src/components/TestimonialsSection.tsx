
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const testimonials = [
  {
    quote: "I was struggling with my nursing care plan assignment and the deadline was approaching fast. NursingPro delivered an excellent paper within 24 hours. The care plan was detailed, evidence-based, and exactly what I needed. Highly recommended!",
    author: "Jessica L.",
    program: "BSN Student",
    rating: 5
  },
  {
    quote: "The case study analysis I received was exceptional. My writer demonstrated deep understanding of nursing concepts and provided practical interventions backed by recent research. I've been using NursingPro for a full semester now.",
    author: "Michael T.",
    program: "MSN Student",
    rating: 5
  },
  {
    quote: "What impressed me most was the attention to detail. My paper included all the required NANDA diagnoses, proper citations in APA format, and thoroughly addressed all the professor's requirements. Worth every penny!",
    author: "Samantha K.",
    program: "DNP Student",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-nursing-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-nursing-lightBlue">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-nursing-white/80">
            Don't just take our word for it. Here's what Chamberlain nursing students have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur border-none text-white hover:bg-white/10 transition-all">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="italic text-nursing-white/90">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-nursing-lightBlue">{testimonial.program}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
