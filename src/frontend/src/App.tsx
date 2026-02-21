import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
