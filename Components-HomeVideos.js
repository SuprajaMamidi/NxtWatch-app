//index.js
import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No search results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos


//styledComponents.js

import styled from 'styled-components'

export const NoVideosView = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background:none;
`

export const NoVideosImage = styled.img`
    width: 200px;
    @media screen and (min-width: 768px) {
        width: 450px;
    }
`

export const NoVideosHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 25x;
    color: ${props => props.headingColor};

`

export const NoVideosNote = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
    border:none;
    background-color: #4f46e5;
    border-radius:3px;
    color:#ffffff;
    padding-left: 10px;
    padding-righ:10px;
    padding-top: 5px;
    padding-bootom: 5px;
    font-family: 'Roboto';
    font-size: 15px;
`

export const VideoCardList = styled.ul`
    list-style-type:none;
    padding:0;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`
