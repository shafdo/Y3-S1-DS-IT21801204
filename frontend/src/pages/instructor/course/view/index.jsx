import React from 'react'
import { useNavigate } from 'react-router-dom'
import editIcon from '../../../../assets/editIcon.svg'
import rightArrowIcon from '../../../../assets/arrowRight.svg'
import videoIcon from '../../../../assets/videoIcon.svg'
import notesIcon from '../../../../assets/notes.svg'
import playIcon from '../../../../assets/play.svg'
import trashIcon from '../../../../assets/trash.svg'

const InstructorCourseView = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen w-full text-center'>
      <div className="top_filler w-full h-[60px]"></div>
      <h1 className='text-[80px]'>Welcome to!</h1>
      <h1 className='text-[100px] min-[500px]:text-sm leading-[110px] text-gray-700'>Introduction to javascript, and the basics of REACT</h1>
      <p className='my-[20px] w-[90%] mx-auto text-md border-[2px] border-[solid] border-green-200 p-3 rounded-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab placeat eos dolor eaque reprehenderit et fugit accusantium molestias perferendis voluptates voluptatem magni nostrum repellat ex est, voluptas, voluptatum omnis non voluptatibus tenetur. Fugit autem accusantium, adipisci, quaerat tempore necessitatibus voluptatum possimus vero iure deleniti magni sint explicabo dolorem ex ducimus dolorum natus ab labore fuga ipsum temporibus quae! Eveniet ratione dolor consequuntur at debitis quam magni et soluta explicabo obcaecati quasi corrupti, distinctio eum id quae veniam aliquam? Placeat maiores pariatur ex explicabo, culpa exercitationem ea consequuntur, unde repudiandae, quo voluptates qui dolorem mollitia praesentium quidem adipisci quasi molestias.</p>
      <div className='edit_btn py-8 h-auto flex flex-col items-center justify-center overflow-hidden border-t-[2px] border-t-[solid] border-t-gray-400'>
        <button className='mt-2 h-[40px] w-fit border-[2px] border-[solid] border-green-200 rounded-[100px] flex items-center justify-center px-2'>
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
                <p className='text-2xl mt-2 text-gray-800' >0</p>
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
        <div className="flex items-center w-full h-[250px] overflow-x-auto overflow-y-visible">

            <div className="flex flex-col items-center justify-center border-[2px] border-solid border-green-200 h-[200px] w-[200px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_black]">
                <div className='relative h-[110px] w-[110px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                    <div className='absolute h-1 w-10 bg-gray-300 rounded-md'></div>
                    <div className='h-1 w-10 bg-gray-300 rounded-md rotate-90'></div>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center border-[2px] border-solid border-green-200 h-[200px] w-[200px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_black]">
                <div className='h-[90px] w-[90px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                    <img className='h-14 ml-2' src={playIcon} alt="" />
                </div>
                <p className='text-gray-600 w-[180px] text-nowrap overflow-hidden text-ellipsis'>Introduction to hyper stars</p>
                <button className='h-[40px] w-[40px] rounded-[50%] border-[2px] border-solid border-red-300 flex items-center justify-center mt-2'>
                    <img src={trashIcon} alt="" />
                </button>
            </div>
            
        </div>
        <h1 className='text-[40px] text-gray-700'>Notes</h1>
        <div className="w-full h-[300px] overflow-x-auto flex items-center mb-3">
            
            <div
            onClick={()=> {
                navigate('/instructor/course/note/create')
            }}
            className="flex flex-col mt-3 items-center justify-center h-[280px] w-[280px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_black]">
                <div className='relative h-[110px] w-[110px] rounded-[50%] flex items-center justify-center border-[1px] border-[solid] border-gray-500'>
                    <div className='absolute h-1 w-10 bg-gray-300 rounded-md'></div>
                    <div className='h-1 w-10 bg-gray-300 rounded-md rotate-90'></div>
                </div>
            </div>

            <div className="flex flex-col mt-3 items-center justify-center h-[280px] w-[280px] rounded-lg mx-5 shrink-0 [box-shadow:0_0_8px_2px_black]">
                <h1 className='text-2xl'>Title</h1>
                <div className='h-[1px] w-[80%] bg-gray-600 rounded-lg'></div>
                <p className='max-h-[172px] w-[90%] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus nam assumenda eum molestias sint temporibus officia, pariatur, animi quibusdam voluptas distinctio velit obcaecati asperiores similique excepturi, quidem possimus eos numquam nihil provident! Fugit eligendi ad, voluptatum id voluptas rem praesentium! Fugiat architecto est autem asperiores quas ducimus. Aliquid error vel possimus nam esse repellendus voluptatum eos magni et quod, quia tenetur dolore libero inventore iste illo natus doloremque harum adipisci! Labore blanditiis nihil omnis tempora, quis temporibus qui, beatae quibusdam, inventore ut tempore velit dolore corrupti hic repellendus perferendis id corporis! Magnam fugit eius enim eos aperiam numquam debitis?</p>
                <div className='w-full h-[40px] flex items-center justify-center'>
                    <button>
                        <img src={editIcon} alt="" />
                    </button>
                    <button className='flex items-center mx-4 border-[1px] border-solid border-gray-600 p-1 rounded-lg'>
                        <p className='mx-2 text-gray-600'>View More</p>
                        <img src={rightArrowIcon} alt="" />
                    </button>
                    <button>
                        <img src={trashIcon} alt="" />
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default InstructorCourseView
