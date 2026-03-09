import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
        <header className="w-full max-w-[1500px] bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="md:text-3xl text-2xl font-playfair font-bold text-gradient">
                Rouge Makeovers
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {!isScrolled && navLinks?.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-md font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact"
                  className={`text-sm inline-block bg-primary text-white px-6 py-3 rounded-md shadow-md hover:shadow-xl hover:bg-[#b8965f] transition-all duration-300 font-semibold`}>
                  Book Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-md font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-foreground"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm w-full inline-block bg-primary text-white px-6 py-3 rounded-md shadow-md hover:shadow-xl hover:bg-[#b8965f] transition-all duration-300 font-semibold`}>
                  Book Now
                </Link>
              </div>
            )}
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
