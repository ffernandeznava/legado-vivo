import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Search, Filter, SlidersHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { allProducts, categories } from "@/data/products";
import type { Product } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      center: product.center,
    });
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
      description: "Próximamente podrás enviar mensajes directos al artesano.",
    });
  };

  return (
    <Card
      variant="product"
      className="group overflow-hidden"
      role="article"
      aria-labelledby={`product-${product.id}-name`}
    >
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-base font-medium">
              {product.category}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleFavorite();
            }}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground focus-visible:opacity-100"
            aria-label={`Agregar ${product.name} a favoritos`}
          >
            <Heart className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </Link>
      <CardContent className="p-5">
        <Link to={`/producto/${product.slug}`}>
          <h3
            id={`product-${product.id}-name`}
            className="font-display text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-base text-muted-foreground mb-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-base text-muted-foreground/80 mb-1">
          Por {product.artisan}{product.artisanAge > 0 && `, ${product.artisanAge} años`}
        </p>
        <p className="text-sm text-muted-foreground/60 mb-4">
          {product.center}, {product.state}
        </p>
        <p className="font-display text-2xl font-bold text-primary">
          ${product.price.toLocaleString("es-MX")}
          <span className="text-base font-normal text-muted-foreground ml-1">MXN</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex gap-2">
        <Button variant="default" className="flex-1 text-base" size="default" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Enviar mensaje de agradecimiento al artesano ${product.artisan}`}
          onClick={handleMessage}
          className="w-11 h-11"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

const Tienda = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.center.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-sand-light to-cream py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tienda artesanal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Cada producto cuenta una historia de superación, dignidad y maestría.
              Al comprar, activas una red de esperanza.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Buscar productos, artesanos o centros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 h-16 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
                aria-label="Buscar productos"
              />
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="sticky top-28">
                  <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="w-6 h-6 text-primary" aria-hidden="true" />
                    <h2 className="font-display text-2xl font-semibold">Categorías</h2>
                  </div>
                  <nav aria-label="Categorías de productos">
                    <ul className="space-y-3" role="list">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center justify-between text-lg ${
                              selectedCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-card hover:bg-muted"
                            }`}
                            aria-current={selectedCategory === category.id ? "true" : undefined}
                          >
                            <span className="font-medium">{category.name}</span>
                            <span
                              className={`text-base ${
                                selectedCategory === category.id
                                  ? "text-primary-foreground/80"
                                  : "text-muted-foreground"
                              }`}
                            >
                              ({category.count})
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Price Range Info */}
                  <div className="mt-8 p-5 rounded-xl bg-secondary/10 border border-secondary/20">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Rango de precios
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Desde $95 hasta $890 MXN
                    </p>
                  </div>

                  {/* Impact Note */}
                  <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-base text-foreground">
                      <span className="font-semibold">💚 Tu impacto:</span> El 80% del precio
                      va directamente al artesano y su centro.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
                    productos encontrados
                  </p>
                  <Button variant="ghost" size="default" className="gap-2 text-base">
                    <Filter className="w-5 h-5" aria-hidden="true" />
                    Ordenar
                  </Button>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  role="list"
                  aria-label="Lista de productos"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground">
                      No encontramos productos que coincidan con tu búsqueda.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                    >
                      Limpiar filtros
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tienda;
