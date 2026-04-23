import React, { useState, useEffect } from "react";
import { MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Services", href: "#services" },
    { label: "Location", href: "#location" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Dental Health Quiz", href: "#quiz" }
  ];

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;
      
      // Open every day 8 AM - 6 PM
      const morningStart = 8 * 60; // 8:00 AM in minutes
      const morningEnd = 18 * 60; // 6:00 PM in minutes
      
      // Check if current time falls within operating hours
      setIsOpen(
        currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd
      );
    }, 60000); // Update every minute
    
    // Initial check when component mounts
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;
    
    const morningStart = 8 * 60;
    const morningEnd = 18 * 60;
    
    setIsOpen(
      currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd
    );
    
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="md:max-w-xs">
            <h4 className="text-xl font-bold mb-4">Express Smiles Dental Suite</h4>
            <p className="text-gray-400">
              Express Smiles Dental Suite is Nairobi's trusted dental clinic committed to providing high-quality oral healthcare with a patient-first approach. Equipped with state-of-the-art technology and a team of experienced dentists, we offer comprehensive treatments, including cosmetic dentistry, orthodontics, dental implants, and preventive care.
            </p>
          </div>
          
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('#') ? (
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" 
                   style={{ 
                     backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                     color: isOpen ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                   }}>
                <div className="w-2 h-2 rounded-full mr-2" 
                     style={{ 
                       backgroundColor: isOpen ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                     }}>
                </div>
                <span>{isOpen ? 'Open Now' : 'Closed Now'}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Monday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Tuesday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Wednesday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Thursday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Friday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400 font-medium">Saturday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Sunday</span>
                  <span className="text-gray-400">8:00 am–6:00 pm</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 mt-3">
                Last updated: {currentTime.toLocaleDateString()} at {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  4th Floor, Highway Mall, Opposite Nyayo Stadium, Next to Carrefour Mega, Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+254799909232" className="text-gray-400 hover:text-white transition-colors">
                  +254 799 909 232
                </a>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/people/Express-Smiles-Dental-Suite/61556958884031/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/express_smiles_dentalsuite?igsh=NzNxa2x1cGJoYnFi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@express.smiles?_r=1&_t=ZS-95aWXQVeT3t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Express Smiles Dental Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
