import { Suspense } from 'react';
import ProductCard from '../components/@app/ProductCard/ProductCard';
import ProductEmptyMsg from '../components/@app/ProductEmptyMsg/ProductEmptyMsg';
import Loading from '../components/@common/Loading/Loading';

import useGetProductList from '../hooks/useGetProductList';

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

const ProductList = () => {
  const { productList } = useGetProductList();

  if (productList && productList.length) {
    return (
      <ul>
        {productList.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ul>
    );
  }
  return <ProductEmptyMsg />;
};

export default Home;
