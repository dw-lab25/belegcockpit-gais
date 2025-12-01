import React, { useEffect, useRef } from 'react';

const MandantenBoardMockup: React.FC = () => (
    <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200">
        <div className="p-2">
            <h4 className="font-semibold text-gray-800">Mandantenübersicht</h4>
            <p className="text-sm text-gray-500">Wesentliche Kennzahlen für Ihre Mandanten</p>
        </div>
        <div className="mt-2 space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg border">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">Alpha Design Studio</p>
                    <span className="status-pill status-pill-green">Im Plan</span>
                </div>
                <div className="text-xs text-gray-500 mt-2 grid grid-cols-4 gap-2">
                    <div><span>Bankbuchungen:</span><span className="font-medium text-gray-700"> 64</span></div>
                    <div><span>Nicht zugeordnet:</span><span className="font-medium text-gray-700"> 3</span></div>
                    <div><span>Fehlende Belege:</span><span className="font-medium text-gray-700"> 1</span></div>
                    <div><span>Vollständigkeit:</span><span className="font-medium text-gray-700"> 98%</span></div>
                </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border">
                 <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">Bauer & Co. KG</p>
                    <span className="status-pill status-pill-red">Kritisch</span>
                </div>
                 <div className="text-xs text-gray-500 mt-2 grid grid-cols-4 gap-2">
                    <div><span>Bankbuchungen:</span><span className="font-medium text-gray-700"> 203</span></div>
                    <div><span>Nicht zugeordnet:</span><span className="font-medium text-red-600"> 24</span></div>
                    <div><span>Fehlende Belege:</span><span className="font-medium text-red-600"> 15</span></div>
                    <div><span>Vollständigkeit:</span><span className="font-medium text-red-600"> 78%</span></div>
                </div>
            </div>
        </div>
    </div>
);

const PosteingangMockup: React.FC = () => (
    <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200">
        <div className="p-2">
            <h4 className="font-semibold text-gray-800">Posteingang: Offene Vorgänge</h4>
            <p className="text-sm text-gray-500">Alle Kontobewegungen ohne Beleg an einem Ort</p>
        </div>
        <div className="mt-2 space-y-2">
            <div className="bg-white p-2.5 rounded-lg border flex justify-between items-center">
                <div>
                    <p className="font-medium text-gray-800 text-sm">Fischer Handels GmbH</p>
                    <p className="text-gray-500 text-xs">Lieferant XY, RE-12345</p>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-sm text-gray-800">- 1.280,00 €</p>
                    <p className="text-xs text-red-600 font-medium">Ohne Beleg</p>
                </div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border flex justify-between items-center">
                <div>
                    <p className="font-medium text-gray-800 text-sm">GreenTech Solutions</p>
                    <p className="text-gray-500 text-xs">Software-Lizenz</p>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-sm text-gray-800">- 89,99 €</p>
                    <p className="text-xs text-orange-500 font-medium">Wartet auf Mandant</p>
                </div>
            </div>
             <div className="bg-teal-50/50 p-2.5 rounded-lg border flex justify-between items-center">
                <div>
                    <p className="font-medium text-gray-800 text-sm">Alpha Design Studio</p>
                    <p className="text-gray-500 text-xs">Deutsche Bahn Ticket</p>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-sm text-gray-800">- 55,40 €</p>
                    <p className="text-xs text-teal-600 font-medium">Vorschlag</p>
                </div>
            </div>
        </div>
    </div>
);

