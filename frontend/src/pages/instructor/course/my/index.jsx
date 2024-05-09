const MyCoursesPage = () => {
  return (
    <div className="container block mx-auto">
      <div className="px-9 py-5 flex justify-between items-stretch flex-wrap min-h-[70px] bg-gray-800 my-8 text-white rounded-2xl">
        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 font-semibold text-dark">All Courses</span>
          <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
            Check all courses available
          </span>
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full my-0 align-middle text-dark border-neutral-200">
          <thead className="align-bottom">
            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
              <th className="pb-3 text-start min-w-[175px]">COURSE</th>
              <th className="pb-3 text-end min-w-[100px]">DURATION</th>
              <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
              <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dashed last:border-b-0">
              <td className="p-3 pl-0">
                <div className="flex items-center">
                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href="javascript:void(0)"
                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                    >
                      {' '}
                      Social Media API{' '}
                    </a>
                  </div>
                </div>
              </td>
              <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-green-700 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  1h 6min
                </span>
              </td>
              <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                  {' '}
                  Review Pending{' '}
                </span>
              </td>

              <td className="p-3 pr-0 text-end">
                <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-dashed last:border-b-0">
              <td className="p-3 pl-0">
                <div className="flex items-center">
                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg"
                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href="javascript:void(0)"
                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                    >
                      {' '}
                      Geolocation App{' '}
                    </a>
                  </div>
                </div>
              </td>

              <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-green-700 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  55min
                </span>
              </td>
              <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-light-inverse rounded-lg text-success bg-success-light">
                  Approved
                </span>
              </td>
              <td className="p-3 pr-0 text-end">
                <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-dashed last:border-b-0">
              <td className="p-3 pl-0">
                <div className="flex items-center">
                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg"
                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href="javascript:void(0)"
                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                    >
                      {' '}
                      iOS Login <span className="text-sm">(Morra)</span>
                    </a>
                  </div>
                </div>
              </td>

              <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-green-700 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  2h 18min
                </span>
              </td>
              <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                  {' '}
                  Review Pending{' '}
                </span>
              </td>

              <td className="p-3 pr-0 text-end">
                <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-dashed last:border-b-0">
              <td className="p-3 pl-0">
                <div className="flex items-center">
                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href="javascript:void(0)"
                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                    >
                      {' '}
                      Axios Menu{' '}
                    </a>
                  </div>
                </div>
              </td>

              <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-green-700 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  45min
                </span>
              </td>
              <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-success bg-success-light rounded-lg">
                  {' '}
                  Approved{' '}
                </span>
              </td>

              <td className="p-3 pr-0 text-end">
                <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
            <tr className="border-b border-dashed last:border-b-0">
              <td className="p-3 pl-0">
                <div className="flex items-center">
                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg"
                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <a
                      href="javascript:void(0)"
                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                    >
                      {' '}
                      Resto Aperto{' '}
                    </a>
                  </div>
                </div>
              </td>

              <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-green-700 bg-green-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  1h 12min
                </span>
              </td>
              <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg">
                  {' '}
                  Rejected{' '}
                </span>
              </td>
              <td className="p-3 pr-0 text-end">
                <button className="ml-auto relative text-secondary-dark bg-gray-200 hover:bg-gray-300 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCoursesPage;
