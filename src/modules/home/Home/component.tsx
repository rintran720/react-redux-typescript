import React, { useCallback } from 'react';
import { Button, Typography } from '~/components/core';
import { Link } from '~/components/route';
import './styles.scss';
import { styled } from '@mui/material';
import useAppTheme from '../../../theme/useAppTheme';

const PREFIX = 'HomeComponent';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  intro: `${PREFIX}-intro`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: theme.palette.primary.main,
  },
}));

const TypographyR = styled(Typography)(({ theme }) => ({
  [`&.${classes.cta}`]: {
    color: theme.palette.primary.dark,
  },
  [`&.${classes.content}`]: {
    color: theme.palette.primary.light,
  },
  [`&.${classes.intro}`]: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export interface HomeComponentProps {
  name?: string;
}

function HomeComponent({ name }: HomeComponentProps) {
  const { mode, setAppTheme } = useAppTheme();
  const changeThemeMode = useCallback(() => {
    console.log('set theme from', mode);
    setAppTheme(mode == 'dark' ? 'light' : 'dark');
  }, [mode, setAppTheme]);

  return (
    <Root className={classes.root}>
      <TypographyR className={classes.cta}>Hi {name}</TypographyR>
      <TypographyR className={classes.content}>Hi {name}</TypographyR>
      <Button onClick={changeThemeMode}>{mode}</Button>
      <TypographyR>Click below button to navigate to other screen</TypographyR>
      <Link to='/profile'>
        <Button color={'primary'}>Go to Profile</Button>
      </Link>
      <Link to='/settings'>
        <Button color={'success'}>Go to Settings</Button>
      </Link>
      <Link to='/notifications'>
        <Button color={'secondary'}>Go to Notification</Button>
      </Link>
    </Root>
  );
}

export default HomeComponent;
