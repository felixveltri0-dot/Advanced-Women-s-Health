
import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-awh-brown-dark">Donde Atiendo</h2>
        <div className="w-16 h-1 bg-awh-rose mx-auto mb-6"></div>
        <p className="text-awh-brown-mid italic text-lg max-w-xl mx-auto">Centros especializados con tecnología de vanguardia y máxima discreción.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {LOCATIONS.map((loc, idx) => (
          <div key={idx} className="bg-white border border-awh-brown-dark/10 p-10 flex flex-col md:flex-row gap-8 items-center rounded-lg hover:border-awh-rose/40 transition-colors">
            <div className="w-full md:w-1/3 aspect-square bg-awh-linen rounded-md flex items-center justify-center">
              <svg className="w-12 h-12 text-awh-rose opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold mb-4 text-awh-brown-dark">{loc.name}</h3>
              <div className="space-y-2 text-awh-brown-mid text-sm mb-8">
                <p className="flex items-center justify-center md:justify-start gap-3">📍 {loc.address}</p>
                <p className="flex items-center justify-center md:justify-start gap-3">📞 {loc.phone}</p>
                <p className="flex items-center justify-center md:justify-start gap-3">⏰ {loc.hours}</p>
              </div>
              <a 
                href={loc.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-awh-brown-mid text-white px-8 py-3 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-awh-brown-dark transition-all shadow-md"
              >
                Ver en el mapa
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
