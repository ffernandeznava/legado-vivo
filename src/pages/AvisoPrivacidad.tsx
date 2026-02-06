import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Mail, FileText } from "lucide-react";

const AvisoPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-primary" />
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Aviso de Privacidad
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Última actualización: Febrero 2026
            </p>
            <p className="text-xl text-muted-foreground mb-12">
              En Legado Vivo nos comprometemos a proteger tu privacidad y tus datos personales.
            </p>

            {/* Principles */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Seguridad
                  </h3>
                  <p className="text-muted-foreground">
                    Datos encriptados y protegidos
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Transparencia
                  </h3>
                  <p className="text-muted-foreground">
                    Claro uso de tu información
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Control
                  </h3>
                  <p className="text-muted-foreground">
                    Tú decides sobre tus datos
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-12">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Responsable del tratamiento
                </h2>
                <p className="text-lg text-muted-foreground">
                  <strong>Legado Vivo México, S.A. de C.V.</strong><br />
                  Domicilio: Av. Reforma 123, Col. Centro, CDMX, C.P. 06600<br />
                  Correo: privacidad@legadovivo.mx<br />
                  Teléfono: +52 55 1234 5678
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Datos personales que recopilamos
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Recopilamos los siguientes datos personales:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground list-disc list-inside">
                  <li><strong>Datos de identificación:</strong> Nombre, correo electrónico, teléfono</li>
                  <li><strong>Datos de contacto:</strong> Dirección de envío y facturación</li>
                  <li><strong>Datos de pago:</strong> Información de tarjeta (procesada por terceros seguros)</li>
                  <li><strong>Datos de navegación:</strong> Cookies, IP, preferencias de compra</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Finalidad del tratamiento
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Utilizamos tus datos para:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground list-disc list-inside">
                  <li>Procesar y enviar tus pedidos</li>
                  <li>Comunicarnos contigo sobre tu compra</li>
                  <li>Enviarte promociones y novedades (con tu consentimiento)</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Cumplir con obligaciones legales y fiscales</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Transferencia de datos
                </h2>
                <p className="text-lg text-muted-foreground">
                  Podemos compartir tus datos con terceros que nos ayudan a operar nuestro negocio:
                  empresas de paquetería para envíos, procesadores de pago, y proveedores de servicios
                  de marketing. Todos estos terceros están obligados a proteger tus datos conforme a
                  la Ley Federal de Protección de Datos Personales.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Derechos ARCO
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Tienes derecho a:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground list-disc list-inside">
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                  <li><strong>Rectificación:</strong> Corregir datos incorrectos o incompletos</li>
                  <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos</li>
                  <li><strong>Oposición:</strong> Oponerte al uso de tus datos para ciertos fines</li>
                </ul>
                <p className="text-lg text-muted-foreground mt-4">
                  Para ejercer estos derechos, envía un correo a <strong>privacidad@legadovivo.mx</strong>
                  con tu solicitud y una identificación oficial.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Uso de cookies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Utilizamos cookies para mejorar tu experiencia de navegación, recordar tus preferencias
                  y analizar el tráfico del sitio. Puedes configurar tu navegador para rechazar cookies,
                  aunque esto puede afectar algunas funcionalidades del sitio.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Seguridad de datos
                </h2>
                <p className="text-lg text-muted-foreground">
                  Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger
                  tus datos personales contra acceso no autorizado, pérdida o alteración. Utilizamos
                  encriptación SSL en todas las transacciones y nunca almacenamos datos completos de
                  tarjetas de crédito en nuestros servidores.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Cambios al aviso de privacidad
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio
                  será publicado en esta página con la fecha de actualización. Te recomendamos revisar
                  periódicamente este aviso.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Contacto
                </h2>
                <Card className="bg-secondary/10 border-secondary/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Mail className="w-10 h-10 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">
                        ¿Dudas sobre privacidad?
                      </p>
                      <p className="text-muted-foreground">
                        privacidad@legadovivo.mx | +52 55 1234 5678
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

export default AvisoPrivacidad;
