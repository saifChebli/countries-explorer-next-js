import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10'>
        <div className='w-12 h-12 border-4 border-black border-dashed rounded-full animate-spin'></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner