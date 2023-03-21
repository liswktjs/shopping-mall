import { Meta } from '@storybook/react';
import ProductEmptyMsg from './ProductEmptyMsg';

export default {
  title: 'App/ProductEmptyMsg',
  component: ProductEmptyMsg,
} as Meta;

const Template = () => <ProductEmptyMsg />;

export const DefaultProductEmptyMsg = Template.bind({});
