import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { href: "/", label: "Inicio", ariaLabel: "Ir a la página de inicio" },
  { href: "/tienda", label: "Tienda", ariaLabel: "Ver catálogo de productos" },
  { href: "/artesanos", label: "Artesanos", ariaLabel: "Conocer historias de artesanos" },
  { href: "/empresas", label: "Empresas", ariaLabel: "Soluciones para empresas" },
];

const moreLinks = [
  { href: "/nosotros", label: "Nosotros", ariaLabel: "Conocer nuestra historia" },
  { href: "/impacto", label: "Nuestro Impacto", ariaLabel: "Ver nuestro impacto social" },
  { href: "/unete", label: "Únete a la Red", ariaLabel: "Registrar tu centro" },
  { href: "/faq", label: "Preguntas Frecuentes", ariaLabel: "Ver preguntas frecuentes" },
  { href: "/contacto", label: "Contacto", ariaLabel: "Contactar con nosotros" },
];

const allMobileLinks = [...mainNavLinks, ...moreLinks];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isMoreLinkActive = moreLinks.some((link) => location.pathname === link.href);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="skip-link"
        tabIndex={0}
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 lg:px-8"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
              aria-label="Legado Vivo - Ir al inicio"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Legado Vivo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-4" role="list">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-3 py-2 ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                      aria-label={link.ariaLabel}
                      aria-current={location.pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-3 py-2 ${
                          isMoreLinkActive ? "text-primary" : "text-foreground"
                        }`}
                      >
                        Más
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {moreLinks.map((link) => (
                        <DropdownMenuItem key={link.href} asChild>
                          <Link
                            to={link.href}
                            className={`w-full text-base py-3 ${
                              location.pathname === link.href
                                ? "text-primary font-semibold"
                                : ""
                            }`}
                            aria-label={link.ariaLabel}
                          >
                            {link.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  to="/carrito"
                  className="relative p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ver carrito de compras${itemCount > 0 ? ` (${itemCount} productos)` : ""}`}
                >
                  <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {itemCount > 9 ? "9+" : itemCount}
                    </span>
                  )}
                </Link>
                <Button variant="default" size="default" asChild className="text-base">
                  <Link to="/tienda">Comprar Ahora</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/carrito"
                className="relative p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Ver carrito de compras${itemCount > 0 ? ` (${itemCount} productos)` : ""}`}
              >
                <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-[600px] pb-6" : "max-h-0"
            }`}
            aria-hidden={!isOpen}
          >
            <ul className="flex flex-col gap-2 pt-4" role="list">
              {allMobileLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    aria-label={link.ariaLabel}
                    aria-current={location.pathname === link.href ? "page" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  variant="default"
                  className="w-full text-base"
                  tabIndex={isOpen ? 0 : -1}
                  asChild
                >
                  <Link to="/tienda">Comprar Ahora</Link>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
