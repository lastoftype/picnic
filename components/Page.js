import styled from 'styled-components'

import Head from './Head'
import Header from './Header'

const PageWrapper = styled.div`
  padding-top: 65px;
`

export default ({ children, ...props }) => (
  <PageWrapper>
    <Head title="Hacker News" />
    <Header />
    <div>{children}</div>
  </PageWrapper>
)
