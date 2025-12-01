import React, { useState, useEffect } from 'react';
import { Logo } from './ui/icons';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" aria-label="Startseite">
          <Logo className="h-8 w-auto text-teal-600" />
        </a>
        <nav>
          <button
            onClick={onCtaClick}
            className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm transform hover:scale-105"
          >
            Als Pilotkanzlei vormerken
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;