import { Mail, Phone } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';

const Footer = () => {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'kaurs-creation';

  return (
    <footer id="contact" className="bg-dark-navy py-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif text-gold italic">
            Thank you for choosing us
          </h3>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-6">
            <a 
              href="mailto:Kaurscreation009@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base">Kaurscreation009@gmail.com</span>
            </a>
            <a 
              href="tel:+919988302842"
              className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors duration-300 group"
            >
              <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base">+91-9988302842</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/sharandeep-kaur-347285376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61582726687717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/Kaurs.creation_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-8 border-t border-gold/20">
            <p className="text-white/60 text-sm">
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-white/40 text-xs mt-2">
              © {new Date().getFullYear()} Kaur's Creation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
