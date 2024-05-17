import { faQuestion, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notify } from '../../../../utils/notifier';
import { getAllCourseAPIWrapper, deleteCourseByIdAPIWrapper } from '../../../../api/course';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRandomNumber } from '../../../../utils/misc';
import NavbarComp from '../../../../components/NavbarComp'

const MyCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourse = async () => {
    const res = await getAllCourseAPIWrapper();
    setCourses(res.data);
  };

  const deleteCourse = async(crscode)=> {
    const deleteCon = window.confirm('Do you want to delete this course');
    if(deleteCon){
      const deletedData = await deleteCourseByIdAPIWrapper(crscode)
      notify('Course deleted successfully', 'success');
      window.location.reload();
    }
    else{
      return
    }
  }

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="container block mx-auto">
      <div className='w-full h-[120px]'></div>
    <NavbarComp/>
      <div className="px-9 py-5 flex justify-between items-stretch flex-wrap min-h-[70px] bg-gray-800 my-8 text-white rounded-2xl">
        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 font-semibold text-dark">All Courses</span>
          <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
            Check all courses available
          </span>
          <div 
          onClick={()=> {
            navigate('/instructor/course/create')
          }}
          className='h-auto w-fit flex items-center mt-3'>
            <div className='size-10 relative flex items-center justify-center rounded-full border-[1px] border-[solid] border-white' >
              <div className="w-8 h-[1px] bg-white rounded-lg rotate-90"></div>
              <div className="w-8 h-[1px] bg-white rounded-lg absolute"></div>
            </div>
            <h3 className='ml-4'>Add course</h3>
          </div>
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full my-0 align-middle text-dark border-neutral-200">
          <thead className="align-bottom">
            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
              <th className="pb-3 text-start min-w-[175px]">COURSE</th>
              <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
              <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
              <th className="pb-3 text-end min-w-[50px]">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className="border-b border-dashed last:border-b-0"
              >
                <td className="p-3 pl-0">
                  <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                      <img
                        src={`https://source.unsplash.com/random/500x400/?tech&orientation=landscape&sig=${getRandomNumber()}`}
                        className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-start">
                      <a
                        href="javascript:void(0)"
                        className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                      >
                        {course.crsname}
                      </a>
                    </div>
                  </div>
                </td>
                <td className="p-3 pr-12 text-end">
                  <span className="text-center capitalize align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                    {course.status}
                  </span>
                </td>

                <td className="p-3 pr-0 text-end">
                  <Link
                    to={`/instructor/course/view?crscode=${course.crscode}`}
                  >
                    <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </Link>
                </td>

                <td className="p-3 pr-0 text-end">
                  <button
                  onClick={()=> {deleteCourse(course.crscode)}}
                  className="ml-auto text-red-500 relative text-secondary-dark flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {courses.length <= 0 && (
        <h1 className="text-xl text-center">
          <FontAwesomeIcon icon={faQuestion} /> No courses
        </h1>
      )}
    </div>
  );
};

export default MyCoursesPage;
