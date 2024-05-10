import { useEffect } from 'react';
import { createCourseAPIWrapper } from '../../../../api/course';

const CourseCreatePage = () => {
  const formHandler = async (payload) => {
    const res = await createCourseAPIWrapper(payload);
    console.log(res);
  };

  useEffect(() => {
    formHandler({
      crsname: 'Test 456',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita fugiat aliquam!',
      price: 20000,
    });
  }, []);

  return (
    <>
      <p className="text-4xl text-center my-8">Create Course</p>
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
            type="text"
            placeholder="Course Name"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Course Description"
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
            type="number"
            placeholder="Course Price"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit for reviewal
          </button>
        </div>
      </form>
    </>
  );
};

export default CourseCreatePage;
