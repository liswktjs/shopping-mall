import { BASE_URL } from '.';
import { ProductItemType } from '../types/serverProductData';

export const getProductList = async (): Promise<ProductItemType[]> => {
  const res: Response = await fetch(`${BASE_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': BASE_URL,
    },
  });
  const json: ProductItemType[] = await res.json();
  return json;
};
