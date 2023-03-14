import styled from '@emotion/styled';

export interface MenuButtonProps {
  children: string;
  isClicked: boolean;
  onMenuButtonClick: () => void;
}

const MenuButton = ({ children, isClicked, onMenuButtonClick }: MenuButtonProps) => {
  return (
    <Container isClicked={isClicked} onClick={onMenuButtonClick}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ isClicked: boolean }>`
  background-color: ${({ theme }) => theme.colors.WHITE_500};
  border: none;
  border-radius: 4px;
  border-bottom: 4px solid transparent;
  padding: 10px 10px 20px 10px;

  width: 100px;
  height: 100%;

  ${({ isClicked, theme }) => isClicked && `border-color: ${theme.colors.BLUE_500}`};

  &:hover {
    border-color: ${({ theme }) => theme.colors.BLUE_500};
    cursor: pointer;
  }
`;

export default MenuButton;
