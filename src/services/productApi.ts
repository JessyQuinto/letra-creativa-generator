
import { Product, Category } from '@/types';

// Mock data for categories
const mockCategories: Category[] = [
  { id: 1, name: 'Tejidos', slug: 'tejidos', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
  { id: 2, name: 'Cerámicas', slug: 'ceramicas', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
  { id: 3, name: 'Joyería', slug: 'joyeria', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400' },
];

// Mock data for featured products
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Canasta Tradicional',
    slug: 'canasta-tradicional',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Canasta tejida a mano por artesanos del Chocó',
    artisan: 'María González',
    origin: 'Quibdó, Chocó',
    categoryId: 1,
    stock: 15,
    rating: 4.8,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Collar de Tagua',
    slug: 'collar-tagua',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Collar elaborado con semillas de tagua del Pacífico',
    artisan: 'Carlos Moreno',
    origin: 'Nuquí, Chocó',
    categoryId: 3,
    stock: 8,
    rating: 4.9,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: 'Vasija de Barro',
    slug: 'vasija-barro',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Vasija ceremonial de barro cocido',
    artisan: 'Ana Rentería',
    origin: 'Istmina, Chocó',
    categoryId: 2,
    stock: 5,
    rating: 4.7,
    createdAt: new Date().toISOString()
  }
];

export const fetchCategories = async (): Promise<Category[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategories;
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
};
