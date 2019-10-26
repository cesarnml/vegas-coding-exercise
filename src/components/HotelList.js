import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { colors, Wrapper, ListItem } from 'styles'
import { sortByName } from 'utils'

export const HotelList = props => {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8888/api/hotels').then(res => setHotels(res.data.list))
  }, [])

  return (
    <Wrapper bg={colors.hotelListBg}>
      <ul>
        {hotels.sort(sortByName).map((hotel, idx) => (
          <ListItem key={idx}>
            <a href='#' alt='hotel name'>
              {hotel.name}
            </a>
            <span>{`$${hotel.price.toFixed(2)}`}</span>
          </ListItem>
        ))}
      </ul>
    </Wrapper>
  )
}

HotelList.propTypes = {}
