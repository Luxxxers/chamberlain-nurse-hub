
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  phone: string;
  assignmentType: string;
  deadline: string;
  pages: string;
  instructions: string;
};

const OrderForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Order Submitted",
      description: "We'll contact you shortly to confirm your order details.",
    });
    reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-nursing-navy">Get Your Assignment Help Now</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="border-nursing-blue/30 focus:border-nursing-blue"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        
        <div>
          <Input
            placeholder="Email Address"
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className="border-nursing-blue/30 focus:border-nursing-blue"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        
        <div>
          <Input
            placeholder="Phone Number"
            type="tel"
            {...register("phone")}
            className="border-nursing-blue/30 focus:border-nursing-blue"
          />
        </div>
        
        <div>
          <Select>
            <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
              <SelectValue placeholder="Assignment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="essay">Nursing Essay</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
              <SelectItem value="care-plan">Care Plan</SelectItem>
              <SelectItem value="research">Research Paper</SelectItem>
              <SelectItem value="presentation">Presentation</SelectItem>
              <SelectItem value="discussion">Discussion Post</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Select>
              <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                <SelectValue placeholder="Deadline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6h">6 Hours</SelectItem>
                <SelectItem value="12h">12 Hours</SelectItem>
                <SelectItem value="24h">24 Hours</SelectItem>
                <SelectItem value="2d">2 Days</SelectItem>
                <SelectItem value="3d">3 Days</SelectItem>
                <SelectItem value="5d">5 Days</SelectItem>
                <SelectItem value="7d">7 Days</SelectItem>
                <SelectItem value="14d">14 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select>
              <SelectTrigger className="border-nursing-blue/30 focus:border-nursing-blue">
                <SelectValue placeholder="No. of Pages" />
              </SelectTrigger>
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
          </div>
        </div>
        
        <div>
          <Textarea
            placeholder="Assignment Instructions"
            {...register("instructions")}
            className="border-nursing-blue/30 focus:border-nursing-blue resize-none h-24"
          />
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
    </div>
  );
};

export default OrderForm;
