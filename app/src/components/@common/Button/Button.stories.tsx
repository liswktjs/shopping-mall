import { ThemeProvider } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { theme } from '../../../style/theme';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Simple Button Component',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  children: '버튼',
};
