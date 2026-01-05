
import React, { useState } from 'react';
import { PROCEDURES } from '../constants';
import { Procedure } from '../types';
import DetailModal from './DetailModal';

const Procedures: React.FC = () => {
  const [selectedProc, setSelectedProc] = useState<Procedure | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-awh-brown-dark">Procedimientos</h2>
        <div className="w-20 h-1 bg-awh-brown-mid mx-auto mb-8"></div>
        <p className="text-awh-brown-mid max-w-2xl mx-auto text-lg italic">
          Soluciones avanzadas para la restauración y bienestar funcional de la zona íntima.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {PROCEDURES.map((proc) => (
          <div 
            key={proc.id} 
            onClick={() => setSelectedProc(proc)}
            className="group flex flex-col bg-white border border-awh-brown-dark/10 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="block overflow-hidden relative h-72">
              <img 
                src={proc.image} 
                alt={proc.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-awh-brown-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-awh-brown-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold mb-4 text-awh-brown-dark group-hover:text-awh-rose transition-colors">{proc.title}</h3>
              <p className="text-awh-brown-mid mb-8 text-sm leading-relaxed font-light">
                {proc.shortDescription}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-awh-brown-dark border-b-2 border-awh-brown-dark/20 pb-1 group-hover:text-awh-rose group-hover:border-awh-rose transition-all">
                  Ver Detalles
                  <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalle */}
      <DetailModal 
        item={selectedProc} 
        type="procedure" 
        onClose={() => setSelectedProc(null)} 
      />
    </div>
  );
};

export default Procedures;
