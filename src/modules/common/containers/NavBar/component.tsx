import React from 'react';
import { useNavigate } from '~/navigation/navigationHooks';
import './styles.scss';
import Logo1 from '~/images/logo1.png';
import { Box } from '~/components/core';
import NavList from '~/containers/NavList';

function NavBarComponent() {
  const navigate = useNavigate();

  return (
    <Box className='nav-bar'>
      <Box className='nav-bar__boundary'>
        <Box className='logo-container'>
          <img className='logo' alt='home' src={Logo1} onClick={() => navigate('/')} />
        </Box>
        <NavList />
      </Box>
    </Box>
  );
}

export default NavBarComponent;
