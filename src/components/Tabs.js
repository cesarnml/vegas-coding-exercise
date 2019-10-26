import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Tabs = ({ tabNames, selectedTab, setTab }) => {
  return (
    <TabList>
      {tabNames.map((tabName, idx) => (
        <TabItem
          key={idx}
          onClick={() => setTab(tabName)}
          className={selectedTab === tabName ? 'active' : null}
        >
          {tabName}
        </TabItem>
      ))}
    </TabList>
  )
}

Tabs.propTypes = {}

const TabList = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  .active {
    border-bottom: 4px solid #733080;
  }
`

const TabItem = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  border-bottom: 4px solid transparent;

  align-items: center;
  flex-grow: 1;
  height: 50px;
  color: #fff;
  background: #895e95;
  font-family: verdana;
  font-size: 1rem;
  letter-spacing: 1.2px;
  font-weight: lighter;
  text-transform: uppercase;
`
