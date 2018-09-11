import styled from 'styled-components'
import Link from 'next/link'

const NavWrapper = styled.nav`
  display: flex;
  flex: 1 1 auto;
  width: auto;
  margin-left: 30px;
  font-size: 14px;
`

const Nav = () => (
  <NavWrapper>
    <Link>
      <a href="">Link</a>
    </Link>
  </NavWrapper>
)

export default Nav
