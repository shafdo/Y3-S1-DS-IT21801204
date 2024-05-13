import React, { useState } from 'react'
import playIcon from '../../../../assets/play.svg'
import trashIcon from '../../../../assets/trash.svg'
const CourseVideoComp = ({data, deleteVideo}) => {
    const [hideEle, setHideEle] = useState(false)
  return (
        <a href={data.src} target='_blank' className={`flex flex-col items-center justify-center border-[2px] border-solid h-[200px] w-[200px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_rgba(0,0,0,0.3)] ${hideEle ? 'hidden' : null}`}>
            <div className='h-[90px] w-[90px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                <img className='h-14 ml-2' src={playIcon} alt="" />
            </div>
            <p className='text-gray-600 w-[180px] text-nowrap overflow-hidden text-ellipsis'>{data.title}</p>
            <button
            onClick={(e)=> {deleteVideo(e, data.id); setHideEle(true)}}
            className='h-[40px] w-[40px] rounded-[50%] border-[2px] border-solid border-red-300 flex items-center justify-center mt-2'>
                <img src={trashIcon} alt="" />
            </button>
        </a>
  )
}

export default CourseVideoComp
