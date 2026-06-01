import { membershipPlans } from '../data';
import { MembershipPlan } from '../types';
import { Sparkles, MessageSquare, Flame, CheckCircle2, Ticket } from 'lucide-react';

export default function Inscribite() {

  // WhatsApp integration link builder
  const handleInscripcionWhatsApp = (plan: MembershipPlan) => {
    const phoneNumber = "5491150162845"; // As stated on the Reference image contact widget
    const baseText = `¡Hola ASIA Fitness! Quisiera inscribirme al plan "${plan.name}" (${plan.price} ${plan.period}). Me gustaría recibir detalles para iniciar esta semana. ¡Muchas gracias!`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Smooth navigation open in new tab
    if (window) {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="bg-[#131313] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading Column */}
        <div className="mb-16 border-l-4 border-brand-orange pl-6">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-2">
            PLANES DE ACCESO INDUSTRIAL
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#E5E2E1] tracking-tighter uppercase italic leading-none">
            UNITE AL TEMPLO <span className="text-brand-orange-light">DE HIERRO</span>
          </h2>
          <p className="font-sans text-[#E5E2E1]/70 max-w-xl mt-3 text-sm sm:text-base">
            Elegí cómo querés entrenar. Todos nuestros pases de acceso incluyen libre disponibilidad de horarios, vestuarios y el mejor ambiente de Villa Ballester.
          </p>
        </div>

        {/* Dynamic high contrast grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative bg-[#1C1B1B] p-8 flex flex-col justify-between border transition-all duration-300 hover:transform hover:translate-y-[-4px]
                  ${isPopular 
                    ? 'border-brand-orange shadow-[0_0_25px_rgba(255,107,0,0.15)] z-10' 
                    : 'border-[#353534]/15'
                  }`}
              >
                {/* Popular Glow Indicator Corner Badge */}
                {isPopular && (
                  <span className="absolute top-0 right-0 font-mono text-[9px] font-black tracking-widest bg-brand-orange text-[#131313] px-3 py-1 uppercase flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#131313]" /> RECOMENDADO
                  </span>
                )}

                <div>
                  <span className="font-mono text-[10px] text-brand-orange-light font-black uppercase tracking-widest block mb-1">
                    {plan.tagline}
                  </span>
                  
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#E5E2E1] uppercase mb-4">
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#E5E2E1]">
                      {plan.price}
                    </span>
                    <span className="font-mono text-xs text-[#E5E2E1]/55 uppercase">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features Bullet details list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E2E1]/80">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Confirm Action Button directly linked to WhatsApp */}
                <button
                  onClick={() => handleInscripcionWhatsApp(plan)}
                  className={`w-full py-4 font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer
                    ${isPopular 
                      ? 'bg-brand-orange text-[#131313] hover:bg-[#FF8A33]' 
                      : 'bg-[#131313] text-[#E5E2E1] border-2 border-[#353534]/50 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  INSCRIBIRME POR WHATSAPP
                </button>
              </div>
            );
          })}
        </div>

        {/* Security & Access Statement Box */}
        <div className="mt-16 bg-[#1C1B1B] p-6 sm:p-8 border border-[#353534]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-none border border-brand-orange/20">
              <Ticket className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#E5E2E1] uppercase tracking-tight">
                ¿SÓLO QUERÉS PROBAR POR UN DÍA?
              </h4>
              <p className="font-sans text-xs text-[#E5E2E1]/70 mt-1 max-w-xl">
                ¡Ningún problema! Podés reservar tu primer pase diario en línea y pagarlo directamente cuando ingresás al gimnasio. Presentale tu confirmación de turno a Cordones.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => handleInscripcionWhatsApp(membershipPlans[0])}
            className="w-full md:w-auto px-6 py-3 bg-transparent border border-brand-orange-light text-brand-orange-light font-mono text-xs font-bold tracking-wider hover:bg-brand-orange hover:text-[#131313] transition-colors uppercase rounded-none shrink-0"
          >
            COMPRAR PASE DIARIO
          </button>
        </div>

      </div>
    </section>
  );
}
