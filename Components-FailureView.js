//index.js
import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage src={failureImageUrl} alt="failure view" />
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              we are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView

//styledComponents.js
import styled from 'styled-components'

export const FailedView = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background:none;
`

export const FailedImage = styled.img`
    width:200px;
    @media screen and (min-width: 768px) {
        width: 450px;
    }
`

export const FailedHeading = styled.h1`
    font-family: 'Roboto';
    font-size:25px;
    color: ${props => props.headingColor};
    text-align:center;
`

export const FailedNote = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.noteColor};
    text-align:center;
`

export const RetryButton = styled.button`
    border:none;
    background-color: #4f46e5;
    border-radius: 3px;
    color:#ffffff;
    padding-left: 10px;
    pading-right: 10px;
    padding-top:5px;
    padding-bottom:5px;
    font-family: 'Roboto';
    font-size: 15px;
`

