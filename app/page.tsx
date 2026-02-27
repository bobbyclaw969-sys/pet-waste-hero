import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Waste Hero Spring Hill | Pooper Scooper Service Franklin, Columbia, Thompson's Station",
  description: "Spring Hill's favorite pooper scooper! Instant text quotes, no contracts, 100% satisfaction guaranteed. Serving Franklin, Columbia, Thompson's Station & all of Southern Middle Tennessee.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/4155238886?text=Hi%20Alex,%20I'd%20like%20a%20quote%20for%20yard%20cleaning!"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="white">
          <path d="M16.002 1.923c-5.316 0-9.63 4.305-9.63 9.63 0 1.704.449 3.335 1.23 4.77l-.988 3.583 3.742-1.11c1.563.824 3.334 1.324 5.646 1.324h.001c5.316 0 9.63-4.305 9.63-9.63s-4.305-9.63-9.63-9.63zm0 17.39c-1.285 0-2.49-.336-3.567-.965l-.254-.148-2.654.787.786-2.582-.169-.27c-.695-1.111-1.065-2.39-1.065-3.768 0-4.298 3.494-7.792 7.792-7.792s7.792 3.494 7.792 7.792-3.494 7.792-7.792 7.792zm4.986-5.773c-.254-.45-.585-.653-.92-.653-.112 0-.236.018-.37.054l-.477.136c-1.823.521-3.785 1.165-5.686 2.395-1.694 1.094-2.855 2.402-3.458 3.9-.147.366-.253.753-.253 1.157 0 .127.023.255.07.382.49 1.305 1.433 2.437 2.813 3.372 1.38.935 3.003 1.5 4.839 1.683l.457.045c.126.004.25-.002.375-.018.31-.04.714-.104 1.2-.192.486-.088.94-.2 1.358-.335.836-.27 1.594-.65 2.264-1.135.67-.485 1.22-1.072 1.64-1.75.21-.338.38-.698.505-1.073.125-.375.188-.765.188-1.165 0-.162-.022-.323-.065-.48-.433-1.57-1.47-2.93-3.09-4.06-1.62-1.13-3.58-1.78-5.84-1.94l-.404-.028c-.147-.01-.295-.016-.443-.016z"/>
        </svg>
        <span>Text Alex – Instant Quote!</span>
      </a>

      {/* Navigation */}
      <nav className="sticky-nav fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🐕</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Pet Waste <span className="text-green-600">Hero</span></span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <a href="#springhill" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium">Spring Hill</a>
              <a href="#services" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium">Services</a>
              <a href="#pricing" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium">Pricing</a>
              <a href="#reviews" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium">Reviews</a>
              <a 
                href="https://wa.me/4155238886?text=Hi,%20I'd%20like%20a%20quote!"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition flex items-center gap-2"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4" fill="white">
                  <path d="M16.002 1.923c-5.316 0-9.63 4.305-9.63 9.63 0 1.704.449 3.335 1.23 4.77l-.988 3.583 3.742-1.11c1.563.824 3.334 1.324 5.646 1.324h.001c5.316 0 9.63-4.305 9.63-9.63s-4.305-9.63-9.63-9.63zm0 17.39c-1.285 0-2.49-.336-3.567-.965l-.254-.148-2.654.787.786-2.582-.169-.27c-.695-1.111-1.065-2.39-1.065-3.768 0-4.298 3.494-7.792 7.792-7.792s7.792 3.494 7.792 7.792-3.494 7.792-7.792 7.792z"/>
                </svg>
                Text (415) 523-8886
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Spring Hill Focus */}
      <section id="springhill" className="hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>📍</span> SPRING HILL'S FAVORITE POOPER SCOOPER
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Hate Scooping Poop in<br />
                <span className="text-green-600">Spring Hill?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-lg">
                We've got you covered. Get your yard clean in minutes – just text us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://wa.me/4155238886?text=Hi%20Alex,%20tell%20me%20about%20your%20yard%20and%20dogs!"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition text-center flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="white">
                    <path d="M16.002 1.923c-5.316 0-9.63 4.305-9.63 9.63 0 1.704.449 3.335 1.23 4.77l-.988 3.583 3.742-1.11c1.563.824 3.334 1.324 5.646 1.324h.001c5.316 0 9.63-4.305 9.63-9.63s-4.305-9.63-9.63-9.63zm0 17.39c-1.285 0-2.49-.336-3.567-.965l-.254-.148-2.654.787.786-2.582-.169-.27c-.695-1.111-1.065-2.39-1.065-3.768 0-4.298 3.494-7.792 7.792-7.792s7.792 3.494 7.792 7.792-3.494 7.792-7.792 7.792z"/>
                  </svg>
                  Get Instant Quote via Text!
                </a>
                <a href="#pricing" className="border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transition text-center">
                  View Pricing
                </a>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ken" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amy" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arianna" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Savannah" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                  <p className="text-sm text-gray-500">500+ Spring Hill families</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop" alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">BEFORE</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop" alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">AFTER</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"><span className="text-2xl">🐕</span></div>
                <div><p className="font-bold text-gray-900">100% Satisfaction</p><p className="text-sm text-gray-500">Guaranteed</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-green-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white"><p className="text-3xl font-bold">100%</p><p className="text-green-100">Satisfaction</p></div>
            <div className="text-white"><p className="text-3xl font-bold">No Contracts</p><p className="text-green-100">Cancel Anytime</p></div>
            <div className="text-white"><p className="text-3xl font-bold">Locally</p><p className="text-green-100">Owned</p></div>
            <div className="text-white"><p className="text-3xl font-bold">Text Us</p><p className="text-green-100">Instant Quotes</p></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Spring Hill Chooses Pet Waste Hero</h2>
            <p className="text-xl text-gray-600">We're not a franchise – we're your neighbors!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💬", title: "Text for Instant Quotes", desc: "Skip the phone call – just text us at (415) 523-8886 for a same-day quote!" },
              { icon: "🏠", title: "Locally Owned", desc: "Not a franchise. We're your Spring Hill neighbors, serving since 2018." },
              { icon: "🛡️", title: "Sanitary & Safe", desc: "We sanitize all equipment & shoes before every visit." },
              { icon: "🚫", title: "No Contracts", desc: "Pay as you go. Not happy? Cancel anytime – no penalties." },
              { icon: "💰", title: "No Hidden Fees", desc: "What you see is what you pay. No extra charges." },
              { icon: "📱", title: "Text Notifications", desc: "We text you when we're on the way and done." },
              { icon: "✅", title: "Insured & Bonded", desc: "Fully protected. Your property is safe with us." },
              { icon: "👔", title: "Uniformed & Marked", desc: "Our team wears branded uniforms." },
              { icon: "⏰", title: "Reliable Every Time", desc: "Same day, consistent schedule." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">First visit 20% off! No hidden fees, ever.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Small Yard</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$18</span>
                  <span className="text-gray-500">/visit</span>
                  <p className="text-green-600 font-medium mt-2">First visit $14.40!</p>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Up to 1/4 acre</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Front & backyard</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Weekly or bi-weekly</li>
                </ul>
                <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20small%20yard%20and%20want%20to%20book!" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">Text to Book</a>
              </div>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-3xl p-8 relative shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-600 mb-2">Medium Yard</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$28</span>
                  <span className="text-gray-500">/visit</span>
                  <p className="text-green-600 font-medium mt-2">First visit $22.40!</p>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Up to 1/2 acre</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Front, backyard & sides</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Patio/deck areas</li>
                </ul>
                <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20medium%20yard%20and%20want%20to%20book!" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">Text to Book</a>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-green-500 transition">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Large Yard</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$38+</span>
                  <span className="text-gray-500">/visit</span>
                  <p className="text-green-600 font-medium mt-2">First visit 20% off!</p>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> 1/2 acre+</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Custom scheduling</li>
                  <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✓</span> Multiple dog discount</li>
                </ul>
                <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20large%20yard%20and%20want%20a%20quote!" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition text-center">Get Quote</a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">*Prices may vary based on yard size, number of dogs, and terrain. Text us for exact pricing!</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in under 2 minutes – just text us!</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", icon: "💬", title: "Text Us", desc: "Send us a message at (415) 523-8886 with your address" },
              { step: "2", icon: "💰", title: "Get Quote", desc: "We'll reply with a transparent price in minutes" },
              { step: "3", icon: "📅", title: "Book Time", desc: "Pick a weekly or bi-weekly schedule" },
              { step: "4", icon: "✨", title: "Enjoy!", desc: "We clean your yard and text you when done" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">{item.icon}</div>
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Spring Hill Families Say</h2>
            <p className="text-xl text-gray-600">Join 500+ happy customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ken S.", text: "Texted for a quote, got one same day. My yard has never looked better!", rating: 5 },
              { name: "Amy H.", text: "Text booking was so easy! No more land mines in our yard.", rating: 5 },
              { name: "Arianna A.", text: "They text when they're coming and when they're done. Very professional!", rating: 5 },
              { name: "Savannah L.", text: "Best decision ever! No more stepping in 'land mines'.", rating: 5 },
              { name: "Dylan S.", text: "A service I never thought I needed till I got it. 5 Stars!", rating: 5 },
              { name: "Sharon W.", text: "Called 5 companies, Pet Waste Hero called back in 5 minutes!", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                <p className="text-gray-600 mb-4">"{t.text}"</p>
                <p className="font-semibold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Serve Southern Middle Tennessee</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["Spring Hill", "Franklin", "Thompson's Station", "Columbia", "Brentwood", "Murfreesboro", "Antioch", "Nolensville"].map((city, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition">
                <span className="text-white font-semibold">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"><span className="text-white text-xl">🐕</span></div>
                <span className="font-bold text-xl">Pet Waste Hero</span>
              </div>
              <p className="text-gray-400">Spring Hill's favorite pooper scooper since 2018. Making yards clean, families happy!</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Spring Hill, TN</li>
                <li>📱 <a href="https://wa.me/4155238886" className="text-green-400 hover:underline">(415) 523-8886</a></li>
                <li>✉️ hello@petwastehero.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#pricing" className="hover:text-green-400">Pricing</a></li>
                <li><a href="#reviews" className="hover:text-green-400">Reviews</a></li>
                <li><a href="#springhill" className="hover:text-green-400">Service Area</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2026 Pet Waste Hero. All rights reserved. Made with 🐕 in Tennessee</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
