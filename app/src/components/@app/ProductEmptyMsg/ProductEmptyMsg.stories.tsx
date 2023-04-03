import { Meta } from '@storybook/react';
import ProductEmptyMsg from './ProductEmptyMsg';

export default {
  title: 'App/product/EmptyMsg',
  component: ProductEmptyMsg,
} as Meta;

const Template = () => <ProductEmptyMsg />;

export const DefaultProductEmptyMsg = Template.bind({});
