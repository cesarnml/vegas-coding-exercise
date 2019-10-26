import React from 'react'
import styled from 'styled-components'

export const Nav = () => {
  return (
    <Navbar>
      <span className='left-arrow' role='img' aria-label='left arrow'>
        ⬅️
      </span>
      <span>See All Las Vegas Hotels</span>
    </Navbar>
  )
}

const Navbar = styled.nav`
  margin: 0 auto;
  height: 66px;
  max-width: 990px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #976395;
  font-family: Icons, Tahoma;
  text-transform: uppercase;
  .left-arrow {
    margin: 0 6px 0 0;
  }
`
