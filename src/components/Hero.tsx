import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import gymBg from '../assets/images/Portada2.png';

interface HeroProps {
  onInscribite: () => void;
  onReservarTurno: () => void;
}

export default function Hero({ onInscribite, onReservarTurno }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#131313] overflow-hidden py-12 md:py-24">
      {/* Background image container with masked edges */}
      <div className="absolute inset-0 z-0 bg-center bg-no-repeat"
           style={{
             backgroundImage: `url(${gymBg})`,
             backgroundSize: '85%',
             backgroundPosition: '50% 0%',
             maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)',
           }}
      />
      {/* Absolute dark overlay over background image for perfect contrast */}
      <div className="absolute inset-0 bg-black/75 z-1" />

      {/* Absolute Giant Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-1">
        <h1 className="font-display font-black text-[25vw] leading-none text-brand-orange/5 uppercase tracking-tighter">
          ASIA
        </h1>
      </div>

      {/* Industrial Atmosphere Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.12)_0%,rgba(19,19,19,0)_70%)] pointer-events-none z-1" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#131313_100%)] pointer-events-none z-1" />

      {/* Hero Content Container */}
      <div id="hero-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full h-full flex flex-col justify-between">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-[#1C1B1B] border border-[#353534]/40 px-3 py-1.5 rounded-none mb-6">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-brand-orange-light uppercase">
              VILLA BALLESTER — TEMPLO DE HIERRO
            </span>
          </div>

          {/* Epic Main Editorial Headline */}
          <div className="mb-6 select-none leading-none">
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-9xl text-[#E5E2E1] uppercase tracking-tighter italic">
              KINETIC
            </h2>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-8xl text-transparent stroke-text uppercase tracking-tighter italic -mt-2 sm:-mt-4 opacity-90">
              ENERGY
            </h2>
          </div>

          {/* Authentic Description text */}
          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-orange uppercase tracking-tight mb-4">
            Entrená con energía, fuerza y comunidad.
          </h3>
          <p className="font-sans text-base sm:text-lg text-[#E5E2E1]/80 max-w-xl mb-10 leading-relaxed border-l-2 border-brand-orange pl-4">
            En nuestro gimnasio combinamos disciplinas como Gym, Oly, Fuerza, Funcional y Craft, creando un espacio donde la camaradería y la buena vibra se sienten en cada entrenamiento. Tanto si empezás desde cero como si sos experto, acá encontrás un lugar para crecer, superarte y disfrutar junto a otros apasionados del movimiento.
          </p>
          <p className="font-sans text-base sm:text-lg text-[#E5E2E1]/80 max-w-xl mb-10 leading-relaxed border-l-2 border-brand-orange pl-4">
            Coordinado por <span className="text-brand-orange-light font-bold">Cordones</span>, el mejor supervisor felino de Villa Ballester. Aquí forjamos el verdadero poder del entrenamiento industrial auténtico.
          </p>

          {/* Dual Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onInscribite}
              className="w-full sm:w-auto px-8 py-4 font-mono text-sm font-bold tracking-widest text-[#131313] bg-brand-orange rounded-none uppercase transition-all duration-300 hover:bg-[#FF8A33] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] flex items-center justify-center gap-2 group cursor-pointer transform -skew-x-12"
            >
              <div className="skew-x-12 flex items-center gap-2">
                INSCRIBITE HOY
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
            <button
              onClick={onReservarTurno}
              className="w-full sm:w-auto px-8 py-4 font-mono text-sm font-bold tracking-widest text-[#E5E2E1] bg-transparent border-2 border-[#E5E2E1] rounded-none uppercase transition-all duration-300 hover:text-brand-orange hover:border-brand-orange hover:bg-brand-orange/5 flex items-center justify-center gap-2 cursor-pointer [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
            >
              RESERVÁ TU TURNO
            </button>
          </div>
        </div>
        {/* Stats Bar */}
        <div className="flex items-center justify-around bg-brand-orange text-[#131313] w-full px-6 py-4 mt-8">
          <div className="flex flex-col items-center px-2">
              <div className="font-black text-xl">5</div>
              <div className="font-bold text-[10px] sm:text-xs uppercase">Disciplinas</div>
          </div>
          <div className="w-px h-8 bg-[#131313]/30"></div>
          <div className="flex flex-col items-center px-2">
              <div className="font-black text-xl">+500</div>
              <div className="font-bold text-[10px] sm:text-xs uppercase">Atletas activos</div>
          </div>
          <div className="w-px h-8 bg-[#131313]/30"></div>
          <div className="flex flex-col items-center px-2">
              <div className="font-black text-xl">+{new Date().getFullYear() - 2018 - (new Date().getMonth() < 4 ? 1 : 0)}</div>
              <div className="font-bold text-[10px] sm:text-xs uppercase">Años de historia</div>
          </div>
          <div className="w-px h-8 bg-[#131313]/30"></div>
          <div className="flex flex-col items-center px-2">
              <div className="font-black text-xl">1</div>
              <div className="font-bold text-[10px] sm:text-xs uppercase">Mascota oficial</div>
          </div>
        </div>
      </div>

      {/* CSS Text Stroke Styles inside component */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #E5E2E1;
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 2px #E5E2E1;
          }
        }
      `}</style>
    </section>
  );
}
