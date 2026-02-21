const HeroSection = () => {
  return (
    <section id="home" className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Elevate Your{' '}
              <span className="text-gold">Brand</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Premium graphic design solutions that transform your vision into stunning visual experiences.
            </p>
            <button className="bg-gold hover:bg-gold-dark text-navy px-10 py-4 rounded-sm font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/generated/designer-avatar.dim_600x600.png"
              alt="3D Designer Avatar"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
