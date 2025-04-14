
import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/95 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-start">
        <div className="flex items-center">
          <img src="/media/logo.webp" alt="Logo" className="h-14 mr-3" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-none">
              <span className="text-primary">Solar</span>Sarthi
            </h1>
            <p className="text-lg font-medium text-gray-600 italic">Govt. of Rajasthan</p>
          </div>
        </div>
        <div className="ml-auto">
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
