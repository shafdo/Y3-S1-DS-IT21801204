import AdminCard from '../components/Card';
import AdminTabList from '../components/Tablist';

const AdminApprovedCoursePage = () => {
  return (
    <>
      <div className="flex justify-center my-8">
        <AdminTabList page="approved" />
      </div>

      <div className="block">
        <p className="text-center text-4xl my-8">Approved Courses</p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <AdminCard
            title="Hello World"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus animi at obcaecati. Perspiciatis, ut sapiente nobis assumenda eius maiores delectus eaque ducimus optio recusandae fuga minus amet praesentium quia!"
            showFooter={false}
          />
        </div>
      </div>
    </>
  );
};

export default AdminApprovedCoursePage;
