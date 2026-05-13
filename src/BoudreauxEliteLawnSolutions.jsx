import { useState, useEffect } from 'react'

export default function BoudreauxEliteLawnSolutions() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Phone, email, and location — fill these in when ready
  const PHONE = '(337) 522-6495'
  const EMAIL = 'Boudreauxselitelawn@yahoo.com'
  const LOCATION = 'Serving Maurice, Lafayette, Scott, Abbeville & Youngsville'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/xkoyeeod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const services = [
    {
      title: 'Luxury Lawn Maintenance',
      description: 'Precision mowing, edging, trimming, and weekly upkeep designed to keep your property looking immaculate year-round.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
          <path d="M3 17h18M3 17c0-4 2-7 5-9m10 9c0-4-2-7-5-9M8 8c1-2 2.5-3 4-3s3 1 4 3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="17" r="2" fill="currentColor" stroke="none"/>
          <circle cx="17" cy="17" r="2" fill="currentColor" stroke="none"/>
          <path d="M5 17V11h14v6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Landscape Design',
      description: 'Custom outdoor transformations with premium plants, elegant layouts, and high-end curb appeal solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
          <path d="M12 22V12M12 12C12 7 8 4 4 4c0 4 2.5 7.5 8 8zM12 12c0-5 4-8 8-8-1 4-3.5 7.5-8 8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 22h14" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Mulch & Flower Bed Care',
      description: 'Fresh mulch installs, weed prevention, and professionally maintained flower beds that elevate your home instantly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
          <path d="M12 2a4 4 0 0 1 4 4c0 2.5-4 6-4 6S8 8.5 8 6a4 4 0 0 1 4-4z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12v10M8 22h8" strokeLinecap="round"/>
          <path d="M6 14c0-2 2-4 6-4s6 2 6 4" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Commercial Property Care',
      description: 'Reliable, polished lawn care services for businesses, offices, and luxury commercial properties.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
          <rect x="3" y="7" width="18" height="14" rx="1" strokeLinecap="round"/>
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" strokeLinecap="round"/>
          <path d="M3 13h18M8 13v8M12 13v8M16 13v8" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      name: 'Avery Peacock',
      quote: 'Exceptional work and a true professional. If you want your yard looking elite, this is who you call.',
    },
    {
      name: 'Cale B.',
      quote: 'Hardworking, efficient, and the results speak for themselves. Beautiful work — highly recommend.',
    },
    {
      name: 'Casi Boudreaux Alleman',
      quote: 'Professional, efficient, and always delivers. Exactly what you want from a lawn care service.',
    },
  ]

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* Sticky Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center">
            <div className="bg-white rounded-2xl shadow-lg shadow-black/30 px-3 py-1.5">
              <img src="/logo-transparent.png" alt="Boudreaux's Elite Lawn Solutions" className="h-10 w-auto" />
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-green-500 transition-colors">
                {link.label}
              </button>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="text-green-500 font-bold text-sm hover:text-green-400 transition-colors">
              {PHONE}
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 hover:scale-105"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left text-gray-300 hover:text-green-500 transition-colors py-2 border-b border-white/5">
                {link.label}
              </button>
            ))}
            <a href={`tel:${PHONE}`} className="text-green-500 font-bold mt-2">{PHONE}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-zinc-900"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl w-full text-center mx-auto">
          <div className="inline-block border border-green-600/40 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm tracking-[0.2em] uppercase mb-6">
            Premium Outdoor Excellence
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Boudreaux's <span className="text-green-500">Elite</span>
            <br /> Lawn Solutions LLC
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Elevating curb appeal with luxury lawn care, pristine landscaping,
            and elite outdoor maintenance for homeowners and businesses that
            demand perfection.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-lg">
                📞
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-xs uppercase tracking-widest">Call Us Today</p>
                <a href={`tel:${PHONE}`} className="text-green-500 font-bold text-lg hover:text-green-400 transition-colors">{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Get Free Estimate
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="border border-white/20 hover:border-green-500 hover:bg-white/5 px-8 py-4 rounded-2xl transition-all duration-300"
            >
              View Services
            </button>
          </div>

          <div className="mt-12 flex justify-center items-center gap-14">
            <div>
              <h3 className="text-3xl font-bold text-green-500">50+</h3>
              <p className="text-gray-400 text-sm">Properties Serviced</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">5★</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">24/7</h3>
              <p className="text-gray-400 text-sm">Reliable Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">Elite Services</p>
            <h2 className="text-5xl font-black">Luxury Lawn & Landscape Care</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              High-end outdoor solutions tailored to create clean, polished, and impressive properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-green-500/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Banner */}
      <div className="bg-green-500/10 border-y border-green-500/20 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-2xl">📍</span>
            <div>
              <p className="text-green-400 font-bold text-lg">{LOCATION}</p>
              <p className="text-gray-400 text-sm">Local, reliable, and always on time</p>
            </div>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap"
          >
            Check if We Service Your Area
          </button>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury lawn"
              className="rounded-[2rem] shadow-2xl border border-white/10"
            />
          </div>
          <div>
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">About The Brand</p>
            <h2 className="text-5xl font-black leading-tight">Locally Rooted. Elite Results.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              Boudreaux's Elite Lawn Solutions LLC is a locally owned and operated lawn care company
              proudly serving the Acadiana area. Founded on a passion for hard work and an eye for
              detail, we treat every property like it's our own.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Whether it's a weekly residential cut or a full commercial landscape maintenance plan,
              our commitment never changes — show up on time, do the job right, and leave every
              property looking its absolute best.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-green-500">★ 5-Star</h3>
                <p className="text-gray-400 mt-2">Rated</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-green-500">100%</h3>
                <p className="text-gray-400 mt-2">Satisfaction Focused</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-green-500">✓ Local</h3>
                <p className="text-gray-400 mt-2">Locally Owned</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-green-500">✓ Insured</h3>
                <p className="text-gray-400 mt-2">Licensed & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">Client Reviews</p>
          <h2 className="text-5xl font-black mb-16">Trusted By Homeowners Who Expect More</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-left">
                <div className="text-green-500 text-3xl mb-6">★★★★★</div>
                <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-8 font-bold text-white">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 blur-3xl"></div>
        <div className="relative max-w-5xl mx-auto bg-gradient-to-r from-green-500 to-green-400 rounded-[3rem] p-14 text-black text-center shadow-2xl">
          <h2 className="text-5xl font-black leading-tight">
            Transform Your Property Into A Statement
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-black/80">
            Let Boudreaux's Elite Lawn Solutions LLC bring luxury-level curb appeal
            and unmatched professionalism to your home or business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >
              Schedule Your Free Estimate
            </button>
            <a
              href={`tel:${PHONE}`}
              className="bg-black/20 hover:bg-black/30 text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 border border-black/20"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-500 uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</p>
            <h2 className="text-5xl font-black">Request Your Free Estimate</h2>
            <p className="text-gray-400 mt-4 text-lg">Fill out the form below and we'll be in touch shortly.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Side */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-xl flex-shrink-0">📞</div>
                <div>
                  <p className="text-gray-400 text-sm">Call or Text</p>
                  <a href={`tel:${PHONE}`} className="text-white font-bold text-lg hover:text-green-500 transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-xl flex-shrink-0">✉️</div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a href={`mailto:${EMAIL}`} className="text-white font-bold hover:text-green-500 transition-colors break-all">{EMAIL}</a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-xl flex-shrink-0">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">Service Area</p>
                  <p className="text-white font-bold">{LOCATION}</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-500 text-3xl">✓</div>
                    <h2 className="text-3xl font-bold">Request Received!</h2>
                    <p className="text-gray-400 text-lg">
                      Thanks, {formData.name}! We'll be in touch shortly to schedule your free consultation.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }) }}
                      className="mt-4 border border-white/20 hover:border-green-500 px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-500 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-500 transition-colors"
                    />
                    <textarea
                      placeholder="Tell us about your property..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-500 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {loading ? 'Sending...' : 'Book Free Quote'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-green-500">Boudreaux's Elite Lawn Solutions LLC</h3>
            <p className="text-gray-500 mt-2 mb-6">Premium Lawn Care & Landscape Solutions</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering luxury-level outdoor services to homeowners and businesses who demand the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-green-500 transition-colors text-left">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                <span className="text-green-500">📞</span> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                <span className="text-green-500">✉️</span> {EMAIL}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-green-500">📍</span> {LOCATION}
              </div>
              <div className="pt-2">
                <p className="text-white font-bold text-sm mb-3 uppercase tracking-widest">Follow Us</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61562921865172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1464d8] text-white font-bold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Boudreaux's Elite Lawn Solutions LLC. All rights reserved.</p>
          <p>Premium Lawn Care & Landscape Solutions</p>
        </div>
      </footer>
    </div>
  )
}
