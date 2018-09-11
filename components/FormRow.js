import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

import Input from './Input'
import Label from './Label'
import { Column, Row } from './Layout'

const FormRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 15px;

  &:last-child {
    margin: 0;
  }
`

const FormRow = ({
  label,
  placeholder,
  handleChange,
  handleBlur,
  handleFocus,
  type,
  ref,
  focused
}) => (
  <FormRowWrapper>
    <Label focused={focused}>{label}</Label>
    <Input
      type={type}
      handleFocus={refVal => handleFocus(refVal)}
      handleBlur={e => handleFocus('')}
      handleChange={e => handleChange(e)}
      ref={ref}
      placeholder={placeholder}
    />
  </FormRowWrapper>
)

FormRow.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  ref: PropTypes.object
}

export default FormRow
