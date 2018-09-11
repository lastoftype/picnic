import React from 'react'
import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import moment from 'moment'

import { bindActionCreators } from 'redux'
import { setLoading, setFriends } from '../store/actions'
import { connect } from 'react-redux'

import { updateFriend, deleteFriend } from '../api'

import FriendAvatar from './FriendAvatar'
import FriendInfo from './FriendInfo'
import FriendTitle from './FriendTitle'
import FriendDescription from './FriendDescription'
import ButtonGroup from './ButtonGroup'
import Button from './Button'
import ButtonLink from './ButtonLink'
import Clock from './Clock'

const FadeIn = keyframes`
  0% {
    transform: translateY(2px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const FriendWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  margin: 0 0 20px;

   ${media.greaterThan('small')`
      flex: 0 0 50%;
      width: 50%;
       padding: 7.5px;
       margin: 0;
   `} 

   ${media.greaterThan('medium')`
      flex: 0 0 33.333%;
      width: 33.333%;
      
   `}

    ${media.greaterThan('large')`
      flex: 0 0 33.333%;
      width: 33.333%;
   `}
`

const FriendInner = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

class Friend extends React.Component {
  state = {
    hoveredItem: ''
  }

  constructor(props) {
    super(props)
  }

  handleHover(id) {
    console.log(id)
    this.setState({
      hoveredItem: id
    })
  }

  render() {
    const {
      name,
      id,
      lastSeen,
      updateFriend,
      handleHover,
      deleteFriend,
      description,
      style
    } = this.props

    return (
      <FriendWrapper style={style}>
        <FriendInner>
          <FriendAvatar
            name={name}
            hover={this.state.hoveredItem == id}
            id={id}
          />
          <Clock lastSeen={lastSeen} />
          <FriendInfo>
            <FriendTitle name={name} lastSeen={lastSeen} />
            <FriendDescription description={description} />
            <ButtonGroup justifyContent="left">
              <Button
                small
                theme="success"
                onMouseEnter={() => this.handleHover(id)}
                onMouseLeave={() => this.handleHover(null)}
                onClick={() =>
                  updateFriend(id, {
                    lastSeen: moment().toDate()
                  })
                }>
                Hung out
              </Button>
              <ButtonLink small onClick={() => deleteFriend(id)}>
                Delete
              </ButtonLink>
            </ButtonGroup>
          </FriendInfo>
        </FriendInner>
      </FriendWrapper>
    )
  }
}

Friend.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  lastSeen: PropTypes.string,
  handleHover: PropTypes.func
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => ({
  updateFriend(id, data) {
    dispatch(updateFriend(id, data))
  },
  deleteFriend(id) {
    dispatch(deleteFriend(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friend)
