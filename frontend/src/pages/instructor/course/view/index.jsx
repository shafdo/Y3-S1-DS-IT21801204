import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCourseAPIWrapper, deleteVideoByIdAPIWrapper } from '../../../../api/course'
import editIcon from '../../../../assets/editIcon.svg'
import rightArrowIcon from '../../../../assets/arrowRight.svg'
import videoIcon from '../../../../assets/videoIcon.svg'
import notesIcon from '../../../../assets/notes.svg'
import playIcon from '../../../../assets/play.svg'
import trashIcon from '../../../../assets/trash.svg'
import CourseVideoComp from '../../../../components/course/view/videoCard'
import CourseNoteComp from '../../../../components/course/view/noteComp'

const InstructorCourseView = () => {
    const navigate = useNavigate()
    const [courseData, setCourseData] = useState({});
    const [savedCrscode, setSavedCrscode] = useState('');
    
    const deleteVideo = async(e, videoId) => {
        e.preventDefault();
        const res = await deleteVideoByIdAPIWrapper(savedCrscode, videoId)
        console.log(res);
    }
    
    useEffect(()=> {
        const url = new URL(window.location.href);
        const crscode = url.searchParams.get('crscode');
        setSavedCrscode(crscode);

        const fetchData = async() => {
            const res = await getCourseAPIWrapper(crscode)
            setCourseData(res.data)
        }
        fetchData();
    }, [])
    return (
    <div className='min-h-screen w-full text-center'>
      <div className="top_filler w-full h-[60px]"></div>
      <h1 className='text-[80px]'>Welcome to!</h1>
      <h1 className='text-[100px] min-[500px]:text-sm leading-[110px] text-gray-700'>{courseData.crsname}</h1>
      <p className='my-[20px] w-[90%] mx-auto text-md border-[2px] border-[solid] border-green-200 p-3 rounded-3xl'>{courseData.description}</p>
      <div className='edit_btn py-8 h-auto flex flex-col items-center justify-center overflow-hidden border-t-[2px] border-t-[solid] border-t-gray-400'>
        <button 
        onClick={()=> {
            navigate(`/instructor/course/edit?crscode=${courseData.crscode}`)
        }}
        className='mt-2 h-[40px] w-fit border-[2px] border-[solid] border-green-200 rounded-[100px] flex items-center justify-center px-2'>
            <img className='h-4' src={editIcon} alt="" />
            <p className='mx-2 text-green-400'>edit</p>
            <img className='mx-1' src={rightArrowIcon} alt="" />
        </button>
        <p className='w-[300px] text-[12px] my-2 text-green-400'>Edit course details. To add videos or notes click on the add icon found under each section.</p>
      </div>
      <div className='flex justify-around w-full h-auto bg-green-200 mt-5'>
        <div className='relative h-[300px] w-[300px] bg-green-100 flex items-center justify-center'>
            <div className='h-[180px] w-[180px] bg-white absolute rounded-md [box-shadow:0_0_8px_2px_black]'></div>
            <div className='h-[180px] w-[180px] bg-white rotate-45 rounded-md [box-shadow:0_0_8px_2px_black] border-[4px] border-[solid] border-gray-400'></div>
            <div className='h-[180px] w-[180px] bg-transparent absolute 
            flex flex-col items-center justify-center'>
                <img className='h-[40px]' src={videoIcon} alt="" />
                <p className='text-2xl mt-2 text-gray-800' >{courseData.videos ? courseData.videos.length : 0}</p>
                <p className='text-2xl mt-2 text-gray-400'>Videos</p>
            </div>
        </div>
        <div className='relative h-[300px] w-[300px] bg-green-100 flex items-center justify-center'>
            <div className='h-[180px] w-[180px] bg-white absolute rounded-md [box-shadow:0_0_8px_2px_black]'></div>
            <div className='h-[180px] w-[180px] bg-white rotate-45 rounded-md [box-shadow:0_0_8px_2px_black] border-[4px] border-[solid] border-gray-400'></div>
            <div className='h-[180px] w-[180px] bg-transparent absolute 
            flex flex-col items-center justify-center'>
                <img className='h-[40px]' src={notesIcon} alt="" />
                <p className='text-2xl mt-2 text-gray-800' >0</p>
                <p className='text-2xl mt-2 text-gray-400'>Notes</p>
            </div>
        </div>
        {/* <div className='relative h-[300px] w-[300px] bg-green-100 flex items-center justify-center'>
            <div className='h-[180px] w-[180px] bg-white absolute rounded-md [box-shadow:0_0_8px_2px_black]'></div>
            <div className='h-[180px] w-[180px] bg-white rotate-45 rounded-md [box-shadow:0_0_8px_2px_black] border-[4px] border-[solid] border-gray-400'></div>
            <div className='h-[180px] w-[180px] bg-transparent absolute 
            flex flex-col items-center justify-center'>
                <img className='h-[40px]' src={notesIcon} alt="" />
                <p className='text-2xl mt-2 text-gray-800' >Status</p>
                <p className='text-2xl mt-2 text-gray-400'>Pending</p>
            </div>
        </div> */}
        
      </div>
      <div className='content_holder w-full h-auto '>
        <h1 className='text-[40px] text-gray-700'>Videos</h1>
        <div className="w-[90%] h-[1px] bg-gray-500 mx-auto"></div>
        <div className="flex items-center w-full h-[250px] overflow-x-auto overflow-y-visible">

            <div className="flex flex-col items-center justify-center border-[2px] border-solid h-[200px] w-[200px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_rgba(0,0,0,0.3)]">
                <div className='relative h-[110px] w-[110px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                    <div className='absolute h-1 w-10 bg-gray-300 rounded-md'></div>
                    <div className='h-1 w-10 bg-gray-300 rounded-md rotate-90'></div>
                </div>
            </div>
            
            {
                courseData.videos &&
                courseData.videos.map((data)=> (
                    <CourseVideoComp data={data} deleteVideo={deleteVideo}/>
                ))
            }
            
            
        </div>
        <h1 className='text-[40px] text-gray-700'>Notes</h1>
        <div className="w-[90%] h-[1px] bg-gray-500 mx-auto"></div>
        <div className="w-full h-[300px] overflow-x-auto flex items-center mb-3">
            
            <div
            onClick={()=> {
                navigate('/instructor/course/note/create')
            }}
            className="flex flex-col mt-3 items-center justify-center h-[280px] w-[280px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_rgba(0,0,0,0.3)]">
                <div className='relative h-[110px] w-[110px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                    <div className='absolute h-1 w-10 bg-gray-300 rounded-md'></div>
                    <div className='h-1 w-10 bg-gray-300 rounded-md rotate-90'></div>
                </div>
            </div>

            <CourseNoteComp/>

        </div>
      </div>
    </div>
  )
}

export default InstructorCourseView
