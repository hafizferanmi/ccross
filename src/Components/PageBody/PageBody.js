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
  {
    ammount: '$ 34, 346.00',
    data: [
      { uv: 20 },
      { uv: 140 },
      { uv: 10 },
      { uv: 300 },
      { uv: 40 },
      { uv: 30 },
      { uv: 77 },
      { uv: 150 },
      { uv: 33 },
      { uv: 0 }
    ]
  },
  {
    ammount: '$ 329,146.00',
    count: 2,
    data: [
      { uv: 200 },
      { uv: 14 },
      { uv: 100 },
      { uv: 50 },
      { uv: 500 },
      { uv: 20 },
      { uv: 100 },
      { uv: 15 }
    ]
  },
  {
    ammount: '$ 129,146.00',
    data: [
      { uv: 20 },
      { uv: 140 },
      { uv: 10 },
      { uv: 50 },
      { uv: 5 },
      { uv: 200 },
      { uv: 10 },
      { uv: 150 },
      { uv: 15 },
      { uv: 0 }
    ]
  },
  {
    ammount: '$ 46.00',
    data: [
      { uv: 20 },
      { uv: 140 },
      { uv: 100 },
      { uv: 56 },
      { uv: 5 },
      { uv: 200 },
      { uv: 0 },
      { uv: 150 },
      { uv: 150 },
      { uv: 0 }
    ]
  },
  {
    ammount: '$ 00.00',
    data: [
      { uv: 20 },
      { uv: 140 },
      { uv: 10 },
      { uv: 50 },
      { uv: 5 },
      { uv: 200 },
      { uv: 10 },
      { uv: 150 },
      { uv: 15 },
      { uv: 0 }
    ]
  }
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
