import React from 'react'

const ArrowRight = ({ props }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.882 12L5 10.655 8.291 8 5 5.345 5.882 4l4.96 4-4.96 4z'
        fill='#9AC802'
      />
    </svg>
  )
}

export default ArrowRight
