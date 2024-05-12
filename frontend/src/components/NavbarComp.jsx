import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

export default function NavbarComp() {
  const navigate = useNavigate();

  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }

  const [cookies] = useCookies(['auth']);
  const [role, setRole] = useState('');

  const logout = () => {
    deleteCookie('auth');
    return setTimeout(() => navigate('/'), 200);
  };

  const assignRole = () => {
    if (!cookies.auth) {
      setRole('');
      return;
    }

    // Decode JWT
    try {
      const decoded = jwtDecode(cookies.auth);
      setRole(decoded.role);
    } catch (error) {
      setRole('');
    }
  };

  useEffect(() => {
    for (let counter = 0; counter < 3; counter++) {
      if (role == '') {
        assignRole();
      } else {
        break;
      }
    }
  }, [cookies.auth]);

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" border-gray-200 bg-green-500 fixed top-0 w-full mx-auto z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Learnify
          </span>
        </Link>
        <button
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            navbarOpen ? '' : 'hidden'
          } w-full md:block md:w-auto" id="navbar-default`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-green-500 dark:border-gray-700">
            {role === 'admin' ? (
              <>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Review
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : role === 'instructor' ? (
              <>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Create
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    My Courses
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : role === 'learner' ? (
              <>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    My Courses
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
