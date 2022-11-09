import { Button as MUIButton, ButtonProps } from '@mui/material';
import * as React from 'react';

export function Button({ ...props }: ButtonProps) {
	return <MUIButton {...props} variant='contained' />;
}
