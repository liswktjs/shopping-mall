import Logo from './Logo';
import { Meta } from '@storybook/react';

export default {
  title: 'Design System/Common/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Header에 위치한 Logo',
      },
    },
  },
} as Meta;

const Template = () => <Logo />;

export const DefaultLogo = Template.bind({});
