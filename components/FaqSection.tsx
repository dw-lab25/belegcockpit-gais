import React, { useState, useEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from './ui/icons';

const faqData = [
  {
    question: "Ist das Produkt schon live?",
    answer: "BelegCockpit befindet sich in einer aktiven Entwicklungs- und Pilotphase. Als Teilnehmer am Early-Access-Programm erhalten Sie frühzeitigen Zugriff und können die Weiterentwicklung direkt mitgestalten, bevor das Produkt offiziell startet."
  },
  {
    question: "Funktioniert BelegCockpit mit DATEV?",
    answer: "Ja, BelegCockpit ist als toolunabhängiger Layer konzipiert, der Ihre bestehenden Systeme wie DATEV Unternehmen online, Lexware oder andere ergänzt. Unser Ziel ist es, die Prozesse vor der eigentlichen Buchung zu optimieren. Daten können für die Weiterverarbeitung exportiert werden."
  },
  {
    question: "Für welche Kanzleigröße ist BelegCockpit geeignet?",
    answer: "BelegCockpit entfaltet seinen größten Nutzen in Kanzleien mit einem signifikanten Anteil an Fibu-Mandaten, typischerweise ab einer Größe von ca. 5-8 Mitarbeitenden. Das Cockpit ist besonders wertvoll, wenn mehrere Mitarbeiter:innen die Buchhaltungen betreuen."
  },
  {
    question: "Was wird BelegCockpit kosten?",
    answer: "Für unsere Pilotkanzleien gelten besondere Konditionen, die wir individuell besprechen. Das zukünftige Preismodell wird sich am Nutzen orientieren und fair gestaltet sein. Details dazu werden wir im Laufe der Pilotphase finalisieren."
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{item.question}</span>
        <div className="flex-shrink-0">
          {isOpen ? <MinusIcon className="h-6 w-6 text-teal-600" /> : <PlusIcon className="h-6 w-6 text-gray-500" />}
        </div>
      </button>
      <div 
        className="accordion-content"
        style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="mt-4 text-gray-600 pr-8">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
);


const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section className="py-20 lg:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto revealable">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">Häufig gestellte Fragen</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto revealable" style={{ transitionDelay: '200ms' }}>
          {faqData.map((item, index) => (
             <FaqItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;