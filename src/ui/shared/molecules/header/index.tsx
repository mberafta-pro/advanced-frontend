import { Grid, Paper, styled } from '@mui/material';
import React from 'react';
import { Void } from '@shared/types';
import { LettersAvatar } from '@ui/shared/atoms/avatars/lettersAvatar';
import { GlobalSearchInput } from '@ui/shared/atoms/inputs/globalSearch';

const StyledPaper = styled(Paper)({
  position: 'sticky',
  top: 0,
  width: '100%',
});

interface Props {
  handleSearch: Void<string>;
}

export const Header = () => {
  return (
    <StyledPaper elevation={3} style={{ padding: 8 }}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <GlobalSearchInput handleChange={e => {}} />
        </Grid>
        <Grid item xs={2}>
          <Grid container justifyContent={'flex-end'}>
            <LettersAvatar>MB</LettersAvatar>
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};
