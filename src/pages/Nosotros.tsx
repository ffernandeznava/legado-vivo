import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Sparkles, ArrowRight, Quote, Award, Clock } from "lucide-react";

import taliaImg from "@/assets/team/talia.jpg";
import fernandaImg from "@/assets/team/fernanda.jpg";
import claudiaImg from "@/assets/team/claudia.jpg";

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Dignidad", description: "Creemos que cada persona merece generar ingresos con su trabajo, sin importar su edad o condición." },
  { icon: <Users className="w-6 h-6" />, title: "Comunidad", description: "Construimos puentes entre artesanos, centros, empresas y consumidores conscientes." },
  { icon: <Target className="w-6 h-6" />, title: "Transparencia", description: "Cada peso que recibes se rastrea. Nuestro impacto es verificable y medible." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Excelencia", description: "Productos artesanales de la más alta calidad, dignos de cualquier mercado premium." },
];

const timeline = [
  { year: "2020", event: "Nace la idea durante la pandemia al ver el aislamiento de adultos mayores." },
  { year: "2021", event: "Primer piloto con 12 centros en CDMX y área metropolitana." },
  { year: "2022", event: "Expansión a 24 centros y primeras alianzas corporativas." },
  { year: "2023", event: "Alcanzamos 34 centros y lanzamos el programa de capacitación." },
  { year: "2024", event: "+42 centros en 9 estados, +847 artesanos empoderados." },
];

const team = [
  { name: "Talia Fernández", role: "Fundadora y CEO", image: taliaImg, bio: "Gerontóloga con 15 años de experiencia en atención a adultos mayores." },
  { name: "Fernanda Martínez", role: "Directora de operaciones", image: fernandaImg, bio: "Especialista en cadenas de suministro social y comercio justo." },
  { name: "Claudia Ramírez", role: "Directora de impacto social", image: claudiaImg, bio: "Trabajadora social con enfoque en programas de terapia ocupacional." },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-sand-light">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
              <Heart className="w-5 h-5" aria-hidden="true" />
              Nuestra historia
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Protegiendo un legado <span className="text-primary">impulsando el futuro</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Legado Vivo nació de una pregunta simple: ¿Por qué el talento de nuestros mayores se desperdicia en el olvido?
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra misión</h2>
                <blockquote className="border-l-4 border-primary pl-6 py-4 mb-6">
                  <p className="text-xl text-foreground italic">"Transformar asilos y centros de atención en talleres de esperanza, donde cada producto artesanal sea un vehículo de dignidad económica."</p>
                </blockquote>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/impacto">Ver nuestro impacto <ArrowRight className="w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1556911073-52527ac43761?w=600&h=500&fit=crop" alt="Artesanas trabajando" className="rounded-2xl shadow-elevated" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-sand-light">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Nuestros valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} variant="elevated">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">{value.icon}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-lg text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Nuestro equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-secondary-foreground/10 border-secondary-foreground/20 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-foreground font-medium text-base mb-3">{member.role}</p>
                    <p className="text-lg text-secondary-foreground/80">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">¿Quieres ser parte del cambio?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild><Link to="/tienda">Explorar tienda <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button variant="forest" size="lg" asChild><Link to="/unete">Unir mi centro</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
