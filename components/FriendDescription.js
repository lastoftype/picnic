import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const FriendDescriptionWrapper = styled.p`
  font-size: 12px;
  margin: 0 0 15px;
  color: #8898aa;
  line-height: 1.4;
  height: 2.8em;
`

const FriendInfo = ({ children, description, ...props }) => (
  <FriendDescriptionWrapper>{description}</FriendDescriptionWrapper>
)

export default FriendInfo
