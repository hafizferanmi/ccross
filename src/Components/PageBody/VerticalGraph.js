import React from 'react'
import { AreaChart, Area } from 'recharts'
import theme from '../../theme'

const data = [
  { data: 0 },
  { data: 3090 },
  { data: 288 },
  { data: 2070 },
  { data: 2600 },
  { data: 250 },
  { data: 300 },
  { data: 2000 },
  { data: 300 },
  { data: 300 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 300 },
  { data: 100 },
  { data: -30 },
  { data: -200 },
  { data: -3900 },
  { data: -2880 },
  { data: -2700 },
  { data: -2600 },
  { data: -2500 },
  { data: 300 },
  { data: 3000 },
  { data: 2700 },
  { data: 2600 },
  { data: 3000 },
  { data: 2000 },
  { data: 3900 },
  { data: 288 },
  { data: 270 },
  { data: 300 }
]

const VerticalGraph = () => {
  return (
    <AreaChart
      width={200}
      height={60}
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <defs>
        <linearGradient id='colorVerticalUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='10%' stopColor={theme.colors.UIgreen} stopOpacity={0.7} />
          <stop offset='90%' stopColor={theme.colors.UIgreen} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type='monotone' dataKey='data' stroke={theme.colors.UIgreen} fillOpacity={1} fill='url(#colorVerticalUv)' />
    </AreaChart>
  )
}

export default VerticalGraph
