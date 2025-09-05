import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Delhi NCR Cars</h3>
              <p className="text-gray-300 leading-relaxed">
                Delhi-NCR's most trusted premium car dealership, committed to providing 
                exceptional service and certified quality vehicles.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Cars', href: '/cars' },
                { name: 'About Us', href: '/about' },
                { name: 'Financing', href: '/financing' },
                { name: 'Insurance', href: '/insurance' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-secondary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300">123 GT Karnal Road</p>
                  <p className="text-gray-300">New Delhi - 110033</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@delhincrcars.com" className="text-gray-300 hover:text-secondary transition-colors">
                  info@delhincrcars.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest car arrivals and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full btn-secondary">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-400">Quick Actions:</p>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://wa.me/919876543210"
                  className="text-success hover:text-green-400 transition-colors text-sm"
                >
                  WhatsApp: +91 98765 43210
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-secondary hover:text-yellow-400 transition-colors text-sm"
                >
                  Call for Test Drive
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Delhi NCR Cars. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>GST: 07AABCD1234E1Z5</span>
            <span>•</span>
            <span>Licensed Dealer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;