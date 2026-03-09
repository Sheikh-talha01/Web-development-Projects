import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Container, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../services/api';

const CourseListingPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await API.get('/courses');
                setCourses(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load courses');
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) return <Container className="text-center py-5"><Spinner animation="border" /></Container>;
    if (error) return <Container className="py-5"><Alert variant="danger">{error}</Alert></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Available Courses</h1>
            <Row>
                {courses.map(course => (
                    <Col key={course._id} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{course.category}</Card.Subtitle>
                                <Card.Text className="flex-grow-1">
                                    {course.description.substring(0, 100)}...
                                </Card.Text>
                                <Card.Text className="fw-bold">Price: ${course.price}</Card.Text>
                                <div className="d-grid gap-2">
                                    <Button as={Link} to={`/courses/${course._id}`} variant="outline-primary">
                                        View Details
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={async () => {
                                            try {
                                                await API.post('/enroll', { courseId: course._id });
                                                alert('Enrolled Successfully!');
                                            } catch (err) {
                                                alert(err.response?.data?.message || 'Must be logged in to enroll');
                                            }
                                        }}
                                    >
                                        Enroll Now
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CourseListingPage;
