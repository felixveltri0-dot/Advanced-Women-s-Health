
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <Navigate to="/" />;

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      alert("Redirigiendo a nuestra pasarela de pago segura de Advanced Women's Health...");
      setIsPaying(false);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 bg-awh-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl p-10 md:p-20 shadow-[0_30px_60px_rgba(64,46,34,0.08)] flex flex-col lg:flex-row gap-20 border border-awh-taupe/10">
          <div className="lg:w-1/2 flex items-center justify-center bg-awh-cream/30 rounded-lg p-16 relative overflow-hidden group">
            <img src={product.image} alt={product.name} className="max-w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 z-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-awh-blue/20 to-transparent"></div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-awh-rose mb-4 block">Boutique de Precisión</span>
              <h1 className="text-5xl font-serif font-bold mb-6 text-awh-brown-dark leading-tight">{product.name}</h1>
              <p className="text-4xl font-serif text-awh-brown-mid mb-10 tracking-tighter">${product.price.toFixed(2)}</p>
              <p className="text-awh-brown-mid text-lg leading-relaxed mb-12 italic border-l-2 border-awh-rose pl-8">
                {product.description}
              </p>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-awh-taupe mb-6">Componentes Activos</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.ingredients.map((ing, idx) => (
                      <span key={idx} className="px-6 py-3 bg-awh-cream text-awh-brown-dark rounded-lg text-xs font-bold tracking-wider border border-awh-taupe/20">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-awh-taupe mb-6">Instrucciones Clínicas</h4>
                  <p className="text-awh-brown-dark bg-awh-blue/20 p-8 rounded-lg border border-awh-blue italic text-sm leading-relaxed">
                    {product.usage}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-awh-taupe/10">
              <button 
                onClick={handlePayment}
                disabled={isPaying}
                className="w-full bg-awh-brown-dark text-awh-cream py-6 rounded-lg text-sm font-bold tracking-[0.3em] uppercase hover:bg-awh-brown-mid transition-all shadow-2xl flex justify-center items-center gap-4 disabled:opacity-75"
              >
                {isPaying ? (
                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Realizar Pedido
                  </>
                )}
              </button>
              <div className="mt-10 flex justify-center gap-10 grayscale opacity-40 text-[10px] font-bold uppercase tracking-widest">
                <span>Safe Check-out</span>
                <span>Verified Clinical Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
