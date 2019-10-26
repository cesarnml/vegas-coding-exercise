import React from 'react'
import PropTypes from 'prop-types'

export const HotelInfo = ({ areaName, phoneNumber, setTab }) => {
  return (
    <>
      <div onClick={() => setTab('location')} style={{ cursor: 'pointer' }}>
        <span role='img' aria-label='map marker' className='icon-glyphs'>
          &#x2352;
        </span>
        {areaName}
      </div>
      <div>
        <span role='img' aria-label='phone number' className='icon-glyphs'>
          &#x2706;
        </span>
        {phoneNumber}
      </div>
      <div>
        <span role='img' aria-label='thumbs up' className='icon-glyphs'>
          &#x2764;
        </span>
        Best Price Guarantee
      </div>
    </>
  )
}

HotelInfo.propTypes = {
  areaName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
}
