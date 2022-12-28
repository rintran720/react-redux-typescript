import React from 'react';
import { Typography } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function DashboardComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Typography>Dashboard</Typography>
    </div>
  );
}

export default DashboardComponent;
