import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Carrito = () => {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  const shippingCost = total >= 500 ? 0 : 99;
  const finalTotal = total + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center py-20">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                Tu carrito está vacío
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explora nuestra tienda y encuentra productos artesanales únicos que cuentan historias de esperanza.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/tienda">
                  Explorar tienda
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Tu carrito ({itemCount} {itemCount === 1 ? "producto" : "productos"})
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <Link to={`/tienda`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Por {item.artisan}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.center}
                        </p>
                        <p className="font-display text-xl font-bold text-primary">
                          ${item.price.toLocaleString("es-MX")} MXN
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-t">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground">
                          Cantidad:
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-9 h-9"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-lg">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-9 h-9"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-display text-lg font-bold text-foreground">
                          ${(item.price * item.quantity).toLocaleString("es-MX")}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Eliminar ${item.name} del carrito`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                    Resumen del pedido
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">
                        ${total.toLocaleString("es-MX")} MXN
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Envío</span>
                      <span className={`font-medium ${shippingCost === 0 ? "text-secondary" : "text-foreground"}`}>
                        {shippingCost === 0 ? "¡Gratis!" : `$${shippingCost} MXN`}
                      </span>
                    </div>
                    {total < 500 && (
                      <p className="text-sm text-muted-foreground bg-primary/10 p-3 rounded-lg">
                        💡 Agrega ${(500 - total).toLocaleString("es-MX")} más para obtener envío gratis
                      </p>
                    )}
                    <div className="border-t pt-4 flex justify-between text-xl">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-display font-bold text-primary">
                        ${finalTotal.toLocaleString("es-MX")} MXN
                      </span>
                    </div>
                  </div>

                  <Button variant="default" size="lg" className="w-full text-lg h-14 mb-4" asChild>
                    <Link to="/checkout">
                      Proceder al pago
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/tienda">Continuar comprando</Link>
                  </Button>

                  {/* Trust Signals */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Envío gratis en pedidos mayores a $500</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <RotateCcw className="w-5 h-5 text-primary" />
                      <span>30 días para devoluciones</span>
                    </div>
                  </div>

                  {/* Impact Note */}
                  <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">💚 Tu impacto:</span> El 80% del precio va directamente al artesano y su centro.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Carrito;
