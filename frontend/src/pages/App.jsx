import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  RegisterPage,
  LoginPage,
  AdminPendingCoursePage,
  AdminApprovedCoursePage,
  AdminRejectedCoursePage,
  CourseCreatePage,
  CourseEditPage,
  InstructorDashboardPage,
  InstructorCourseView,
  InstructorCreateNote,
  InstructorUpdateNote,
  LearnerCourseView,
  ViewNote,
  MyCoursesPage,
  HomePage,
} from './';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route
            path="/instructor/course/view"
            element={<InstructorCourseView />}
          />
          <Route path="/learner/course/view" element={<LearnerCourseView />} />
          <Route
            path="/instructor/course/note/create"
            element={<InstructorCreateNote />}
          />
          <Route
            path="/instructor/course/note/update"
            element={<InstructorUpdateNote />}
          />
          <Route path="/course/view/note" element={<ViewNote />} />
          <Route path="/instructor/course/edit" element={<CourseEditPage />} />
          <Route path="/instructor/course/my" element={<MyCoursesPage />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={5000} />
      </Router>
    </CookiesProvider>
  );
}

export default App;
