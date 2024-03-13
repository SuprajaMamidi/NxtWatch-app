//index.js
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFindImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound

//styledComponents.js
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};
    min-height: 92vh;
    margin-top: 60px;
    margin-bottom: 60px;
    overflow-y: auto;
    @media screen and (min-width: 768px) {
        margin-left: 250px;
        margin-bottom: 0px;
    }
`

export const NotFoundVideosView = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:none;
`

export const NotFoundVideosImage = styled.img`
    width:200px;
    @media screen and (min-width: 768px) {
        width:450px;
    }
`

export const NotFoundVideosHeading = styled.h1`
    font-family: 'Roboto';
    font-size:25px;
    color: ${props => props.headingColor};
    text-align: center;
`

export const NotFoundVideosNote = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.noteColor};
    text-align: center;
`
