export const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    red: 'red',
    green: 'green',
    orange: 'orange',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};
export const themeDark = {
  ...theme,
  colors: {
    ...theme.colors,
    black: '#000',
    white: '#fff',
  },
};
export const themeLight = {
  ...theme,
  colors: {
    ...theme.colors,
    black: '#212121',
    white: '#fff',
  },
};
