import React from 'react'
import TradeHeader from './TradeHeader'
import SGraph from '../svg/SGraph'
import styled, { css } from 'styled-components'

const TradingWalletWrapper = styled.div`
  margin-top: 5px;
`

const SubTitle = styled.h6`
  font-size: 9px;
  line-height: 12px;
  color: #666E79;
`
const Ammount = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: white;
  font-weight: bold;
`

const SmallAmmount = styled(Ammount)`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
`

const TradingWrapper = styled.div`
  margin-top: 20px;
`

const HoldingWrapper = styled.div`
  margin-top: 20px;
`
const AmmountButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TradingButton = styled.button`
  font-size: 9px;
  border: 1px solid ${props => props.theme.colors.UIgreen};
  padding: 3px 10px;
  background-color: transparent;
  border-radius: 5px;
  color: ${props => props.theme.colors.UIgreen};
  ${props => props.secondary && css`
      background: ${props.theme.colors.UIgreen};
      color: black;
  `}
`

const TradingWallet = () => {
  return (
    <TradingWalletWrapper>
      <TradeHeader title='Trading wallet' icon={SGraph} />
      <TradingWrapper>
        <SubTitle>Trading</SubTitle>
        <AmmountButtonWrapper>
          <Ammount>
            $ 34, 752.00
          </Ammount>
          <TradingButton>
            TOP UP
          </TradingButton>
        </AmmountButtonWrapper>
      </TradingWrapper>

      <HoldingWrapper>
        <SubTitle>Holding</SubTitle>
        <AmmountButtonWrapper>
          <SmallAmmount>
          $ 4, 102.00
          </SmallAmmount>
          <TradingButton secondary>
          BUY DAI
          </TradingButton>
        </AmmountButtonWrapper>
      </HoldingWrapper>
    </TradingWalletWrapper>
  )
}

export default TradingWallet
