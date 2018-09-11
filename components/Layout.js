import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || 'inherit'};
`

export const Column = styled.div`
  flex: 0 0 100%;
  width: 100%;

  ${media.greaterThan('medium')`
    flex-basis: ${props => props.width};
    width: ${props => props.width};
  `};
`

export default { Container, Row, Column }
