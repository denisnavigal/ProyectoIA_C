export type User = {
  id: string;
  email: string;
  name: string;
  role: 'WORKER' | 'CUSTOMER';
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

export type Review = {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    name: string;
  };
};