require('dotenv').config()

import superagent from 'superagent'
import assign from 'object-assign'
import qs from 'qs'
import _ from 'lodash'
import Promise from '../lib/promise'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 4000
const PUBLIC_ENDPOINT = process.env.PUBLIC_ENDPOINT

const ENV_BASE =
  process.env.NODE_ENV !== 'production'
    ? `http://localhost:${PORT}`
    : PUBLIC_ENDPOINT
const BASE_URI = `${ENV_BASE}/api`

export default class ApiClient {
  constructor(client = superagent, baseUri = BASE_URI) {
    this.baseUri = baseUri
    this.client = client
  }

  getReq({ method, data, url }) {
    if (method === 'get') {
      const reqUrl = `${url}?${qs.stringify(data)}`

      const req = this.client[method](reqUrl).retry(2)

      return req
    }

    const req = this.client[method](url)
    req.send(data)
    return req
  }

  request(m, path, d = {}, options = {}) {
    const method = m.toLowerCase()
    const data = assign({}, d)

    const url = `${this.baseUri}${path}`

    const req = this.getReq({ method, data, url, options })
    req.set('Accept', 'application/json')

    return new Promise((fulfill, reject, onCancel) => {
      req.end((err, res) => {
        if (res && res.status !== 200 && res.body && res.body.error) {
          reject(new Error(res.body.error))
          return
        }

        if (err) {
          reject(new Error(`Connection Error: ${err.message}`))
        } else {
          fulfill(res.body)
        }
      })

      onCancel(() => {
        req.abort()
      })
    })
  }

  get(path, data = {}) {
    return this.request('get', path, data)
  }

  del(path, data = {}) {
    return this.request('del', path, data)
  }

  post(path, data = {}, options = {}) {
    return this.request('post', path, data, options)
  }

  put(path, data = {}) {
    return this.request('put', path, data)
  }

  getAllFriends() {
    return this.get('/friends')
  }

  addFriend({ name, description, lastSeen }) {
    return this.post('/friends', { name, description, lastSeen })
  }

  updateFriend(id, data) {
    return this.post(`/update/${id}`, data)
  }

  removeFriend(id) {
    return this.post(`/remove`, { id })
  }
}
