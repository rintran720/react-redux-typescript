import React from 'react';
import { Box, IconButton, Avatar } from '~/components/core';
import MenuImg from '~/icons/menu.webp';
import MenuLightImg from '~/icons/menu.light.webp';
import AvatarImg from '~/images/logo2.webp';
import './styles.scss';
import { Typography } from '@mui/material';
import { useAppTheme } from '~/theme/core';

function TopBarComponent() {
  const { isDark } = useAppTheme();
  return (
    <Box className='top-bar'>
      <Box className='top-bar__content'>
        <IconButton>
          <img className='within-icon' alt='menu' src={isDark ? MenuLightImg : MenuImg} />
        </IconButton>
        <Box className='account'>
          <Avatar alt='avatar' src={AvatarImg} />
          <Typography className='account__name' component={'span'}>
            John Smith
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TopBarComponent;
