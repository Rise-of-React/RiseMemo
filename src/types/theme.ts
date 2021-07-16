import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';

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
  overrides: {
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: '#A024DA',
      },
    },
    MuiPickersDay: {
      day: {
        color: '#A024DA',
      },
      dayDisabled: {
        color: '#A024DA',
      },
    },
  },
});

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends overridesNameToClassKey {}
}
