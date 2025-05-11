
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  assignmentType: z.string().min(1, { message: "Assignment type is required" }),
  academicLevel: z.string().min(1, { message: "Academic level is required" }),
  deadline: z.string().min(1, { message: "Deadline is required" }),
  pages: z.string().min(1, { message: "Number of pages is required" }),
  format: z.string().min(1, { message: "Citation format is required" }),
  sources: z.string().optional(),
  instructions: z.string().optional(),
  additionalServices: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const OrderForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      assignmentType: "",
      academicLevel: "",
      deadline: "",
      pages: "",
      format: "",
      sources: "",
      instructions: "",
      additionalServices: [],
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Order Submitted",
      description: "We'll contact you shortly to confirm your order details.",
    });
    form.reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Get Your Assignment Help Now</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="border-nursing-blue/30 focus:border-nursing-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      {...field}
                      className="border-nursing-blue/30 focus:border-nursing-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      {...field}
                      className="border-nursing-blue/30 focus:border-nursing-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="Subject Area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="adult-health">Adult Health Nursing</SelectItem>
                      <SelectItem value="pediatric">Pediatric Nursing</SelectItem>
                      <SelectItem value="mental-health">Mental Health Nursing</SelectItem>
                      <SelectItem value="geriatric">Geriatric Nursing</SelectItem>
                      <SelectItem value="community">Community Health Nursing</SelectItem>
                      <SelectItem value="maternal">Maternal/Newborn Nursing</SelectItem>
                      <SelectItem value="pathophysiology">Pathophysiology</SelectItem>
                      <SelectItem value="pharmacology">Pharmacology</SelectItem>
                      <SelectItem value="other">Other Subject</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="assignmentType"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="Assignment Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="essay">Nursing Essay</SelectItem>
                      <SelectItem value="case-study">Case Study</SelectItem>
                      <SelectItem value="care-plan">Care Plan</SelectItem>
                      <SelectItem value="research">Research Paper</SelectItem>
                      <SelectItem value="presentation">Presentation</SelectItem>
                      <SelectItem value="discussion">Discussion Post</SelectItem>
                      <SelectItem value="assessment">Health Assessment</SelectItem>
                      <SelectItem value="reflection">Reflective Journal</SelectItem>
                      <SelectItem value="critique">Article Critique</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="academicLevel"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="Academic Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate (BSN)</SelectItem>
                      <SelectItem value="graduate">Graduate (MSN)</SelectItem>
                      <SelectItem value="doctoral">Doctoral (DNP/PhD)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="Deadline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3h">3 Hours</SelectItem>
                      <SelectItem value="6h">6 Hours</SelectItem>
                      <SelectItem value="12h">12 Hours</SelectItem>
                      <SelectItem value="24h">24 Hours</SelectItem>
                      <SelectItem value="48h">48 Hours</SelectItem>
                      <SelectItem value="72h">72 Hours</SelectItem>
                      <SelectItem value="5d">5 Days</SelectItem>
                      <SelectItem value="7d">7 Days</SelectItem>
                      <SelectItem value="14d">14 Days</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pages"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="No. of Pages" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 Page</SelectItem>
                      <SelectItem value="2">2 Pages</SelectItem>
                      <SelectItem value="3">3 Pages</SelectItem>
                      <SelectItem value="4">4 Pages</SelectItem>
                      <SelectItem value="5">5 Pages</SelectItem>
                      <SelectItem value="6">6 Pages</SelectItem>
                      <SelectItem value="7">7 Pages</SelectItem>
                      <SelectItem value="8">8 Pages</SelectItem>
                      <SelectItem value="9">9 Pages</SelectItem>
                      <SelectItem value="10">10+ Pages</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="Citation Format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="apa">APA 7th Edition</SelectItem>
                      <SelectItem value="apa6">APA 6th Edition</SelectItem>
                      <SelectItem value="mla">MLA</SelectItem>
                      <SelectItem value="harvard">Harvard</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="vancouver">Vancouver</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sources"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                        <SelectValue placeholder="No. of Sources" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">No sources needed</SelectItem>
                      <SelectItem value="1-2">1-2 sources</SelectItem>
                      <SelectItem value="3-5">3-5 sources</SelectItem>
                      <SelectItem value="6-8">6-8 sources</SelectItem>
                      <SelectItem value="9+">9+ sources</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Assignment Instructions (Include grading rubric, specific requirements, etc.)"
                    {...field}
                    className="border-nursing-blue/30 focus:border-nursing-blue resize-none h-24"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-2">
            <div className="text-sm font-medium mb-2">Additional Services:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="plagiarism" value="plagiarism" />
                <Label htmlFor="plagiarism">Plagiarism Report (+$5)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="priority" value="priority" />
                <Label htmlFor="priority">Priority Support (+$7)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="expert" value="expert" />
                <Label htmlFor="expert">Expert Writer (+$10)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="charts" value="charts" />
                <Label htmlFor="charts">Charts & Tables (+$5)</Label>
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nursing-blue text-white hover:bg-nursing-navy"
          >
            Get a Free Quote
          </Button>
          
          <p className="text-xs text-center text-nursing-navy opacity-70">
            Your information is secure and encrypted. By submitting, you agree to our Terms of Service.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
