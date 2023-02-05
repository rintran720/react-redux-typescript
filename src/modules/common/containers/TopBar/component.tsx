import React from 'react';
import { Box, IconButton, Avatar, Image, Typography } from '~/components/core';
import MenuImg from '~/icons/menu.webp';
import MenuLightImg from '~/icons/menu.light.webp';
import AvatarImg from '~/images/logo2.webp';
import { styled, useAppTheme } from '~/theme/core';

const PREFIX = 'TopBarComponent';
const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  account: `${PREFIX}-account`,
  account_name: `${PREFIX}-account_name`,
  within_icon: `${PREFIX}-within_icon`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    zIndex: 20,
    position: 'relative',
    backgroundColor: theme.palette.primary,
    marginBottom: 60,
  },
  [`&.${classes.content}`]: {
    position: 'fixed',
    height: 60,
    padding: 10,
    width: 'calc(100vw - 240px)',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e5e9ec',
    justifyContent: 'space-between',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
  },
  [`&.${classes.account}`]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const StyledTypography = styled(Typography)(() => ({
  [`&.${classes.account_name}`]: {
    fontSize: '1.1rem',
    marginLeft: 10,
    marginRight: 10,
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${classes.within_icon}`]: {
    width: 54,
    height: 54,
    padding: 8,
  },
}));

function TopBarComponent() {
  const { isDark } = useAppTheme();
  return (
    <StyledBox className={classes.root}>
      <StyledBox className={classes.content}>
        <StyledIconButton className={classes.within_icon}>
          <Image alt='menu' src={isDark ? MenuLightImg : MenuImg} height={36} width={36} />
        </StyledIconButton>
        <StyledBox className={classes.account}>
          <Avatar alt='avatar'>
            <Image src={AvatarImg} alt={'avatar'} height={46} width={46} />
          </Avatar>
          <StyledTypography className={classes.account_name}>John Smith</StyledTypography>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
}

export default TopBarComponent;
