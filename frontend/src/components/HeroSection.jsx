import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-pink-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wider">Nail Designer Profissional</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme suas
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
                  unhas em arte
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Especialista em nail art personalizada, criando designs únicos que refletem sua personalidade. 
                Mais de 5 anos de experiência transformando unhas em verdadeiras obras de arte.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('agendamento')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Horário
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                Ver Portfólio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-pink-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">500+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">100%</div>
                <div className="text-sm text-gray-600">Produtos de Qualidade</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxuYWlsJTIwYXJ0fGVufDB8fHx8MTc1NjIwODU4Mnww&ixlib=rb-4.1.0&q=85"
                alt="Nail art profissional"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-3xl opacity-70 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl opacity-70 -z-10"></div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-pink-100">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Clientes Satisfeitas</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;