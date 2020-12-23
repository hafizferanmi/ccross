import React from 'react'
import { AreaChart, Area } from 'recharts'
import theme from '../../theme'

const data = [
  { data: 0 },
  { data: 390 },
  { data: 288 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 300 },
  { data: 100 },
  { data: 30 },
  { data: 200 },
  { data: 390 },
  { data: 288 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 250 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 300 },
  { data: 270 },
  { data: 260 },
  { data: 250 },
  { data: 300 },
  { data: 100 },
  { data: 30 },
  { data: 200 },
  { data: 390 },
  { data: 288 },
  { data: 270 },
  { data: 300 }
]

const HistoryGraph = () => {
  return (
    <AreaChart
      width={200}
      height={60}
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <defs>
        <linearGradient id='colorVerticaldata' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='10%' stopColor={theme.colors.UIgreen} stopOpacity={0.7} />
          <stop offset='90%' stopColor={theme.colors.Red} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type='monotone' dataKey='data' stroke={theme.colors.UIgreen} fillOpacity={1} fill='url(#colorVerticaldata)' />
    </AreaChart>
  )
}

export default HistoryGraph
