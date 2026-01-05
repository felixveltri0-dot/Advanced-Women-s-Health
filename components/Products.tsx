
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import DetailModal from './DetailModal';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-awh-brown-dark">La Boutique</h2>
          <p className="text-awh-brown-dark/80 max-w-xl text-lg italic border-l-2 border-awh-brown-dark pl-6">
            Productos diseñados bajo criterios clínicos para el cuidado diario de tu salud íntima.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            onClick={() => setSelectedProduct(product)}
            className="group bg-white border border-awh-brown-dark/5 p-8 rounded-lg hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="block aspect-[4/5] mb-8 overflow-hidden bg-awh-linen/50 flex items-center justify-center relative p-10 rounded-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              <div className="absolute top-4 right-4 bg-awh-brown-dark text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-serif font-bold mb-2 text-awh-brown-dark group-hover:text-awh-rose transition-colors">{product.name}</h3>
            
            <p className="text-awh-rose font-bold text-lg mb-4 tracking-tighter">${product.price.toFixed(2)}</p>
            <p className="text-awh-brown-mid text-xs mb-8 line-clamp-2 leading-relaxed font-light">
              {product.description}
            </p>
            
            <div className="mt-auto">
              <div className="block w-full text-center py-5 bg-awh-brown-dark text-white rounded-md text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-awh-rose transition-all shadow-lg active:scale-95">
                Ver Detalles y Comprar
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalle */}
      <DetailModal 
        item={selectedProduct} 
        type="product" 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Products;
