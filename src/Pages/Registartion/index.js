import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class RegistrationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      registrationError: '',
    }
  }

  handleRegistration = () => {
    const {username, password} = this.state

    // Check if username is already registered
    const existingUsername = Cookies.get('username')
    if (existingUsername === username) {
      this.setState({registrationError: 'This username is already registered'})
    } else if (username === '' || password === '') {
      this.setState({registrationError: 'user details should not be empty'})
    } else {
      // Store user details in cookies
      Cookies.set('username', username, {expires: 36})
      Cookies.set('password', password, {expires: 36})

      // Redirect to login page upon successful registration
      this.props.history.replace('/login')
    }
  }

  render() {
    const {username, password, registrationError} = this.state

    return (
      <div className="registration-page-container">
        <h1>Dont have an coount? Register Please</h1>
        <div className="register-details">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={e => this.setState({username: e.target.value})}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
        </div>
        <button onClick={this.handleRegistration}>Register</button>
        <p>{registrationError}</p>
        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    )
  }
}

export default RegistrationPage