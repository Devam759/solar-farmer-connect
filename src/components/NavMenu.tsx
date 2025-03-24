
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
    { name: 'Conclusion', href: '#conclusion' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link text-sm font-medium"
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
          className="p-2 text-foreground focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                aria-label="Close Menu"
                className="p-2 text-foreground focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center mt-8 space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium"
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
