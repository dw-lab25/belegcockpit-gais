import React, { useEffect, useRef } from 'react';
import { CheckIcon } from './ui/icons';

const personas = [
  {
    title: "Für Kanzlei-Inhaber:innen",
    benefits: [
      "Steigern Sie die Profitabilität durch effizientere Fibu-Prozesse.",
      "Entlasten Sie Ihr Team vom Fachkräftemangel – mehr Mandate pro Kopf.",
      "Treten Sie als moderne, digitalisierte Kanzlei am Markt auf."
    ]
  },
  {
    title: "Für Steuerberater:innen & Teamleiter",
    benefits: [
      "Gewinnen Sie volle Transparenz über alle Fibu-Mandate.",
      "Stellen Sie die Einhaltung von Fristen und Prozessqualität sicher.",
      "Minimieren Sie Risiken durch eine lückenlose Belegdokumentation."
    ]
  },
  {
    title: "Für Steuerfachangestellte",
    benefits: [
      "Reduzieren Sie die mühsame Belegjagd und ständige Rückfragen.",
      "Arbeiten Sie offene Vorgänge in einem zentralen Posteingang ab.",
      "Erleben Sie einen strukturierteren und stressfreieren Arbeitsalltag."
    ]
  }
];

const PersonaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.revealable');
    if (elements) {
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter revealable">Für wen ist BelegCockpit gedacht?</h2>
          <p className="mt-4 text-lg text-gray-600 revealable" style={{ transitionDelay: '200ms' }}>BelegCockpit wurde entwickelt, um die spezifischen Herausforderungen auf jeder Ebene Ihrer Kanzlei zu lösen.</p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 revealable"
              style={{ transitionDelay: `${300 + index * 100}ms`}}
            >
              <h3 className="font-bold text-xl text-gray-900">{persona.title}</h3>
              <ul className="mt-6 space-y-4 text-gray-600 flex-grow">
                {persona.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;