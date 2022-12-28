import React from 'react';
import { Box, MenuItem, MenuList, Typography } from '~/components/core';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Link } from '~/components/route';
import './styles.scss';

function NavListComponent() {
  return (
    <Box className='nav-list'>
      <MenuList>
        <MenuItem>
          <Link className='nav-list__link' to={'/profile'}>
            <ListItemIcon>
              <SendIcon fontSize='small' />
            </ListItemIcon>
            <Typography variant='inherit'>Profile</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className='nav-list__link' to={'/settings'}>
            <ListItemIcon>
              <PriorityHighIcon fontSize='small' />
            </ListItemIcon>
            <Typography variant='inherit'>Settings</Typography>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link className='nav-list__link' to={'/notifications'}>
            <ListItemIcon>
              <DraftsIcon fontSize='small' />
            </ListItemIcon>
            <Typography variant='inherit' noWrap>
              Notification
            </Typography>
          </Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
}

export default NavListComponent;
