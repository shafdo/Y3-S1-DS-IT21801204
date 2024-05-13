import React from 'react'
import { useNavigate } from 'react-router-dom'

import editIcon from '../../../../assets/editIcon.svg'
import trashIcon from '../../../../assets/trash.svg'
import rightArrowIcon from '../../../../assets/arrowRight.svg'

const CourseNoteComp = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-3 items-center justify-center h-[280px] w-[280px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_rgba(0,0,0,0.3)]">
        <h1 className='text-2xl'>Title</h1>
        <div className='h-[1px] w-[80%] bg-gray-600 rounded-lg'></div>
        <p className='max-h-[172px] text-gray-700 w-[90%] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus nam assumenda eum molestias sint temporibus officia, pariatur, animi quibusdam voluptas distinctio velit obcaecati asperiores similique excepturi, quidem possimus eos numquam nihil provident! Fugit eligendi ad, voluptatum id voluptas rem praesentium! Fugiat architecto est autem asperiores quas ducimus. Aliquid error vel possimus nam esse repellendus voluptatum eos magni et quod, quia tenetur dolore libero inventore iste illo natus doloremque harum adipisci! Labore blanditiis nihil omnis tempora, quis temporibus qui, beatae quibusdam, inventore ut tempore velit dolore corrupti hic repellendus perferendis id corporis! Magnam fugit eius enim eos aperiam numquam debitis?</p>
        <div className='w-full h-[40px] flex items-center justify-center'>
            <button
            onClick={()=> {
                navigate('/instructor/course/note/update')
            }}
            >
                <img src={editIcon} alt="" />
            </button>
            <button
            onClick={()=>{
                navigate('/course/view/note')
            }}
            className='flex items-center mx-4 border-[1px] border-solid border-gray-600 p-1 rounded-lg'>
                <p className='mx-2 text-gray-600'>View More</p>
                <img src={rightArrowIcon} alt="" />
            </button>
            <button>
                <img src={trashIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default CourseNoteComp
