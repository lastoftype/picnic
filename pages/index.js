import React from 'react'
import Link from 'next/link'
import styled, { injectGlobal } from 'styled-components'
import { bindActionCreators } from 'redux'
import { setLoading, setFriends } from '../store/actions'
import { connect } from 'react-redux'

import Page from '../components/Page'
import FriendList from '../components/FriendList'
import { Row, Column, Container } from '../components/Layout'
import AddFriend from '../components/AddFriend'
import Form from '../components/Form'

import { getAllFriends } from '../api'
import reset from '../lib/reset'

// Global css reset
injectGlobal`html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllFriends()
  }

  updateFriend(id, data) {}

  render() {
    return (
      <Page>
        <Container>
          <Row>
            <Column width="30%">
              <Form />
            </Column>
            <Column width="70%">
              <FriendList friends={this.props.friends} />
            </Column>
          </Row>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = ({ loading, friends, isServer }) => ({
  loading,
  friends,
  isServer
})
const mapDispatchToProps = dispatch => ({
  setLoading(bool) {
    dispatch(setLoading(bool))
  },
  setFriends(friends) {
    dispatch(setFriends(friends))
  },
  getAllFriends() {
    dispatch(getAllFriends())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)
