//index.js

import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot>&#8226;</Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard


//styledComponents.js
import styled from 'styled-components'

export const ListItem = styled.li`
    background: none;
    width:100%;
    disply: flex;
    flex-direction:column;
    align-self:center;
    @media screen and (min-width: 768px) {
        width: 280px;
        margin-right: 20px;
    }
`

export const ThumbNailImage = styled.img`
    width:100%;
`

export const VideoDetails = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
`

export const ProfileImage = styled.img`
    width: 30px;
    height:30px;
    border-radius:50px;
    margin:20px;
`

export const ContentSection = styled.div`
    display:flex;
    flex-direction: column;
    justigy-content: flex-start;
    padding:8px;
`

export const Title = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
`

export const ChannelName = styled.p`
    font-family: 'Roboto';
    font-size: 13px;
    color: ${props => props.color};

`

export const ViewsAndDate = styled.p`
    font-family: 'Roboto';
    font-size:12px;
    color: ${props => props.color};

`

export const Dot = styled.span`
    width:20px;
    height:20px;
    border-radius: 50%;
    padding-left: 5px;
    padding-right: 5px;
`

//index.css
.link {
  text-decoration: none;
}
