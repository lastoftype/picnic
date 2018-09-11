import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const themes = {
  primary: {
    normal: ['#6772e5', '#fff'],
    hover: ['#7795f8', '#fff'],
    active: ['#555abf', '#e6ebf1']
  },
  default: {
    normal: ['white', '#6772e5'],
    hover: ['white', '#6772e5'],
    active: ['#f6f9fc', '#6772e5']
  },
  success: {
    normal: ['#3ecf8e', '#fff'],
    hover: ['#3ecf8e', '#fff'],
    active: ['#24b47e', '#fff']
  }
}

const getButtonTheme = name => {
  return themes[name]
}

const ButtonWrapper = styled.button`
  white-space: nowrap;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  line-height: ${props => (props.small ? '28px' : '40px')};
  padding: ${props => (props.small ? '0 10px' : '0 14px')};
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
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

  background: ${props => getButtonTheme(props.theme)['normal'][0]};
  color: ${props => getButtonTheme(props.theme)['normal'][1]};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background: ${props => getButtonTheme(props.theme)['hover'][0]};
    color: ${props => getButtonTheme(props.theme)['hover'][1]};
  }

  &:active {
    background: ${props => getButtonTheme(props.theme)['active'][0]};
    color: ${props => getButtonTheme(props.theme)['active'][1]};
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
      0 1px 3px rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`

const Button = ({ children, theme, ...props }) => (
  <ButtonWrapper {...props} theme={theme}>
    {children}
  </ButtonWrapper>
)

Button.defaultProps = {
  theme: 'default'
}

export default Button
