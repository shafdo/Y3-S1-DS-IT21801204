import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState('admin');

  const selectRole = (role, event) => {
    event.preventDefault();
    // If the clicked role is already selected, deselect it
    if (selectedRole === role) {
      setSelectedRole(null);
    } else {
      setSelectedRole(role);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-purple-600 to-orange-500 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Learnify :)
          </h1>
          <p className="text-white mt-1">
            Explore courses. Learn by doing. Expand your knowledge.
          </p>
          <Link to="/">
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white w-3/4">
          <h1 className="text-gray-800 font-bold text-4xl mb-1">Login</h1>
          <p className="text-lg font-normal text-gray-600 mb-7">
            Login to Learnify. Continue endless learning 🎓.
          </p>

          <div className="flex justify-end items-center mb-4">
            <button
              className={`py-2 px-4 rounded-full mr-4 ${
                selectedRole === 'admin'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } focus:outline-none`}
              onClick={(e) => selectRole('admin', e)}
            >
              Admin
            </button>
            <button
              className={`py-2 px-4 rounded-full mr-4 ${
                selectedRole === 'instructor'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } focus:outline-none`}
              onClick={(e) => selectRole('instructor', e)}
            >
              Instructor
            </button>
            <button
              className={`py-2 px-4 rounded-full ${
                selectedRole === 'student'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } focus:outline-none`}
              onClick={(e) => selectRole('student', e)}
            >
              Student
            </button>
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>

          <p className="mt-8 text-lg font-normal text-gray-600 mb-7">
            Don&apos;t have an account. Click{' '}
            <Link to="/register">
              <span className="text-blue-600 underline">here</span>
            </Link>{' '}
            to register.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
