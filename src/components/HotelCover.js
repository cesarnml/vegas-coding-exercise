import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const HotelCover = ({ media }) => {
  const { type, href, width, height } = media.find(
    photo => photo.type === 'productImage'
  )
  return <Img src={href} width={width} height={height} alt={type} />
}

HotelCover.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    })
  ),
}

const Img = styled.img`
  margin: 0 0 30px;
`
