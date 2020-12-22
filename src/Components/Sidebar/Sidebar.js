import React from 'react'
import styled from 'styled-components'
import TradingHistory from './TradingHistory'
import TradingWallet from './TradingWallet'
import OpenTrades from './OpenTrades'

const SidebarWrapper = styled.section`
  width: 260px;
  position: fixed;
  height: 100%;
  background: #181B1C;
  top: 65px;
  left: 0;
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
