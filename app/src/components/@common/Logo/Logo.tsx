import styled from '@emotion/styled';
import { RiShoppingCartLine } from 'react-icons/ri';

const Logo = () => {
  return (
    <Container>
      <Icon />
      <span>SHOPPING+MALL+</span>
    </Container>
  );
};

const Container = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(RiShoppingCartLine)`
  font-size: 30px;
  margin-right: 20px;
`;

export default Logo;
