import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <Content>문의 사항 연락처 15xx-xx</Content>
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.GRAY_500};

  position: fixed;
  bottom: 0;
`;

const Content = styled.div`
  margin: 10px 0 0 20px;
  color: ${({ theme }) => theme.colors.GRAY_800};
`;

export default Footer;
