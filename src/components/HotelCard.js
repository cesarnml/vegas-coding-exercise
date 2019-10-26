import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import { HotelInfo } from 'components'

export const HotelCard = ({ name, starRating, areaName, phoneNumber, price, setTab }) => {
  return (
    <Section>
      <Flex direction='column'>
        <Flex className='hotel-detail'>
          <h1>{name}</h1>
          <StarRatings rating={starRating} starDimension='15px' starSpacing='0.5px' />
        </Flex>
        <Flex className='hotel-location'>
          <HotelInfo areaName={areaName} phoneNumber={phoneNumber} setTab={setTab} />
        </Flex>
      </Flex>
      <Flex direction='column' className='hotel-price'>
        <div className='price'>{`$${price}`}</div>
        <div className='price-caption'>HOTEL ROOMS FROM</div>
      </Flex>
    </Section>
  )
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 110px;
  width: 100%;
  color: #6b6c7a;

  .hotel-detail {
    align-items: flex-end;
    margin-bottom: 10px;
    min-width: 400px;
    h1 {
      text-transform: uppercase;
      margin: 0 8px 0 0;
      line-height: 32px;
      letter-spacing: 0.6px;
    }
  }
  .hotel-location {
    div {
      flex-grow: 1;
      font-size: 1rem;
      margin-right: 15px;
    }
    span {
      margin-right: 6px;
    }
  }
  .hotel-price {
    flex-grow: 0;
    padding: 0 16px 0 0;
    min-width: 175px;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  h1 {
    margin: 0;
    font-family: Verdana;
    font-weight: lighter;
    font-size: 2rem;
  }
  .price {
    color: #f48721;
    font-size: 3rem;
    line-height: 48px;
    letter-spacing: 1.5px;
    font-weight: bold;
    margin: 0 50px 0 0;
  }
  .price-caption {
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
`
