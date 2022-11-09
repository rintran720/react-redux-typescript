import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';
const MapFont = {
	normal: 'Regular',
	bold: 'Bold',
	'100': 'Light',
	'200': 'Light',
	'300': 'Thin',
	'400': 'Regular',
	'500': 'Regular',
	'600': 'SemiBold',
	'700': 'Bold',
	'800': 'ExtraBold',
	'900': 'Black',
};

export function Text({ style, ...props }: TypographyProps) {
	const { fontWeight = '400', fontStyle } = style || {};

	const fontFamily = `NotoSans-${(MapFont as any)[fontWeight]}${fontStyle === 'italic' ? 'Italic' : ''}`;

	return <Typography {...props} style={{ fontFamily, ...style }} />;
}
