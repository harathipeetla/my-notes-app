import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: ''
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const storedUsername = Cookies.get('username');
    const storedPassword = Cookies.get('password');
    if (username === storedUsername && password === storedPassword) {
      this.props.history.push('/home');
    } else {
      this.setState({ loginError: 'Invalid email or password' });
    }
  };

  componentDidMount() {
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (isLoggedIn) {
      this.props.history.replace('/home');
    }
  }

  render() {
    const { username, password, loginError } = this.state;

    return (
      <div className="sign-container-page">
        <div className="sign-in-page-text">
          <h1>Login</h1>
        </div>
        <div className="sign-in-page-login">
          <h1 className="sign-heading">Sign In</h1>
          <p className="sign-para">Sign in to your account</p>
          <div className="login-details">
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <button onClick={this.handleLogin}>Login</button>
          <p>{loginError}</p>
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
    );
  }
}

// Use withRouter to inject the history prop into the LoginPage component
export default withRouter(LoginPage);
