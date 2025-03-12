import React, { useState, useEffect } from 'react';
import { Menu, X ,Linkedin , Github} from 'lucide-react';


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-3xl font-bold text-indigo-600">Mohamed Firas</span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('about')} className="text-gray-600 text-xl hover:text-indigo-600">About</button>
            <button onClick={() => scrollTo('experience')} className="text-gray-600 text-xl hover:text-indigo-600">Experience</button>
            <button onClick={() => scrollTo('projects')} className="text-gray-600 text-xl hover:text-indigo-600">Projects</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-600 text-xl hover:text-indigo-600">Contact</button>
          </div>  <a
              href="https://www.linkedin.com/in/mohamed-firas-alfarra-130b01274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-indigo-600 hover:text-gray-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Mohamed-Firas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-indigo-600 hover:text-gray-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-indigo-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Contact
            </button>
          </div>
         
        </div>
      )}
    </nav>
  );
}