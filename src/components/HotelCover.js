import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const HotelCover = props => {
  return <Img src='http://localhost:8888/assets/images/venetian.jpg' />
}

HotelCover.propTypes = {}

const Img = styled.img`
  margin: 0 0 30px;
`
