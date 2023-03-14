import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface CardProps {
  type: 'sm' | 'md' | 'lg';
}

const Card = ({ children, type }: PropsWithChildren<CardProps>) => {
  const smCard = { width: '200px', height: '150px' };
  const mdCard = { width: '300px', height: '250px' };
  const lgCard = { width: '1000px', height: '100px' };

  switch (type) {
    case 'sm':
      return (
        <Container width={smCard.width} height={smCard.height}>
          {children}
        </Container>
      );
    case 'md':
      return (
        <Container width={mdCard.width} height={mdCard.height}>
          {children}
        </Container>
      );
    case 'lg':
      return (
        <Container width={lgCard.width} height={lgCard.height}>
          {children}
        </Container>
      );
    default:
      return (
        <Container width={mdCard.width} height={mdCard.height}>
          {children}
        </Container>
      );
  }
};

const Container = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: 10px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.GRAY_600};
  background-color: ${({ theme }) => theme.colors.WHITE_500};
`;

export default Card;
