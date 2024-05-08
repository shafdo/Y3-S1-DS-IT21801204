import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminTabList = ({ page }) => {
  return (
    <div className="container">
      <ul className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1 flex-row">
        <Link
          to="/admin/dashboard/pending"
          role="tab"
          className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
          data-value="pending"
        >
          <div className="z-20 text-inherit">Pending</div>
          {page == 'pending' && (
            <div
              className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
              data-projection-id="6"
            ></div>
          )}
        </Link>
        <Link
          to="/admin/dashboard/approved"
          role="tab"
          className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
          data-value="approved"
        >
          <div className="z-20 text-inherit">Approved</div>
          {page == 'approved' && (
            <div
              className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
              data-projection-id="6"
            ></div>
          )}
        </Link>
        <Link
          to="/admin/dashboard/rejected"
          role="tab"
          className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
          data-value="rejected"
        >
          <div className="z-20 text-inherit">Rejected</div>
          {page == 'rejected' && (
            <div
              className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
              data-projection-id="6"
            ></div>
          )}
        </Link>
      </ul>
    </div>
  );
};

AdminTabList.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AdminTabList;
