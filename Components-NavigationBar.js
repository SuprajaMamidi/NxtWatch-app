//index.js
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavigationSmallContainer,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }
        const onClickTabTrending = () => {
          changeTab('Trending')
        }
        const onClickTabGaming = () => {
          changeTab('Gaming')
        }
        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    bgcolor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    bgcolor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    bgcolor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgcolor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationLgContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}
export default NavigationBar

//styledComponents.js
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
    display:flex;
`

export const NavigationLgContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width: 250px;
    height: 92%;
    position:fixed;
    top:60px;
    background-color: ${props => props.bgColor};
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavOptions = styled.ul`
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    list-style-type: none;
    padding:0px;
    margin-top:0px;
`

export const NavLink = styled(Link)`
    text-decoration: none;
`

export const NavLinkContainer = styled.li`
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color: ${props => props.bgColor};
    padding-left: 20px;
`

export const NavText = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    mrgin-left: 15px;
    color: ${props => props.color};
`

export const ContactInfo = styled.div`
    display:flex;
    flex-direction: column;
    padding-left:20px;
`

export const ContactHeading = styled.p`
    font-family: 'Roboto';
    font-size: 25px;
    font-weight:bold;
    color: ${props => props.color};

`

export const ContactIcons = styled.div`
    display:flex;
    align-items: center;
`

export const ContactImage = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50px;
    margin-right: 10px
`

export const ContactNote = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.color};
`

export const NavigationSmallContainer = styled.nav`
    display:flex;
    width: 100%;
    height:60px;
    justify-content: space-between;
    padding:10px;
    background-color: ${props => props.bgColor};
    position:fixed;
    bottom:0;
    align-items: center;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
