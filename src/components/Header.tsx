
import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import logo from '../../public/media/logo.webp';

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
        ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              <span className="text-primary">Solar</span>Sarthi
            </h1>
            <p className="text-sm font-normal text-muted-foreground">Govt. of Rajasthan</p>
          </div>
        </div>
        
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
