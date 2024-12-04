export type Character = {
  id: number;
  name: string;
  description: string;
  type: 'hero' | 'villain';
  image: string;
  abilities: string[];
  firstAppearance: string;
};

export type ApiResponse = {
  data: Character[];
  status: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'CUSTOMER' | 'WORKER';
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};