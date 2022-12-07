import React from 'react';
import { Text } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function NotificationsComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Text>Notifications</Text>
    </div>
  );
}

export default NotificationsComponent;
