
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DOCTOR_BIO } from '../constants';

const Hero: React.FC = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      // La imagen se desvanece suavemente a medida que el usuario baja
      const newOpacity = Math.max(0, 1 - scroll / 700);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-awh-brown-dark">
      {/* Contenedor de la Imagen con Transparencia Ajustada */}
      <div 
        className="absolute inset-0 z-0"
        style={{ opacity: scrollOpacity }}
      >
        <img 
          src={DOCTOR_BIO.image} 
          alt={DOCTOR_BIO.name} 
          className="w-full h-full object-cover opacity-80" 
          style={{ objectPosition: '15% center' }} 
          loading="eager"
          crossOrigin="anonymous"
        />
        {/* Overlay oscuro sutil para que las letras claras resalten perfectamente */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Degradado inferior para fundir con el resto de la página al hacer scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-awh-cream/90"></div>
      </div>

      {/* Contenido de texto superior - Centrado y con texto reducido para ligereza visual */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center mb-6">
            <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 leading-[1.1] md:leading-[0.9] tracking-tighter drop-shadow-2xl">
              Advanced <br className="hidden md:block" /> 
              <span className="italic text-awh-rose">Women's Health</span>
            </h1>
        </div>
        
        <p className="text-sm md:text-base text-white/80 mb-10 md:mb-14 max-w-lg mx-auto font-light tracking-wide leading-relaxed drop-shadow-md">
          Salud íntima de precisión para la mujer de hoy. <br className="hidden md:block" />
          Innovación médica y trato humano en cada consulta.
        </p>
        
        <div className="flex justify-center">
          <Link 
            to="/biografia" 
            className="bg-white text-awh-brown-dark px-12 py-5 rounded-full font-bold hover:bg-awh-rose hover:text-white transition-all shadow-2xl text-[10px] tracking-[0.4em] uppercase transform hover:scale-105 active:scale-95"
          >
            Conoce mi historia
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
