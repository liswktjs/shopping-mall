import styled from '@emotion/styled';
import { CgBatteryEmpty } from 'react-icons/cg';

const ProductEmptyMsg = () => {
  return (
    <Container>
      <Icon />
      <span>죄송합니다 현재 상품이 존재하지 않습니다 :( </span>
    </Container>
  );
};

const Container = styled.article`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(CgBatteryEmpty)`
  font-size: 100px;
  margin-bottom: 40px;
`;

export default ProductEmptyMsg;
