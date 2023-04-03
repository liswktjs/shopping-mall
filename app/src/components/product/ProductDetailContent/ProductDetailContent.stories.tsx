import { Meta, Story } from '@storybook/react';
import { ProductDetailType } from '../../../types/serverProductData';
import ProductDetailContent from './ProductDetailContent';

export default {
  title: 'App/product/DetailContent',
  component: ProductDetailContent,
} as Meta;

const Template: Story<ProductDetailType> = (args: ProductDetailType) => (
  <ProductDetailContent {...args} />
);

export const DefaultProductDetail = Template.bind({});
DefaultProductDetail.args = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};
