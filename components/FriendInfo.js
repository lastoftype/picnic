import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const FriendInfoWrapper = styled.div`
  background: purple;
  padding: 15px;
  border-radius: 0 0 4px 4px;
  background: #f6f9fc;
  position: relative;
`

const FriendInfo = ({ children, ...props }) => (
  <FriendInfoWrapper>{children}</FriendInfoWrapper>
)

export default FriendInfo
