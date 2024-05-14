import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getCourseAPIWrapper, deleteVideoByIdAPIWrapper } from '../../../../api/course'
import { getAllNotesAPIWrapper } from '../../../../api/content'

import videoIcon from '../../../../assets/videoIcon.svg'
import notesIcon from '../../../../assets/notes.svg'
import boxImage from '../../../../assets/box.svg'

import CourseVideoComp from '../../../../components/course/view/videoCard'
import CourseNoteComp from '../../../../components/course/view/noteComp'

const LearnerCourseView = () => {
    const navigate = useNavigate()
    const [courseData, setCourseData] = useState({});
    const [notesArray, setNotesArray] = useState([]);
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

        const fetchNotes = async() => {
            const res = await getAllNotesAPIWrapper(crscode)
            setNotesArray(res.data);
        }

        fetchNotes();
    }, [])
    return (
    <div className='min-h-screen w-full text-center'>
      <div className="top_filler w-full h-[60px]"></div>
      <h1 className='text-[80px]'>Welcome to!</h1>
      <h1 className='text-[100px] min-[500px]:text-sm leading-[110px] text-gray-700'>{courseData.crsname}</h1>
      <h1 className='text-2xl'>${courseData.price}</h1>
      <p className='my-[20px] w-[90%] mx-auto text-md border-[2px] border-[solid] border-green-200 p-3 rounded-3xl'>{courseData.description}</p>
      
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
                <p className='text-2xl mt-2 text-gray-800' >{notesArray.length}</p>
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

        {/* video display */}
        {
            courseData.videos && courseData.videos.length > 0 ? 
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
                        <CourseVideoComp data={data} deleteVideo={deleteVideo} access={false}/>
                    ))
                }
            </div>
            :
            <div className='empty_message flex flex-col items-center justify-center w-full h-[280px] bg-gray-100'>
                <img src={boxImage} className='h-[58px]'/>
                <h1 className='text-[20px] text-gray-600 mt-2'>No videos to display :(</h1>
            </div>
        }
        
        {/* video display */}

        <h1 className='text-[40px] text-gray-700'>Notes</h1>
        <div className="w-[90%] h-[1px] bg-gray-500 mx-auto"></div>

        {
            notesArray && notesArray.length > 0 ?
            <div className="w-full h-[350px] overflow-x-auto flex items-center mb-3">
                {
                    notesArray &&
                    notesArray.map((data)=> (
                        <CourseNoteComp data={data} access={false}/>
                    ))
                }
            </div>
            :
            <div className='empty_message flex flex-col items-center justify-center w-full h-[280px] bg-gray-100'>
                <img src={boxImage} className='h-[58px]'/>
                <h1 className='text-[20px] text-gray-600 mt-2'>No notes to display :(</h1>
            </div>
        }
        

      </div>
    </div>
  )
}

export default LearnerCourseView
