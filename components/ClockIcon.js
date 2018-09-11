import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import moment from 'moment'
import colormap from 'colormap'

let customMap = [
  { index: 0, rgb: [255, 123, 123] },
  { index: 0.6, rgb: [255, 162, 123] },
  { index: 0.8, rgb: [245, 190, 88] },
  { index: 1, rgb: [62, 207, 142] }
]

let colors = colormap({
  colormap: customMap,
  nshades: 5,
  format: 'hex',
  alpha: 1
})

const getColor = date => {
  let timestamp = moment(date)
  let twoWeeksAgo = moment().subtract(2, 'weeks')
  let fourWeeksAgo = moment().subtract(4, 'weeks')
  let sixWeeksAgo = moment().subtract(6, 'weeks')
  let eightWeeksAgo = moment().subtract(8, 'weeks')

  if (timestamp.isBefore(eightWeeksAgo)) {
    return colors[0]
  } else if (timestamp.isBefore(sixWeeksAgo)) {
    return colors[1]
  } else if (timestamp.isBefore(fourWeeksAgo)) {
    return colors[2]
  } else if (timestamp.isBefore(twoWeeksAgo)) {
    return colors[3]
  }

  return colors[4]
}

const ClockIconWrapper = styled.div`
  background: #e0e6ef;
  position: relative;
`

const HealthIcon = styled.div`
  background: ${props => getColor(props.lastSeen)};
  width: 33px;
  height: 33px;
  border-radius: 30px;
  border: 7.5px solid #e0e6ef;
  margin-top: -11.25px;
  margin-right: 7.5px;
`

const FriendInfo = ({ children, lastSeen, ...props }) => (
  <ClockIconWrapper>
    <HealthIcon lastSeen={lastSeen} />
  </ClockIconWrapper>
)

export default FriendInfo
