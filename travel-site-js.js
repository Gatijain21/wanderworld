const { useState } = React;
const { Menu, X, Send, MapPin, Mail, Phone } = lucide;

function TravelWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">WanderWorld</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-yellow-300 transition ${currentPage === 'home' ? 'text-yellow-300 font-semibold' : ''}`}>
              Home
            </button>
            <button onClick={() => setCurrentPage('about')} className={`hover:text-yellow-300 transition ${currentPage === 'about' ? 'text-yellow-300 font-semibold' : ''}`}>
              About Us
            </button>
            <button onClick={() => setCurrentPage('contact')} className={`hover:text-yellow-300 transition ${currentPage === 'contact' ? 'text-yellow-300 font-semibold' : ''}`}>
              Contact Us
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-blue-700 px-4 rounded">
              Home
            </button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-blue-700 px-4 rounded">
              About Us
            </button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block w-full text-left py-2 hover:bg-blue-700 px-4 rounded">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl mb-4">Welcome to WanderWorld - your gateway to unforgettable travel experiences around the globe. We specialize in curating the most breathtaking destinations, from pristine beaches to ancient temples and cultural landmarks.</p>
          <p className="text-lg">Let us guide you through the world's hidden gems and popular attractions, creating memories that will last a lifetime.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🏖️ Beach Paradise Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🏝️</div>
                  <p className="text-2xl font-bold">Maldives</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Maldives</h3>
                <p className="text-gray-600">Crystal clear turquoise waters, overwater bungalows, and pristine white sand beaches make the Maldives a tropical paradise like no other.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🌴</div>
                  <p className="text-2xl font-bold">Bali</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Bali, Indonesia</h3>
                <p className="text-gray-600">Experience stunning beaches, vibrant coral reefs, and breathtaking sunsets. Bali offers the perfect blend of relaxation and adventure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🛕 Sacred Temple Destinations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🛕</div>
                  <p className="text-2xl font-bold">Angkor Wat</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Angkor Wat, Cambodia</h3>
                <p className="text-gray-600">The largest religious monument in the world, Angkor Wat is a stunning example of Khmer architecture and a UNESCO World Heritage site.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">⛩️</div>
                  <p className="text-2xl font-bold">Borobudur</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Borobudur Temple, Indonesia</h3>
                <p className="text-gray-600">This magnificent 9th-century Mahayana Buddhist temple features intricate stone carvings and offers spectacular sunrise views.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🇯🇵 Discover Japan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🗻</div>
                  <p className="text-2xl font-bold">Mount Fuji</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Mount Fuji</h3>
                <p className="text-gray-600">Japan's iconic mountain offers breathtaking views and is a sacred symbol of the country. Visit during cherry blossom season for an unforgettable experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
              <div className="w-full h-64 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🏯</div>
                  <p className="text-2xl font-bold">Kyoto</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Kyoto Historic District</h3>
                <p className="text-gray-600">Explore ancient temples, traditional geisha districts, and beautiful gardens in Japan's cultural heart. Kyoto preserves the essence of traditional Japan.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About WanderWorld</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At WanderWorld, we believe that travel has the power to transform lives. Our mission is to inspire and enable travelers to explore the world's most beautiful destinations with confidence and ease. We curate exceptional travel experiences that connect people with diverse cultures, stunning landscapes, and unforgettable adventures.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Founded in 2020 by a team of passionate travelers and tourism experts, WanderWorld has grown into a trusted resource for adventure seekers worldwide. Our team has collectively visited over 100 countries and brings decades of travel experience to help you plan your perfect getaway.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What We Offer</h2>
          <ul className="text-gray-700 leading-relaxed space-y-2">
            <li>• Expertly curated destination guides and recommendations</li>
            <li>• Personalized travel planning assistance</li>
            <li>• Insider tips from local experts and experienced travelers</li>
            <li>• Comprehensive information on beaches, temples, and cultural sites</li>
            <li>• 24/7 customer support for all your travel needs</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg">
            Become part of the WanderWorld family and start your journey to discovering the world's most incredible destinations today!
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Get In Touch</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            
            <div onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@wanderworld.com</p>
                  <p className="text-gray-600">support@wanderworld.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">123 Travel Street</p>
                  <p className="text-gray-600">Adventure City, AC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
              <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 WanderWorld. All rights reserved.</p>
          <p className="text-gray-400">Discover the world, one destination at a time.</p>
        </div>
      </footer>
    </div>
  );
}

// Note: You'll need to include lucide-react icons separately
// Add this script tag to your HTML: <script src="https://unpkg.com/lucide@latest"></script>

ReactDOM.render(<TravelWebsite />, document.getElementById('root'));