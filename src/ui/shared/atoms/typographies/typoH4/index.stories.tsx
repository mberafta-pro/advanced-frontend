import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TypoH4 } from '.';

export default {
  component: TypoH4,
  title: 'Design System/Shared/Atoms/Typographies/Heading',
} as Meta;

export const TypoH4Story: Story = () => <TypoH4>H4-mon_titre4 (Bold - 16px)</TypoH4>;
