//index.js
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default LoginForm


//styledComponents.js
import styled from 'styled-components'

export const AppContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    min-height: 100vh;
`

export const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    padding:30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 350px;
`

export const LoginLogo = styled.img`
    width: 180px;
    align-self: center;
    margin-bottom: 15px;
`

export const InputContainer = styled.div`
    width: 100%;
    margin-top: 15px;
`

export const LoginButton = styled.button`
    width: 100%;
    background-color: #4f46e5;
    border:none;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 15px;
    height:30px;
    color:#ffffff;
    margin-top: 20px;
`

export const SubmitError = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: #ff0b37;
`
export const InputLabel = styled.label`
    font-family: 'Roboto';
    font-size: 12px;
    color:#475569;
    font-weight:500;
`

export const UserInput = styled.input`
    font-family: 'Roboto';
    font-size:15px;
    color:#475569;
    outline:none;
    padding:8px;
    width:100%;
    border:1px solid #94a3b8;
    border-radius: 4px;
    margin-top: 5px;
`

export const CheckboxContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    margin: 12px;
`

export const Checkbox = styled.input`
    width: 15px;
    height:15px;
    margin-right: 5px;
`

export const ShowPassword = styled.label`
    font-family: 'Roboto';
    font-size: 15px;
    color:#1e293b;
`
