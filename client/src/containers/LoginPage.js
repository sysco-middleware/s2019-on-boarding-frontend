import React from "react";
import Cookies from "universal-cookie";
import { Redirect, withRouter } from "react-router-dom";
import styles from "../css/styles";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { login } from "../actions/node-rest/user-service"

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { getCookie } from "../constants/cookie";
import { adminActions } from "../actions/node-rest/user-service";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.adminActions.login(this.props.login);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { userName, password } = this.state;
    if (userName && password) {
      this.props.login(userName, password);
    }

    /**
     if (testPasswords === 0 && testUserNames === 0) {
      cookies.set("LOGIN", true, { path: "/" });
      this.props.history.push('/');
    } else {
      let name = "LOGIN";
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
     */
  }

  render() {
    const { classes } = this.props;
    const { userName, password } = this.state;
/*
    let checkLogin = getCookie("LOGIN");
    if (checkLogin) {
      return <Redirect to="/" />;
    } else {
      */
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
            <form
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="userName"
                autoComplete="email"
                autoFocus
                value={userName}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
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
const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params;
  return {
    ...params,
    ...state.entities
  };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, {
  adminActions
})(LoginPage)))
