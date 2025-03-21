export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isNew?: boolean;
}
