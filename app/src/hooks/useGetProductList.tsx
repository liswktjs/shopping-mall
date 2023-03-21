import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getProductList } from '../api/products';
import { queryKey } from '../query/queryKey';

const useGetProductList = () => {
  const { data, isError, error } = useQuery([queryKey.productList], getProductList, {
    suspense: true,
  });

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  return {
    productList: data,
  };
};

export default useGetProductList;
