import { Meta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'App/Layout/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: '서비스의 상단에 위치하는 Header ',
        story: '서비스의 상단에 위치하는 Header',
      },
    },
  },
} as Meta;

const Template = () => <Header />;
export const DefaultHeader = Template.bind({});
