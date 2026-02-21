const testimonials = [
  {
    name: 'Jasleen Kaur',
    review: 'Exceptional design work! The team at Kaur\'s Creation transformed our brand identity with their creative expertise and attention to detail.',
  },
  {
    name: 'Nisar Mohammad',
    review: 'Professional, timely, and incredibly talented. They understood our vision perfectly and delivered beyond our expectations.',
  },
  {
    name: 'Deepak Kumar',
    review: 'Outstanding quality and service. The designs are modern, elegant, and exactly what we needed for our business.',
  },
  {
    name: 'Jaspreet Singh',
    review: 'Highly recommend! Their creativity and professionalism made the entire design process smooth and enjoyable.',
  },
  {
    name: 'Gagandeep Singh',
    review: 'Brilliant work! The team delivered stunning designs that perfectly captured our brand essence. Truly exceptional service.',
  },
];

const TestimonialSection = () => {
  return (
    <section id="review" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Trusted by businesses and individuals worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>
              <div className="border-t border-gold/20 pt-4">
                <p className="text-gold font-semibold text-lg">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
