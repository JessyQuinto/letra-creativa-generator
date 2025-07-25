
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "@/services/productApi";

const FeaturedProducts = () => {
  const { data: featuredProducts = [], isLoading } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
    staleTime: 300000, // 5 minutes cache
  });

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary-background" id="productos-destacados">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text">
              Productos Destacados
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-primary-secondary max-w-2xl mx-auto px-4 sm:px-0">
              Descubre las creaciones más populares de nuestros talentosos artesanos
            </p>
          </div>
          <LoadingSpinner 
            variant="skeleton" 
            skeletonType="product" 
            count={4}
            text="Cargando productos destacados..."
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          />
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary-background animate-fade-in" 
      id="productos-destacados"
      aria-labelledby="featured-products-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 
            id="featured-products-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text"
          >
            Productos Destacados
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-primary-secondary max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Descubre las creaciones más populares de nuestros talentosos artesanos, 
            cada una con su propia historia y significado cultural.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <footer className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-action hover:bg-primary-action/90 text-background font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-action focus:ring-offset-2 min-h-[48px] text-sm sm:text-base"
            aria-label="Ver todos los productos disponibles en la tienda"
          >
            Ver Todos los Productos
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default FeaturedProducts;
