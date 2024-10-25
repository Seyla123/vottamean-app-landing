import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { MessageSquare, Phone, MapPin, Rocket } from 'lucide-react';
import { Typography } from '@/components/common/Typography';
import { cn } from '@/lib/utils';
import SectionHeader from '@/components/common/SectionHeader';
import { Textarea } from '../ui/textarea';
import FAQSection from './FAQSection';

export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    location: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleLocationChange = value => {
    setFormData(prevData => ({ ...prevData, location: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Your submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      setFormData({ name: '', email: '', location: '' });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=''>
      <SectionHeader subtitle={'Contact'} title={'Get in Touch'} />
      <div className='innerWidth mx-auto space-y-4 md:space-y-8'>
        {/* Contact Info Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='p-4 md:p-8 rounded-lg border border-dashed'>
            <div className='flex flex-col h-full'>
              <MessageSquare className='w-6 h-6 mb-4 text-primary' />
              <h3 className='text-lg font-semibold mb-2'>Message us</h3>
              <Typography variant={'p'}>
                Message us using our online chat system for quick and efficient
                support.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                vottamean@gmail.com
              </Typography>
            </div>
          </div>

          <div className='p-4 md:p-8 rounded-lg border border-dashed'>
            <div className='flex flex-col h-full'>
              <Phone className='w-6 h-6 mb-4 text-primary' />
              <h3 className='text-lg font-semibold mb-2'>Call us</h3>
              <Typography variant={'p'}>
                Let's have a chat – there's nothing quite like talking to
                another person.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                (+ 855) 1212-0000
              </Typography>
            </div>
          </div>

          <div className='p-4 md:p-8 rounded-lg border border-dashed'>
            <div className='flex flex-col h-full'>
              <MapPin className='w-6 h-6 mb-4 text-primary' />
              <h3 className='text-lg font-semibold mb-2'>Address</h3>
              <Typography variant={'p'}>
                We'd be delighted to welcome you to our Head Office.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                Phnom Penh, Cambodia 12345
              </Typography>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className='p-4 md:p-8 rounded-lg border border-dashed'>
          <div className='mb-8'>
            <Typography variant={'h3'}>Contact Us</Typography>
            <Typography variant={'p'}>
              Message us using our online chat system for quick and efficient
              support.
            </Typography>
          </div>
          <div className='grid grid-cols-1  gap-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Your Name'
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='vottamean@gmail.com'
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Message</Label>
                <Textarea
                  rows={8}
                  id='message'
                  name='message'
                  type='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Your Message'
                  required
                />
              </div>

              <Button
                type='submit'
                className={cn('md:float-right')}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <FAQSection />
    </section>
  );
}
