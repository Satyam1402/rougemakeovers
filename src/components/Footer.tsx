import { Instagram, Mail, Phone, MapPin, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Footer = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Marketing", path: "/marketing" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="text-3xl font-playfair font-bold text-gradient">
              Rouge Makeovers
            </h3>
            <p className="text-base text-muted-foreground">
              Luxury Bridal Makeup Artist in Mumbai and destination weddings, creating flawless, elegant, long-lasting looks tailored to make every bride feel radiant and confident
            </p>
          </div>

          {/* Quick Links */}

          <div className="space-y-4" data-aos="fade-up">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>

            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`hover:text-primary transition-colors text-base ${isActive(link.path) ? "text-primary" : "text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4" data-aos="fade-up">
            <h4 className="font-semibold text-lg text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 text-base">
                <MapPin size={18} className="text-primary" />
                Mumbai, India
              </li>
              <li className="flex items-center gap-2 text-base">
                <Phone size={18} className="text-primary" />
                +91-93247 08781
              </li>
              <li className="flex items-center gap-2 text-base">
                <Mail size={18} className="text-primary" />
                contact@rougemakeovers.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4" data-aos="fade-up">
            <h4 className="font-semibold text-lg text-foreground">Follow Us</h4>

            <div className="flex gap-4">
              {/* Instagram */}
              <Link
                to="https://www.instagram.com/rouge_makeovers?igsh=Nnpybnl3NjlxM256"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
    text-primary
    hover:text-gold
    transition-all
    duration-300
    ease-in-out
    transform
    hover:scale-110
    hover:-translate-y-1
  "
              >
                <Instagram size={24} />
              </Link>

              {/* Facebook */}
              <Link
                to="https://www.facebook.com/share/16gx6W4DwR/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
    text-primary
    hover:text-gold
    transition-all
    duration-300
    ease-in-out
    transform
    hover:scale-110
    hover:-translate-y-1
  "
              >
                <Facebook size={24} />
              </Link>


              {/* WhatsApp */}
              {/* <Link
                to="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <Whatsapp size={24} />
              </Link> */}
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
            <p>© {new Date().getFullYear()} Rouge Makeovers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
