import { Meta, Story } from '@storybook/react';
import React from 'react';
import { GlobalSearchInput, GlobalSearchInputProps } from '.';
export default {
  component: GlobalSearchInput,
  title: 'Design System/Shared/Atoms/Inputs/GlobalSearch',
} as Meta;

export const GlobalSearchInputStory: Story<GlobalSearchInputProps> = args => <GlobalSearchInput {...args} />;

GlobalSearchInputStory.args = {
  handleChange: (value: string) => {
    alert(value);
  },
};
