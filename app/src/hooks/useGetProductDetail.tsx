import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getProductInfo } from '../api/products';
import { queryKey } from '../query/queryKey';

const useGetProductDetail = (id: number) => {
  const { data, isError, error } = useQuery(
    [queryKey.product, id],
    () => getProductInfo({ productId: id }),
    { suspense: true },
  );

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  return {
    productItem: data,
  };
};

export default useGetProductDetail;
