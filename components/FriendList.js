import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'
import colormap from 'colormap'
import { Transition, config } from 'react-spring'

import Friend from './Friend'

const FriendListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.greaterThan('medium')`
      margin: 0 -10px;
  padding: 0 15px;
   `};
`

const FriendList = ({ friends, handleUpdate }) => {
  return (
    <FriendListWrapper>
      <Transition
        keys={friends
          .sort((a, b) => a.lastSeen > b.lastSeen)
          .map(friend => friend._id)}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0, pointerEvents: 'none' }}>
        {friends
          .sort((a, b) => a.lastSeen > b.lastSeen)
          .map(({ name, _id, lastSeen, description }, i) => styles => (
            <Friend
              style={styles}
              name={name}
              key={i}
              description={description}
              lastSeen={lastSeen}
              id={_id}
            />
          ))}
      </Transition>
    </FriendListWrapper>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export default FriendList
