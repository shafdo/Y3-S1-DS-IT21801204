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
  InstructorCreateVideo,
  InstructorUpdateNote,
  LearnerCourseView,
  ViewNote,
  MyCoursesPage,
  HomePage,
  PaymentPage,
} from './';
import { CookiesProvider } from 'react-cookie';
import LearnerDashboardPage from './learner/dashboard';
import LearnerMyCoursePage from './learner/course/mycourses';

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
            path="/learner/dashboard"
            element={<LearnerDashboardPage />}
          />
          <Route
            path="/instructor/course/create"
            element={<CourseCreatePage />}
          />
          <Route
            path="/instructor/course/view"
            element={<InstructorCourseView />}
          />
          <Route path="/learner/:courseId/view" element={<LearnerCourseView />} />
          <Route
            path="/learner/myCourses"
            element={<LearnerMyCoursePage />}
          />
          <Route
            path="/instructor/course/note/create"
            element={<InstructorCreateNote />}
          />
          <Route
            path="/instructor/course/video/create"
            element={<InstructorCreateVideo />}
          />
          <Route
            path="/instructor/course/note/update"
            element={<InstructorUpdateNote />}
          />
          <Route path="/course/view/note" element={<ViewNote />} />
          <Route path="/instructor/course/edit" element={<CourseEditPage />} />
          <Route path="/instructor/course/my" element={<MyCoursesPage />} />

          <Route path="/payment" element={<PaymentPage />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={5000} />
      </Router>
    </CookiesProvider>
  );
}

export default App;
