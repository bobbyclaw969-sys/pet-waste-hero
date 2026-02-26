import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Waste Hero | Middle Tennessee's #1 Pooper Scooper Service",
  description: "Professional pet waste removal services in Nashville, Franklin, Brentwood & Middle Tennessee. Free quotes, no contracts, 100% satisfaction guaranteed.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🐕</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Pet Waste <span className="text-green-600">Hero</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-green-600 font-medium">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 font-medium">Pricing</a>
              <a href="#service-area" className="text-gray-600 hover:text-green-600 font-medium">Service Area</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium">Reviews</a>
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>📍</span> Serving Middle Tennessee
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                You Love Your Dog.<br />
                <span className="text-green-600">Not The Cleanup.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                We make your yard a clean, safe, and enjoyable place for your family and pets. Professional pooper scooper services in Nashville and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition text-center">
                  Get Free Quote
                </a>
                <a href="#pricing" className="border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transition text-center">
                  View Pricing
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-3">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ken" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amy" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arianna" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Savannah" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-sm text-gray-500">500+ happy customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4">🐕‍🦺</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Clean Yards, Happy Tails</h3>
                  <p className="text-gray-600 mb-6">Your dog deserves a clean playground</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">24hr</div>
                      <div className="text-xs text-gray-500">Response</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">No</div>
                      <div className="text-xs text-gray-500">Contracts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential yards to commercial properties, we keep Middle Tennessee clean
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-3xl mb-6">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Service</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Weekly or bi-weekly visits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Front & backyard cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Pet waste disposal included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Text notification when complete
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Service</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> HOAs & apartment complexes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Community parks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Dog daycares & pet stores
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Custom scheduling
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-Time Cleanups</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span> Move-in/move-out cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span> Event preparation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span> Spring cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span> Yard restoration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Pet Waste Hero?</h2>
            <p className="text-xl text-gray-600">We're not just another cleaning service – we're your yard's best friend</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Locally Owned", desc: "Middle Tennessee owned and operated" },
              { icon: "📱", title: "Text Updates", desc: "We notify you when we're done" },
              { icon: "🛡️", title: "Sanitary", desc: "We sanitize shoes & equipment" },
              { icon: "🚫", title: "No Contracts", desc: "Cancel anytime, no penalties" },
              { icon: "💰", title: "No Hidden Fees", desc: "Transparent pricing, always" },
              { icon: "✅", title: "Insured", desc: "Fully bonded & insured" },
              { icon: "👔", title: "Uniformed", desc: "Branded uniforms & marked vehicles" },
              { icon: "⏰", title: "Reliable", desc: "Same day, consistent schedule" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No surprises, no hidden fees, no contracts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-200 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Small Yard</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$25</span>
                  <span className="text-gray-500">/visit</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Up to 1/4 acre
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Weekly or bi-weekly
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Front & backyard
                  </li>
                </ul>
                <a href="#contact" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">
                  Get Started
                </a>
              </div>
            </div>
            <div className="border-2 border-green-500 rounded-3xl p-8 relative shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-600 mb-2">Medium Yard</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$35</span>
                  <span className="text-gray-500">/visit</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Up to 1/2 acre
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Weekly or bi-weekly
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Front, backyard & sides
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Patio/deck areas
                  </li>
                </ul>
                <a href="#contact" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">
                  Get Started
                </a>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Large Yard</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$45+</span>
                  <span className="text-gray-500">/visit</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> 1/2 acre+
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Custom scheduling
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Multiple dog discount
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> Priority service
                  </li>
                </ul>
                <a href="#contact" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">*Prices may vary based on yard size, number of dogs, and terrain. Get a free quote for exact pricing.</p>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Serve All of Middle Tennessee</h2>
            <p className="text-xl text-green-100">Proudly serving Nashville and surrounding areas</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Nashville", "Franklin", "Brentwood", "Murfreesboro", 
              "Antioch", "Hendersonville", "Gallatin", "Lebanon"
            ].map((city, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition">
                <span className="text-white font-semibold">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-green-100 mt-8">Don't see your city? Call us – we may still be able to help!</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join hundreds of happy pet parents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ken S.", text: "I've been using Pet Waste Hero for a few weeks now, and I'm really impressed! Sign up is easy, they're always punctual, and the yard looks great after every visit.", rating: 5 },
              { name: "Amy H.", text: "I love this service!! We have 2 pups and a small yard, so it gets messy quickly. It's so nice to know my dogs have a clean space to do their business!", rating: 5 },
              { name: "Arianna A.", text: "Pet Waste Hero has been amazing. Their communication is top notch, their services are reasonably priced, and they leave our yard looking like our pet doesn't even use it.", rating: 5 },
              { name: "Savannah L.", text: "Amazing services always!!", rating: 5 },
              { name: "Dylan S.", text: "A service I never thought I needed till I got it. What a great service!! 5 Stars!", rating: 5 },
              { name: "Sharon W.", text: "I cannot say enough great things about this company! Responsive, professional, courteous and exceptionally helpful!", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Your Free Quote Today!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to enjoy a clean yard without the hassle? Fill out the form and we'll get back to you within 24 hours!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">📱</div>
                  <div>
                    <p className="font-semibold text-gray-900">Text Updates</p>
                    <p className="text-gray-600">We text you when we're on the way & done</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">⚡</div>
                  <div>
                    <p className="font-semibold text-gray-900">Fast Response</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">💚</div>
                  <div>
                    <p className="font-semibold text-gray-900">Satisfaction Guaranteed</p>
                    <p className="text-gray-600">Not happy? We'll make it right or refund</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="(615) 555-0123" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="123 Main St, Nashville, TN" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Weekly Service</option>
                    <option>Bi-Weekly Service</option>
                    <option>One-Time Cleanup</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Dogs</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>1 dog</option>
                    <option>2 dogs</option>
                    <option>3 dogs</option>
                    <option>4+ dogs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Google Search</option>
                    <option>Nextdoor</option>
                    <option>Facebook</option>
                    <option>Referral</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition">
                  Get My Free Quote →
                </button>
                <p className="text-center text-sm text-gray-500">We respect your privacy. Your info is safe with us.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🐕</span>
                </div>
                <span className="font-bold text-xl">Pet Waste Hero</span>
              </div>
              <p className="text-gray-400">Middle Tennessee's premier pet waste removal service. Making yards clean and families happy since 2018.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-green-400">Residential</a></li>
                <li><a href="#services" className="hover:text-green-400">Commercial</a></li>
                <li><a href="#services" className="hover:text-green-400">One-Time Cleanups</a></li>
                <li><a href="#pricing" className="hover:text-green-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#testimonials" className="hover:text-green-400">Reviews</a></li>
                <li><a href="#service-area" className="hover:text-green-400">Service Area</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Middle Tennessee</li>
                <li>📞 (615) 555-HERO</li>
                <li>✉️ hello@petwastehero.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2026 Pet Waste Hero. All rights reserved. | Made with 🐕 in Tennessee</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
