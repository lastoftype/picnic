import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent === 'left' ? 'flex-start' : 'flex-end'};
  margin: -7.5px;

  button {
    margin: 7.5px;
  }
`

const ButtonGroup = ({ children, ...props }) => (
  <ButtonGroupWrapper {...props}>{children}</ButtonGroupWrapper>
)

export default ButtonGroup
