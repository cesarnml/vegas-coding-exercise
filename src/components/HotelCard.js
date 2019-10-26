import React from 'react'
import PropTypes from 'prop-types'

export const HotelCard = ({ name, starRating, areaName, phoneNumber, price }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{starRating}</div>
      <div>{areaName}</div>
      <div>{starRating}</div>
      <div>{phoneNumber}</div>
      <div>{price}</div>
    </div>
  )
}

HotelCard.propTypes = {}
