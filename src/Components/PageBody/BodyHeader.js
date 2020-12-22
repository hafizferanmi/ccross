import React from 'react'
import styled, { css } from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const FilterWrapper = styled.div`
  & > span:first-of-type {
    color: ${props => props.theme.colors.UIgrey};
    font-size: 12px;
    line-height: 16px;
  }

  & > span:last-child {
    margin-left: 10px;
    color: ${props => props.theme.colors.UIgreen};
    font-size: 9px;
    line-height: 10px;
    border: 1px solid ${props => props.theme.colors.UIgreen};
    border-radius: 4px;
    padding: 3px 15px;
  }
`

const UnitsWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  & > div:first-child {
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors.UIgrey}
  }

  & > div:last-child {
    margin-left: 10px;
  }
`

const PercentWrapper = styled.div`
  display: flex;
  border: 0.1px solid #9AC802;
  
  border-radius: 4px;

  & > span {
    width: 40px;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    color: ${props => props.theme.colors.UIgreen};

    ${props => props.active && css`
      background-color: ${props => props.theme.colors.UIgreen};
      color: black;
    `}
  }
`

const SortByWrapper = styled.div`
  & span {
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors.UIgrey};
    margin-right: 10px;
  }

  & select {
    width: 132px;
    height: 24x;
    border: 1px solid rgba(102, 110, 121, 0.5);
    font-size: 12px;
    line-height: 16px;
    background: transparent;
    color: white;
    padding: 3px;
    border-radius: 4px;
  }
`

const BodyHeader = () => {
  return (
    <HeaderWrapper>
      <FilterWrapper>
        <span>Select assets, types and period:</span>
        <span>Filter</span>
      </FilterWrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UnitsWrapper>
          <div>Units:</div>
          <PercentWrapper>
            <span>%</span>
            <span>$</span>
          </PercentWrapper>
        </UnitsWrapper>
        <SortByWrapper>
          <span>Sort by</span>
          <select>
            <option>Trending</option>
          </select>
        </SortByWrapper>
      </div>
    </HeaderWrapper>
  )
}

export default BodyHeader
