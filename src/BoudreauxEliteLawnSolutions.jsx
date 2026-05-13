export default function BoudreauxEliteLawnSolutions() {
  const services = [
    {
      title: 'Luxury Lawn Maintenance',
      description:
        'Precision mowing, edging, trimming, and weekly upkeep designed to keep your property looking immaculate year-round.',
    },
    {
      title: 'Landscape Design',
      description:
        'Custom outdoor transformations with premium plants, elegant layouts, and high-end curb appeal solutions.',
    },
    {
      title: 'Mulch & Flower Bed Care',
      description:
        'Fresh mulch installs, weed prevention, and professionally maintained flower beds that elevate your home instantly.',
    },
    {
      title: 'Commercial Property Care',
      description:
        'Reliable, polished lawn care services for businesses, offices, and luxury commercial properties.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah B.',
      quote:
        'My yard went from average to absolutely stunning. The attention to detail is unreal.',
    },
    {
      name: 'Michael R.',
      quote:
        "Professional, fast, and dependable. Easily the best lawn company we've hired.",
    },
    {
      name: 'Amanda T.',
      quote:
        'Our property looks like a luxury resort every single week. Highly recommend.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 px-4 py-2 rounded-full text-sm tracking-[0.2em] uppercase mb-6">
              Premium Outdoor Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Boudreaux's <span className="text-yellow-400">Elite</span>
              <br /> Lawn Solutions LLC
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
              Elevating curb appeal with luxury lawn care, pristine landscaping,
              and elite outdoor maintenance for homeowners and businesses that
              demand perfection.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105">
                Get Free Estimate
              </button>

              <button className="border border-white/20 hover:border-yellow-400 hover:bg-white/5 px-8 py-4 rounded-2xl transition-all duration-300">
                View Services
              </button>
            </div>

            <div className="mt-12 flex items-center gap-10">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400">250+</h3>
                <p className="text-gray-400 text-sm">Properties Serviced</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">5★</h3>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
                <p className="text-gray-400 text-sm">Reliable Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">Request a Luxury Lawn Consultation</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                />

                <textarea
                  placeholder="Tell us about your property..."
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
                ></textarea>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]">
                  Book Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Elite Services
            </p>
            <h2 className="text-5xl font-black">Luxury Lawn & Landscape Care</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              High-end outdoor solutions tailored to create clean, polished,
              and impressive properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-2xl font-bold mb-6 group-hover:scale-110 transition-all">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1599685315640-3c5e7d9f29ec?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury lawn"
              className="rounded-[2rem] shadow-2xl border border-white/10"
            />
          </div>

          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              About The Brand
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Where Luxury Meets Lawn Care
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              Boudreaux's Elite Lawn Solutions LLC was built around one mission:
              delivering premium-quality outdoor services that make every property
              stand out.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              From perfectly striped lawns to upscale landscape transformations,
              every project is approached with precision, professionalism, and a
              luxury-first mindset.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-400 mt-2">Satisfaction Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Client Reviews
          </p>

          <h2 className="text-5xl font-black mb-16">
            Trusted By Homeowners Who Expect More
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-left"
              >
                <div className="text-yellow-400 text-3xl mb-6">★★★★★</div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 font-bold text-white">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400/10 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-[3rem] p-14 text-black text-center shadow-2xl">
          <h2 className="text-5xl font-black leading-tight">
            Transform Your Property Into A Statement
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-black/80">
            Let Boudreaux's Elite Lawn Solutions LLC bring luxury-level curb appeal
            and unmatched professionalism to your home or business.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
            Schedule Your Free Estimate
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-black text-yellow-400">
              Boudreaux's Elite Lawn Solutions LLC
            </h3>
            <p className="text-gray-500 mt-2">
              Premium Lawn Care & Landscape Solutions
            </p>
          </div>

          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
