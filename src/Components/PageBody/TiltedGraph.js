import React from 'react'
import { AreaChart, Area } from 'recharts'
import theme from '../../theme'

const data = [
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

const TiltedGraph = () => {
  console.log('Loading loeing')

  return (
    <AreaChart
      width={50}
      height={60}
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor={theme.colors.UIgreen} stopOpacity={0.7} />
          <stop offset='95%' stopColor={theme.colors.UIgreen} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type='monotone' dataKey='uv' stroke={theme.colors.UIgreen} fillOpacity={1} fill='url(#colorUv)' />
    </AreaChart>
  )
}

export default TiltedGraph
