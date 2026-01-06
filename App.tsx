
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Procedures from './components/Procedures';
import Products from './components/Products';
import Locations from './components/Locations';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Biography from './pages/Biography';
import Transition from './pages/Transition';
import ProcedureDetail from './pages/ProcedureDetail';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (sectionId === 'inicio') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'biografia') {
      navigate('/biografia');
      window.scrollTo(0, 0);
      return;
    }
    
    if (sectionId === 'transition') {
      navigate('/transition');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const barTextColor = '#F9F7F4'; 
  const solidBarColor = '#CEAFAA'; 
  const WHATSAPP_URL = "https://wa.link/u8hybz";

  const menuItems = [
    { label: 'inicio', id: 'inicio' },
    { label: 'biografía', id: 'biografia' },
    { label: 'transition', id: 'transition' },
    { label: 'procedimientos', id: 'procedimientos' },
    { label: 'boutique', id: 'productos' },
    { label: 'recursos', id: 'recursos' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'shadow-lg py-4' : 'py-8'}`}
        style={{ backgroundColor: isScrolled || isMenuOpen ? solidBarColor : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex flex-col group relative z-[110]"
            style={{ color: barTextColor }}
          >
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              Dra. Candela Fernández
            </span>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] -mt-1 opacity-90 font-sans">
              Advanced Women's Health
            </span>
          </Link>

          {/* Desktop Menu - Filtra "Inicio" si ya estamos en el inicio */}
          <div 
            className="hidden lg:flex space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: barTextColor }}
          >
            {menuItems
              .filter(item => !(item.id === 'inicio' && location.pathname === '/'))
              .map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="relative group py-1 opacity-90 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))
            }
          </div>

          <div className="flex items-center gap-6 relative z-[110]">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`hidden sm:block px-8 py-3 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl bg-white hover:scale-105 active:scale-95`}
              style={{ color: solidBarColor }}
            >
              Agendar Cita
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
              aria-label="Menú"
            >
              <span 
                className={`block w-7 h-[2px] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
                style={{ backgroundColor: barTextColor }}
              ></span>
              <span 
                className={`block w-7 h-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundColor: barTextColor }}
              ></span>
              <span 
                className={`block w-7 h-[2px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
                style={{ backgroundColor: barTextColor }}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Mantenemos Inicio aquí para facilidad de uso táctil */}
        <div 
          className={`fixed inset-0 z-[105] transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
          style={{ backgroundColor: solidBarColor }}
        >
          <div className="flex flex-col items-center space-y-8 px-6 w-full max-w-sm">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-3xl font-serif text-white hover:opacity-70 transition-opacity uppercase tracking-[0.2em] w-full text-center border-b border-white/20 pb-4"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8 w-full">
               <a 
                 href={WHATSAPP_URL} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full text-center bg-white px-10 py-5 rounded-md text-sm font-bold uppercase tracking-widest shadow-2xl"
                 style={{ color: solidBarColor }}
               >
                 Agendar Cita
               </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <section id="procedimientos" className="py-32 bg-awh-linen">
        <Procedures />
      </section>
      <section id="productos" className="py-32 bg-awh-stone/30">
        <Products />
      </section>
      <section id="lugares" className="py-32 bg-awh-cream">
        <Locations />
      </section>
      <section id="recursos" className="py-32 bg-awh-stone">
        <Resources />
      </section>
      <section id="faq" className="py-32 bg-awh-cyan">
        <FAQ />
      </section>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen selection:bg-awh-rose selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biografia" element={<Biography />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/procedimiento/:id" element={<ProcedureDetail />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
