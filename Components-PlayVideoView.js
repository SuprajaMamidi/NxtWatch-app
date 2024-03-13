//index.js
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot>&#8226;</PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView

//styledComponents.js
import styled from 'styled-components'

export const VideoPlayer = styled.div`
    padding: 20px;
`
export const PlayVideoTitle = styled.p`
    font-family: 'Roboto';
    font-size: 25px;
    color: ${props => props.color};
`

export const PlayVideoStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`

export const PlayVideoStatus = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => props.color};
`

export const PlayVideoDot = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 5px;
`

export const PlaySocialButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const SocialButton = styled.button`
    border: none;
    background: none;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #2563eb;
    color: ${props => props.color};
`

export const ButtonText = styled.span`
    margin-left: 5px;
    color: #2563eb;
    @media screen and (max-width: 576px) {
        display: none;
    }
`

export const HrLine = styled.hr`
    border: 1px solid #909090;
`

export const ChannelContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
`

export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 20px;
`

export const ChannelInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
    margin: 0px;
`

export const ChannelSubscribers = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => props.color};
`

export const ChannelDescription = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
`

export const BtnContainer = styled.div`
    display:flex;
    background: none;
`
