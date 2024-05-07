import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  RegisterPage,
  LoginPage,
  AdminPendingCoursePage,
  AdminApprovedCoursePage,
  AdminRejectedCoursePage,
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
      </Routes>
    </Router>
  );
}

export default App;
