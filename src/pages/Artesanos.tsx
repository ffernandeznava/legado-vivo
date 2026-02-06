import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Heart, Users, ArrowRight, Quote } from "lucide-react";
import { artisans } from "@/data/artisans";

const Artesanos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-sand-light">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
              <Heart className="w-5 h-5" aria-hidden="true" />
              Historias de vida
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Conoce a nuestros <span className="text-primary">artesanos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detrás de cada producto hay una historia de superación, dignidad y maestría.
              Conoce a las personas que dan vida a Legado Vivo.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-display text-4xl font-bold mb-2">847</p>
                <p className="text-secondary-foreground/80 text-lg">Artesanos activos</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold mb-2">72</p>
                <p className="text-secondary-foreground/80 text-lg">Edad promedio</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold mb-2">45+</p>
                <p className="text-secondary-foreground/80 text-lg">Años de experiencia</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold mb-2">9</p>
                <p className="text-secondary-foreground/80 text-lg">Estados de México</p>
              </div>
            </div>
          </div>
        </section>

        {/* Artisans Grid */}
        <section className="py-20" aria-labelledby="artisans-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 id="artisans-heading" className="sr-only">
              Historias de artesanos
            </h2>
            <div className="space-y-16">
              {artisans.map((artisan, index) => (
                <Card
                  key={artisan.id}
                  className="overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-sm text-sm font-medium">
                          {artisan.specialty}
                        </span>
                        <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          {artisan.productsCount} productos
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                          {artisan.name}
                        </h3>
                        <span className="text-xl text-muted-foreground">
                          {artisan.age} años
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6 text-base text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-5 h-5 text-primary" />
                          {artisan.center}, {artisan.state}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-5 h-5 text-primary" />
                          {artisan.yearsOfExperience} años de experiencia
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-5 h-5 text-primary" />
                          Desde {artisan.joinedYear}
                        </span>
                      </div>

                      <blockquote className="mb-6 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                        <Quote className="w-8 h-8 text-primary/30 mb-2" />
                        <p className="text-lg text-foreground italic leading-relaxed">
                          {artisan.story}
                        </p>
                      </blockquote>

                      <Button variant="default" asChild className="self-start">
                        <Link to={`/tienda`}>
                          Ver productos de {artisan.name.split(" ")[0]}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-sand-light to-cream">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Quieres conocer más historias?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Cada producto que compras viene con la historia de quien lo creó.
              Explora nuestra tienda y conecta con el legado de nuestros artesanos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/tienda">
                  Explorar tienda
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/impacto">Ver impacto social</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artesanos;
