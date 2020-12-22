import React from 'react'
import styled from 'styled-components'
import ArrowRight from '../svg/ArrowRight'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`
const Text = styled.span`
  color: #9AC802;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 10px;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TradeHeader = ({ icon: Icon, title }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon />
        <Text>{title}</Text>
      </IconWrapper>
      <ArrowRight />
    </Wrapper>
  )
}

export default TradeHeader
