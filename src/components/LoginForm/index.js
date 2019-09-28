import React from 'react';

import Input from '../Input'
import Button from '../Button'

import './index.css'

class LoginForm extends React.Component {
  state = {
    emailValue: '',
    passwordValue: '',
    count: 0
  }

  render() {
    const {
      count
    } = this.state

    return (
      <form className="login_form" >
        <header>
          <h2>Залогиниться {count}</h2>
        </header>
        <main>
          <Input
            type="email"
            placeholder="email"
            onChange={(event) => {
              this.setState({ emailValue: event.target.value })
            }}
            value={this.state.emailValue}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(event) => {
              this.setState({ passwordValue: event.target.value })
            }}
            value={this.state.passwordValue}
          />
        </main>
        <footer>
          <Button isUpperCase onClick={() => {
            console.log('emailValue > ', this.state.emailValue, 'passwordValue > ', this.state.passwordValue)
          }}>
            Войти
          </Button>
          <Button onClick={() => {
            this.setState({
              emailValue: '',
              passwordValue: ''
            })
          }}>Очистить поля</ Button>

          <Button onClick={() => {
            this.setState({
              count: count + 1
            })
          }}>Счетчик</ Button>
        </footer>
      </form>
    );
  }
}

export default LoginForm;
