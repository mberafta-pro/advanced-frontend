import deepOrange from '@mui/material/colors/deepOrange';
import Grid from '@mui/material/Grid';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LettersAvatar } from '.';

export default {
  title: 'Design System/Shared/Atoms/Avatars/LettersAvatar',
  component: LettersAvatar,
} as Meta;

export const LettersAvatarStory: Story = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <LettersAvatar>XY</LettersAvatar>
    </Grid>
    <Grid item>
      <LettersAvatar bgColor={deepOrange[500]} size={48}>
        Y
      </LettersAvatar>
    </Grid>
    <Grid item>
      <LettersAvatar bgColor={deepOrange[500]} size={32}>
        Y
      </LettersAvatar>
    </Grid>
    <Grid item>
      <LettersAvatar bgColor={deepOrange[500]} size={24}>
        Y
      </LettersAvatar>
    </Grid>
  </Grid>
);
