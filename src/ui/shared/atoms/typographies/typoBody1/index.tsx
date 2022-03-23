import { Typography } from '@mui/material';
import React from 'react';

export const TypoBody1: React.FC = ({ children }) => (
  <Typography variant="body1" color="primary">
    {children}
  </Typography>
);
