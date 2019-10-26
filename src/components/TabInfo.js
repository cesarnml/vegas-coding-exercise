import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const TabInfo = ({
  details,
  location,
  description,
  media,
  selectedTab,
}) => {
  const { type, href, width, height } = media.find(
    photo => photo.type === 'productMap'
  )

  const renderTab = selectedTab => {
    switch (selectedTab) {
      case 'description': {
        return description
      }
      case 'details': {
        return (
          <div>
            {details.map((ele, idx) => (
              <div key={idx}>
                <h4>{ele.label}</h4>
                <p>{ele.value}</p>
              </div>
            ))}
          </div>
        )
      }
      case 'location': {
        return (
          <div>
            <div>
              <span role='img' aria-label='pin'>
                📍
              </span>
              <span>
                {`${location.address}, ${location.city}, ${location.state} ${location.postalCode}`}
              </span>
            </div>
            <img src={href} alt={type} width={width} height={height} />
          </div>
        )
      }
      default: {
        throw new Error('unexpected tab')
      }
    }
  }
  return <StyledTabContent>{renderTab(selectedTab)}</StyledTabContent>
}

TabInfo.propTypes = {}

const StyledTabContent = styled.div`
  margin: 25px 16px;
  font-size: 16px;
  font-family: Tahoma;
  letter-spacing: 0.2px;
  line-spacing: 18px;
  font-weight: lighter;
  h4 {
    margin: 0;
  }
`
