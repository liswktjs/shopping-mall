import { Meta } from '@storybook/react';
import ProductResponsiveList from './ProductResponsiveList';
import productList from '../../../mock/product.json';
import ProductCard from '../../@app/ProductCard/ProductCard';
export default {
  title: 'utils/Responsive/ProductList',
  component: ProductResponsiveList,
} as Meta;

const Template = () => {
  return (
    <ProductResponsiveList>
      {productList.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </ProductResponsiveList>
  );
};

export const DefaultProductResponsiveList = Template.bind({});
