import React from 'react';
import { Typography } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function ProfileComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Typography>Profile</Typography>
    </div>
  );
}

export default ProfileComponent;
