import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Tienda from "./pages/Tienda";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import Empresas from "./pages/Empresas";
import Impacto from "./pages/Impacto";
import Unete from "./pages/Unete";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";
import Artesanos from "./pages/Artesanos";
import PoliticaEnvios from "./pages/PoliticaEnvios";
import PoliticaDevoluciones from "./pages/PoliticaDevoluciones";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/legado-vivo">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/producto/:slug" element={<Producto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/impacto" element={<Impacto />} />
            <Route path="/unete" element={<Unete />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/artesanos" element={<Artesanos />} />
            <Route path="/politica-envios" element={<PoliticaEnvios />} />
            <Route path="/politica-devoluciones" element={<PoliticaDevoluciones />} />
            <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
