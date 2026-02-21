import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-2xl' : 'bg-navy'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/1.jpg"
              alt="Kaur's Creation Logo"
              className="h-14 w-auto object-contain border-4 border-white rounded-sm"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('review')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide"
            >
              Review
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
