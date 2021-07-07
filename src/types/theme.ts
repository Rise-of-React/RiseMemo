import { createMuiTheme } from '@material-ui/core/styles';
export const defaultTheme = createMuiTheme({
  palette: {
    background: {
      default: '#ede7f6',
      paper: '#ffffff',
    },
    primary: {
      main: '#A55BCE',
      light: '#dfc4ed',
      dark: '#6a1b9a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#6a1b9a',
      hint: '#A024DA',
    },
  },
});
