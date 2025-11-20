import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ All }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // nav==========
  const nav = ["home", "about", "projects", "contact"];
  return (
    <>
      <nav
        className={`fixed w-full backdrop-blur-lg z-50 shadow-lg transition-colors duration-500 bg-gray-200 dark:border-b   dark:border-gray-200 dark:bg-gray-900/90 `}
      >
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex justify-between items-center h-16">
            {" "}
            <Link
              to="/"
              className={`text-3xl ${
                All && "grow text-center"
              } cursor-pointer  font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}
            >
              Portfolio
            </Link>
            {/* Desktop Menu */}
            {!All && (
              <section className="hidden md:flex space-x-1">
                {nav.map((item, index) => (
                  <button
                    onClick={() => scrollToSection(item)}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    key={item}
                    className={`capitalize px-4 font-normal py-2 rounded-lg transition-all duration-300 text-[1.1rem] cursor-pointer ${
                      activeSection === item
                        ? " text-[#437BFF]"
                        : "dark:text-white  dark:hover:text-[#437BFF]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </section>
            )}
            {!All && (
              <section className="flex items-center space-x-4 md:hidden">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`md:hidden cursor-pointer p-2 rounded-lg hover:scale-110 transition-all duration-300  text-gray-800 dark:text-white`}
                >
                  <div className="relative w-6 h-6">
                    <Menu
                      size={24}
                      className={`absolute inset-0 transition-all duration-500 ${
                        isMenuOpen
                          ? "opacity-0 rotate-180 scale-0"
                          : "opacity-100 rotate-0 scale-100"
                      }`}
                    />
                    <X
                      size={24}
                      className={`absolute inset-0 transition-all duration-500 ${
                        isMenuOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-180 scale-0"
                      }`}
                    />
                  </div>
                </button>
              </section>
            )}
          </section>
        </section>

        {/* Mobile Menu Slider */}
        <section
          className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
            {nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`block w-full dark:text-white cursor-pointer my-2 text-left px-6 py-3 rounded-xl capitalize transition-all duration-500 transform ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } ${
                  activeSection === item
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                    : "hover:bg-gray-300/90 dark:hover:bg-gray-600 hover:translate-x-2"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
