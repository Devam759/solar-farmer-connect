import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: 'Problem & Solution', href: '#problem-solution' },
    { name: 'User Persona', href: '#farmer-persona' },
    { name: 'Government Scheme', href: '#scheme-ideation' },
    { name: 'Implementation', href: '#implementation' },
    { name: 'Impact', href: '#impact' },
    { name: 'Future Scope', href: '#future-scope' },
    { name: 'Eligibility', href: '#eligibility' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl font-medium tracking-wide text-foreground/80 hover:text-foreground hover:text-primary transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-primary flex items-center justify-center min-w-[110px]"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="p-2 text-foreground focus:outline-none hover:text-primary transition-colors"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-6">
              <button
                onClick={closeMenu}
                aria-label="Close Menu"
                className="p-2 text-foreground hover:text-primary focus:outline-none transition-colors"
              >
                <X size={30} />
              </button>
            </div>
            <nav className="flex flex-col items-center mt-10 space-y-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl lg:text-3xl font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenu;
