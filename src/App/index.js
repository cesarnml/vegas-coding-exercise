import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Normalize } from 'styled-normalize'
import { Nav, HotelCover, HotelCard, HotelList, Tabs, TabInfo } from 'components'
import { isEmpty } from 'utils'

const url = 'http://localhost:8888/api/hotels/venetian'

const App = () => {
  const [hotel, setHotel] = useState({})
  const { media, location, description, details } = hotel
  useEffect(() => {
    axios.get(url).then(res => setHotel(res.data))
  }, [])

  return (
    <Container>
      <Normalize />
      <Nav />
      {isEmpty(hotel) ? (
        <div>Loading ...</div>
      ) : (
        <Flex border='red' direction='row'>
          <Flex border='blue' direction='column' width='300px' margin='0px 15px'>
            <HotelCover media={media} />
            <HotelList />
          </Flex>
          <Flex border='green' direction='column' grow='1'>
            <HotelCard
              name={hotel.name}
              starRating={hotel.starRating}
              phoneNumber={hotel.phoneNumber}
              price={hotel.price}
              areaName={location.areaName}
            />
            <Tabs tabNames={['Description', 'Details', 'Location']} />
            <TabInfo
              description={description}
              details={details}
              location={location}
              media={media}
            />
          </Flex>
        </Flex>
      )}
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 990px;
  border: 1px solid red;
  font-size: calc(14 / 16 * 1rem);
`

const Flex = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
  background: ${props => props.bg};
  border: ${props => `2px solid ${props.border}`};
  width: ${props => props.width};
  flex-grow: ${props => props.grow};
  margin: ${props => props.margin};
`
