import React, { useEffect, useState, useContext } from 'react';
import { Table, Button, Container, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

const ManageCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);

    const fetchCourses = async () => {
        try {
            const { data } = await API.get('/courses');
            // Show all courses for Admin, but only its own for Instructor
            const filtered = user.role === 'Admin'
                ? data
                : data.filter(c => c.instructor?._id === user._id);
            setCourses(filtered);
            setLoading(false);
        } catch (err) {
            setError('Failed to load courses');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [user]);

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                await API.delete(`/courses/${id}`);
                fetchCourses();
            } catch (err) {
                alert('Failed to delete course');
            }
        }
    };

    if (loading) return <Container className="text-center py-5"><Spinner animation="border" /></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Manage Courses</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover responsive className="table-sm shadow-sm">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>INSTRUCTOR</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course._id}>
                            <td>{course._id}</td>
                            <td>{course.title}</td>
                            <td>{course.category}</td>
                            <td>${course.price}</td>
                            <td>{course.instructor?.name || 'N/A'}</td>
                            <td>
                                <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(course._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageCoursesPage;
