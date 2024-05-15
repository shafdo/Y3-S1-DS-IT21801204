import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComp() {
  const navigate = useNavigate();

  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }

  const [cookies] = useCookies(['auth']);
  const [role, setRole] = useState('learner');

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
    <nav className=" border-gray-200 bg-gray-300 fixed top-0 w-full mx-auto z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-5xl text-green-600 font-bold mb-4 block mx-auto"
          />
          <span className="self-center text-4xl font-semibold border-green-600 pb-2 border-b-4 whitespace-nowrap tracking-wider">
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
          } mt-4 w-full md:block md:w-auto"`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-green-500 dark:border-gray-700">
            {role === 'admin' ? (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:border-b-4 border-black transition-all md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/dashboard/pending"
                    className="block py-2 px-3 text-gray-900 rounded hover:border-b-4 border-black transition-all md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:border-b-4 border-black transition-all md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : role === 'instructor' ? (
              <>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    Create
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    My Courses
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : role === 'learner' ? (
              <>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    My Courses
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
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
