import { Suspense } from 'react';
import styled from '@emotion/styled';

import ProductCard from '../components/@app/ProductCard/ProductCard';
import ProductEmptyMsg from '../components/@app/ProductEmptyMsg/ProductEmptyMsg';
import Loading from '../components/@common/Loading/Loading';
import ProductResponsiveList from '../components/utils/ProductResponsiveList/ProductResponsiveList';

import useGetProductList from '../hooks/useGetProductList';

const Home = () => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px;
`;

const ProductList = () => {
  const { productList } = useGetProductList();

  if (productList && productList.length) {
    return (
      <ProductResponsiveList>
        {productList.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ProductResponsiveList>
    );
  }
  return <ProductEmptyMsg />;
};

export default Home;
