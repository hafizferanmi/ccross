import React from 'react'
import styled from 'styled-components'
import TradeHeader from './TradeHeader'
import SGraph from '../svg/SGraph'

const OpenTradeWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #36393C;
  padding-bottom: 20px;
`

const DataWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`

const DataHeader = styled.div`
  color: #666E79;
  font-size: 9px;
  line-height: 12px;
  font-weight: bold;
  margin-top: 10px;
`

const ProgressCount = styled.h3`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`

const SmallProgressCount = styled(ProgressCount)`
  font-size: 12px;
  line-height: 16px;
`

const ClosestOutcomeWrapper = styled.div`
  margin-left: 20px;
`

const OpenTrades = () => {
  return (
    <OpenTradeWrapper>
      <TradeHeader
        title='Open trades'
        icon={SGraph}
      />
      <DataWrapper>
        <div>
          <DataHeader>Trades in progress</DataHeader>
          <ProgressCount>15</ProgressCount>
        </div>
        <ClosestOutcomeWrapper>
          <DataHeader>Closest outcome</DataHeader>
          <ProgressCount>25m 40s</ProgressCount>
          <SmallProgressCount>ETH 48 hour</SmallProgressCount>
        </ClosestOutcomeWrapper>
      </DataWrapper>
    </OpenTradeWrapper>
  )
}

export default OpenTrades
