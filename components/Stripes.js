import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import colormap from 'colormap'

const Stripes = styled.div`
  position: absolute;
  left: -50px;
  right: -50px;
  top: 0;
  opacity: 1;
  bottom: 0;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: white;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ' ';
    display: block;
    opacity: 0.4;
    background: linear-gradient(
      45deg,
      ${props => `${props.randomColors[0]}, ${props.randomColors[1]}`}
    );
  }
`

export default ({ randomColors }) => <Stripes randomColors={randomColors} />
