import React from 'react'
import { AreaChart, Area } from 'recharts'
import theme from '../../theme'

const data = [
  { uv: 0 },
  { uv: 390 },
  { uv: 288 },
  { uv: 270 },
  { uv: 260 },
  { uv: 250 },
  { uv: 300 },
  { uv: 300 },
  { uv: 300 },
  { uv: 300 },
  { uv: 100 },
  { uv: 30 },
  { uv: 20 }
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
          <stop offset='90%' stopColor={theme.colors.Red} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type='monotone' dataKey='uv' stroke={theme.colors.UIgreen} fillOpacity={1} fill='url(#colorVerticalUv)' />
    </AreaChart>
  )
}

export default VerticalGraph
