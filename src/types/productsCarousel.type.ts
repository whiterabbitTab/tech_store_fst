import { IProduct } from "./products.type";

export interface ICarouselProducts {
  filters?: string[];
  name: string;
  background: string;
  product: IProduct[];
  path: string;
}