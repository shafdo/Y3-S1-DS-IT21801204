import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserAPIWrapper } from '../../api/user';
import { notify } from '../../utils/notifier';

const RegisterPage = () => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const selectRole = (role, event) => {
    event.preventDefault();
    // If the clicked role is already selected, deselect it
    if (selectedRole === role) {
      setSelectedRole(null);
    } else {
      setSelectedRole(role);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      return notify('Password not match with confirm password.', 'error');
    }

    try {
      const res = await createUserAPIWrapper({
        fname: fullName,
        username,
        email,
        password,
        role: selectedRole,
      });

      notify(res.data.message, 'success');

      // Reset
      setFullName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      return notify('Failed to register user. Please try again later', 'error');
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
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
          <h1 className="text-gray-800 font-bold text-4xl mb-1">
            Registration
          </h1>
          <p className="text-lg font-normal text-gray-600 mb-7">
            Welcome to Learnify FAM ❤️
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
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name=""
              id=""
              value={fullName}
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
            />
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
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              ></path>
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name=""
              id=""
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
              type="email"
              name=""
              id=""
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
              type="password"
              name=""
              id=""
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
              type="password"
              name=""
              id=""
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            onClick={formHandler}
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Register
          </button>

          <p className="mt-8 text-lg font-normal text-gray-600 mb-7">
            Already have an account. Click{' '}
            <Link to="/login">
              <span className="text-blue-600 underline">here</span>
            </Link>{' '}
            to login.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
