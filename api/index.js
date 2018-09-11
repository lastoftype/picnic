import ApiClient from './api'
import * as types from '../store/action-types'

let api = new ApiClient()

export function getAllFriends() {
  return dispatch => {
    dispatch({ type: types.GET_FRIENDS_BEGIN })
    api
      .getAllFriends()
      .then(response => {
        dispatch({ type: types.GET_FRIENDS_SUCCESS })
        dispatch({
          type: types.SET_FRIENDS,
          payload: response.data
        })
      })
      .catch(() => dispatch({ type: types.GET_FRIENDS_ERROR }))
  }
}

export function updateFriend(id, data) {
  return dispatch => {
    dispatch({ type: types.UPDATE_FRIEND_BEGIN })
    api
      .updateFriend(id, data)
      .then(() => {
        dispatch({ type: types.UPDATE_FRIEND_SUCCESS })
        dispatch({ type: types.GET_FRIENDS_BEGIN })
        return api.getAllFriends().then(response => {
          dispatch({ type: types.GET_FRIENDS_SUCCESS })
          dispatch({ type: types.SET_FRIENDS, payload: response.data })
        })
      })
      .catch(() => dispatch({ type: types.UPDATE_FRIEND_ERROR }))
  }
}

export function deleteFriend(id, data) {
  return dispatch => {
    dispatch({ type: types.DELETE_FRIEND_BEGIN })
    api
      .removeFriend(id)
      .then(() => {
        dispatch({ type: types.DELETE_FRIEND_SUCCESS })
        dispatch({ type: types.GET_FRIENDS_BEGIN })
        return api.getAllFriends().then(response => {
          dispatch({ type: types.GET_FRIENDS_SUCCESS })
          dispatch({ type: types.SET_FRIENDS, payload: response.data })
        })
      })
      .catch(() => dispatch({ type: types.DELETE_FRIEND_ERROR }))
  }
}

export function addFriend({ name, description, lastSeen }) {
  return dispatch => {
    dispatch({ type: types.ADD_FRIEND_BEGIN })
    api
      .addFriend({ name, description, lastSeen })
      .then(() => {
        dispatch({ type: types.ADD_FRIEND_SUCCESS })
        dispatch({ type: types.GET_FRIENDS_BEGIN })
        return api.getAllFriends().then(response => {
          dispatch({ type: types.GET_FRIENDS_SUCCESS })
          dispatch({ type: types.SET_FRIENDS, payload: response.data })
        })
      })
      .catch(() => dispatch({ type: types.ADD_FRIEND_ERROR }))
  }
}
