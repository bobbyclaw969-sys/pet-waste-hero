import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-green-700">Pet Waste Hero</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-green-700 transition">Pricing</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg min-h-[85vh] flex items-center justify-center px-6 pt-16">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Yard Clean.<br/>Hassle Gone.
          </h1>
          <p className="text-xl md:text-2xl text-green-50 mb-10 font-light">
            Professional poop scooping in Spring Hill. No contracts. No stress.
          </p>
          <a 
            href="https://wa.me/4155238886?text=Hi%20Alex,%20I'd%20like%20a%20quote!" 
            className="inline-flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Text for Quote
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Text for Quotes</h3>
              <p className="text-sm text-gray-500">Instant responses</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Locally Owned</h3>
              <p className="text-sm text-gray-500">Your neighbors</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm text-gray-500">100% guaranteed</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-500">No surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80" 
                alt="Happy dog in clean yard" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your yard, your sanctuary.</h2>
              <p className="text-gray-600 mb-6">We scoop so you don't have to. Enjoy your outdoor space without the worry.</p>
              <a href="https://wa.me/4155238886?text=Hi%20Alex,%20I'd%20like%20a%20quote!" className="text-green-700 font-medium hover:underline">Get started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-500 mb-12">First visit 20% off</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Small */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-medium text-gray-500 mb-2">Small Yard</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$18</span>
                <span className="text-gray-500">/visit</span>
              </div>
              <p className="text-green-600 font-medium mb-6">First visit: $14.40</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>Up to 1/4 acre</li>
                <li>Weekly or bi-weekly</li>
              </ul>
              <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20small%20yard%20and%20want%20to%20book!" className="block w-full bg-green-600 text-white text-center py-3 rounded-full font-medium hover:bg-green-700 transition">Book Now</a>
            </div>
            
            {/* Medium */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-500 shadow-xl relative hover:-translate-y-1 transition duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">Popular</div>
              <h3 className="text-lg font-medium text-green-600 mb-2">Medium Yard</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$28</span>
                <span className="text-gray-500">/visit</span>
              </div>
              <p className="text-green-600 font-medium mb-6">First visit: $22.40</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>Up to 1/2 acre</li>
                <li>Weekly or bi-weekly</li>
              </ul>
              <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20medium%20yard%20and%20want%20to%20book!" className="block w-full bg-green-600 text-white text-center py-3 rounded-full font-medium hover:bg-green-700 transition">Book Now</a>
            </div>
            
            {/* Large */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-medium text-gray-500 mb-2">Large Yard</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$38+</span>
                <span className="text-gray-500">/visit</span>
              </div>
              <p className="text-green-600 font-medium mb-6">First visit 20% off</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>1/2 acre+</li>
                <li>Custom scheduling</li>
              </ul>
              <a href="https://wa.me/4155238886?text=Hi,%20I%20have%20a%20large%20yard%20and%20want%20a%20quote!" className="block w-full bg-gray-800 text-white text-center py-3 rounded-full font-medium hover:bg-gray-900 transition">Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Families Say</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm mb-3">"Got a quote same day. My yard has never looked better!"</p>
              <p className="text-gray-900 font-medium text-sm">— Ken S.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm mb-3">"So easy to book. No more yard accidents!"</p>
              <p className="text-gray-900 font-medium text-sm">— Amy H.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm mb-3">"They text when they're coming and done. Very professional."</p>
              <p className="text-gray-900 font-medium text-sm">— Arianna A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Spring Hill</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Franklin</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Columbia</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Thompson's Station</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Brentwood</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Murfreesboro</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold text-xl mb-4">Pet Waste Hero</p>
          <p className="text-gray-400 mb-6">Spring Hill's favorite pooper scooper since 2018.</p>
          <a href="https://wa.me/4155238886" className="text-green-400 hover:underline">Text us</a>
          <p className="text-gray-500 text-sm mt-8">© 2026 Pet Waste Hero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