const WorkspaceMockup: React.FC = () => (
    <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200 grid lg:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg border">
            <h5 className="font-semibold text-sm mb-2 text-gray-700">Bankbuchung</h5>
            <div className="space-y-1 text-sm">
                <p className="text-gray-500">Datum: <span className="font-medium text-gray-800">28.11.2025</span></p>
                <p className="text-gray-500">Partner: <span className="font-medium text-gray-800">Bürobedarf GmbH</span></p>
                <p className="text-gray-500">Betrag: <span className="font-medium text-gray-800">-178,50 €</span></p>
            </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg border flex flex-col justify-center items-center text-center">
            <h5 className="font-semibold text-sm mb-2 text-gray-700">Fehlender Beleg</h5>
            <div className="w-full border-2 border-dashed rounded-md h-full flex flex-col justify-center items-center p-4">
                <p className="text-sm font-medium text-teal-600">Beleg anfordern</p>
                <p className="text-xs text-gray-500 mt-1">oder</p>
                <button className="text-xs bg-gray-200 px-3 py-1.5 rounded-md mt-2 font-medium hover:bg-gray-300">Manuell hochladen</button>
            </div>
        </div>
    </div>
);

const MandantenInterfaceMockup: React.FC = () => (
    <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-200">
        <div className="p-2">
            <h4 className="font-semibold text-gray-800">Ihre offenen Vorgänge</h4>
            <p className="text-sm text-gray-500">Bitte laden Sie die fehlenden Belege hoch.</p>
        </div>
        <div className="mt-2 space-y-2">
            <div className="bg-white p-3 rounded-lg border">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium text-gray-800 text-sm">Tankstelle Aral</p>
                        <p className="text-gray-500 text-xs">25.11.2025</p>
                    </div>
                    <p className="font-semibold text-sm text-gray-800">- 78,12 €</p>
                </div>
                <button className="w-full bg-teal-50 text-teal-700 font-semibold py-2 rounded-lg mt-3 text-sm hover:bg-teal-100">
                    Beleg jetzt hochladen
                </button>
            </div>
        </div>
    </div>
);


const features = [
  {
    name: "Das Mandanten-Board",
    description: "Ihre zentrale Kanzlei-Ansicht. Sehen Sie für alle Mandanten den Status der Belegvollständigkeit, offene Bankbuchungen und anstehende Fristen. Erkennen Sie Engpässe, bevor sie zum Problem werden.",
    mockup: <MandantenBoardMockup />
  },
  {
    name: "Posteingang für offene Vorgänge",
    description: "Eine mandantenübergreifende To-Do-Liste. Alle Kontobewegungen ohne Beleg landen hier. Bearbeiten Sie Vorgänge effizient an einem zentralen Ort, statt in E-Mails und Excel-Listen zu suchen.",
    mockup: <PosteingangMockup />
  },
  {
    name: "Der Zuordnungs-Workspace",
    description: "Links die Bankbuchung, rechts der Beleg. Bestätigen Sie Zuordnungsvorschläge, stellen Sie Rückfragen an Mandanten oder markieren Sie Vorgänge als „buchfertig“ – alles in einer fokussierten Ansicht.",
    mockup: <WorkspaceMockup />
  },
  {
    name: "Das einfache Mandanten-Interface",
    description: "Ihre Mandanten sehen nur, was für sie relevant ist: „Zu DIESER Zahlung fehlt ein Beleg.“ Sie können Belege direkt hochladen und Rückfragen beantworten. Einfach, klar und ohne Ablenkung.",
    mockup: <MandantenInterfaceMockup />
  }
];

const SolutionSection: React.FC = () => {
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
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter revealable">Was BelegCockpit für Ihre Kanzlei tut</h2>
          <p className="mt-4 text-lg text-gray-600 revealable" style={{transitionDelay: '200ms'}}>
            BelegCockpit ist Ihr toolunabhängiges Cockpit, das Kontobewegungen zur zentralen To-Do-Liste macht und den gesamten Prozess sichtbar, steuerbar und kollaborativ gestaltet.
          </p>
        </div>
        <div className="mt-24 space-y-28">
          {features.map((feature, index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-x-16 gap-y-10 items-center revealable">
              <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-gray-600 text-base">{feature.description}</p>
              </div>
              <div className="lg:col-span-8 flex justify-center items-center">
                 {feature.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;