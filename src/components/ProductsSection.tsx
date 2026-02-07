import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";
 import { Link } from "react-router-dom";
 import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  artisan: string;
  center: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Mermelada de higo artesanal",
    category: "Línea Gourmet",
    price: 185,
    artisan: "Manuel, 78 años",
    center: "Casa del abuelo feliz, Oaxaca",
    image: "../src/assets/mermelada.png",
  },
  {
    id: "2",
    name: "Vela de cera de abeja",
    category: "Hogar y bienestar",
    price: 145,
    artisan: "María Elena, 82 años",
    center: "Hogar San José, Querétaro",
    image: "../src/assets/vela.png",
  },
  {
    id: "3",
    name: "Bolsa de cuero tejido",
    category: "Cultural/Tradicional",
    price: 890,
    artisan: "Grupo Esperanza",
    center: "CADI Luz y vida, CDMX",
    image: "../src/assets/bolsa.png",
  },
  {
    id: "4",
    name: "Jabón de lavanda natural",
    category: "Hogar y bienestar",
    price: 95,
    artisan: "Lupita, 75 años",
    center: "Asilo Santa María, Guadalajara",
    image: "../src/assets/jabon.png",
  },
];

const categories = [
  {
    id: "gourmet",
    name: "Línea Gourmet",
    description: "Conservas, mermeladas y productos alimenticios artesanales",
    color: "bg-terracotta/10 text-terracotta border-terracotta/20",
  },
  {
    id: "hogar",
    name: "Hogar y bienestar",
    description: "Velas, jabones, textiles y productos para el hogar",
    color: "bg-forest/10 text-forest border-forest/20",
  },
  {
    id: "cultural",
    name: "Cultural/Tradicional",
    description: "Artesanías tradicionales mexicanas y piezas de colección",
    color: "bg-sand-dark/30 text-foreground border-sand-dark/30",
  },
];

function ProductCard({ product }: { product: Product }) {
   const { toast } = useToast();
 
   const handleAddToCart = () => {
     toast({
       title: "Producto añadido",
       description: `${product.name} se agregó al carrito.`,
     });
   };
 
   const handleFavorite = () => {
     toast({
       title: "Añadido a favoritos",
       description: `${product.name} se agregó a tus favoritos.`,
     });
   };
 
   const handleMessage = () => {
     toast({
       title: "¡Gracias por tu interés!",
       description: "Próximamente podrás enviar mensajes directos al centro.",
     });
   };
 
  return (
    <Card
      variant="product"
      className="group overflow-hidden"
      role="article"
      aria-labelledby={`product-${product.id}-name`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
            {product.category}
          </span>
        </div>
        <button
          onClick={handleFavorite}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground focus-visible:opacity-100"
          aria-label={`Agregar ${product.name} a favoritos`}
        >
          <Heart className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <CardContent className="p-5">
        <h3
          id={`product-${product.id}-name`}
          className="font-display text-lg font-semibold text-foreground mb-1"
        >
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Por {product.artisan}
        </p>
        <p className="text-xs text-muted-foreground/80 mb-4">
          {product.center}
        </p>
        <p className="font-display text-2xl font-bold text-primary">
          ${product.price.toLocaleString("es-MX")}
          <span className="text-sm font-normal text-muted-foreground ml-1">MXN</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex gap-2">
        <Button variant="default" className="flex-1" size="sm" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Enviar mensaje de agradecimiento al centro ${product.center}`}
          onClick={handleMessage}
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductsSection() {
  return (
    <section
      className="py-20"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Tienda artesanal
          </span>
          <h2
            id="products-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Productos con historia y propósito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada artículo cuenta una historia de superación. Explora nuestras categorías y encuentra piezas únicas.
          </p>
        </div>

        {/* Categories */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          role="list"
          aria-label="Categorías de productos"
        >
          {categories.map((category) => (
            <Link
              to={`/tienda?categoria=${category.id}`}
              key={category.id}
              className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${category.color}`}
              aria-label={`Ver categoría ${category.name}`}
            >
              <h3 className="font-display text-lg font-semibold mb-2">
                {category.name}
              </h3>
              <p className="text-sm opacity-80">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Productos destacados"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="forest" size="lg" asChild>
            <Link to="/tienda">
            Ver todo el catálogo
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
