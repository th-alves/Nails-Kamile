import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';
import { aboutInfo } from '../data/mock';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Especialista Certificada",
      description: "Formação profissional em nail design e técnicas avançadas"
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção especial e design único"
    },
    {
      icon: Users,
      title: "500+ Clientes Felizes",
      description: "Mais de 500 clientes satisfeitas com nossos serviços"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeito ao seu tempo com horários sempre pontuais"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutInfo.photo}
                alt={aboutInfo.name}
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative background */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl -z-10"></div>
            
            {/* Experience card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-pink-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">5+</div>
                <div className="text-sm text-gray-600">Anos de</div>
                <div className="text-sm text-gray-600">Experiência</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-pink-500">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wider">Sobre mim</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Conheça a
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
                  {aboutInfo.name}
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutInfo.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">Vila Madalena</div>
                  <div className="text-sm opacity-90">Localização</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Nail Art</div>
                  <div className="text-sm opacity-90">Especialidade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Seg-Sáb</div>
                  <div className="text-sm opacity-90">Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;