import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';

const MapFont = {
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Ultralight',
  '200': 'Light',
  '300': 'Thin',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semibold',
  '700': 'Bold',
  '800': 'Heavy',
  '900': 'Black',
};

export function Text({ style, ...props }: TypographyProps) {
  const { fontWeight = '400', fontStyle } = style || {};

  const fontFamily = `SFProDisplay-${(MapFont as any)[fontWeight]}${fontStyle === 'italic' ? 'Italic' : ''}`;

  return <Typography {...props} style={{ fontFamily, ...style }} />;
}
