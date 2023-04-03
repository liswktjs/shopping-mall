import { Meta, Story } from '@storybook/react';
import Chip, { ChipProps } from './Chip';

export default {
  title: 'Design System/Common/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = args => <Chip {...args} />;

export const DefaultChip = Template.bind({});
DefaultChip.args = {
  name: 'price',
  color: '#FFDE00',
};
