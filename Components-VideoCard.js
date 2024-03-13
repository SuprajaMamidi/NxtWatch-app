//index.js
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views <TrendingDot>&#8226;</TrendingDot>
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoCard


//styledComponents.js
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
    text-decoration: none;
`

export const TrendingListItem = styled.li`
    background: none;
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding-left: 40px;
    }
`

export const TrendingThumbNailImage = styled.img`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 300px;
    }
`

export const TrendingVideoDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

export const TrendingProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 20px;
    @meida screen and (min-width: 768px) {
        margin-left: 20px;
    }
`

export const TrendingContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px;
    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`

export const TrendingTitle = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
`

export const TrendingChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 13px;
    color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => props.color};
`
export const TrendingDot = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 5px;
`
