import Avatar from '@mui/material/Avatar';
import React from 'react';

interface Props {
  bgColor?: string;
  size?: number;
}

export const LettersAvatar: React.FC<Props> = ({ bgColor, size, children }) => {
  const style = {
    ...(bgColor && { backgroundColor: bgColor }),
    ...(size && { width: size, height: size }),
  };

  return <Avatar style={style}>{children}</Avatar>;
};
