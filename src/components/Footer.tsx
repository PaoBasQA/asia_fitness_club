import { MapPin, Phone, Instagram, Map, Clock, ArrowRight } from 'lucide-react';
import logo from '../assets/images/LogoOficial.png';

export default function Footer() {
  // Address is Profesor Aguer 5222, Villa Ballester, San Martín, Provincia de Buenos Aires, Argentina
  const address = "Profesor Aguer 5222, B1653 Villa Ballester, Provincia de Buenos Aires, Argentina";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Custom Google Maps Embed
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.4172839446414!2d-58.5473729!3d-34.54303109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb773f80ff8f9%3A0x6bba5a6ec84d6ad5!2sProfesor%20Aguer%205222%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";

  return (
    <footer className="bg-[#101010] border-t border-[#353534]/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info & Social Column - Span 4 */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Asia Fitness Club Logo" className="w-12 h-12 object-contain" />
              <h3 className="font-display font-black text-2xl tracking-tighter text-[#E5E2E1]">
                ASIA <span className="text-brand-orange italic">FITNESS CLUB</span>
              </h3>
            </div>
            
            <p className="font-sans text-[#E5E2E1]/70 text-sm leading-relaxed max-w-sm">
              El templo definitivo de entrenamiento industrial en Villa Ballester. Sin falsas promesas, sin filtros artificiales. Solo vos, tus garras, el hierro y la supervisión atenta de los profes y de Cordones.
            </p>

            {/* Micro-Contact Links */}
            <div className="space-y-3 font-mono text-xs text-[#E5E2E1]/80 pt-2">
              <a 
                href="https://wa.me/5491150162845" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>WHATSAPP: +54 9 11 5016-2845</span>
              </a>
              
              <a 
                href="https://instagram.com/asiafitnessclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-orange shrink-0" />
                <span>INSTAGRAM: @asiafitnessclub</span>
              </a>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>LUNES A VIERNES: 07:00 a 21:00 HS</span>
                  <span>SÁBADOS: 07:00 a 13:00 HS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Nav Columns - Span 3 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-widest">
              UBICACIÓN & COMUNIDAD
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs font-sans text-[#E5E2E1]/85">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Calle Profesor Aguer 5222, Villa Ballester, B1653, San Martín, Provincia de Buenos Aires, Argentina.</span>
              </div>

              <div className="pt-4">
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/40 px-4 py-2.5 font-mono text-xs font-bold text-brand-orange-light hover:bg-brand-orange hover:text-[#131313] transition-colors rounded-none uppercase"
                >
                  <Map className="w-4 h-4" />
                  ABRIR EN GOOGLE MAPS
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Live Google Maps Interactive Block - Span 5 */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-xs font-bold text-[#E5E2E1]/65 uppercase tracking-widest flex items-center justify-between">
                <span>LOCALIZACIÓN EN TIEMPO REAL</span>
                <span className="text-green-500 font-bold tracking-normal animate-pulse">● ACTIVO</span>
              </h4>
              <img src={logo} alt="Asia Fitness Club Logo" className="w-10 h-10 object-contain" />
            </div>
            
            {/* Real Interactive Map Frame */}
            <div className="w-full h-48 bg-[#1C1B1B] border border-[#353534]/40 overflow-hidden relative">
              <iframe
                title="Asia Fitness Club Google Maps Location"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <span className="text-[10px] font-mono text-[#E5E2E1]/45 block text-right">
              *Hacé zoom o clic en el mapa para iniciar navegación asistida
            </span>
          </div>

        </div>

        {/* Legal Bottom line */}
        <div className="pt-8 border-t border-[#353534]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E5E2E1]/40">
          <div>
            © {new Date().getFullYear()} ASIA FITNESS CLUB. VILLA BALLESTER. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/asiafitnessclub" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">INSTAGRAM</a>
            <a href="https://wa.me/5491150162845" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">WHATSAPP</a>
            <a href={mapSearchUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">UBICACIÓN</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
