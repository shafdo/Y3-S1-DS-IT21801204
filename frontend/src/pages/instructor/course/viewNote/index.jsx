import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewNote = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className='w-full min-h-screen'>
      <h1 className='text-center text-[40px] text-gray-800 mt-6'>{data.title}</h1>
      <div className='h-[2px] rounded-lg w-[80%] bg-gray-500 mx-auto'></div>
      <p className='w-[90%] mx-auto mt-6'>{data.explanation}</p>
    </div>
  )
}

export default ViewNote
