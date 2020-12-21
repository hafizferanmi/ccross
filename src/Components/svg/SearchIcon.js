import React from 'react'

const SearchIcon = ({ props }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.5 11.125a5.625 5.625 0 1111.25 0 5.625 5.625 0 01-11.25 0zM11.125 4.5a6.625 6.625 0 104.318 11.65l3.203 3.204a.5.5 0 00.708-.708l-3.204-3.203A6.625 6.625 0 0011.125 4.5z'
        fill='#fff'
        opacity={0.6}
      />
    </svg>
  )
}

export default SearchIcon
