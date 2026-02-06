import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, MapPin, Package, Shield, Phone } from "lucide-react";

const PoliticaEnvios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Política de envíos
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Toda la información sobre cómo enviamos nuestros productos artesanales a tu hogar.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Envío gratis
                  </h3>
                  <p className="text-muted-foreground">
                    En pedidos mayores a $500 MXN
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    3-7 días hábiles
                  </h3>
                  <p className="text-muted-foreground">
                    Tiempo de entrega promedio
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Todo México
                  </h3>
                  <p className="text-muted-foreground">
                    Cobertura nacional completa
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Cobertura de envíos
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Realizamos envíos a toda la República Mexicana. Nuestros productos son cuidadosamente empacados para proteger su calidad artesanal durante el transporte.
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Zona Metropolitana:</strong> 3-4 días hábiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Ciudades principales:</strong> 4-5 días hábiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Zonas rurales:</strong> 5-7 días hábiles</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Costos de envío
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <table className="w-full text-lg">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 font-semibold text-foreground">Monto del pedido</th>
                          <th className="text-right py-3 font-semibold text-foreground">Costo de envío</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b">
                          <td className="py-3">Menos de $500 MXN</td>
                          <td className="text-right py-3">$99 MXN</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">$500 MXN o más</td>
                          <td className="text-right py-3 text-secondary font-semibold">¡GRATIS!</td>
                        </tr>
                        <tr>
                          <td className="py-3">Envío express (24-48h)</td>
                          <td className="text-right py-3">$199 MXN adicionales</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Empaque especial
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Cada producto artesanal requiere cuidados especiales. Por eso:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Usamos materiales ecológicos y reciclables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Productos frágiles reciben protección adicional sin costo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Incluimos una tarjeta con la historia del artesano</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Seguimiento de pedido
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Una vez que tu pedido sea enviado, recibirás un correo electrónico con:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
                  <li>Número de guía para rastreo</li>
                  <li>Enlace directo al sitio de la paquetería</li>
                  <li>Fecha estimada de entrega</li>
                  <li>Instrucciones para recibir tu paquete</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas ayuda?
                </h2>
                <Card className="bg-secondary/10 border-secondary/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Phone className="w-10 h-10 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">
                        Contáctanos
                      </p>
                      <p className="text-muted-foreground">
                        hola@legadovivo.mx | +52 55 1234 5678
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaEnvios;
