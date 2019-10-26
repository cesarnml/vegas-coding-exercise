import styled from 'styled-components'
import { colors } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 15px;
  background: ${props => props.bg};
  ul {
    padding: 0;
    margin: 0;
  }
  a {
    color: ${props => colors.hotelLink};
    /* border: 1px solid pink; */
    padding-right: 16px;
  }
`
