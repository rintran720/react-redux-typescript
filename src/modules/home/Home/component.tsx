import React, { useCallback } from 'react';
import { Button, Typography, Box } from '~/components/core';
import { Link } from '~/components/route';
import { useAppTheme, styled } from '~/theme/core';

const PREFIX = 'HomeComponent';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  intro: `${PREFIX}-intro`,
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
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
    setAppTheme(mode == 'dark' ? 'light' : 'dark');
  }, [mode, setAppTheme]);

  return (
    <Root className={classes.root}>
      <StyledTypography className={classes.content}>Hi {name}, Click to change theme of website</StyledTypography>
      <Button onClick={changeThemeMode}>{mode}</Button>
      <StyledTypography>Click below button to navigate to other screen</StyledTypography>
      <Link href='/profile'>
        <Button color={'primary'}>Go to Profile</Button>
      </Link>
      <Link href='/settings'>
        <Button color={'success'}>Go to Settings</Button>
      </Link>
      <Link href='/notifications'>
        <Button color={'secondary'}>Go to Notification</Button>
      </Link>
    </Root>
  );
}

export default HomeComponent;
