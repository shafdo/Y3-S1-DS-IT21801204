import { useEffect, useState } from 'react';
import NavbarComp from '../../../components/NavbarComp';
import AdminCard from '../components/Card';
import AdminTabList from '../components/Tablist';
import { getAllCourseAPIWrapper } from '../../../api/course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const AdminApprovedCoursePage = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await getAllCourseAPIWrapper();
    setCourses(res.data.filter((course) => course.status === 'approved'));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <NavbarComp />

      <div className="flex justify-center mt-44 my-8">
        <AdminTabList page="approved" />
      </div>

      <div className="block">
        <p className="text-center text-4xl my-8">Approved Courses</p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index}>
              <AdminCard
                title={course.crsname}
                desc={course.description}
                showFooter={false}
              />
            </div>
          ))}
        </div>
        {courses.length <= 0 && (
          <h1 className="text-xl text-center">
            <FontAwesomeIcon icon={faQuestion} /> No Approved Courses
          </h1>
        )}
      </div>
    </>
  );
};

export default AdminApprovedCoursePage;
