
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-awh-brown-dark rounded-xl p-12 md:p-24 relative overflow-hidden text-awh-cream border-4 border-awh-brown-mid shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-awh-rose/20 rounded-full -mr-40 -mt-40 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-awh-blue/20 rounded-full -ml-20 -mb-20 blur-[100px]"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-awh-rose mb-6 block">Información para Pacientes</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight drop-shadow-sm">Recursos Gratuitos</h2>
            <p className="text-awh-taupe text-lg mb-12 leading-relaxed italic max-w-xl">
              Descarga mis guías de salud íntima y menopausia para tomar decisiones informadas sobre tu bienestar.
            </p>
            <div className="grid sm:grid-cols-1 gap-6">
              {RESOURCES.map((resource) => (
                <div key={resource.id} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg flex items-center justify-between group hover:bg-awh-brown-mid/30 transition-all cursor-pointer shadow-sm">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl filter group-hover:scale-110 transition-transform">{resource.icon}</span>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-1 text-white">{resource.title}</h4>
                      <p className="text-xs text-awh-taupe tracking-wide font-sans">{resource.description}</p>
                    </div>
                  </div>
                  <button className="bg-awh-rose text-white p-4 rounded-full hover:bg-white hover:text-awh-brown-dark transition-all shadow-lg border border-white/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 hidden lg:flex justify-center">
            <div className="relative w-80 h-[450px]">
                <div className="absolute inset-0 bg-awh-rose/10 rounded-lg border-2 border-white/10 rotate-6 translate-x-4"></div>
                <div className="absolute inset-0 bg-awh-brown-mid rounded-lg border border-awh-brown-dark -rotate-3 overflow-hidden flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                    <div className="text-7xl mb-10 opacity-60">📔</div>
                    <h5 className="font-serif text-2xl mb-4 text-white font-bold tracking-tight">Guía de Precisión</h5>
                    <p className="text-[10px] uppercase tracking-widest text-awh-rose font-bold font-sans">Dra. Candela Fernández</p>
                    <div className="mt-8 w-12 h-1 bg-awh-blue rounded-full"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
