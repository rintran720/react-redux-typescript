import React from 'react';
import { Typography } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function NotificationsComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Typography>Notifications</Typography>
    </div>
  );
}

export default NotificationsComponent;
