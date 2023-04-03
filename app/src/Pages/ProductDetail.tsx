import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import Skeleton from '../components/@common/Skeleton/Skeleton';

import useGetProductDetail from '../hooks/useGetProductDetail';
import ProductDetailContent from '../components/product/ProductDetailContent/ProductDetailContent';
import styled from '@emotion/styled';

const ProductDetail = () => {
  const { id } = useParams();

  if (!Number.isInteger(Number(id))) {
    throw new Error('잘못된 접근입니다');
  }

  return (
    <Container>
      <Suspense fallback={<Skeleton width={'50vw'} height={'50vh'} />}>
        <ProductContent productId={Number(id)} />
      </Suspense>
    </Container>
  );
};

const ProductContent = ({ productId }: { productId: number }) => {
  const { productItem } = useGetProductDetail(productId);

  if (!productItem) {
    throw new Error('상품이 존재하지 않습니다');
  }

  return (
    <div>
      <ProductDetailContent {...productItem} />
    </div>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 40px;
`;

export default ProductDetail;
