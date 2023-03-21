import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

const Loading = () => {
  return (
    <Container>
      <Content>
        <Dot />
        <Dot2 />
      </Content>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80vh;

  ${({ theme }) => css`
    z-index: ${theme.zIndex.LOADING};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 40px;

  ${({ theme }) => css`
    background: ${theme.colors.BLUE_500};
    box-shadow: 3px 3px 3px ${theme.colors.GRAY_500};
  `}
  transform-origin: 0px 50px;
  animation: ${spin} 2s infinite linear;
`;

const Dot2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 60px;
  ${({ theme }) => css`
    background: ${theme.colors.YELLOW_500};
    box-shadow: 2px 2px 2px ${theme.colors.GRAY_500};
  `}
  transform-origin: 0px -50px;
  animation: ${spin} 2s infinite linear;
`;

export default Loading;
