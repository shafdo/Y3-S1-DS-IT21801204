import { useEffect, useState } from 'react';
import NavbarComp from '../../../components/NavbarComp';
import AdminCard from '../components/Card';
import AdminTabList from '../components/Tablist';
import { getAllCourseAPIWrapper } from '../../../api/course';

const AdminPendingCoursePage = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await getAllCourseAPIWrapper();
    setCourses(res.data.filter((course) => course.status === 'pending'));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <NavbarComp />

      <div className="flex justify-center mt-36 my-8">
        <AdminTabList page="pending" />
      </div>

      <div className="block">
        <p className="text-center text-4xl my-8">Pending Courses</p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index}>
              <AdminCard
                title={course.crsname}
                desc={course.description}
                showFooter={true}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPendingCoursePage;
