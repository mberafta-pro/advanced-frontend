import { Typography } from '@mui/material';
import React from 'react';

export const TypoH2: React.FC = ({ children }) => (
  <Typography variant="h2" color="primary">
    {children}
  </Typography>
);
