import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import moment from 'moment'

import Clock from './Clock'

const FriendTitleWrapper = styled.div`
  display: block;
`

const FriendTitleH3 = styled.h3`
  flex: 1 0 auto;
  width: auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #32325d;
  margin: 0 0 7.5px;
  text-transform: capitalize;
`

const FriendTitle = ({ children, name, ...props }) => (
  <FriendTitleWrapper>
    <FriendTitleH3>{name}</FriendTitleH3>
  </FriendTitleWrapper>
)

export default FriendTitle
