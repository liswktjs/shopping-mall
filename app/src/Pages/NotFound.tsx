import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../components/@common/Button/Button';
import { URL } from '../constant';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <span>잘못된 접근입니다!</span>
      <Button
        onClick={() => {
          navigate(URL.HOME);
        }}
      >
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 80vh;

  justify-content: center;
  align-items: center;

  span {
    margin-bottom: 20px;
  }
`;

export default NotFound;
