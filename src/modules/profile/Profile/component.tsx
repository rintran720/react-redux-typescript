import React from 'react';
import { Text } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function ProfileComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Text>Profile</Text>
    </div>
  );
}

export default ProfileComponent;
