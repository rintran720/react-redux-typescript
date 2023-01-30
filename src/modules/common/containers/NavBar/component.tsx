import React from 'react';
import { useNavigate } from '~/navigation/navigationHooks';
import Logo1 from '~/images/logo1.png';
import { Box, Image } from '~/components/core';
import NavList from '~/containers/NavList';
import { styled } from '~/theme/core';

const PREFIX = 'NavBarComponent';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  logo_container: `${PREFIX}-logo_container`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: 240,
    position: 'relative',
  },
  [`&.${classes.content}`]: {
    position: 'fixed',
    width: 'inherit',
    height: '100%',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #e5e9ec',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
  },
  [`&.${classes.logo_container}`]: {
    height: 80,
    width: '100%',
    padding: '10px 0px 10px 0px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function NavBarComponent() {
  const navigate = useNavigate();

  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.content}>
        <StyledBox className={classes.logo_container}>
          <Image className='logo' alt='home' src={Logo1} onClick={() => navigate('/')} height={60} />
        </StyledBox>
        <NavList />
      </StyledBox>
    </StyledBox>
  );
}

export default NavBarComponent;
