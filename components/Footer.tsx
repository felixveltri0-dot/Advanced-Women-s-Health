
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-awh-brown-dark py-32 text-awh-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tighter text-white">Dra. Candela Fernández</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-awh-rose mb-8 font-bold">Advanced Women's Health · Ginecología de Precisión</p>
            <p className="text-awh-taupe max-w-sm mb-10 text-sm leading-relaxed italic border-l-2 border-awh-blue pl-6">
              Comprometida con la salud regenerativa femenina y el bienestar integral en todas las etapas de la vida de la mujer.
            </p>
            <div className="flex gap-8">
              {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-[11px] font-bold uppercase tracking-widest text-awh-taupe hover:text-awh-blue transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-10 uppercase tracking-[0.2em] text-[11px] text-awh-blue border-b border-awh-blue/30 pb-2 inline-block">Áreas Médicas</h4>
            <ul className="space-y-6 text-sm text-awh-taupe">
              <li><a href="#procedimientos" className="hover:text-awh-rose transition-colors">Ginecología Estética</a></li>
              <li><a href="#procedimientos" className="hover:text-awh-rose transition-colors">Manejo de Menopausia</a></li>
              <li><a href="#procedimientos" className="hover:text-awh-rose transition-colors">Láser Regenerativo</a></li>
              <li><a href="#productos" className="hover:text-awh-rose transition-colors">Productos Especializados</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-10 uppercase tracking-[0.2em] text-[11px] text-awh-blue border-b border-awh-blue/30 pb-2 inline-block">Consultas</h4>
            <ul className="space-y-6 text-sm text-awh-taupe">
              <li><a href="#" className="hover:text-awh-rose transition-colors">Agendar por WhatsApp</a></li>
              <li><a href="#" className="hover:text-awh-rose transition-colors">Segunda Opinión</a></li>
              <li><a href="#" className="hover:text-awh-rose transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-awh-rose transition-colors">Contacto Urgente</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-awh-taupe uppercase tracking-widest gap-6">
          <p>© 2024 Dra. Candela Fernández. Ginecología de Precisión.</p>
          <div className="flex gap-8 items-center">
            <span className="text-awh-blue">Precision & Care</span>
            <div className="w-1 h-1 rounded-full bg-awh-rose"></div>
            <span>Advanced Women's Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
