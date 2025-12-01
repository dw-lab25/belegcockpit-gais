import React, { useEffect, useRef } from 'react';
import { CheckIcon, ArrowRightIcon } from './ui/icons';

interface HeroProps {
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryCtaClick, onSecondaryCtaClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.revealable');
    if (elements) {
      elements.forEach(el => {
        setTimeout(() => el.classList.add('revealed'), 100);
      });
    }
  }, []);

  return (
    <section className="bg-gray-50 overflow-hidden" ref={heroRef}>
      <div className="container mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
             <div className="revealable" style={{ transitionDelay: '0ms' }}>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800 ring-1 ring-inset ring-amber-200">
                <span className="w-2 h-2 mr-2.5 bg-amber-400 rounded-full"></span>
                Early Access – Jetzt Pilotplatz sichern
              </span>
            </div>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tighter revealable" style={{ transitionDelay: '100ms' }}>
              Ein Cockpit für <span className="text-teal-600">Belegvollständigkeit</span> in Ihrer Steuerkanzlei.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 revealable" style={{ transitionDelay: '200ms' }}>
              Sehen Sie auf einen Blick, welche Mandanten buchfertig sind – und reduzieren Sie Belegjagd und Rückfragen.
            </p>
            <ul className="mt-8 space-y-3 text-gray-700 max-w-lg mx-auto lg:mx-0 text-left revealable" style={{ transitionDelay: '400ms' }}>
              <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                <span>Mandantenübergreifende Übersicht über offene Belege</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                <span>Kontobasierter Workflow: Jede Buchung hat einen Status</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                <span>Zusammenarbeit mit Mandanten – ohne E-Mail-Chaos</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                <span>Funktioniert ergänzend zu DATEV, Lexware & Co.</span>
              </li>
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start revealable" style={{ transitionDelay: '600ms' }}>
              <button onClick={onPrimaryCtaClick} className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md transform hover:scale-105 hover:shadow-lg">
                Als Pilotkanzlei vormerken
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button onClick={onSecondaryCtaClick} className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors transform hover:scale-105">
                Mehr erfahren
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center revealable" style={{ transitionDelay: '300ms' }}>
            <div className="w-full max-w-2xl">
                <div className="browser-mockup transform transition-transform duration-500 hover:scale-105">
                    <div className="browser-mockup-header">
                        <span className="browser-mockup-dot" style={{ backgroundColor: '#f87171' }}></span>
                        <span className="browser-mockup-dot" style={{ backgroundColor: '#fbbd23' }}></span>
                        <span className="browser-mockup-dot" style={{ backgroundColor: '#34d399' }}></span>
                    </div>
                    <img 
                        src="/belegcockpit-hero-mockup.png" 
                        alt="Screenshot des Dashboards von BelegCockpit, das eine Übersicht über mehrere Mandanten zeigt" 
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://placehold.co/1024x720/e2e8f0/64748b?text=BelegCockpit+Mockup';
                            target.alt = 'Platzhalterbild für das Dashboard des BelegCockpits';
                        }}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;