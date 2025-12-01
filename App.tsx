
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PersonaSection from './components/PersonaSection';
import SocialProofSection from './components/SocialProofSection';
import UspSection from './components/UspSection';
import EarlyAccessSection from './components/EarlyAccessSection';
import LeadForm from './components/LeadForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header onCtaClick={scrollToForm} />
      <main>
        <Hero onPrimaryCtaClick={scrollToForm} onSecondaryCtaClick={scrollToDetails} />
        <div ref={detailsRef}>
          <ProblemSection />
        </div>
        <SolutionSection />
        <PersonaSection />
        <SocialProofSection />
        <UspSection />
        <EarlyAccessSection onCtaClick={scrollToForm} />
        <div ref={formRef}>
          <LeadForm />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;