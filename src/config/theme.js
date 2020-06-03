import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  defaultMode: "light",
  global: {
    colors: {
      brand: '#1278CE',
      softBlue: '#6BBBFF',
      text: {
        light: '#3A464F',
        dark: 'white',
      },
      textGrey: '#98A4AE',
      grey: '#f9f9f9',
      borderGrey: '#D3D3D3',
    },
    font: {
      family: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    },
  },
  text: {
    small: {
      size: '14px',
      height: '21px'
    },
    medium: {
      size: '16px',
      height: '24px'
    },
    large: {
      size: '24px',
      height: '36px'
    },
  }
});

export default theme;
