import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Design System/Common/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Simple Button Component',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  children: '버튼',
};
