import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const TabInfo = ({ details, location, description, media, selectedTab }) => {
  const { type, href, width, height } = media.find(photo => photo.type === 'productMap')
  const imgRef = useRef()
  const [isExpanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(false)
    if (imgRef.current) {
      imgRef.current.focus()
      console.log('exist')
    }
  }, [selectedTab])

  const renderTab = selectedTab => {
    switch (selectedTab) {
      case 'description': {
        return (
          <div>
            <p className='accordion'>{description}</p>
            <button onClick={() => setExpanded(prev => !prev)}>
              {isExpanded ? 'HIDE FULL DESCRIPTION' : 'SHOW FULL DESCRIPTION'}
              {isExpanded ? (
                <span role='img' aria-label='up arrow'>
                  ⬆️
                </span>
              ) : (
                <span role='img' aria-label='down arrow'>
                  ⬇️
                </span>
              )}
            </button>
          </div>
        )
      }
      case 'details': {
        return (
          <div>
            <div className='accordion'>
              {details.map((ele, idx) => (
                <div key={idx}>
                  <h4>{ele.label}</h4>
                  <p>{ele.value}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setExpanded(prev => !prev)}>
              {isExpanded ? 'HIDE FULL DESCRIPTION' : 'SHOW FULL DESCRIPTION'}
              {isExpanded ? (
                <span role='img' aria-label='up arrow'>
                  ⬆️
                </span>
              ) : (
                <span role='img' aria-label='down arrow'>
                  ⬇️
                </span>
              )}
            </button>
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
            <img ref={imgRef} src={href} alt={type} width={width} height={height} />
          </div>
        )
      }
      default: {
        throw new Error('unexpected tab')
      }
    }
  }
  console.log('rendering', isExpanded)
  return <StyledTabContent isExpanded={isExpanded}>{renderTab(selectedTab)}</StyledTabContent>
}

TabInfo.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    })
  ),
  selectedTab: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }),
  details: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
}

const StyledTabContent = styled.div`
  margin: 25px 16px;
  font-size: 16px;
  font-family: Tahoma;
  letter-spacing: 0.2px;
  line-height: 20px;
  font-weight: lighter;
  .accordion {
    margin: 0;
    height: ${props => (props.isExpanded ? '100%' : '200px')};
    overflow: hidden;
  }
  button {
    background: none;
    border: none;
    padding: 10px 0;
    color: #976395;
    cursor: pointer;
    outline: none;
    span {
      margin-left: 10px;
    }
  }
  h4 {
    margin: 0;
  }
`
