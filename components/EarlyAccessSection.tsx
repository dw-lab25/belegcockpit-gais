import React, { useEffect, useRef } from 'react';
import { CheckIcon } from './ui/icons';

interface EarlyAccessSectionProps {
  onCtaClick: () => void;
}

const EarlyAccessSection: React.FC<EarlyAccessSectionProps> = ({ onCtaClick }) => {
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
    <section className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="bg-white p-10 lg:p-16 rounded-2xl shadow-xl border border-gray-200 text-center revealable">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">Early-Access für innovative Steuerkanzleien</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            BelegCockpit befindet sich in der aktiven Entwicklung. Wir suchen 5–10 Pilotkanzleien, die mit uns gemeinsam die Zusammenarbeit rund um Belege und Bankkonten neu denken wollen.
          </p>
          <div className="mt-10 inline-grid sm:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold">Früher Zugang</h3>
                <p className="text-gray-600">Nutzen Sie die Vorteile als eine der ersten Kanzleien in Deutschland.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold">Aktive Mitgestaltung</h3>
                <p className="text-gray-600">Ihr Feedback fließt direkt in die Weiterentwicklung der Funktionen ein.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold">Bevorzugte Konditionen</h3>
                <p className="text-gray-600">Profitieren Sie von speziellen Pilot-Konditionen beim späteren Rollout.</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button
              onClick={onCtaClick}
              className="bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg text-lg transform hover:scale-105 hover:shadow-xl"
            >
              Jetzt unverbindlich vormerken
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;