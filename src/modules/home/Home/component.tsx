import React from 'react';
import { Button, Text } from '~/components/core';
import { Link } from '~/components/route';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function HomeComponent() {
	const theme = useTheme();
	// const themedStyles = styles(theme);
	return (
		<div>
			<Text>Click below button to navigate to other screen</Text>
			<Link to='/profile'>
				<Button color={'primary'}>Go to Profile</Button>
			</Link>
			<Link to='/profile'>
				<Button color={'success'}>Go to Settings</Button>
			</Link>
			<Link to='/profile'>
				<Button color={'secondary'}>Go to Notification</Button>
			</Link>
		</div>
	);
}

export default HomeComponent;
