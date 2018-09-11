import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { setLoading, setFriends } from '../store/actions'
import { connect } from 'react-redux'

import { addFriend } from '../api'

class AddFriend extends React.Component {
  state = {
    name: ''
  }

  constructor(props) {
    super(props)
  }

  updateName(val) {
    this.setState({
      name: val
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.updateName(e.target.value)}
        />
        <button onClick={() => this.props.addFriend(this.state.name)}>
          Add friend
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addFriend(name) {
    dispatch(addFriend(name))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AddFriend)
