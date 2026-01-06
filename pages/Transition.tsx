
import React, { useEffect } from 'react';
import { TRANSITION_SPECIALISTS } from '../constants';

const Transition: React.FC = () => {
  const WHATSAPP_URL = "https://wa.link/u8hybz";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-awh-cream min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-awh-blue/20 -z-10 rounded-l-[100px] transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-awh-rose text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
              Programa Exclusivo
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-awh-brown-dark mb-8 leading-tight">
              Transition <br />
              <span className="text-3xl md:text-5xl italic text-awh-rose block mt-2">by Dra. Fernández</span>
            </h1>
            <p className="text-xl text-awh-brown-mid mb-12 leading-relaxed max-w-lg font-light italic border-l-2 border-awh-rose pl-8">
              "No es el fin de una etapa, es el inicio de tu mejor versión. Un abordaje 360° para transitar la menopausia con plenitud, ciencia y consciencia."
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-awh-brown-dark text-white px-12 py-5 rounded-full font-bold hover:bg-awh-rose transition-all shadow-2xl text-[11px] tracking-[0.3em] uppercase group"
            >
              Inscribirme al Programa
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 transition-transform hover:rotate-0 duration-700">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" 
                alt="Transition Program" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl max-w-xs animate-bounce-slow">
              <p className="text-awh-brown-dark font-serif text-lg mb-2">Abordaje Multidisciplinar</p>
              <p className="text-awh-brown-mid text-xs font-light">Ginecología, Nutrición, Psicología y Dermatología trabajando para ti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que ofrece el programa */}
      <section className="py-32 bg-awh-linen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-awh-brown-dark mb-6">El Método Transition</h2>
            <div className="w-20 h-1 bg-awh-rose mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="text-4xl">🎬</div>
              <h3 className="text-2xl font-serif text-awh-brown-dark">Máster Clases en Video</h3>
              <p className="text-awh-brown-mid font-light leading-relaxed text-sm">
                Más de 20 lecciones en video grabadas por expertos para entender los cambios de tu cuerpo y cómo optimizarlos.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-4xl">📄</div>
              <h3 className="text-2xl font-serif text-awh-brown-dark">Recursos Descargables</h3>
              <p className="text-awh-brown-mid font-light leading-relaxed text-sm">
                Guías de suplementación, recetarios antiinflamatorios y protocolos de cuidado de la piel en formato PDF.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-4xl">🤝</div>
              <h3 className="text-2xl font-serif text-awh-brown-dark">Comunidad Exclusiva</h3>
              <p className="text-awh-brown-mid font-light leading-relaxed text-sm">
                Acceso a sesiones de Q&A en vivo y un entorno seguro donde compartir experiencias con otras mujeres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuerpo Docente / Especialistas */}
      <section className="py-32 bg-awh-blue/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-awh-rose mb-4 block">Cuerpo Docente</span>
              <h2 className="text-4xl md:text-5xl font-serif text-awh-brown-dark">Expertos que te acompañan</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {TRANSITION_SPECIALISTS.map((spec, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-awh-blue/30">
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={spec.image} alt={spec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-8">
                  <p className="text-awh-rose text-[10px] font-bold uppercase tracking-widest mb-2">{spec.role}</p>
                  <h4 className="text-xl font-serif text-awh-brown-dark mb-2">{spec.name}</h4>
                  <p className="text-awh-brown-mid text-xs font-light">{spec.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-awh-brown-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-awh-rose via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">¿Lista para tu transición?</h2>
          <p className="text-awh-taupe text-lg mb-12 italic">
            Las plazas son limitadas para garantizar el acompañamiento personalizado en cada grupo.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-awh-brown-dark px-16 py-6 rounded-full font-bold hover:bg-awh-rose hover:text-white transition-all shadow-2xl text-[11px] tracking-[0.4em] uppercase"
          >
            Consultar Próxima Convocatoria
          </a>
        </div>
      </section>
    </div>
  );
};

export default Transition;
