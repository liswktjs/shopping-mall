import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export interface SkeletonProps {
  width: number;
  height: number;
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  return <Container width={width} height={height} />;
};

const animation = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

const Container = styled.div<{ width: number; height: number }>`
  ${({ theme, width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    background: linear-gradient(45deg, ${theme.colors.GRAY_500}, ${theme.colors.GRAY_600});
  `}
  animation: ${animation} 1s ease-in-out infinite;
`;

export default Skeleton;
