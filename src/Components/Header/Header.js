import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import dp from '../../assets/dp.png'
import SearchIcon from '../svg/SearchIcon'
import StartHeadIcon from '../svg/StartHead'
import GradutatingHeadIcon from '../svg/gradutatinghead'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: #272A2D;
  padding: 0 20px;
  height: 64px;
  border-bottom: 1.3px solid ${props => props.theme.colors.UIgreen};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const LogoButtonWrapper = styled.div`
  margin-left: 20px;

  & > span:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: white;
    color: #111112;
    border-right: none;
  }

  & >  span:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
    border-left: none;
  }
`

const HeaderButton = styled.span`
  background: transparent;
  border: 1px solid #666E79;
  padding: 5px 15px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
  font-size: 11px;
  font-weight: bold;
  text-transform: capitalize;

  &.active {
    color: #111112;
    background: white;
  }

  &::first-of-type {
    margin-left: 0
  }
`

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  margin-left: 25px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 15px;
  }
`

const Pill = styled.span`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: #1C9DE8;
  position: absolute;
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: -5px;
`

const logoButtons = ['Training Mode', 'Live Mode']

const centerButtons = ['Show All', 'Crypto', 'Commodities', 'Stock', 'Index', 'Currency']

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} />
        <LogoButtonWrapper>
          {logoButtons.map(button => <HeaderButton key={button}>{button}</HeaderButton>)}
        </LogoButtonWrapper>
      </LogoWrapper>
      <div>
        {centerButtons.map(button => <HeaderButton key={button}>{button}</HeaderButton>)}
      </div>
      <IconsWrapper>
        <SearchIcon />
        <StartHeadIcon />
        <GradutatingHeadIcon />
        <div style={{ position: 'relative' }}>
          <ProfilePic src={dp} />
          <Pill>12</Pill>
        </div>
      </IconsWrapper>
    </HeaderWrapper>
  )
}

export default Header
