import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import hashInt from 'hash-int'
import colormap from 'colormap'

import Stripes from './Stripes'

import getAvatar from '../lib/avatar'

let colors = colormap({
  colormap: 'jet',
  nshades: 20,
  format: 'hex',
  alpha: 1
})

const getIntFromId = id => {
  let numericId = id.replace(/[A-z]+/g, '')
  return hashInt(parseInt(numericId))
}

const getRandomColors = id => {
  let idHash = getIntFromId(id).toString()
  let numbers = []

  for (var i = 0; i < 3; i += 1) {
    let first = Math.floor(idHash.slice(idHash.length - 1) * 1.5)
    let second = Math.floor(idHash.length * 1.5)
    numbers.push(first, second)
  }

  return [colors[numbers[0]], colors[numbers[1]], colors[numbers[2]]]
}

const AvatarWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  height: 0;
  padding: 0 0 75%;
  padding-top: 7.5px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
  background: #a8b6c7;

  svg {
    max-width: 75%;
    position: absolute;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0s linear 0.3s;
    -webkit-transform: scaleX(${props => (props.hover ? '-1' : '1')});
    transform: scaleX(${props => (props.hover ? '-1' : '1')});

    path {
      transition: all 0.15s ease 0.15s;
      transform: translateY(${props => (props.hover ? '0.5px' : '1px')});
    }
  }
`

const Avatar = ({ name, id, hover, ...props }) => (
  <AvatarWrapper hover={hover}>
    <Stripes randomColors={getRandomColors(id)} />
    <SVGInline svg={getAvatar(name)} />
  </AvatarWrapper>
)

Avatar.propTypes = {
  name: PropTypes.string,
  hover: PropTypes.bool
}

Avatar.defaultProps = {
  name: 'John',
  hover: false
}

export default Avatar
