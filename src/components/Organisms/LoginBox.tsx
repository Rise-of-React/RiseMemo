import { Button, Checkbox, FormControlLabel, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: theme.spacing(2, 3, 2),
    color: theme.palette.primary.main,
  },
}));

export const LoginBox = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          Sign In
        </Button>
      </form>
    </Paper>
  );
};
