import { Meta, Story } from '@storybook/react';
import Skeleton, { SkeletonProps } from './Skeleton';

export default {
  title: 'Design System/Common/Skeleton',
  component: Skeleton,
} as Meta;

const Template = (args: SkeletonProps) => <Skeleton {...args} />;

export const DefaultSkeleton: Story<SkeletonProps> = Template.bind({});
DefaultSkeleton.args = {
  width: 500,
  height: 500,
};
