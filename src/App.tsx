import React from 'react';
import { ArrowRight, Gamepad2, Headphones, Users, Mail, Youtube, Instagram } from 'lucide-react';

const services = [
  { name: 'Game Development', icon: Gamepad2, description: 'Create engaging and immersive gaming experiences.' },
  { name: 'Community Management', icon: Users, description: 'Build and nurture a thriving gaming community.' },
  { name: 'Esports Tournaments', icon: Headphones, description: 'Organize and host competitive gaming events.' },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Oggy! Gaming</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-gray-600 hover:text-purple-600">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Level Up Your Gaming Experience</h2>
          <p className="text-xl text-gray-600 mb-8">We help gamers and developers reach new heights in the gaming industry.</p>
          <a href="#contact" className="bg-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-purple-700 transition duration-300">
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </a>
        </section>

        <section id="services" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white p-6 rounded-lg shadow-md">
                  <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" required />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" required />
                <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md" rows={4} required></textarea>
                <button type="submit" className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Oggy! Gaming. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="mailto:jhasarban8538@gmail.com" className="hover:text-purple-400" title="Email">
              <Mail size={24} />
            </a>
            <a href="https://www.youtube.com/@CartoonNetworkgaming_96" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400" title="YouTube">
              <Youtube size={24} />
            </a>
            <a href="https://www.instagram.com/jhasarban_96/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400" title="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;