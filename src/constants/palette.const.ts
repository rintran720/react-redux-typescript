import { colors } from './colors.const';

export const palette: any = Object.keys(colors.light).map((key) => ({
  [key]: {
    light: (colors.light as any)[key],
    dark: (colors.dark as any)[key],
  },
}));
