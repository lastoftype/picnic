import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const LabelWrapper = styled.label`
  color: ${props => (props.focused ? '#6772e5' : '#424770')};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.43px;
  line-height: 26px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-transform: uppercase;
  -webkit-transition: color 0.1s ease-out;
  transition: color 0.1s ease-out;
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;

  ${media.greaterThan('medium')`
      font-size: 17px;
      font-weight: 500;
      letter-spacing: normal;
      line-height: 26px;
      margin-right: 20px;
      -ms-flex-item-align: center;
      align-self: center;
      -webkit-box-flex: 32%;
      -ms-flex: 32%;
      flex: 32%;
      text-transform: none;
      margin: 0 0 4px;
   `};
`

const Label = ({ children, focused }) => (
  <LabelWrapper focused={focused}>{children}</LabelWrapper>
)

export default Label
