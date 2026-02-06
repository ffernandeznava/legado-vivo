import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  tienda: [
    { label: "Línea Gourmet", href: "/tienda?categoria=gourmet" },
    { label: "Hogar y bienestar", href: "/tienda?categoria=hogar" },
    { label: "Cultural/Tradicional", href: "/tienda?categoria=cultural" },
    { label: "Ver todo", href: "/tienda" },
  ],
  empresa: [
    { label: "Nuestra historia", href: "/nosotros" },
    { label: "Impacto social", href: "/impacto" },
    { label: "Únete a la red", href: "/unete" },
    { label: " Para empresas", href: "/empresas" },
  ],
  ayuda: [
    { label: "Preguntas frecuentes", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-foreground text-background py-16"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="Legado Vivo - Ir al inicio"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-display text-xl font-semibold">
                Legado Vivo
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Somos el puente entre el talento olvidado y tu hogar. Cada compra transforma asilos en talleres de esperanza.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hola@legadovivo.mx"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                hola@legadovivo.mx
              </a>
              <a
                href="tel:+525512345678"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                +52 55 1234 5678
              </a>
              <p className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Ciudad de México, México
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Tienda</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.tienda.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.ayuda.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Legado Vivo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Síguenos en Facebook"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Síguenos en YouTube"
            >
              <Youtube className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
