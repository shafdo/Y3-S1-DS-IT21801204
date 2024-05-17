import { useEffect, useState } from 'react';
import { BlogCard } from '../../../../components';
import NavbarComp from '../../../../components/NavbarComp';
import { fetchEnrolledCourseIdsAPIWrapper } from '../../../../api/enrollment';
import { getCoursesByArrayAPIWrapper } from '../../../../api/course';

const LearnerMyCoursePage = () => {
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch enrolled course IDs
        const enrolledIds = await fetchEnrolledCourseIdsAPIWrapper();
        setEnrolledCourseIds(enrolledIds);

        //Fetch enrolled courses details using their IDs
        if (enrolledIds && enrolledIds.length > 0) {
          // Fetch enrolled courses details using their IDs
          const enrolledCourses = await getCoursesByArrayAPIWrapper(enrolledIds);
          setCourses(enrolledCourses);
        }
        
        // const enrolledCourses = await getCoursesByArrayAPIWrapper(enrolledIds);
        // setCourses(enrolledCourses);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Enrolled Course IDs (state):', enrolledCourseIds);
  }, [enrolledCourseIds]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // This will return the date in the format MM/DD/YYYY
  };

  return (
    <>
      <NavbarComp />
      <p className="text-center my-12 text-4xl mt-48">My Courses</p>
      <div className="container block mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-16">
           {courses.map(course => (
            <BlogCard
              key={course._id}
              title={course.crsname}
              desc={course.description}
              createdDate={formatDate(course.date)}
              author={course.instructorId}
              price={course.price}
              courseId={course.crscode}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LearnerMyCoursePage;
