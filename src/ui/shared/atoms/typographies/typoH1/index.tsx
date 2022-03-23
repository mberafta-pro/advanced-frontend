import { Typography } from '@mui/material';
import React from 'react';

export const TypoH1: React.FC = ({ children }) => (
  <Typography variant="h1" color="primary">
    {children}
  </Typography>
);
