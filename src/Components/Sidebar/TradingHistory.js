import React from 'react'
import TradeHeader from './TradeHeader'
import SGraph from '../svg/SGraph'
import styled, { css } from 'styled-components'

const TradingHistoryWrapper = styled.div`
  margin-bottom: 30px;
  flex-grow: 1;
  border-bottom: 1px solid #36393C;
  padding-bottom: 10px;
`

const SortButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`

const SortButton = styled.div`
  color: ${props => props.theme.colors.UIgrey};
  font-size: 12px;
  cursor: pointer;
  ${props => props.active && css`
    padding: 5px 10px;
    background-color: ${props => props.theme.colors.UIgreen}
  `}
`

const GraphWrapper = styled.div`
  height: 100px;
  background-color: white;
`

const HistoryStatsWrapper = styled.div`
  color: white;
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;

  & > div:last-of-type {
    margin-left: 50px;
  }
`

const StatsTitle = styled.p`
  font-size: 9px;
  line-height: 12px;
  margin-bottom: 7px;
  color: ${props => props.theme.colors.UIgrey};
`

const StatsValue = styled.div`
  font-size: 18px;
  line-height: 24px;
`

const sortBy = ['last', 'day', 'week', 'month', 'all']

const TradingHistory = () => {
  return (
    <TradingHistoryWrapper>
      <TradeHeader title='Trading history' icon={SGraph} />
      <SortButtonWrapper>
        {sortBy.map(history => <SortButton key={history}>{history}</SortButton>)}
      </SortButtonWrapper>
      <HistoryStatsWrapper>
        <div>
          <StatsTitle>Total Trades</StatsTitle>
          <StatsValue>245</StatsValue>
        </div>
        <div>
          <StatsTitle>Profit</StatsTitle>
          <StatsValue>+21.5%</StatsValue>
        </div>
      </HistoryStatsWrapper>
      <GraphWrapper>Graph comes here</GraphWrapper>
    </TradingHistoryWrapper>
  )
}

export default TradingHistory
