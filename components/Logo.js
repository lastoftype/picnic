import styled from 'styled-components'
import media from 'styled-media-query'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { setLoading, setFriends } from '../store/actions'
import { connect } from 'react-redux'

const LogoWrapper = styled.div`
  flex: 0 0 auto;
  font-family: 'Gamja Flower', cursive;
  font-size: 30px;

  span {
    display: block;
    margin-top: -4px;
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #73d39b 94%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    transform: scale(${props => (props.loading ? '0.9' : '1')})
      rotate(${props => (props.loading ? '12deg' : '0deg')});
    opacity: ${props => (props.loading ? '0.6' : '1')};
    transition: all 0.15s ease;
  }
`

const Logo = ({ loading, ...props }) => (
  <LogoWrapper {...props} loading={loading}>
    <span>picnic</span>
  </LogoWrapper>
)

const mapStateToProps = ({ loading }) => ({
  loading
})

export default connect(mapStateToProps)(Logo)
