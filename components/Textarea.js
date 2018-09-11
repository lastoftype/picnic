import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

const TextAreaWrapper = styled.textarea`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 4px;
  color: #32325d;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  padding: 5px 20px 7px 11px;
  -webkit-transition: background-color 0.1s ease-in, color 0.1s ease-in;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;
  background-color: #f6f9fc;

  &:focus {
    box-shadow: 0 0 0 1px #e4effa;
    background-color: transparent;
    color: #32325d !important;
  }
`

const TextArea = ({ handleFocus, handleChange, ref, ...props }) => (
  <TextAreaWrapper
    {...props}
    ref={ref}
    onChange={e => handleChange(e)}
    onFocus={e => handleFocus(ref)}
    onBlur={e => handleFocus('')}
  />
)

export default TextArea
