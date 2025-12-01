import React, { useEffect, useRef } from 'react';

const usps = [
  {
    title: "Mandantenübergreifendes Cockpit",
    description: "Statt in einzelnen Mandantenakten zu suchen, erhalten Sie eine 360°-Sicht über alle Mandate. Steuern Sie die Belegvollständigkeit zentral."
  },
  {
    title: "Kontobasierter Workflow",
    description: "Jede einzelne Kontobewegung ist ein Vorgang mit klarem Status. Dies sorgt für eine lückenlose Abarbeitung und verhindert, dass etwas übersehen wird."
  },
  {
    title: "Tool-agnostische Ergänzung",
    description: "BelegCockpit funktioniert als spezialisierter Layer über Ihren bestehenden Systemen. Ideal für Kanzleien mit einer heterogenen Mandanten- und Tool-Landschaft."
  }
];

const UspSection: React.FC = () => {
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-700 to-teal-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter revealable">Warum nicht einfach DATEV & Co.?</h2>
          <p className="mt-4 text-lg text-teal-100 revealable" style={{ transitionDelay: '200ms' }}>
            BelegCockpit ersetzt Ihre Buchhaltungssoftware nicht – wir holen mehr aus Ihren bestehenden Systemen heraus, indem wir uns auf ein Kernproblem spezialisieren.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="bg-teal-800/50 p-8 rounded-xl transition-transform duration-300 hover:scale-105 revealable" style={{ transitionDelay: `${300 + index * 100}ms`}}>
              <h3 className="font-bold text-xl text-white">{usp.title}</h3>
              <p className="mt-3 text-teal-100">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspSection;