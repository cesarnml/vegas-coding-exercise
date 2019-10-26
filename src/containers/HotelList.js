import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { colors, ListItem } from 'styles'
import { sortByName, removeDuplicates } from 'utils'

const url = `${process.env.REACT_APP_SERVER_URL}/api/hotels`

export const HotelList = () => {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    axios.get(url).then(res => setHotels(res.data.list))
  }, [])

  return (
    <Wrapper bg={colors.hotelListBg}>
      <ul>
        {removeDuplicates(hotels)
          .sort(sortByName)
          .map((hotel, idx) => (
            <ListItem key={idx}>
              <a href={process.env.REACT_APP_CLIENT_URL} alt='hotel name'>
                {hotel.name}
              </a>
              <span>{`$${hotel.price.toFixed(2)}`}</span>
            </ListItem>
          ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  background: ${props => props.bg};
  width: 250px;
  font-family: Verdana;
  font-size: 13px;
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    line-height: 14px;
    margin-bottom: 20px;
  }
  a {
    color: ${props => colors.hotelLink};
    padding-right: 16px;
    flex-grow: 1;
    letter-spacing: 1px;
  }
  span {
    font-family: Verdana;
  }
`
