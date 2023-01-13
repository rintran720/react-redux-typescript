import React from 'react';
import { Box, IconButton, Avatar } from '~/components/core';
import MenusImg from '~/icons/menus.webp';
import AvatarImg from '~/images/logo2.webp';
import './styles.scss';
import { Typography } from '@mui/material';

function TopBarComponent() {
  return (
    <Box className='top-bar'>
      <Box className='top-bar__content'>
        <IconButton>
          <img className='within-icon' alt='menu' src={MenusImg} />
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
