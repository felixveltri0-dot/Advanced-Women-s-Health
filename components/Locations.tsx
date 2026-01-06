
import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-awh-brown-dark text-center">Donde Atiendo</h2>
        <div className="w-16 h-1 bg-awh-rose mx-auto mb-6"></div>
        <p className="text-awh-brown-mid italic text-lg max-w-xl mx-auto text-center">
          Sedes especializadas en Argentina y Uruguay con tecnología de vanguardia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LOCATIONS.map((loc, idx) => (
          <div key={idx} className="bg-white border border-awh-brown-dark/5 p-8 flex flex-col h-full rounded-lg hover:border-awh-rose/40 hover:shadow-xl transition-all duration-300">
            <div className="w-full aspect-video bg-awh-linen/50 rounded-md mb-6 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-awh-rose/5 group-hover:bg-awh-rose/10 transition-colors"></div>
               <svg className="w-10 h-10 text-awh-rose opacity-30 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-serif font-bold mb-4 text-awh-brown-dark leading-tight min-h-[3rem]">{loc.name}</h3>
              <div className="space-y-4 text-awh-brown-mid text-xs mb-8">
                <p className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-awh-rose font-bold">📍</span> 
                  <span className="leading-relaxed">{loc.address}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-awh-rose font-bold">📞</span> 
                  <span>{loc.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-awh-rose font-bold">⏰</span> 
                  <span>{loc.hours}</span>
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <a 
                href={loc.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-awh-linen text-awh-brown-dark border border-awh-brown-dark/10 px-6 py-3 rounded-md text-[9px] font-bold uppercase tracking-widest hover:bg-awh-brown-dark hover:text-white transition-all shadow-sm"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
