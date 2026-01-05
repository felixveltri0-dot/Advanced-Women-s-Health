
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const FAQ: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faqs = [
    { q: "¿En qué consiste la ginecología estética?", a: "Es la subespecialidad dedicada a mejorar tanto la funcionalidad como la apariencia de la zona íntima femenina, tratando laxitud, sequedad o hipertrofia." },
    { q: "¿Cómo sé si necesito hormonas bioidénticas?", a: "Si presentas sofocos, insomnio, cambios de humor o falta de energía, realizamos un perfil hormonal de precisión para determinar si eres candidata." }
  ];

  const askAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    setAnswer('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres la Dra. Candela Fernández. Responde esta consulta brevemente: ${question}`,
        config: { systemInstruction: "Eres ginecóloga experta. Tono profesional y empático." }
      });
      setAnswer(response.text || "Consulta no procesada.");
    } catch (err) {
      setAnswer("Error en la conexión. Contacta a la clínica.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-awh-brown-dark">Preguntas</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border-b border-awh-brown-mid/20 pb-6 cursor-pointer">
                <summary className="list-none flex justify-between items-center text-lg font-serif font-bold text-awh-brown-dark">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 text-awh-brown-mid text-sm leading-relaxed italic">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-white border border-awh-brown-dark/10 p-10 rounded-lg shadow-sm">
          <h3 className="text-2xl font-serif mb-6 text-awh-brown-dark">Consulta Rápida</h3>
          <p className="text-xs text-awh-brown-mid mb-8 uppercase tracking-widest font-bold">Asistente Inteligente Dra. Fernández</p>
          <form onSubmit={askAI} className="space-y-6">
            <textarea 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="¿Tienes alguna duda sobre nuestros tratamientos?"
              className="w-full bg-awh-linen border border-awh-brown-dark/10 rounded-md p-5 text-sm focus:ring-1 focus:ring-awh-rose outline-none min-h-[120px] resize-none"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-awh-brown-dark text-white py-4 rounded-md text-[10px] font-bold tracking-[0.2em] uppercase transition-all disabled:opacity-50"
            >
              {isLoading ? 'Analizando...' : 'Enviar Consulta'}
            </button>
          </form>
          {answer && (
            <div className="mt-8 p-6 bg-awh-linen rounded-md border-l-4 border-awh-rose animate-fade-in">
              <p className="text-xs italic text-awh-brown-dark">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
