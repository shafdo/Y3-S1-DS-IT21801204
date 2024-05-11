import { useEffect, useState } from 'react';
import {
  editCourseAPIWrapper,
  getCourseAPIWrapper,
} from '../../../../api/course';
import { notify } from '../../../../utils/notifier';

const CourseEditPage = () => {
  const courseId = 'b4dfa464-4657-426e-aa5e-8918ace4ea92';

  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  const fetchCourse = async (courseId) => {
    const res = await getCourseAPIWrapper(courseId);
    setCourseName(res.data.crsname);
    setCourseDesc(res.data.description);
    setCoursePrice(res.data.price);
  };

  const formHandler = async () => {
    const payload = {
      crsname: courseName,
      description: courseDesc,
      price: coursePrice,
      courseId: courseId,
    };

    const res = await editCourseAPIWrapper(payload);
    if (res.data.status) {
      notify('Course updated successfully', 'success');
      return;
    }

    notify('Course update failed', 'error');
  };

  useEffect(() => {
    fetchCourse(courseId);
  }, []);

  return (
    <>
      <p className="text-4xl text-center my-8">Edit Course</p>
      <form className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="crsname"
          >
            Course Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="crsname"
            value={courseName}
            type="text"
            placeholder="Course Name"
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Course Description
          </label>
          <textarea
            value={courseDesc}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Course Description"
            onChange={(e) => setCourseDesc(e.target.value)}
            rows={8}
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Course Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            value={coursePrice}
            type="number"
            placeholder="Course Price"
            onChange={(e) => setCoursePrice(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={formHandler}
          >
            Edit Course
          </button>
        </div>
      </form>
    </>
  );
};

export default CourseEditPage;
