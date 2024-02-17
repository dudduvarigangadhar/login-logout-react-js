import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

// const LoginApp = () => <Login />
class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div>
          <div className="login-section">
            <Message isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
              <Logout logout={this.onClickButton} />
            ) : (
              <Login login={this.onClickButton} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
