import { Meta } from '@storybook/react';
import { useState } from 'react';

import MenuButton, { MenuButtonProps } from './MenuButton';

export default {
  title: 'App/Button/MenuButton',
  component: MenuButton,
} as Meta;

const Template = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onMenuButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <MenuButton onMenuButtonClick={onMenuButtonClick} isClicked={isClicked}>
      HOME
    </MenuButton>
  );
};

export const DefaultMenuButton = Template.bind({});
