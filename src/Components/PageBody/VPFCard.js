import React from 'react'
import styled from 'styled-components'
import StarIcon from '../svg/Star'
import FlyingIcon from '../svg/FlyingIcon'
import PlottedVerticalGraph from './VerticalGraph'
import PlotedTiltedGraph from './TiltedGraph'

const LinearBackground = styled.div`
  border-radius: 8px;
  padding: .7px;
  background-image: linear-gradient(to right bottom, #535763 0%, #50535F 50%, #585C6B 100%);
  margin-bottom: 15px;
`

const CardWrapper = styled.div`
  margin-top: 10px;
  border-radius: 8px;
  position: relative;
  padding: 0px 12px;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 88px;
  cursor: pointer;
  background-color: #272A2D;
  color: rgb(255, 255, 255);
    &:first-of-type {
     margin-top: 0px;
   }
`

const ETHWrapper = styled.div`
  position: relative;
  flex-basis: 30%;
  border-right: 1px dashed rgba(102, 110, 121, 0.5);
`

const StarIconWrapper = styled.div`
   position: absolute;
   top: 4px;
   left: 0px;
`

const CryptoWrapper = styled.div`
  margin-left: 30px;
  padding-right: 20px;
`

const Title = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: white;
`

const Desc = styled.span`
  color: ${props => props.theme.colors.UIgrey};
  font-size: 12px;
  line-height: 16px;
`

const Hanging = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 100;
  background-color: #1C9DE8;
  width: 24px;
  height: 20px;
  font-size: 9px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CommitmentWrapper = styled.div`
  flex-basis: 20%;
  margin-right: 30px;
  text-align: right;
`

const GraphWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-left: 30px;
  display: flex;
  float: left;
`

const OutcomeWrapper = styled.div`
  flex-basis: 20%;
  & > div:first-child {
    display: flex;
    align-items: center;
    & > span:last-child {
      margin-left: 10px;
      font-size: 14px;
      line-height: 24px;
    }
  }

  & > div:last-child {
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors.UIgrey};
  }
`

const VerticalGraph = styled.div`
  flex-basis: 40%;
`

const TiltedGraph = styled.div`
  flex-flow: 1;
`

const VPFCard = ({ ammount, hanging }) => {
  return (
    <LinearBackground>
      <CardWrapper>
        <ETHWrapper>
          <StarIconWrapper>
            <StarIcon />
          </StarIconWrapper>
          <CryptoWrapper>
            <Title>ETH 48 hours</Title>
            <Desc>Crypto</Desc>
          </CryptoWrapper>
        </ETHWrapper>
        <GraphWrapper>
          <OutcomeWrapper>
            <div>
              <span><FlyingIcon /></span>
              <span>2,2x</span>
            </div>
            <div>Outcome in 6h 41m</div>
          </OutcomeWrapper>
          <VerticalGraph>
            <PlottedVerticalGraph />
          </VerticalGraph>
          <TiltedGraph>
            <PlotedTiltedGraph />
          </TiltedGraph>
        </GraphWrapper>
        <CommitmentWrapper>
          <Title>{ammount}</Title>
          <Desc>Total commitment funds</Desc>
        </CommitmentWrapper>
        {hanging && <Hanging>{hanging}</Hanging>}
      </CardWrapper>
    </LinearBackground>
  )
}

export default VPFCard
