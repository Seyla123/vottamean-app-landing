import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import { Typography } from '@/components/common/Typography';
import SectionHeader from '@/components/common/SectionHeader';
import { Textarea } from '../ui/textarea';
import FAQSection from './FAQSection';
import { useSendEmailMutation } from '@/services/emailSupportApi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for controlling the visibility of the snackbar message
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Initialize the mutation hook
  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calling the API to send the email
      await sendEmail(formData).unwrap();
      setFormData({ name: '', email: '', message: '' });

      // Show snackbar message on successful submission
      setShowSnackbar(true);
      // Hide snackbar after 6 seconds
      setTimeout(() => {
        setShowSnackbar(false);
      }, 6000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="">
      <SectionHeader subtitle={'Contact'} title={'Get in Touch'} />
      <div className="innerWidth mx-auto space-y-4 md:space-y-8">
        {/* Snackbar for successful submission */}
        {showSnackbar && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg z-101">
            Your message has been sent successfully! Our support team will reach
            out to you shortly.
          </div>
        )}

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 md:p-8 rounded-lg border border-dashed">
            <div className="flex flex-col h-full">
              <MessageSquare className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Message us</h3>
              <Typography variant={'p'}>
                Message us using our online chat system for quick and efficient
                support.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                vottamean@gmail.com
              </Typography>
            </div>
          </div>

          <div className="p-4 md:p-8 rounded-lg border border-dashed">
            <div className="flex flex-col h-full">
              <Phone className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Call us</h3>
              <Typography variant={'p'}>
                Let's have a chat – there's nothing quite like talking to
                another person.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                (+ 855) 9620-8095
              </Typography>
            </div>
          </div>

          <div className="p-4 md:p-8 rounded-lg border border-dashed">
            <div className="flex flex-col h-full">
              <MapPin className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <Typography variant={'p'}>
                We'd be delighted to welcome you to our Head Office.
              </Typography>
              <Typography variant={'p'} className={'mt-8'}>
                OCIC Blvd Phnom Penh, Cambodia 12110
              </Typography>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="p-4 md:p-8 rounded-lg border border-dashed">
          <div className="mb-8">
            <Typography variant={'h3'}>Contact Us</Typography>
            <Typography variant={'p'}>
              Message us using our online chat system for quick and efficient
              support.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="vottamean@gmail.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  rows={8}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <Button
                type="submit"
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
