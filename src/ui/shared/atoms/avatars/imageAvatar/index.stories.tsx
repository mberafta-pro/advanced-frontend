import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ImageAvatar } from '.';
import logoImg from '@public/logo192.png';
export default {
  title: 'Design System/Shared/Atoms/Avatars/ImageAvatar',
  component: ImageAvatar,
} as Meta;

export const ImageAvatarStory: Story<{ url: string; size?: number }> = args => <ImageAvatar {...args} />;

ImageAvatarStory.args = {
  url: logoImg,
};
