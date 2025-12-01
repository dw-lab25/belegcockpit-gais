import React, { useEffect, useRef } from 'react';
import { ExclamationTriangleIcon, EnvelopeIcon, DocumentTextIcon, ClockIcon } from './ui/icons';

const painPoints = [
  {
    icon: <ExclamationTriangleIcon className="h-8 w-8 text-teal-600" />,
    title: "Intransparenz",
    description: "Ihnen fehlt eine klare, mandantenübergreifende Sicht auf die Belegvollständigkeit. Sie wissen oft nicht, welcher Mandant wirklich „buchfertig“ ist."
  },
  {
    icon: <EnvelopeIcon className="h-8 w-8 text-teal-600" />,
    title: "Manuelle Belegjagd",
    description: "Ihr Team verbringt Stunden damit, Belegen per E-Mail, Telefon oder WhatsApp hinterherzulaufen – ein ineffizienter und fehleranfälliger Prozess."
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-teal-600" />,
    title: "Fristendruck",
    description: "Kurz vor der UStVA-Frist stellen Sie fest, dass zahlreiche Bankumsätze ungeklärt sind und Belege fehlen, was zu unnötigem Stress und Überstunden führt."
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8 text-teal-600" />,
    title: "Systembrüche",
    description: "Trotz digitaler Tools wie DATEV Unternehmen online nutzen Ihre Mitarbeiter:innen immer noch Excel-Listen und Notizzettel, um den Überblick zu behalten."
  }
];

const ProblemSection: React.FC = () => {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter revealable">Das kennen Sie aus Ihrem Kanzleialltag</h2>
          <p className="mt-4 text-lg text-gray-600 revealable" style={{transitionDelay: '200ms'}}>Die Digitalisierung verspricht Effizienz, doch die Realität sieht oft anders aus. Kommen Ihnen diese Herausforderungen bekannt vor?</p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-6 revealable" style={{ transitionDelay: `${300 + index * 100}ms`}}>
                <div className="flex-shrink-0 bg-teal-50 p-4 rounded-full">
                    {point.icon}
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">{point.title}</h3>
                    <p className="mt-1 text-gray-600">{point.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;