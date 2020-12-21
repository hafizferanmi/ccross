import React from 'react'

const SGraph = ({ props }) => {
  return (
    <svg
      width={18}
      height={16}
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.003.5a.5.5 0 01.49.412l2.085 11.679 2.07-8.416a.5.5 0 01.967-.015l1.465 5.262.788-2.016a.5.5 0 01.465-.318H17a.5.5 0 010 1h-2.325l-1.21 3.094a.5.5 0 01-.947-.048l-1.355-4.868-2.177 8.853a.5.5 0 01-.978-.031L5.982 3.743l-.758 3.94a.5.5 0 01-.49.405H1a.5.5 0 010-1h3.32L5.51.906A.5.5 0 016.003.5z'
        fill='#9AC802'
      />
    </svg>
  )
}

export default SGraph
