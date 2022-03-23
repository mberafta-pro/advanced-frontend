import { Typography } from '@mui/material';
import React from 'react';

export const TypoH3: React.FC = ({ children }) => (
  <Typography variant="h3" color="primary">
    {children}
  </Typography>
);
