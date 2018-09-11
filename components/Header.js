import styled from 'styled-components'
import Link from 'next/link'

import { Container, Row } from './Layout'
import Nav from './Nav'
import Logo from './Logo'

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  z-index: 1;
  background: white;
  /*border-bottom: 2px solid rgba(207,215,223,.25);*/
  top: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Row alignItems="baseline" justifyContent="center">
        <Logo />
      </Row>
    </Container>
  </HeaderWrapper>
)

export default Header
