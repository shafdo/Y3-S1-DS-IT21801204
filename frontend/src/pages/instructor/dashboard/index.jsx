import { CardWithLink } from '../../../components';
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

const InstructorDashboardPage = () => {
  return (
    <>
      <p className="text-center my-8 text-4xl">Instructor Dashboard</p>
      <div className="container block mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <CardWithLink
            title="Create Course"
            desc="It's time to create your new course."
            location="/instructor/course/create"
            icon={faEnvelope}
            buttonText="Create Course"
          />
          <CardWithLink
            title="My Courses"
            desc="It's time to create your new course."
            location="/instructor/course/create"
            icon={faStar}
            buttonText="My Courses"
          />
        </div>
      </div>
    </>
  );
};

export default InstructorDashboardPage;
