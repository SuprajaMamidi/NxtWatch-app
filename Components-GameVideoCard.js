//index.js
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <GamingListItem>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
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
    text-decoration:none;
`

export const GamingListItem = styled.li`
    background:none;
    width:100%;
    display:flex;
    flex-direction:column;
    @media screen and (min-width: 768px) {
        width: 280px;
        margin-right: 20px;
    }
`

export const GamingThumbNailImage = styled.img`
    width:100vw;
    height: 300px;
    align-self:center;
    @media screen and (min-width: 768px) {
        width: 280px;
    }
`

export const GamingContentSection = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:8px;
`

export const GamingTitle = styled.p`
    font-family: 'Roboto';
    font-size:15px;
    color: ${props => props.color};
    margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
    font-family: 'Roboto';
    font-size:12px;
    color: ${props => props.color};
`

