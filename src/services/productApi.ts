
import { Product, Category, ProductWithStory } from '@/types';

// Mock data for categories
const mockCategories: Category[] = [
  { id: 1, name: 'Tejidos', slug: 'tejidos', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
  { id: 2, name: 'Cerámicas', slug: 'ceramicas', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
  { id: 3, name: 'Joyería', slug: 'joyeria', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
];

// Optimized mock data for featured products
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Canasta Tradicional',
    slug: 'canasta-tradicional',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Canasta tejida a mano por artesanos del Chocó',
    categoryId: 1,
    producerId: 1,
    stock: 15,
    featured: true,
    rating: 4.8,
    createdAt: new Date().toISOString(),
    artisan: 'María del Carmen Mosquera',
    origin: 'Quibdó, Chocó'
  },
  {
    id: 2,
    name: 'Collar de Tagua',
    slug: 'collar-tagua',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Collar elaborado con semillas de tagua del Pacífico',
    categoryId: 3,
    producerId: 2,
    stock: 8,
    featured: true,
    rating: 4.9,
    createdAt: new Date().toISOString(),
    artisan: 'Yurany Palacios',
    origin: 'Nuquí, Chocó'
  },
  {
    id: 3,
    name: 'Vasija de Barro',
    slug: 'vasija-barro',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Vasija ceremonial de barro cocido',
    categoryId: 2,
    producerId: 3,
    stock: 5,
    featured: true,
    rating: 4.7,
    createdAt: new Date().toISOString(),
    artisan: 'Esteban Mosquera',
    origin: 'Istmina, Chocó'
  }
];

// Optimized API functions with caching simulation
export const fetchCategories = async (): Promise<Category[]> => {
  await new Promise(resolve => setTimeout(resolve, 100)); // Reduced timeout
  return mockCategories;
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 100)); // Reduced timeout
  return mockProducts;
};

export const fetchProductBySlug = async (slug: string): Promise<ProductWithStory | null> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  const product = mockProducts.find(p => p.slug === slug);
  
  if (!product) return null;
  
  // Add cultural story to product
  return {
    ...product,
    story: {
      id: product.id,
      title: `La Historia de ${product.name}`,
      content: `Esta pieza representa siglos de tradición artesanal afrocolombiana del Pacífico. ${product.description} Cada elemento tiene un significado profundo en la cultura chocoana.`,
      author: product.artisan || 'Artesano Tradicional',
      readTime: '3 min lectura',
      culturalSignificance: 'Patrimonio cultural inmaterial del Pacífico colombiano'
    }
  };
};
