import { Meta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import Card, { CardProps } from './Card';

export default {
  title: 'Design System/Common/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <div>카드</div>
  </Card>
);

export const SmCard = Template.bind({});
SmCard.args = {
  type: 'sm',
};

export const MdCard = Template.bind({});
MdCard.args = {
  type: 'md',
};

export const LgCard = Template.bind({});
LgCard.args = {
  type: 'lg',
};
