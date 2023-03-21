import { Meta } from '@storybook/react';
import Loading from './Loading';

export default {
  title: 'Design System/Loading',
  content: Loading,
} as Meta;

const Template = () => <Loading />;

export const DefaultLoading = Template.bind({});
