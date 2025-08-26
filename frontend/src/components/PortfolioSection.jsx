import React from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { portfolioImages, services } from '../data/mock';

const PortfolioSection = () => {
  return (
    <div>
      {/* Portfolio Images */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-pink-500 mb-4">
              <Sparkles className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium uppercase tracking-wider">Meus Trabalhos</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Portfólio de
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
                Nail Art
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada unha é uma tela em branco onde crio designs únicos e personalizados. 
              Confira alguns dos meus trabalhos mais recentes.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {portfolioImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Trabalho {index + 1}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {' '}Serviços
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para cuidar das suas unhas com excelência e dedicação.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-pink-500">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    Duração: {service.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;