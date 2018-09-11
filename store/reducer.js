import * as types from './action-types'

export const INITIAL_STATE = {
  loading: false,
  isServer: false,
  friends: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  let favorites, index
  switch (action.type) {
    case types.SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      })
    case types.SET_FRIENDS:
      return Object.assign({}, state, {
        friends: action.payload
      })
    case types.UPDATE_FRIEND_BEGIN:
    case types.GET_FRIENDS_BEGIN:
    case types.DELETE_FRIEND_BEGIN:
    case types.ADD_FRIEND_BEGIN:
      return Object.assign({}, state, {
        loading: true
      })
    case types.GET_FRIENDS_SUCCESS:
    case types.GET_FRIENDS_ERROR:
    case types.DELETE_FRIEND_SUCCESS:
    case types.DELETE_FRIEND_ERROR:
    case types.UPDATE_FRIEND_SUCCESS:
    case types.UPDATE_FRIEND_ERROR:
    case types.ADD_FRIEND_SUCCESS:
    case types.ADD_FRIEND_ERROR:
      return Object.assign({}, state, {
        loading: false
      })
    default:
      return state
  }
}
