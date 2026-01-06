
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROCEDURES } from '../constants';

const ProcedureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const procedure = PROCEDURES.find(p => p.id === id);
  const WHATSAPP_URL = "https://wa.link/u8hybz";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!procedure) return <Navigate to="/" />;

  return (
    <div className="pt-40 pb-32 bg-awh-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(108,77,56,0.15)] h-[700px] sticky top-32 border border-awh-brown-mid/10">
            <img src={procedure.image} alt={procedure.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <nav className="flex mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-awh-rose gap-3">
              <a href="/" className="hover:text-awh-brown-dark transition-colors">Clínica</a>
              <span className="text-awh-taupe">/</span>
              <span className="text-awh-brown-mid">Procedimientos Especializados</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-serif text-awh-brown-dark mb-10 leading-tight">{procedure.title}</h1>
            <div className="w-20 h-1 bg-awh-rose mb-12"></div>
            
            <p className="text-xl text-awh-brown-mid mb-12 leading-relaxed italic">
              {procedure.longDescription}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-awh-taupe/20 shadow-sm">
                <span className="block text-awh-taupe text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Protocolo Clínico</span>
                <span className="text-2xl font-serif font-bold text-awh-brown-dark">{procedure.duration}</span>
              </div>
              <div className="bg-awh-blue/30 p-8 rounded-xl border border-awh-blue shadow-sm">
                <span className="block text-awh-brown-mid text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Evolución</span>
                <span className="text-2xl font-serif font-bold text-awh-brown-dark">Máxima Precisión</span>
              </div>
            </div>

            <h3 className="text-2xl font-serif mb-8 text-awh-brown-dark">Objetivos del Tratamiento</h3>
            <ul className="space-y-6 mb-16">
              {procedure.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-6 text-awh-brown-mid">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-awh-rose text-white flex items-center justify-center text-xs shadow-md">✓</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-awh-brown-dark text-awh-cream py-6 rounded-lg text-sm font-bold tracking-[0.3em] uppercase hover:bg-awh-brown-mid transition-all shadow-2xl shadow-awh-brown-dark/20"
            >
              Solicitar Evaluación de Precisión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureDetail;
