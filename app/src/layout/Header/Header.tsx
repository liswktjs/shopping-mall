import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Logo from '../../components/@common/Logo/Logo';
import MenuButton from '../../components/@app/MenuButton/MenuButton';
import { URL } from '../../constant';

const Header = () => {
  const navigate = useNavigate();
  const nowRoute = useLocation();

  const [nowUrl, setNowUrl] = useState<'home' | 'cart' | 'others'>('home');

  useEffect(() => {
    if (nowRoute.pathname === URL.HOME) {
      setNowUrl('home');
      return;
    }
    if (nowRoute.pathname === URL.CART) {
      setNowUrl('cart');
      return;
    }
    setNowUrl('others');
  }, [nowRoute]);

  const onHomeTabClick = () => {
    if (nowRoute.pathname === URL.HOME) {
      window.alert('이미 홈페이지에 있습니다');
      return;
    }
    navigate(URL.HOME);
  };

  const onCartTabClick = () => {
    if (nowRoute.pathname === URL.CART) {
      window.alert('이미 장바구니 페이지에 존재합니다');
      return;
    }
    navigate(URL.CART);
  };

  return (
    <Container>
      <LogoContainer onClick={onHomeTabClick}>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        <MenuButton onMenuButtonClick={onHomeTabClick} isClicked={nowUrl === 'home'}>
          Home
        </MenuButton>
        <MenuButton onMenuButtonClick={onCartTabClick} isClicked={nowUrl === 'cart'}>
          Cart
        </MenuButton>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding-top: 20px;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.GRAY_600};
  background-color: ${({ theme }) => theme.colors.WHITE_500};
`;

const LogoContainer = styled.div`
  margin-left: 50px;
  margin-bottom: 15px;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 40px;
`;

export default Header;
