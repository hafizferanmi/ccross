import React from 'react'
import styled from 'styled-components'
import TradingHistory from './TradingHistory'
import TradingWallet from './TradingWallet'
import OpenTrades from './OpenTrades'

const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding-top: 20px;
  padding-bottom: 20px; */
  padding: 20px;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <OpenTrades />
      <TradingHistory />
      <TradingWallet />
    </SidebarWrapper>
  )
}

export default Sidebar
