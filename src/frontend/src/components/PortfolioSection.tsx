const portfolioItems = [
  // Logo mockup image - placed at the very top
  { src: '/assets/WhatsApp Image 2026-02-21 at 10.31.00 AM.jpeg', alt: 'KC Logo Mockup on Mug and T-Shirt' },
  
  // New portfolio designs
  { src: '/assets/generated/portfolio-digital-1.dim_800x600.png', alt: 'Digital Design Portfolio' },
  { src: '/assets/generated/portfolio-print-1.dim_800x600.png', alt: 'Print Design Portfolio' },
  
  // Previous portfolio images - design mockups
  { src: '/assets/1.jpg', alt: 'Kaur\'s Creation Logo Design' },
  { src: '/assets/2.jpg', alt: 'Banner and Flex Design' },
  { src: '/assets/3.jpg', alt: 'Brochure Design' },
  { src: '/assets/4.jpg', alt: 'Flyer Design' },
  { src: '/assets/5.jpg', alt: 'Stationery Branding Design' },
  { src: '/assets/6.jpg', alt: 'Business Card Design' },
  { src: '/assets/7.jpg', alt: 'Cup Packaging Design' },
  { src: '/assets/8.jpg', alt: 'Patanjali Packaging Design' },
  { src: '/assets/9.jpg', alt: 'Amul Chocolate Packaging' },
  { src: '/assets/10.jpg', alt: 'Golden Era Packaging Design' },
  { src: '/assets/11.jpg', alt: 'Perfume Packaging Design' },
  { src: '/assets/12.jpg', alt: 'Social Media Post Design' },
  { src: '/assets/13.jpg', alt: 'Chai Ho Jaye Social Media Post' },
  { src: '/assets/14.jpg', alt: 'Chai Break Social Media Post' },
  { src: '/assets/15.jpg', alt: 'Menu Board Design' },
  { src: '/assets/16.jpg', alt: 'Magazine Cover Design' },
  { src: '/assets/17.jpg', alt: 'Magazine Spread Design' },
  { src: '/assets/18.jpg', alt: 'Packaging and Label Design' },
  { src: '/assets/coffee copy.jpg', alt: 'Coffee Social Media Post' },
  { src: '/assets/amul.jpg', alt: 'Amul Milk Packaging Design' },
  { src: '/assets/mockup.jpg', alt: 'Knorr Soup Packaging Mockup' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-navy py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our collection of stunning design work
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-sm border-4 border-white"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
