import { useState } from 'react';
import { disciplines } from '../data';
import { Discipline } from '../types';
import { Shield, Sparkles, Clock, Users, ArrowUpRight } from 'lucide-react';

interface DisciplinesProps {
  onBook: (disciplineId: string) => void;
  setActiveTab: (tab: string) => void;
}

export default function Disciplines({ onBook, setActiveTab }: DisciplinesProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('TODAS');

  const categories = ['TODAS', 'SISTEMA DE PODER', 'TECNIQUE FOCUS', 'PROGRESIONES'];

  const filteredDisciplines = filterCategory === 'TODAS'
    ? disciplines
    : disciplines.filter(d => d.category === filterCategory || (filterCategory === 'SISTEMA DE PODER' && ['CROSS', 'GYM', 'FUNCIONAL'].includes(d.name)));

  return (
    <section className="bg-[#131313] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Block with Editorial Rhythm */}
        <div className="mb-16 border-l-4 border-brand-orange pl-6">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-2">
            ENTRENAMIENTO INDUSTRIAL DE MÁXIMO RENDIMIENTO
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#E5E2E1] tracking-tighter uppercase italic leading-none">
            SISTEMA DE PESTAÑAS <span className="text-brand-orange-light">DE PODER</span>
          </h2>
          <p className="font-sans text-[#E5E2E1]/70 max-w-2xl mt-4 text-sm sm:text-base">
            Diseñamos nuestras disciplinas para empujar tus límites físicos. Haz clic en cualquiera para ver horarios, cupos disponibles e información técnica detallada con nuestro supervisor.
          </p>
        </div>

        {/* Filter Navigation Menu Bar (Tab-like dynamic category selection) */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#353534]/30 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 font-mono text-xs font-bold tracking-wider rounded-none uppercase transition-all duration-300
                ${filterCategory === cat
                  ? 'bg-brand-orange text-[#131313] font-black'
                  : 'text-[#E5E2E1]/60 hover:text-brand-orange hover:bg-[#1C1B1B]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

          {/* Asymmetric Bento-style Grid (Directly mirroring the user's reference layouts) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {filteredDisciplines.map((d, index) => {
            // Determine sizing for editorial lookbook rhythm
            const isLarge = d.id === 'cross' || d.id === 'fuerza';
            return (
              <div
                key={d.id}
                id={`discipline-card-${d.id}`}
                onClick={() => setSelectedDiscipline(d)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedDiscipline(d); }}
                className={`group relative bg-[#1C1B1B] pointer-events-auto overflow-hidden cursor-pointer transition-all duration-500 hover:transform hover:translate-y-[-4px] border border-[#353534]/15 hover:border-brand-orange/40
                  ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                `}
              >
                {/* Backdrop Visual Aspect ratio image */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover transform duration-700 scale-100 group-hover:scale-105"
                  />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-20 font-mono text-[9px] font-black tracking-widest bg-brand-orange text-[#131313] px-2.5 py-1 uppercase">
                    {d.name === 'OLY' ? 'TECHNIQUE FOCUS' : d.name === 'FUERZA' ? 'PROGRESIONES' : 'SISTEMA DE PODER'}
                  </span>

                  <span className="absolute top-4 right-4 z-20 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="p-6 md:p-8 relative z-20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#E5E2E1] group-hover:text-brand-orange transition-colors">
                      {d.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#E5E2E1]/40 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <p className="font-sans text-[#E5E2E1]/80 text-sm leading-relaxed mb-6 font-medium">
                    {d.shortDesc}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-[#E5E2E1]/50 border-t border-[#353534]/30 pt-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" />
                      {d.scheduleTimes.length} HORARIOS
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-orange" />
                      MÁX {d.maxCapacity} ALUMNOS
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advice corner */}
        <div className="bg-brand-orange/5 border border-brand-orange/20 p-5 rounded-none">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🐾</span>
            <div>
              <h4 className="font-mono text-[10px] text-brand-orange-light font-black uppercase tracking-widest block mb-1">
                ESTADO DEL SALÓN
              </h4>
              <p className="font-sans text-xs text-[#E5E2E1]/80 leading-relaxed">
                Las clases de <span className="text-brand-orange">Cross</span> y <span className="text-brand-orange">Oly</span> agotan cupos rápidamente los sábados. Te sugiero reservar con 24 horas de antelación para asegurar espacio de barra de levantamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Modal Overlay for selected Discipline */}
        {selectedDiscipline && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedDiscipline(null)}>
            <div 
              className="bg-[#1C1B1B] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-brand-orange rounded-none relative"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button X */}
              <button
                onClick={() => {
                   setSelectedDiscipline(null);
                }}
                className="absolute top-4 right-4 z-30 bg-[#131313] text-[#E5E2E1] hover:text-brand-orange p-2 border border-[#353534]/40"
              >
                ✕
              </button>

              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B1B] to-transparent z-10" />
                <img
                  src={selectedDiscipline.image}
                  alt={selectedDiscipline.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-1">
                    DISCIPLINA
                  </span>
                  <h3 className="font-display font-black text-4xl text-[#E5E2E1] uppercase italic tracking-tighter">
                    {selectedDiscipline.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#E5E2E1]/60 uppercase tracking-widest mb-2">
                    Enfoque Técnico e Industrial
                  </h4>
                  <p className="font-sans text-[#E5E2E1]/80 text-sm sm:text-base leading-relaxed">
                    {selectedDiscipline.detailDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#353534]/40">
                  {/* Schedule Blocks */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" /> HORARIOS DE CLASE
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDiscipline.scheduleTimes.map((time) => (
                        <span
                          key={time}
                          className="px-3 py-1 bg-[#131313] border border-[#353534]/40 font-mono text-xs text-brand-orange-light font-bold"
                        >
                          {time} HS
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Class Stats */}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Shield className="w-4 h-4" /> CUPO Y EQUIPAMIENTO
                    </h4>
                    <ul className="space-y-1.5 text-xs font-sans text-[#E5E2E1]/75">
                      <li>• Capacidad máxima: <span className="font-bold text-[#E5E2E1]">{selectedDiscipline.maxCapacity} atletas/turno</span></li>
                      <li>• Equipamiento importado marca Rogue y Eleiko</li>
                      <li>• Supervisión de salud y técnica in situ</li>
                    </ul>
                  </div>
                </div>

                {/* Cordones advice inside modal */}
                <div className="bg-[#131313] border-l-2 border-brand-orange p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-orange/10 border border-brand-orange/40 shrink-0">
                    <span className="text-xl flex items-center justify-center h-full">🐱</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block mb-0.5">
                      CORDONES DICE:
                    </span>
                    <p className="font-sans text-xs text-[#E5E2E1]/80 italic">
                      "Para {selectedDiscipline.name}, asegurate de traer una botella de agua, toalla y la mejor energía. Yo estaré vigilando desde arriba de las barras."
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex justify-end gap-3 pt-4 border-t border-[#353534]/30">
                  <button
                    onClick={() => {
                      setSelectedDiscipline(null);
                    }}
                    className="px-5 py-2.5 font-mono text-xs text-[#E5E2E1]/70 hover:text-brand-orange transition-colors"
                  >
                    VOLVER
                  </button>
                  <a
                    href="https://wa.me/5491150162845"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-orange text-[#131313] px-6 py-3 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#FF8A33] transition-colors block text-center"
                  >
                    SOLICITÁ MÁS INFO
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
