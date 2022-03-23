import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TypoH1 } from '.';

export default {
  component: TypoH1,
  title: 'Design System/Shared/Atoms/Typographies/Heading',
} as Meta;

export const TypoH1Story: Story = () => <TypoH1>H1-mon_titre1 (Bold - 24px)</TypoH1>;
