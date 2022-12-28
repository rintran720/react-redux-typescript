import React from 'react';
import { Typography } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function SettingsComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Typography>Settings</Typography>
    </div>
  );
}

export default SettingsComponent;
