import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage, LoginPage } from './';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
