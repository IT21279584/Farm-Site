import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // close menu on mobile after click
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "scope", label: "Project Scope" },
    { id: "milestones", label: "Milestones" },
    { id: "technologies", label: "Technologies" },
    { id: "documents", label: "Documents" },
    { id: "team", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700 md:text-2xl">
          Farm Gaurd
        </h1>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <span
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-800 transition-colors cursor-pointer hover:text-green-600"
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-24 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <span
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="py-2 text-gray-800 transition-colors border-b border-gray-100 cursor-pointer hover:text-green-600"
              >
                {link.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
