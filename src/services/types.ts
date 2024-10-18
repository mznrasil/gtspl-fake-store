export type CategoryType = {
  name: string;
  image: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
};
