
import React, { useEffect } from 'react';
import { DOCTOR_BIO } from '../constants';

const Biography: React.FC = () => {
  const WHATSAPP_URL = "https://wa.link/u8hybz";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-awh-linen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start mb-24">
          <div className="w-full lg:w-1/2">
             <div className="aspect-[3/4] md:aspect-[4/5] bg-awh-stone rounded-lg overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src={DOCTOR_BIO.image} 
                  alt={DOCTOR_BIO.name} 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  crossOrigin="anonymous"
                />
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-awh-rose block mb-6">Conoce a tu Especialista</span>
              <h1 className="text-5xl md:text-7xl font-serif text-awh-brown-dark mb-6">{DOCTOR_BIO.name}</h1>
              <p className="text-xl italic text-awh-brown-mid font-serif">{DOCTOR_BIO.title}</p>
            </div>
            
            <div className="space-y-8 text-awh-brown-dark/90 leading-relaxed text-lg">
              <p className="font-light">{DOCTOR_BIO.story}</p>
              <div className="bg-white p-10 border-l-4 border-awh-rose shadow-sm rounded-r-lg">
                <h3 className="font-serif text-2xl mb-4 italic text-awh-brown-dark">Mi Misión</h3>
                <p className="font-light">{DOCTOR_BIO.mission}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-awh-brown-dark text-awh-cream p-12 rounded-lg shadow-xl">
            <h3 className="font-serif text-3xl mb-10 border-b border-white/20 pb-4">Formación Académica</h3>
            <ul className="space-y-6">
              {DOCTOR_BIO.education.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-sm tracking-wide">
                  <span className="text-awh-rose text-xl">✦</span>
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-awh-brown-dark/10 p-12 rounded-lg shadow-sm flex flex-col justify-center">
            <h3 className="font-serif text-3xl mb-8 text-awh-brown-dark">Valores Clínicos</h3>
            <div className="space-y-8">
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-awh-rose mb-2">Excelencia</h4>
                  <p className="text-sm text-awh-brown-mid font-light leading-relaxed">Protocolos de precisión basados en la última evidencia científica internacional.</p>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-awh-rose mb-2">Empatía</h4>
                  <p className="text-sm text-awh-brown-mid font-light leading-relaxed">Escucha activa y un entorno de máxima confianza y seguridad para cada paciente.</p>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-awh-rose mb-2">Innovación</h4>
                  <p className="text-sm text-awh-brown-mid font-light leading-relaxed">Incorporación constante de las tecnologías más punteras en ginecología regenerativa.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="text-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-awh-brown-dark text-white px-16 py-6 rounded-full font-bold hover:bg-awh-rose transition-all shadow-2xl text-xs tracking-[0.3em] uppercase"
            >
              Agendar una Consulta Privada
            </a>
        </div>
      </div>
    </div>
  );
};

export default Biography;
