export interface ProductItemType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRatingType;
}

export type ProductRatingType = {
  rate: number;
  count: number;
};

export type ProductResponseType = ProductItemType[];
