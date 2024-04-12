
import {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './Pages/LoginPage'
import Homepage from './Pages/HomePage'
import RegistrationPage from './Pages/Registartion'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App