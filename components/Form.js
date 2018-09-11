import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import moment from 'moment'
import chrono from 'chrono-node'

import { bindActionCreators } from 'redux'
import { setLoading, setFriends } from '../store/actions'
import { connect } from 'react-redux'

import { addFriend } from '../api'

import FormRow from './FormRow'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

const FormWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 100%;
  background: #fff;
  margin: 7.5px 0 15px;

  ${media.greaterThan('small')`
    margin-left: 7.5px;
    margin-right: 7.5px;
  `} ${media.greaterThan('medium')`
    max-width: 645px;
    margin-left: 0;
    margin-right: 15px;
  `};
`

const FormElem = styled.form`
  padding: 18px;
  ${media.greaterThan('medium')`
    padding: 18px;
   `};
`

const FormTitle = styled.h2`
  font-size: 14px;
  line-height: 26px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: antialiased;
  font-smooth: antialiased;
  background: #f6f9fc;
  padding: 7.5px 15px;
  border-bottom: 1px solid #e0e6ec;
`

const formFields = [
  {
    label: 'Name',
    placeholder: 'James',
    name: 'name',
    type: 'text'
  },
  {
    label: 'Description',
    placeholder: 'Loves baseball, hates drama',
    name: 'description',
    type: 'text'
  },
  {
    label: 'Last hung out',
    placeholder: 'Two days ago',
    name: 'lastSeen',
    type: 'text'
  }
]

class Form extends React.Component {
  state = {
    focused: '',
    fields: {}
  }

  constructor(props) {
    super(props)
  }

  handleFocus(inputName) {
    this.setState({
      focused: inputName
    })
  }

  handleBlur() {
    this.setState({
      focused: null
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let fields = {
      ...this.state.fields,
      lastSeen: chrono.parseDate(this.state.fields.lastSeen)
    }

    this.props.addFriend(fields)
  }

  handleChange(name, e) {
    let val = e.target.value
    let fields = Object.assign({}, this.state.fields, { [name]: val })
    this.setState({ fields })
  }

  render() {
    return (
      <FormWrapper>
        <FormTitle>Add a friend</FormTitle>
        <FormElem>
          {formFields.map(({ name, placeholder, label, type }, i) => {
            return (
              <FormRow
                key={i}
                focused={this.state.focused === name}
                label={label}
                type={type}
                placeholder={placeholder}
                handleFocus={() => this.handleFocus(name)}
                handleBlur={e => this.handleBlur()}
                handleChange={e => this.handleChange(name, e)}
              />
            )
          })}
          <ButtonGroup justifyContent="right">
            <Button theme="primary" onClick={e => this.handleSubmit(e)}>
              Submit
            </Button>
          </ButtonGroup>
        </FormElem>
      </FormWrapper>
    )
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => ({
  addFriend(data) {
    dispatch(addFriend(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
