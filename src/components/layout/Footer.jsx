import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className='text-muted md:mt-32 mt-16 p-4'>
      <div className='bg-black rounded-lg'>
        <div className='innerWidth mx-auto px-4 py-12 '>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Company Info */}
            <div className='space-y-4'>
              <h3 className='text-xl font-bold text-white'>Vottamean</h3>
              <p className='text-sm'>
                Building better solutions for a connected world.
              </p>
              <div className='flex space-x-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:text-white hover:bg-gray-800'
                >
                  <Facebook className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:text-white hover:bg-gray-800'
                >
                  <Twitter className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:text-white hover:bg-gray-800'
                >
                  <Instagram className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:text-white hover:bg-gray-800'
                >
                  <Linkedin className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          {/* <div className='border-t border-gray-800 mt-12 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <p className='text-sm'>
                &copy; 2024 Vottamean. All rights reserved.
              </p>
              <div className='flex space-x-2 mt-4 md:mt-0'>
                <Button
                  variant='ghost'
                  className='hover:text-white hover:bg-gray-800'
                  asChild
                >
                  <Link to='/privacy'>Privacy Policy</Link>
                </Button>
                <Button
                  variant='ghost'
                  className='hover:text-white hover:bg-gray-800'
                  asChild
                >
                  <Link to='/terms'>Terms of Service</Link>
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
