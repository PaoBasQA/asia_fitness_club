import { useState } from 'react';
import { Menu, X, Calendar, Dumbbell, Award, Landmark } from 'lucide-react';
import logo from '../assets/images/LogoOficial.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

interface NavLink {
    id: string;
    label: string;
    icon: any;
    url?: string;
  }

  const navLinks: NavLink[] = [
    { id: 'inicio', label: 'INICIO', icon: Dumbbell },
    { id: 'disciplinas', label: 'SISTEMA DE PODER', icon: Award },
    { id: 'turnos', label: 'RESERVÁ TU TURNO', icon: Calendar, url: 'https://asiatraining.turnosweb.com' },
    { id: 'inscribite', label: 'INSCRIBITE', icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131313]/85 backdrop-blur-md border-b border-[#353534]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div 
            onClick={() => setActiveTab('inicio')}
            className="flex-shrink-0 cursor-pointer flex items-center space-x-2"
          >
            <img src={logo} alt="Asia Fitness Club Logo" className="w-10 h-10 object-contain" />
            <span className="font-display font-black text-2xl tracking-tighter text-[#E5E2E1] transition-colors duration-300 hover:text-brand-orange">
              ASIA <span className="text-brand-orange italic font-extrabold text-xl tracking-widest pl-1">FITNESS CLUB</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1" aria-label="Global">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => {
                    if (link.url) {
                        window.open(link.url, '_blank');
                    } else {
                        setActiveTab(link.id);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                  }}
                  className={`relative px-4 py-2 font-mono text-sm font-semibold tracking-wider transition-all duration-300 rounded-sm flex items-center gap-2
                    ${isActive 
                      ? 'text-[#131313] bg-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.3)]' 
                      : 'text-[#E5E2E1] hover:text-brand-orange hover:bg-[#1E1E1E]'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-orange rotate-45" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburguer Command Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E5E2E1] hover:text-brand-orange transition-colors"
              aria-expanded="false"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131313] border-b border-[#353534]/50 animate-fadeIn">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    if (link.url) {
                      window.open(link.url, '_blank');
                    } else {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-none font-mono text-sm font-bold tracking-wider flex items-center gap-3 transition-colors
                    ${isActive 
                      ? 'text-brand-orange bg-[#1E1E1E] border-l-4 border-brand-orange' 
                      : 'text-[#E5E2E1] hover:bg-[#1E1E1E] hover:text-brand-orange'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
