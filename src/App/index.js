import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Normalize } from 'styled-normalize'
import { Nav, HotelCover, HotelCard, Tabs, TabContent } from 'components'
import { HotelList } from 'containers'
import { isEmpty } from 'utils'

const url = `${process.env.REACT_APP_SERVER_URL}/api/hotels/venetian`
const tabNames = ['description', 'details', 'location']

const App = () => {
  const [hotel, setHotel] = useState({})
  const [selectedTab, setTab] = useState('description')
  const { media, location, description, details } = hotel
  useEffect(() => {
    axios.get(url).then(res => setHotel(res.data))
  }, [])

  return (
    <Container>
      <Normalize />
      <Nav />
      {!isEmpty(hotel) && (
        <Flex border='red' direction='row'>
          <Flex border='blue' direction='column' margin='0px 14px'>
            <HotelCover media={media} />
            <HotelList />
          </Flex>
          <Flex border='green' direction='column' grow='1' margin='0px 14px'>
            <HotelCard
              name={hotel.name}
              starRating={hotel.starRating}
              phoneNumber={hotel.phoneNumber}
              price={hotel.price}
              areaName={location.areaName}
              setTab={setTab}
            />
            <Tabs tabNames={tabNames} selectedTab={selectedTab} setTab={setTab} />
            <TabContent
              description={description}
              details={details}
              location={location}
              media={media}
              selectedTab={selectedTab}
            />
          </Flex>
        </Flex>
      )}
    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 50px auto;
  min-height: 100vh;
  max-width: 990px;
  font-size: 14px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  background: ${props => props.bg};
  width: ${props => props.width};
  flex-grow: ${props => props.grow};
  margin: ${props => props.margin};
`
