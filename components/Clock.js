import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import moment from 'moment'

import ClockIcon from './ClockIcon'

const ClockWrapper = styled.div`
  display: flex;
  font-size: 11px;
  color: #8e98a3;
`

const LastSeen = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  width: 100%;
  background: #e0e6ec;
  padding: 4px 15px;
`

const Clock = ({ lastSeen, ...props }) => (
  <ClockWrapper>
    <LastSeen>{moment(lastSeen).fromNow()}</LastSeen>
    <ClockIcon lastSeen={lastSeen} />
  </ClockWrapper>
)

export default Clock
