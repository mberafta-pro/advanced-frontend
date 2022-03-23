import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TypoH3 } from '.';

export default {
  component: TypoH3,
  title: 'Design System/Shared/Atoms/Typographies/Heading',
} as Meta;

export const TypoH3Story: Story = () => <TypoH3>H3-mon_titre3 (Normal - 18px)</TypoH3>;
