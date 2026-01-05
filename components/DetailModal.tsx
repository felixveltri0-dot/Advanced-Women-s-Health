
import React from 'react';
import { Procedure, Product } from '../types';

interface DetailModalProps {
  item: Procedure | Product | null;
  type: 'procedure' | 'product';
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, type, onClose }) => {
  if (!item) return null;

  const isProduct = type === 'product' && 'price' in item;
  const product = item as Product;
  const procedure = item as Procedure;

  const handlePayment = () => {
    alert("Redirigiendo a nuestra pasarela de pago segura de Advanced Women's Health...");
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-end">
      {/* Backdrop con desfoque */}
      <div 
        className="absolute inset-0 bg-awh-brown-dark/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* La "Hoja" (Panel lateral) */}
      <div className="relative w-full max-w-2xl h-full bg-awh-cream shadow-2xl overflow-y-auto animate-slide-in-right border-l border-awh-rose/20">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-lg text-awh-brown-dark hover:bg-awh-rose hover:text-white transition-all"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-0">
          <div className="h-[400px] overflow-hidden relative">
            <img 
              src={item.image} 
              alt={isProduct ? product.name : procedure.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-awh-cream to-transparent"></div>
          </div>

          <div className="px-8 md:px-12 -mt-20 relative z-10 pb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-awh-rose mb-4 block">
              {isProduct ? 'Boutique de Precisión' : 'Protocolo Especializado'}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-awh-brown-dark leading-tight">
              {isProduct ? product.name : procedure.title}
            </h2>

            {isProduct && (
              <p className="text-3xl font-serif text-awh-brown-mid mb-8">${product.price.toFixed(2)}</p>
            )}

            <div className="w-16 h-1 bg-awh-rose mb-8"></div>

            <p className="text-lg text-awh-brown-mid mb-10 leading-relaxed italic border-l-2 border-awh-rose/30 pl-6">
              {isProduct ? product.description : procedure.longDescription}
            </p>

            {/* Detalles específicos */}
            {!isProduct ? (
              <div className="space-y-8 mb-12">
                <div className="flex gap-10">
                  <div className="bg-white p-6 rounded-lg border border-awh-rose/10 shadow-sm flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-awh-taupe block mb-2">Duración</span>
                    <span className="text-xl font-serif font-bold text-awh-brown-dark">{procedure.duration}</span>
                  </div>
                  <div className="bg-awh-blue/30 p-6 rounded-lg border border-awh-blue/20 shadow-sm flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-awh-brown-mid block mb-2">Protocolo</span>
                    <span className="text-xl font-serif font-bold text-awh-brown-dark">Regenerativo</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-awh-brown-dark mb-4">Beneficios</h3>
                <ul className="space-y-4">
                  {procedure.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-4 text-awh-brown-mid text-sm">
                      <span className="w-6 h-6 rounded-full bg-awh-rose text-white flex items-center justify-center text-[10px]">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-awh-taupe mb-4">Ingredientes Clave</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white text-awh-brown-dark rounded text-xs border border-awh-taupe/10">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-awh-taupe mb-4">Uso Recomendado</h4>
                  <p className="text-sm text-awh-brown-mid bg-awh-blue/10 p-4 rounded border border-awh-blue/20">
                    {product.usage}
                  </p>
                </div>
              </div>
            )}

            {/* Botón de Acción */}
            <div className="sticky bottom-0 pt-6 bg-awh-cream">
              {isProduct ? (
                <button 
                  onClick={handlePayment}
                  className="w-full bg-awh-brown-dark text-white py-5 rounded-lg text-xs font-bold uppercase tracking-[0.3em] hover:bg-awh-rose transition-all shadow-xl flex justify-center items-center gap-4 group"
                >
                  <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Comprar Ahora
                </button>
              ) : (
                <a 
                  href="https://wa.me/123456789" 
                  className="block w-full text-center bg-awh-brown-dark text-white py-5 rounded-lg text-xs font-bold uppercase tracking-[0.3em] hover:bg-awh-rose transition-all shadow-xl"
                >
                  Agendar Evaluación
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
