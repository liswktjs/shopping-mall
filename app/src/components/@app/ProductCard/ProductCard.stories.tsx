import { Meta, Story } from '@storybook/react';
import ProductCard, { ProductCardProps } from './ProductCard';

export default {
  title: 'App/product/Card',
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
