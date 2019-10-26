import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Tabs = ({ tabNames }) => {
  return (
    <TabList>
      {tabNames.map((tabName, idx) => (
        <TabItem key={idx}>{tabName}</TabItem>
      ))}
    </TabList>
  )
}

Tabs.propTypes = {}

const TabList = styled.div`
  border: 1px solid blue;
  display: flex;
`

const TabItem = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
