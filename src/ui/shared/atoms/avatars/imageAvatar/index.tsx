import Avatar from '@mui/material/Avatar';
import React from 'react';

interface Props {
  url: string;
  size?: number;
}
export const ImageAvatar: React.FC<Props> = ({ url, size }) => {
  const style = { ...(size && { width: size, height: size }) };
  return <Avatar src={url} style={style} />;
};
