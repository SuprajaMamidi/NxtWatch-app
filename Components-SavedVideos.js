//index.js

import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos


//styledComponents.js
import styled from 'styled-components'

export const SavedContainer = styled.div`
    background-color: ${props => props.bgColor};
    min-height: 100vh;
    margin-top: 60px;
    margin-bottom: 60px;
    overflow-y:auto;
    @media screen and (min-width: 768px) {
        margin-left: 250px;
        margin-bottom:0px;
    }
`

export const SavedVideoTitle = styled.div`
    display: flex;
    align-items: center;
`

export const SavedTitleIconContainer = styled.div`
    width: 40px;
    height:40px;
    border-radius: 80px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
        margin-left: 40px;
    }
`

export const SavedText = styled.h1`
    font-family: 'Roboto';
    font-size: 25px;
    color: ${props => props.color};
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
`

export const SavedVideoList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`

export const NoSavedVideosView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
`

export const NoSavedVideosImage = styled.img`
    width: 200px;
    @media screen and (min-width: 768px) {
        width: 450px;
    }
`

export const NoSavedVideosHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 25px;
    color: ${props => props.headingColor};
    text-align: center;
`

export const NoSavedVideosNote = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.noteColor};
    text-align: center;
`
