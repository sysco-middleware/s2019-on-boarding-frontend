import React from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";


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
      return <Redirect to="/startProcess/list" />; // does not work
    } else {
      let name = "LOGIN";
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }
  deleteCookie() {
    let name = "LOGIN";
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="User Name"
          type="text"
          value={this.state.value}
          onChange={this.handleChangeUser}
        />
        <input
          placeholder="Password"
          type="text"
          value={this.state.value}
          onChange={this.handleChangePassword}
        />
        <input type="button" value="Login" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default Login;
