const services = [
  { name: 'Logo Design', icon: '/assets/generated/icon-logo.dim_128x128.png' },
  { name: 'Business Card Design', icon: '/assets/generated/icon-business-card.dim_128x128.png' },
  { name: 'Flex Design', icon: '/assets/generated/icon-flex.dim_128x128.png' },
  { name: 'Brochure Design', icon: '/assets/generated/icon-brochure.dim_128x128.png' },
  { name: 'Pamphlet Design', icon: '/assets/generated/icon-pamphlet.dim_128x128.png' },
  { name: 'Banner Design', icon: '/assets/generated/icon-banner.dim_128x128.png' },
  { name: 'Packaging Design', icon: '/assets/generated/icon-packaging.dim_128x128.png' },
  { name: 'Label Design', icon: '/assets/generated/icon-label.dim_128x128.png' },
  { name: 'Social Media Post Design', icon: '/assets/generated/icon-social-media.dim_128x128.png' },
  { name: 'Website Template', icon: '/assets/generated/icon-website.dim_128x128.png' },
  { name: 'Stationery Design', icon: '/assets/generated/icon-stationery.dim_128x128.png' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-sm hover:bg-navy/5 transition-all duration-300 group"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-navy font-semibold text-lg leading-tight">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
