import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const ProductResponsiveList = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

export default ProductResponsiveList;
