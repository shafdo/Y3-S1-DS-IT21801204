import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  RegisterPage,
  LoginPage,
  AdminPendingCoursePage,
  AdminApprovedCoursePage,
  AdminRejectedCoursePage,
  CourseCreatePage,
  CourseEditPage,
  InstructorDashboardPage,
} from './';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/dashboard/pending"
          element={<AdminPendingCoursePage />}
        />
        <Route
          path="/admin/dashboard/approved"
          element={<AdminApprovedCoursePage />}
        />
        <Route
          path="/admin/dashboard/rejected"
          element={<AdminRejectedCoursePage />}
        />
        <Route
          path="/instructor/dashboard"
          element={<InstructorDashboardPage />}
        />
        <Route
          path="/instructor/course/create"
          element={<CourseCreatePage />}
        />
        <Route path="/instructor/course/edit" element={<CourseEditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
