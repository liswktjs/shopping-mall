import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type ButtonChildrenType = { children: string };

export type ButtonProps = ButtonChildrenType &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const Button = React.forwardRef(function Button(
  { children, ...rest }: ButtonProps,
  forwardRef: React.Ref<HTMLButtonElement>,
) {
  return (
    <CustomButton ref={forwardRef} {...rest}>
      {children}
    </CustomButton>
  );
});

const CustomButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BLUE_500};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE_600};
  }
`;

export default Button;
