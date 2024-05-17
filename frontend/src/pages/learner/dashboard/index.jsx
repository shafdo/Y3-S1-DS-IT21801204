import { useEffect, useState } from 'react';
import { BlogCard } from '../../../components';
import NavbarComp from '../../../components/NavbarComp';
import { fetchEnrolledCourseIdsAPIWrapper } from '../../../api/enrollment';
import { getAllCourseAPIWrapper } from '../../../api/course';

const LearnerDashboardPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const enrolledCourseIds = await fetchEnrolledCourseIdsAPIWrapper();
        setEnrolledCourses(enrolledCourseIds);

        const courses = await getAllCourseAPIWrapper();
        setAllCourses(courses.data);

        for (const course of courses) {
          if (!enrolledCourseIds.includes(course.crscode) && course.status == "approved") {
            filtered.push(course);
          }
        }
        setFilteredCourses(filtered);

        // const coursesArray = Object.values(courses).map(course => course);
        // console.log('coursesArray:', coursesArray);
        // const filtered = courses.filter(course => !enrolledCourseIds.includes(course.crscode));
        // setFilteredCourses(filtered);       
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('courses:', allCourses);
    console.log('Filtered courses:', filteredCourses);
    
  }, [allCourses, filteredCourses]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // This will return the date in the format MM/DD/YYYY
  };

  return (
    <>
      <NavbarComp />
      <p className="text-center my-12 text-4xl mt-48">Course Learner Listing</p>
      <div className="container block mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-16">
          {/* Map over filteredCourses and render BlogCard for each course */}
          {allCourses.map(course => (
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

export default LearnerDashboardPage;
