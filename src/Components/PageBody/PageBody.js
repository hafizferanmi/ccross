import React from 'react'
import styled from 'styled-components'
import VPFCard from './VPFCard'
import BodyHeader from './BodyHeader'

const PageBodyWrapper = styled.section`
  margin-left: 260px;
  margin-top: 65px;
  width: 100%;
  padding: 40px;
  color: white;
`

const CardWrapper = styled.div`
  margin-top: 20px;
`

const VPFdata = [
  { ammount: '$ 34, 346.00' },
  { ammount: '$ 329,146.00', hanging: 2 },
  { ammount: '$ 129,146.00' },
  { ammount: '$ 46.00' },
  { ammount: '$ 00.00' }
]

const PageBody = () => {
  return (
    <PageBodyWrapper>
      <BodyHeader />
      <CardWrapper>
        {VPFdata.map(data => <VPFCard key={data.ammount} {...data} />)}
      </CardWrapper>
    </PageBodyWrapper>
  )
}

export default PageBody
