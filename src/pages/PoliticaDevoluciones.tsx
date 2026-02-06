import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, Clock, CheckCircle, XCircle, Phone, Mail } from "lucide-react";

const PoliticaDevoluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Política de devoluciones
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Tu satisfacción es importante para nosotros. Conoce nuestras políticas para cambios y devoluciones.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    30 días
                  </h3>
                  <p className="text-muted-foreground">
                    Para solicitar devolución
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <RotateCcw className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Cambio gratis
                  </h3>
                  <p className="text-muted-foreground">
                    Por defectos de fabricación
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Reembolso completo
                  </h3>
                  <p className="text-muted-foreground">
                    En 5-10 días hábiles
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  ¿Cuándo puedo devolver un producto?
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Aceptamos devoluciones en los siguientes casos:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span>El producto llegó dañado o defectuoso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Recibiste un producto diferente al ordenado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span>El producto no cumple con la descripción</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Cambio de opinión (producto sin usar, en empaque original)</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Productos no elegibles para devolución
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Por la naturaleza artesanal de nuestros productos, no aceptamos devoluciones de:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <span>Productos perecederos (mermeladas, miel, café) una vez abiertos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <span>Velas o jabones usados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <span>Productos personalizados o hechos a medida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <span>Productos sin empaque original o dañados por mal uso</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Proceso de devolución
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <ol className="space-y-6">
                      <li className="flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </span>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">Contacta con nosotros</h4>
                          <p className="text-muted-foreground">
                            Envía un correo a devoluciones@legadovivo.mx con tu número de pedido y fotos del producto.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </span>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">Recibe tu guía de envío</h4>
                          <p className="text-muted-foreground">
                            En 24-48 horas te enviaremos una guía prepagada para devolver el producto.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          3
                        </span>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">Empaca y envía</h4>
                          <p className="text-muted-foreground">
                            Empaca el producto en su empaque original y entrégalo en la paquetería indicada.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          4
                        </span>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">Recibe tu reembolso</h4>
                          <p className="text-muted-foreground">
                            Una vez recibido el producto, procesaremos tu reembolso en 5-10 días hábiles.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Opciones de reembolso
                </h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Reembolso al método de pago original:</strong> 5-10 días hábiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Crédito en tienda:</strong> Inmediato, con 10% adicional de bonificación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Cambio por otro producto:</strong> Sin costo de envío adicional</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas ayuda?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="bg-secondary/10 border-secondary/20">
                    <CardContent className="p-6 flex items-center gap-4">
                      <Mail className="w-10 h-10 text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground text-lg">Email</p>
                        <p className="text-muted-foreground">devoluciones@legadovivo.mx</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/10 border-secondary/20">
                    <CardContent className="p-6 flex items-center gap-4">
                      <Phone className="w-10 h-10 text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground text-lg">Teléfono</p>
                        <p className="text-muted-foreground">+52 55 1234 5678</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDevoluciones;
