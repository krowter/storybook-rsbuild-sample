import { StoryObj, Meta } from '@storybook/react';
import { Counter as CounterBase } from './counter';

const meta: Meta<typeof CounterBase> = {
  title: 'Pages/Tag',
  component: CounterBase,
  parameters: {
    
  }
};
export default meta;

type Story = StoryObj<typeof CounterBase>;

export const Counter: Story = {};
