
import { Product } from '@/types';
import { Story } from '@/data/stories';

export interface ProductWithStory extends Product {
  culturalStory?: Story;
  artisan?: string;
  origin?: string;
}

// Mapeo de productos con sus historias culturales
const productStoryMap: Record<number, Partial<Story & { artisan: string; origin: string }>> = {
  1: {
    id: 1,
    title: "El Arte del Werregue",
    excerpt: "Conoce la técnica milenaria de tejido con fibras naturales que ha pasado de madres a hijas durante siglos en las comunidades afrocolombianas del Chocó.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLswbkOAcmwcFCNgL_xY92lp3tt-l8P_xdDa9NeBLMyAhttCigBtSeeMSBDYWe9t_a6Il0UXOknWI2os6CCt1I9dLJmTvuRwrdpcO5fU8cRdUV6BfD-ABk2X1qCIK4IVXewqMtVh3bp2ZjzYQUxMaICtzPAt-r9sk8cOmScenvCgfOu49lG540ua8ia-fYXo2vJf_I8K9z2g9-wk6qgaeYcJdr8X-iW-TIozAwtMBin40N51OqI-zRafq_1_esIJVjr_nxzGj1",
    readTime: "5 min lectura",
    author: "María del Carmen Mosquera",
    date: "15 de Octubre, 2024",
    artisan: "María Eugenia Rentería",
    origin: "Quibdó, Chocó"
  },
  2: {
    id: 2,
    title: "Tradiciones de la Costa Pacífica",
    excerpt: "Descubre cómo las semillas de tagua se transforman en hermosas joyas que cuentan historias ancestrales del Pacífico colombiano.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACdHKq8dpJVu1OFr11VadzGaSw98CpGJKBtrV90esdnvOmcQhpA5qYnSzOVt_cJ1QyDspxrquXaWnxVN0lqO-OPH5IzXucoqwW0xA4xKVc7KJ-v5kpbpmVbg4ZGIn6VgTNNZ-WZ7Avagzer_SYt1Z8zE3WXkk3Qsbi21wT18nw0hGZTJUiJb3GwcVGzpB6yNbIE32LDlGUjdBO4gB9HK5Z_NqVyZKgse-ZVxv2giWIDYgBsBs6vzTq-HPIw47UR47HGH9iq3qk",
    readTime: "6 min lectura",
    author: "Yurany Palacios",
    date: "12 de Octubre, 2024",
    artisan: "Yurany Palacios",
    origin: "Nuquí, Chocó"
  },
  3: {
    id: 3,
    title: "Sabiduría Ancestral en Cada Talla",
    excerpt: "Los maestros ceramistas del Chocó mantienen viva una tradición que conecta el mundo espiritual con el material a través del barro sagrado.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4NKKNBrdjKmefojYoBUYHShZWMp2RSCAqNnFxVnvbrgK3fuCbv1feF6P37mGEkpnOYR59lp8McDKZfjZPPoXWqM6EoB7QR4uMdhr4KbwGxRJYMRk4Zqqe-sD9igP_rSKJ3CEvBxwMD31c1aKVVOrYXDtmutc5i3Ttm_Pt88DZxJGOGHCpBHgIWUWOZbbb3v4-EHQ9irtPxIDXshXCCBy30gSvMrMBUTFQQKDyfGohFVlSztaZDf1rTFvVOLERpQjc5RYmXkSt",
    readTime: "7 min lectura",
    author: "Roberto Sinisterra",
    date: "8 de Octubre, 2024",
    artisan: "Roberto Sinisterra",
    origin: "Istmina, Chocó"
  }
};

export const getProductWithStory = (productId: number, product: Product): ProductWithStory => {
  const storyData = productStoryMap[productId];
  
  if (!storyData) {
    return {
      ...product,
      artisan: "Artesano tradicional",
      origin: "Chocó, Colombia"
    };
  }

  const { artisan, origin, ...storyInfo } = storyData;
  
  return {
    ...product,
    artisan,
    origin,
    culturalStory: storyInfo as Story
  };
};

export const getAllProductsWithStories = (products: Product[]): ProductWithStory[] => {
  return products.map(product => getProductWithStory(product.id, product));
};
