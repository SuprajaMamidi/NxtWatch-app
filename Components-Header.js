//index.js

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LogoLink,
  NavbarHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogoutIconButton,
  LogoutButton,
  ProfileImage,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)


//styledComponents.js

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
    position:fixed;
    top:0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    height:60px;
    width:100%;
    background-color: ${props => props.bgColor};
    @media screen and (min-width: 768px) {
        padding-left: 30px;
        padding-right:30px;
    }
`

export const HeaderLogo = styled.img`
    width:80px;
    height:30px;
    @media screen and (min-width: 768px) {
        width:100px;
        height:40px;
    }
`

export const ActionsContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items:center;
`

export const ThemeButton = styled.button`
    background: none;
    border:none;
    margin-right: 10px;
`

export const LogoutButton = styled.button`
    border:1px solid;
    font-family: 'Roboto';
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius: 5px;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    border-color: ${props => props.color};
    margin-left: 6px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const LogoutIconButton = styled.button`
    background: none;
    border:none;
    @media screen and (min-width: 768px) {
        display:none;
    }
`

export const ProfileImage = styled.img`
    width: 30px;
    height:30px;
    margin-right: 10px;
`
export const ModalContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:150px;
    width:250px;
    background-color: #cbd5e1;
    border-radius: 10px;
    padding:20px;
    @media screen and (min-width: 768px) {
        height: 200px;
        width: 400px;
    }
`

export const CloseButton = styled.button`
    background-color:transparent;
    border:1px solid grey;
    padding:8px;
    padding-right:12px;
    padding-left:12px;
    color:grey;
    margin: 12px;
    outline:none;
    cursor:pointer;
    border-radius: 6px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size:12px;
    @media screen and (min-width:768px) {
        font-size:15px;
        padding: 13px;
        padding-right: 20px;
        padding-left: 20px;
    }
`

export const ConfirmButton = styled.button`
    align-self: flex-end;
    background-color: #3b82f6;
    color:white;
    padding:8px;
    padding-right:12px;
    padding=left:12px;
    border:1px solid #3b82f6;
    margin:10px;
    outline:none;
    coursor:pointer;
    border-radius:6px;
    font-family:'Roboto';
    font-weight:bold;
    font-size:12px;
    @media screen and (min-width: 768px) {
        font-size:15px;
        padding: 13px;
        padding-right: 20px;
        padding-left: 20px;
    }
`

export const ModalDesc = styled.p`
    font-family:'Roboto';
    font-size:15px;
    margin:10px;
    color:black;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`

export const ButtonsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export const LogoLink = styled(Link)`
    text-decoration : none;
`
