import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Vottamean</h3>
            <p className="text-sm">
              Building better solutions for a connected world.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-gray-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-gray-800"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-gray-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/benefits">Benefits</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/features">Features</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/testimonials">Testimonials</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/faqs">FAQs</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                  asChild
                >
                  <Link to="/pricing">Pricing</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                asChild
              >
                <a
                  href="mailto:contact@company.com"
                  className="flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@company.com</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start px-2 hover:text-white hover:bg-gray-800"
                asChild
              >
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(123) 456-7890</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Vottamean. All rights reserved.
            </p>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button
                variant="ghost"
                className="hover:text-white hover:bg-gray-800"
                asChild
              >
                <Link to="/privacy">Privacy Policy</Link>
              </Button>
              <Button
                variant="ghost"
                className="hover:text-white hover:bg-gray-800"
                asChild
              >
                <Link to="/terms">Terms of Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
