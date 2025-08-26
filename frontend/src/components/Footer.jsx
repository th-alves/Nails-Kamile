import React from 'react';
import { Sparkles, Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da Kamile Nails.";
    const whatsappUrl = `https://wa.me/55${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-3 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Kamile Nails</h3>
                <p className="text-pink-300">Nail Designer Profissional</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md leading-relaxed">
              Transformando unhas em verdadeiras obras de arte há mais de 5 anos. 
              Cada cliente recebe um atendimento personalizado e designs únicos.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              
              <button
                onClick={openInstagram}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-pink-300">Navegação</h4>
            <nav className="space-y-3">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre mim' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'agendamento', label: 'Agendamento' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-pink-300 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-pink-300">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white">({contactInfo.phone.slice(0,2)}) {contactInfo.phone.slice(2,7)}-{contactInfo.phone.slice(7)}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-white">{contactInfo.instagram}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="text-white text-sm leading-relaxed">
                    Rua das Flores, 123<br />
                    Vila Madalena - São Paulo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Kamile Nails. Todos os direitos reservados.</p>
            </div>

            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>para transformar suas unhas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;