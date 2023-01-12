import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Typography } from '~/components/core';
import { Link } from '~/components/route';
import useTheme from '~/theme/useTheme';
import './styles.scss';

import { embedDashboard } from '@superset-ui/embedded-sdk';
import axios from 'axios';

function HomeComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);

  const fetchGuestTokenFromBackend = useCallback(async () => {
    const login = await axios.post('https://ss.viact.net/api/v1/security/login', {
      username: 'admin',
      password: 'MrPO/MIX8KCinbtFggaAmQ==',
      provider: 'db',
      refresh: true,
    });
    const guest_token = await axios.post(
      'https://ss.viact.net/api/v1/security/guest_token/',
      {
        user: {
          username: 'admin',
          first_name: 'MyApp User',
          last_name: 'MyApp User',
        },
        resources: [
          {
            type: 'dashboard',
            id: 'a000a861-8ce6-4cff-8ff3-9d3a7b0bfb42',
          },
        ],
        rls: [],
      },
      {
        headers: {
          authorization: `Bearer ${login.data.access_token}`,
        },
      },
    );
    return guest_token.data.token;
  }, []);

  useEffect(() => {
    async function embed() {
      const token = await fetchGuestTokenFromBackend();
      embedDashboard({
        id: 'a000a861-8ce6-4cff-8ff3-9d3a7b0bfb42', // given by the Superset embedding UI
        supersetDomain: 'https://ss.viact.net',
        mountPoint: document.getElementById('my-superset-container'), // any html element that can contain an iframe
        fetchGuestToken: async () => token,
        dashboardUiConfig: {
          // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
          hideTitle: true,
          filters: {
            expanded: true,
          },
        },
      });
    }
    embed();
  }, [fetchGuestTokenFromBackend]);
  return (
    <div>
      <Typography>Click below button to navigate to other screen</Typography>
      <Link to='/profile'>
        <Button color={'primary'}>Go to Profile</Button>
      </Link>
      <Link to='/settings'>
        <Button color={'success'}>Go to Settings</Button>
      </Link>
      <Link to='/notifications'>
        <Button color={'secondary'}>Go to Notification</Button>
      </Link>
      <div id='my-superset-container' />
    </div>
  );
}

export default HomeComponent;
