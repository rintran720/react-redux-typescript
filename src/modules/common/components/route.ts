import { Link as MuiLink } from '@mui/material';
import { styled } from '~/theme/core';

export const Link = styled(MuiLink)(() => ({
  ['&']: {
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
