import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito de scroll para mudança do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre mim' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'agendamento', label: 'Agendamento' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-pink-500/5 border-b border-pink-100/50' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: '100%'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo com animação aprimorada */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 p-2.5 rounded-full transform group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Kamile Nails
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide hidden sm:block">
                Nail Art Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation com efeitos melhorados */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 mx-1 text-gray-700 font-medium transition-all duration-300 group overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                
                {/* Text */}
                <span className="relative z-10 group-hover:text-pink-600 transition-colors duration-300">
                  {item.label}
                </span>
                
                {/* Underline effect */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-400/10 to-rose-400/10"></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button com animação */}
          <button
            className="md:hidden relative p-2.5 rounded-xl hover:bg-pink-50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 transform transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation melhorado */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-pink-100/50 bg-gradient-to-b from-white/95 to-pink-50/30 backdrop-blur-xl rounded-b-2xl mt-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50/80 font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;