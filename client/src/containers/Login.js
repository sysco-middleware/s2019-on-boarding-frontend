import React from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import styles from '../css/styles';
import { withStyles } from "@material-ui/core/styles";

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { getCookie } from '../constants/cookie';




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(event) {
    this.setState({ userName: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let internUser = "admin";
    let internPassword = "123321";
    let testPasswords = internPassword.localeCompare(this.state.password);
    let testUserNames = internUser.localeCompare(this.state.userName);
    const cookies = new Cookies();
    if (testPasswords === 0 && testUserNames === 0) {
      cookies.set("LOGIN", true, { path: "/" });
      this.props.history.push('/');
    } else {
      let name = "LOGIN";
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }

  render() {
    const { classes } = this.props;

    let checkLogin = getCookie("LOGIN");
    if (checkLogin) { return <Redirect to='/' /> }else{
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.value}
            onChange={this.handleChangeUser}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.value}
            onChange={this.handleChangePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    );
  }
}
}

export default withStyles(styles)(Login);
