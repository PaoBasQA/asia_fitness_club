import { useState } from 'react';
import { motion } from 'motion/react';
import Hero from './Hero';
import { disciplines, cordonesTips } from '../data';
import cordonesImg from '../assets/images/Cordones1.jpg';
import { Calendar, MessageCircle, Instagram, Sparkles, MapPin, ChevronRight, ShieldCheck, Dumbbell } from 'lucide-react';
import gymBg from '../assets/images/Portada2.png';

interface HomeProps {
  onNavigate: (tab: string) => void;
  onSelectDiscipline: (id: string) => void;
}

export default function Home({ onNavigate, onSelectDiscipline }: HomeProps) {
  // Current active advice randomized or cycled index
  const [adviceIndex, setAdviceIndex] = useState(0);

  const cycleAdvice = () => {
    setAdviceIndex((prev) => (prev + 1) % cordonesTips.length);
  };

  const currentAdvice = cordonesTips[adviceIndex];

  const externalBookingUrl = "https://asiatraining.turnosweb.com";

  return (
    <div className="bg-[#131313] min-h-screen text-[#E5E2E1] overflow-hidden">
      
      {/* 1. HERO COMPONENT */}
      <Hero 
        onInscribite={() => onNavigate('inscribite')} 
        onReservarTurno={() => window.open(externalBookingUrl, '_blank')} 
      />

      {/* 2. SISTEMA DE PODER - BENTO WORKOUT PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#353534]/20 relative bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                DISCIPLINAS DISEÑADAS PARA EL MÁXIMO RENDIMIENTO
              </span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#E5E2E1] uppercase italic tracking-tighter">
                SISTEMA <span className="text-brand-orange">DE PODER</span>
              </h3>
            </div>
            
            <button
              onClick={() => onNavigate('disciplinas')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-black tracking-widest text-[#E5E2E1] hover:text-brand-orange transition-colors uppercase self-start"
            >
              VER TODAS LAS DISCIPLINAS
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Dynamic 5-block Bento Grid representing the disciplines in the mockup */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Block 1: CROSS (Large banner column span 7) */}
            <div 
              onClick={() => { onSelectDiscipline('cross'); onNavigate('disciplinas'); }}
              className="md:col-span-7 bg-[#1C1B1B] border border-[#353534]/15 relative group overflow-hidden h-96 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
                alt="CrossFit training"
                className="absolute inset-0 w-full h-full object-cover transform duration-500 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="font-mono text-[9px] font-black bg-brand-orange text-[#131313] px-2.5 py-1 uppercase tracking-widest">
                  SISTEMA DE PODER
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <h4 className="font-display font-black text-3xl sm:text-4xl text-[#E5E2E1] group-hover:text-brand-orange transition-colors italic tracking-tighter">
                  CROSS
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#E5E2E1]/80 max-w-md mt-2 leading-relaxed font-semibold">
                  Ideal para quemar grasa y mejorar resistencia total. For full-body functional strength and high intensity. Rompé tus límites.
                </p>
              </div>
            </div>

            {/* Block 2: OLY (Standard column span 5) */}
            <div 
              onClick={() => { onSelectDiscipline('oly'); onNavigate('disciplinas'); }}
              className="md:col-span-5 bg-[#1C1B1B] border border-[#353534]/15 relative group overflow-hidden h-96 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop&blur=2"
                alt="Olympic lifting technique"
                className="absolute inset-0 w-full h-full object-cover transform duration-500 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="font-mono text-[9px] font-black bg-[#E5E2E1] text-[#131313] px-2.5 py-1 uppercase tracking-widest">
                  TECHNIQUE FOCUS
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <h4 className="font-display font-black text-3xl text-[#E5E2E1] group-hover:text-brand-orange transition-colors italic tracking-tighter">
                  OLY
                </h4>
                <p className="font-sans text-xs text-[#E5E2E1]/80 mt-2 leading-relaxed">
                  Aprende técnica desde cero con barras olímpicas. Master the clean & jerk with specialized feedback.
                </p>
              </div>
            </div>

            {/* Block 3: GYM (Span 4) */}
            <div 
              onClick={() => { onSelectDiscipline('gym'); onNavigate('disciplinas'); }}
              className="md:col-span-4 bg-[#1C1B1B] border border-[#353534]/15 relative group overflow-hidden h-72 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop"
                alt="Gym machines row"
                className="absolute inset-0 w-full h-full object-cover transform duration-500 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="font-display font-black text-2xl text-[#E5E2E1] group-hover:text-brand-orange transition-colors italic">
                  GYM
                </h4>
                <p className="font-sans text-xs text-[#E5E2E1]/70 mt-1 leading-relaxed">
                  Sala de musculación completa con máquinas de última generación. Classic muscle sculpting.
                </p>
              </div>
            </div>

            {/* Block 4: FUNCIONAL (Span 4) */}
            <div 
              onClick={() => { onSelectDiscipline('funcional'); onNavigate('disciplinas'); }}
              className="md:col-span-4 bg-[#1C1B1B] border border-[#353534]/15 relative group overflow-hidden h-72 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop"
                alt="Functional movement"
                className="absolute inset-0 w-full h-full object-cover transform duration-500 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="font-display font-black text-2xl text-[#E5E2E1] group-hover:text-brand-orange transition-colors italic">
                  FUNCIONAL
                </h4>
                <p className="font-sans text-xs text-[#E5E2E1]/70 mt-1 leading-relaxed">
                  Mejorá tu postura y agilidad para la vida diaria. Movement based training.
                </p>
              </div>
            </div>

            {/* Block 5: FUERZA (Span 4) */}
            <div 
              onClick={() => { onSelectDiscipline('fuerza'); onNavigate('disciplinas'); }}
              className="md:col-span-4 bg-[#1C1B1B] border border-[#353534]/15 relative group overflow-hidden h-72 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop"
                alt="Powerlifting training barbell"
                className="absolute inset-0 w-full h-full object-cover transform duration-500 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="font-display font-black text-2xl text-[#E5E2E1] group-hover:text-brand-orange transition-colors italic">
                  FUERZA ACCESO
                </h4>
                <p className="font-sans text-xs text-[#E5E2E1]/70 mt-1 leading-relaxed">
                  Powerlifting & progressions. Programas personalizados para aumentar tu fuerza de forma óptima.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2.5 PHILOSOPHY SECTION */}
      <section className="bg-[#1C1B1B] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#353534]/15">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h3 className="font-display font-black text-4xl sm:text-5xl text-[#E5E2E1] tracking-tighter uppercase italic">
              ⛩️ Entrenar no se trata de ganar todos los días.
            </h3>
            <p className="font-sans text-[#E5E2E1]/80 text-lg">Se trata de:</p>
            <ul className="space-y-4 font-sans text-[#E5E2E1]/70 text-base">
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl">✔</span>
                <span>Volver aunque estés cansado, tener disciplina.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl">✔</span>
                <span>Superarte un poco más.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange font-bold text-xl">✔</span>
                <span>Entrenar con gente que te empuja a crecer.</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-[#353534]">
                <h4 className="font-display font-black text-2xl text-[#E5E2E1] tracking-tighter uppercase italic">⛩️ Eso es lo que pasa en Asia Fitness:</h4>
                <p className="mt-4 text-[#E5E2E1]/90 font-semibold text-lg">Acá no competís con los demás. Competís con tu mejor versión.</p>
            </div>
          </div>
          
          <div className="p-8 border-2 border-brand-orange bg-brand-orange/5 space-y-6 text-center">
            <h4 className="font-display font-black text-2xl text-[#E5E2E1] uppercase italic">🔥 ¿Te animás a probar una clase?</h4>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://www.instagram.com/asiafitnessclub/" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-mono font-bold hover:underline flex items-center justify-center gap-2">
                    📩 Escribinos por DM en Instagram
                </a>
                <a href="https://wa.me/5491150162845" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-mono font-bold hover:underline flex items-center justify-center gap-2">
                    📩 O al WhatsApp 1550162845
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL ALMA DEL CLUB - CORDONES SECTION */}
      <section className="bg-[#0B0B0B] py-24 px-4 sm:px-6 lg:px-8 relative border-t border-[#353534]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left side: Beautiful Portrait image matching the reference with supervisor bubble */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Elegant outer layout frame */}
            <div className="p-4 bg-[#131313] border border-brand-orange/40 max-w-sm w-full relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-orange" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-orange" />
              
              <div className="relative aspect-square w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={cordonesImg}
                  alt="Cordones the mascot supervisor at Asia Fitness Club in black and white"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Speech advisory Bubble inside the photo block */}
              <div className="mt-4 bg-[#1C1B1B] p-4 border-l-2 border-brand-orange">
                <span className="font-mono text-[9px] text-[#E5E2E1]/50 tracking-wider block mb-1 uppercase">
                  CONSEJO DEL SUPERVISOR
                </span>
                <p className="font-sans text-xs text-brand-orange-light font-bold italic leading-relaxed">
                  "{currentAdvice.text}"
                </p>
                <button
                  onClick={cycleAdvice}
                  className="mt-3 font-mono text-[9px] text-brand-orange font-bold uppercase tracking-widest hover:underline block cursor-pointer flex items-center gap-1"
                >
                  OTRO CONSEJO <span className="text-xl">🐾</span> <span className="text-xl">»</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side: Industrial Bio Copywriting */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest block">
                EL ALMA DEL CLUB
              </span>
              <h3 className="font-display font-black text-5xl sm:text-6xl text-[#E5E2E1] tracking-tighter uppercase italic leading-none flex items-center gap-4">
                <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-brand-orange text-4xl">🐾</motion.span> <span className="text-brand-orange">CORDONES</span>
              </h3>
              <h4 className="font-mono text-[#E5E2E1]/60 text-sm font-semibold uppercase tracking-wider">
                Superintendente de Actividades & Supervisor de Hierro
              </h4>
            </div>

            <div className="font-sans text-[#E5E2E1]/85 text-sm sm:text-base space-y-4 max-w-xl leading-relaxed">
              <p>
                No es solo un gimnasio, es una comunidad de hierro y respeto mutuo. Y toda comunidad seria necesita un líder que mantenga los estándares más altos. <span className="text-brand-orange font-black">Cordones</span> supervisa cada levantamiento, cada burpee y cada gota de sudor en nuestro piso.
              </p>
              <p>
                Ubicados en el corazón de Villa Ballester, transformamos un espacio industrial de asfalto en el verdadero templo del entrenamiento de fuerza real. Sin pretensiones estéticas, solo vos, tu esfuerzo y el sonido de las barras contra el suelo.
              </p>
            </div>

            {/* Micro details row directly mirroring reference footer icons */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#353534]/30 pt-6 max-w-md">
              <div>
                <span className="font-mono text-[10px] text-[#E5E2E1]/50 uppercase tracking-widest block">DIRECCIÓN DE AGARRRE</span>
                <p className="font-mono text-sm font-black text-[#E5E2E1] mt-1">Calle Profesor Aguer 5222</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#E5E2E1]/50 uppercase tracking-widest block">COMUNIDAD</span>
                <p className="font-mono text-sm font-black text-brand-orange mt-1">VILLA BALLESTER</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TURNOS WEB, WHATSAPP, INSTAGRAM QUICK WIDGET BLOCKS */}
      <section className="bg-[#131313] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#353534]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card A: Turnos Web */}
          <a
            href="https://asiatraining.turnosweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1B1B] p-8 border border-[#353534]/15 hover:border-brand-orange/40 transition-all duration-300 group block cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 mb-6">
              <Calendar className="w-5 h-5 text-brand-orange" />
            </div>
            <h4 className="font-display font-black text-lg text-[#E5E2E1] group-hover:text-brand-orange transition-colors uppercase tracking-tight mb-2">
              TURNOS WEB
            </h4>
            <p className="font-sans text-xs text-[#E5E2E1]/70 leading-relaxed mb-4">
              Asegurá tu lugar de entrenamiento en nuestra sala o clases con un solo click. Sin demoras.
            </p>
            <span className="font-mono text-[10px] text-brand-orange-light font-bold tracking-widest block uppercase">
              RESERVÁ ENLÍNEA AHORA »
            </span>
          </a>

          {/* Card B: WhatsApp */}
          <a
            href="https://wa.me/5491150162845"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1B1B] p-8 border border-[#353534]/15 hover:border-[#25D366]/40 transition-all duration-300 group block"
          >
            <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 mb-6">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <h4 className="font-display font-black text-lg text-[#E5E2E1] group-hover:text-[#25D366] transition-colors uppercase tracking-tight mb-2">
              WHATSAPP DIRECTO
            </h4>
            <p className="font-sans text-xs text-[#E5E2E1]/70 leading-relaxed mb-4">
              Escribinos directamente al +54 9 11 5016-2845 para resolver tus dudas de acceso en minutos. Sin formularios de contacto molestos.
            </p>
            <span className="font-mono text-[10px] text-[#25D366] font-bold tracking-widest block uppercase">
              ENVIAR MENSAJE DIRECTO »
            </span>
          </a>

          {/* Card C: Instagram */}
          <a
            href="https://instagram.com/asiafitnessclub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1B1B] p-8 border border-[#353534]/15 hover:border-pink-500/40 transition-all duration-300 group block"
          >
            <div className="w-10 h-10 bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6">
              <Instagram className="w-5 h-5 text-pink-500" />
            </div>
            <h4 className="font-display font-black text-lg text-[#E5E2E1] group-hover:text-pink-500 transition-colors uppercase tracking-tight mb-2">
              INSTAGRAM
            </h4>
            <p className="font-sans text-xs text-[#E5E2E1]/70 leading-relaxed mb-4">
              Seguinos en nuestra cuenta oficial para ver el detrás de escena, videos técnicos y novedades del salón.
            </p>
            <span className="font-mono text-[10px] text-pink-400 font-bold tracking-widest block uppercase">
              SEGUINOS EN @ASIAFITNESSCLUB »
            </span>
          </a>

        </div>
      </section>

      {/* 5. VENÍ A ENTRENAR EMBRACED HERO BANNER */}
      <section className="relative py-28 bg-[#131313] overflow-hidden border-t border-b border-[#353534]/30">
        {/* Background image container with masked edges */}
        <div className="absolute inset-0 z-0 bg-center bg-no-repeat"
             style={{
               backgroundImage: `url(${gymBg})`,
               backgroundSize: '85%',
               backgroundPosition: '50% 0%',
               maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)',
             }}
        />
        <div className="absolute inset-0 bg-black/80 z-1" />
        <div id="ven-entrenar" className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="font-mono text-[10px] text-brand-orange-light font-bold uppercase tracking-widest block mb-4">
            TEMPLO ABIERTO DE LUNES A SÁBADO
          </span>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#E5E2E1] uppercase tracking-tighter italic mb-4">
            VENÍ A ENTRENAR
          </h3>
          {/* Authentic Description text */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#E5E2E1]/80 max-w-xl mb-6 leading-relaxed mx-auto">
            Cross Training, Olimpismo, Gimnasia, Funcional y Fuerza. Un solo lugar donde cada sesión te lleva más lejos de quien eras ayer.
          </p>
          <p className="font-sans text-[#E5E2E1]/80 text-sm sm:text-base max-w-md mx-auto mb-8 font-medium leading-relaxed">
            Calle Profesor Aguer 5222, Villa Ballester. Vení a vivir el auténtico ambiente de entrenamiento industrial. Te esperamos.
          </p>
          <button
            onClick={() => onNavigate('inscribite')}
            className="px-8 py-4 bg-brand-orange text-[#131313] font-mono text-xs font-black tracking-widest uppercase hover:bg-[#FF8A33] hover:shadow-[0_0_20px_rgba(255,107,0,0.35)] transition-all duration-300 rounded-none cursor-pointer transform -skew-x-12"
          >
            <div className="skew-x-12">
              ADQUIRIR MI PLAN ACCESO
            </div>
          </button>
        </div>
      </section>

    </div>
  );
}
