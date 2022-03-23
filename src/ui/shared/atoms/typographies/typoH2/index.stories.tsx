import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TypoH2 } from '.';

export default {
  component: TypoH2,
  title: 'Design System/Shared/Atoms/Typographies/Heading',
} as Meta;

export const TypoH2Story: Story = () => <TypoH2>H2-mon_titre2 (Bold - 18px)</TypoH2>;
