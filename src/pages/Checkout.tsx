import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ArrowLeft,
  CreditCard,
  Building2,
  Wallet,
  Shield,
  Check,
  Truck,
  Package,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, total, clearCart, itemCount } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = total >= 500 ? 0 : 99;
  const finalTotal = total + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    toast({
      title: "¡Pedido confirmado!",
      description: "Recibirás un correo con los detalles de tu pedido.",
    });
    navigate("/");
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center py-20">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Tu carrito está vacío
            </h1>
            <Button variant="default" asChild>
              <Link to="/tienda">Ir a la tienda</Link>
            </Button>
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
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al carrito
          </Button>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Finalizar compra
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Truck className="w-6 h-6 text-primary" />
                      Información de envío
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-base">
                          Nombre *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          className="h-12 text-base"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-base">
                          Apellidos *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          className="h-12 text-base"
                          placeholder="Tus apellidos"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email" className="text-base">
                          Correo electrónico *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="h-12 text-base"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="phone" className="text-base">
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="h-12 text-base"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address" className="text-base">
                          Dirección *
                        </Label>
                        <Input
                          id="address"
                          required
                          className="h-12 text-base"
                          placeholder="Calle, número, colonia"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-base">
                          Ciudad *
                        </Label>
                        <Input
                          id="city"
                          required
                          className="h-12 text-base"
                          placeholder="Ciudad de México"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-base">
                          Estado *
                        </Label>
                        <Input
                          id="state"
                          required
                          className="h-12 text-base"
                          placeholder="CDMX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip" className="text-base">
                          Código Postal *
                        </Label>
                        <Input
                          id="zip"
                          required
                          className="h-12 text-base"
                          placeholder="06600"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-primary" />
                      Método de pago
                    </h2>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <label
                        htmlFor="card"
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          paymentMethod === "card"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="w-8 h-8 text-primary" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-lg">
                            Tarjeta de crédito o débito
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Visa, Mastercard, American Express
                          </p>
                        </div>
                      </label>

                      <label
                        htmlFor="oxxo"
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          paymentMethod === "oxxo"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value="oxxo" id="oxxo" />
                        <Building2 className="w-8 h-8 text-primary" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-lg">
                            OXXO Pay
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Paga en efectivo en cualquier OXXO
                          </p>
                        </div>
                      </label>

                      <label
                        htmlFor="transfer"
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          paymentMethod === "transfer"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value="transfer" id="transfer" />
                        <Wallet className="w-8 h-8 text-primary" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-lg">
                            Transferencia SPEI
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Transferencia bancaria inmediata
                          </p>
                        </div>
                      </label>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="mt-6 pt-6 border-t space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber" className="text-base">
                            Número de tarjeta *
                          </Label>
                          <Input
                            id="cardNumber"
                            required
                            className="h-12 text-base"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry" className="text-base">
                              Fecha de expiración *
                            </Label>
                            <Input
                              id="expiry"
                              required
                              className="h-12 text-base"
                              placeholder="MM/AA"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv" className="text-base">
                              CVV *
                            </Label>
                            <Input
                              id="cvv"
                              required
                              className="h-12 text-base"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-28">
                  <CardContent className="p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Resumen del pedido
                    </h2>

                    {/* Items Preview */}
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground text-sm truncate">
                              {item.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Cant: {item.quantity}
                            </p>
                            <p className="text-sm font-semibold text-primary">
                              ${(item.price * item.quantity).toLocaleString("es-MX")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 py-4 border-t border-b">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Subtotal ({itemCount} productos)
                        </span>
                        <span className="font-medium text-foreground">
                          ${total.toLocaleString("es-MX")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Envío</span>
                        <span
                          className={`font-medium ${
                            shippingCost === 0 ? "text-secondary" : "text-foreground"
                          }`}
                        >
                          {shippingCost === 0 ? "¡Gratis!" : `$${shippingCost}`}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between py-4 text-xl">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-display font-bold text-primary">
                        ${finalTotal.toLocaleString("es-MX")} MXN
                      </span>
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full text-lg h-14"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        "Procesando..."
                      ) : (
                        <>
                          <Check className="w-5 h-5" />
                          Confirmar pedido
                        </>
                      )}
                    </Button>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary" />
                      Pago 100% seguro y encriptado
                    </div>

                    {/* Policies Links */}
                    <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                      <p>
                        Al completar tu compra, aceptas nuestros{" "}
                        <Link to="/politica-envios" className="text-primary hover:underline">
                          términos de envío
                        </Link>
                        ,{" "}
                        <Link to="/politica-devoluciones" className="text-primary hover:underline">
                          política de devoluciones
                        </Link>{" "}
                        y{" "}
                        <Link to="/aviso-privacidad" className="text-primary hover:underline">
                          aviso de privacidad
                        </Link>
                        .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
