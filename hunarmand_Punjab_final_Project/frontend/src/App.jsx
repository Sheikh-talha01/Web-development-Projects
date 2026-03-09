import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseListingPage from './pages/CourseListingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import CreateCoursePage from './pages/CreateCoursePage';
import ManageCoursesPage from './pages/ManageCoursesPage';
import MyCoursesPage from './pages/MyCoursesPage';
import UserListPage from './pages/UserListPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <main className="py-3" style={{ minHeight: '80vh' }}>
                    <Container>
                        <Routes>
                            <Route path="/" element={<CourseListingPage />} exact />
                            <Route path="/courses" element={<CourseListingPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/my-courses" element={<MyCoursesPage />} />
                            <Route path="/instructor/create-course" element={<CreateCoursePage />} />
                            <Route path="/instructor/my-courses" element={<ManageCoursesPage />} />
                            <Route path="/admin/userlist" element={<UserListPage />} />
                            <Route path="/admin/courselist" element={<ManageCoursesPage />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
