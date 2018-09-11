import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

import Button from './Button'

const ButtonWrapper = styled.button`
  white-space: nowrap;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  line-height: ${props => (props.small ? '28px' : '40px')};
  padding: ${props => (props.small ? '0' : '0 14px')};
  font-size: ${props => (props.small ? '12px' : '15px')};
  font-weight: 600;
  letter-spacing: 0.015em;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;
  color: #6772e5;
  background-color: transparent;

  &:hover {
    color: #32325d;
  }

  &:active {
    color: #000;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
`

const ButtonLink = ({ children, ...props }) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
)

export default ButtonLink
