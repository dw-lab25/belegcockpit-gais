import React, { useEffect, useRef } from 'react';
import { QuoteIcon } from './ui/icons';

const SocialProofSection: React.FC = () => {
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
      { threshold: 0.2 }
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
        <div className="max-w-3xl mx-auto text-center revealable">
          <QuoteIcon className="text-teal-200 h-16 w-16 mx-auto" />
          <blockquote className="mt-6">
            <p className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight">
              „Endlich ein Werkzeug, das den wahren Engpass in der Fibu adressiert: die Belegvollständigkeit. Das mandantenübergreifende Cockpit ist genau das, worauf wir gewartet haben.“
            </p>
          </blockquote>
          <footer className="mt-8">
            <p className="text-lg font-semibold text-gray-800">Maximilian Schmidt</p>
            <p className="text-gray-600">Steuerberater & Partner, Pilotkanzlei aus München</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;