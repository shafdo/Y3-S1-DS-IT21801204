import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { deleteNoteByIdAPIWrapper } from '../../../../api/content'

import editIcon from '../../../../assets/editIcon.svg'
import trashIcon from '../../../../assets/trash.svg'
import rightArrowIcon from '../../../../assets/arrowRight.svg'
import { notify } from '../../../../utils/notifier'

const CourseNoteComp = ({data}) => {
    const navigate = useNavigate();
    const [hideNote, setHideNote] = useState(false)
    
    const deleteNote = async() => {
        const confirmation = confirm('Do you want to delete the note?')
        if(confirmation){
            const res = await deleteNoteByIdAPIWrapper(data.notecode);
            notify('Note successfully deleted!', 'success');
            setHideNote(true)
        }
        else{
            return
        }

    }

  return (
    <div className={`flex flex-col mt-3 items-center justify-center h-[280px] w-[280px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_rgba(0,0,0,0.3)] ${hideNote ? 'hidden' : null}`}>
        <h1 className='text-2xl w-[90%]'>{data.title}</h1>
        <div className='h-[1px] w-[80%] bg-gray-600 rounded-lg'></div>
        <p className='max-h-[172px] text-gray-700 w-[90%] overflow-hidden'>{data.explanation}</p>
        <div className='w-full h-[40px] flex items-center justify-center'>
            <button
            onClick={()=> {
                navigate('/instructor/course/note/update', {state: {data}})
            }}
            >
                <img src={editIcon} alt="" />
            </button>
            <button
            onClick={()=>{
                navigate('/course/view/note', {state: {title: data.title, explanation: data.explanation}})
            }}
            className='flex items-center mx-4 border-[1px] border-solid border-gray-600 p-1 rounded-lg'>
                <p className='mx-2 text-gray-600'>View More</p>
                <img src={rightArrowIcon} alt="" />
            </button>
            <button
            onClick={deleteNote}
            >
                <img src={trashIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default CourseNoteComp
