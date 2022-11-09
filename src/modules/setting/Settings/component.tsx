import React from 'react';
import { Text } from '~/components/core';
import useTheme from '~/theme/useTheme';
import './styles.scss';

function SettingsComponent() {
	const theme = useTheme();
	// const themedStyles = styles(theme);
	return (
		<div>
			<Text>Settings</Text>
		</div>
	);
}

export default SettingsComponent;
