import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  CreditCard,
  MapPin,
  Clock,
  Package,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { getProductBySlug, allProducts } from "@/data/products";

const Producto = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center py-20">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Producto no encontrado
            </h1>
            <Button variant="default" asChild>
              <Link to="/tienda">Volver a la tienda</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        artisan: product.artisan,
        center: product.center,
      });
    }
    toast({
      title: "Añadido al carrito",
      description: `${quantity} x ${product.name} agregado al carrito.`,
    });
  };

  const relatedProducts = allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-base">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link to="/tienda" className="text-muted-foreground hover:text-primary">
                  Tienda
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-2xl shadow-elevated"
              />
              <span className="absolute top-4 left-4 px-4 py-2 rounded-full bg-background/95 backdrop-blur-sm text-base font-medium">
                {product.category}
              </span>
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Agregar a favoritos"
              >
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <p className="font-display text-4xl font-bold text-primary">
                  ${product.price.toLocaleString("es-MX")}
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    MXN
                  </span>
                </p>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {product.longDescription}
              </p>

              {/* Artisan Info */}
              <Card className="mb-6 bg-primary/5 border-primary/20">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-lg">
                      {product.artisan}
                      {product.artisanAge > 0 && `, ${product.artisanAge} años`}
                    </p>
                    <p className="text-base text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {product.center}, {product.state}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quantity Selector */}
              <div className="flex items-center gap-6 mb-8">
                <span className="text-lg font-medium text-foreground">Cantidad:</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Reducir cantidad"
                    className="w-12 h-12 text-lg"
                  >
                    <Minus className="w-5 h-5" />
                  </Button>
                  <span className="w-14 text-center text-xl font-semibold">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Aumentar cantidad"
                    className="w-12 h-12 text-lg"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="default"
                size="lg"
                className="w-full text-lg h-14 mb-6"
                onClick={handleAddToCart}
              >
                Agregar al carrito - ${(product.price * quantity).toLocaleString("es-MX")} MXN
              </Button>

              {/* Shipping & Policies */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                  <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Envío</p>
                    <p className="text-sm text-muted-foreground">
                      {product.shippingTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                  <RotateCcw className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Devoluciones</p>
                    <p className="text-sm text-muted-foreground">30 días</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Garantía</p>
                    <p className="text-sm text-muted-foreground">Calidad artesanal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                  <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Pago seguro</p>
                    <p className="text-sm text-muted-foreground">Tarjeta y OXXO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Materials */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Materiales
                </h3>
                <ul className="space-y-2">
                  {product.materials.map((material, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Production */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Producción
                </h3>
                <p className="text-muted-foreground">{product.production}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Peso:</span>{" "}
                    {product.weight}
                  </p>
                  {product.dimensions && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium text-foreground">Dimensiones:</span>{" "}
                      {product.dimensions}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Care Instructions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Cuidados
                </h3>
                <p className="text-muted-foreground">{product.careInstructions}</p>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Métodos de pago
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Tarjeta</p>
                    <p className="text-sm text-muted-foreground">
                      Visa, Mastercard, AMEX
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <Package className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">OXXO Pay</p>
                    <p className="text-sm text-muted-foreground">
                      Pago en efectivo
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">PayPal</p>
                    <p className="text-sm text-muted-foreground">
                      Compra protegida
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Transferencia</p>
                    <p className="text-sm text-muted-foreground">
                      SPEI inmediato
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="font-display text-2xl font-bold text-foreground mb-8"
              >
                Productos relacionados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/producto/${related.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-elevated transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          {related.name}
                        </h3>
                        <p className="font-display text-xl font-bold text-primary">
                          ${related.price.toLocaleString("es-MX")} MXN
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Producto;
