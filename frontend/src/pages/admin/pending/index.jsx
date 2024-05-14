import { useEffect, useState } from 'react';
import NavbarComp from '../../../components/NavbarComp';
import AdminCard from '../components/Card';
import AdminTabList from '../components/Tablist';
import {
  getAllCourseAPIWrapper,
  reviewCourseAPIWrapper,
} from '../../../api/course';
import { notify } from '../../../utils/notifier';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const AdminPendingCoursePage = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await getAllCourseAPIWrapper();
    setCourses(res.data.filter((course) => course.status === 'pending'));
  };

  const updateCourse = async (courseId, status) => {
    const remarks = prompt('Enter your remark?');
    try {
      const res = await reviewCourseAPIWrapper(courseId, { status, remarks });
      const filtered = courses.filter(
        (course) => course.crscode !== res.data.updatedItem.crscode
      );
      setCourses(filtered);
      notify(res.data.status, 'success');
    } catch (error) {
      notify(error.response.data.error, 'error');
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <NavbarComp />

      <div className="flex justify-center mt-44 my-8">
        <AdminTabList page="pending" />
      </div>

      <div className="block">
        <p className="text-center text-4xl my-8">Pending Courses</p>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {courses.map((course, index) => (
            <div key={index}>
              <AdminCard
                title={course.crsname}
                desc={course.description}
                showFooter={true}
                acceptBtnActionFunc={() =>
                  updateCourse(course.crscode, 'approved')
                }
                rejectBtnActionFunc={() =>
                  updateCourse(course.crscode, 'rejected')
                }
              />
            </div>
          ))}
        </div>

        {courses.length <= 0 && (
          <h1 className="text-xl text-center">
            <FontAwesomeIcon icon={faQuestion} /> No Pending Courses
          </h1>
        )}
      </div>
    </>
  );
};

export default AdminPendingCoursePage;
