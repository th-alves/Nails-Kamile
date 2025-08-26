import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../data/mock';

const ContactSection = () => {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da Kamile Nails.";
    const whatsappUrl = `https://wa.me/55${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  const openMaps = () => {
    const address = encodeURIComponent(contactInfo.address);
    window.open(`https://maps.google.com/?q=${address}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-500 mb-4">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium uppercase tracking-wider">Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos conversar
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
              sobre suas unhas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para tirar suas dúvidas e ajudar você a escolher o melhor serviço. 
            Entre em contato através dos canais abaixo!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600 mb-2">({contactInfo.phone.slice(0,2)}) {contactInfo.phone.slice(2,7)}-{contactInfo.phone.slice(7)}</p>
                      <Button
                        size="sm"
                        onClick={openWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                      <p className="text-gray-600 mb-2">{contactInfo.instagram}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={openInstagram}
                        className="border-pink-300 text-pink-600 hover:bg-pink-50"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Seguir no Instagram
                      </Button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                      <p className="text-gray-600 mb-2">{contactInfo.address}</p>
                      <p className="text-sm text-gray-500 mb-2">CEP: {contactInfo.cep}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={openMaps}
                        className="border-blue-300 text-blue-600 hover:bg-blue-50"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Ver no Mapa
                      </Button>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                      <p className="text-sm text-gray-500 mt-1">Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">O que minhas clientes dizem</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <p className="mb-3">"Kamile é incrível! Sempre saio de lá com as unhas perfeitas. O atendimento é excelente e o ambiente muito aconchegante."</p>
                    <p className="text-sm opacity-90">- Maria Silva</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <p className="mb-3">"Profissional super dedicada e criativa. Suas nail arts são verdadeiras obras de arte!"</p>
                    <p className="text-sm opacity-90">- Ana Costa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl p-8 border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contato Rápido</h3>
                
                <p className="text-gray-600 mb-6">
                  Prefere falar comigo diretamente? Clique no botão abaixo e seja direcionada 
                  para o meu WhatsApp. Responderei o mais rápido possível!
                </p>

                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Conversar no WhatsApp
                </Button>

                <div className="mt-6 p-4 bg-pink-100 rounded-xl">
                  <p className="text-pink-800 text-sm text-center">
                    <strong>Dica:</strong> Para agilizar o atendimento, mencione se já tem uma data 
                    em mente para o seu agendamento!
                  </p>
                </div>
              </div>

              {/* Location Visual */}
              <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossa Localização</h3>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Vila Madalena</h4>
                  <p className="text-gray-600 mb-4">{contactInfo.address}</p>
                  <p className="text-sm text-gray-500 mb-6">
                    Localização privilegiada, fácil acesso e próximo ao metrô
                  </p>
                  
                  <Button
                    onClick={openMaps}
                    variant="outline"
                    className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Como Chegar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;