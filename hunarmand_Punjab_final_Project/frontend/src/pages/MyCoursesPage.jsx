import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Spinner, Alert } from 'react-bootstrap';
import API from '../services/api';

const MyCoursesPage = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const { data } = await API.get('/enroll/my-courses');
                setEnrollments(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load enrolled courses');
                setLoading(false);
            }
        };
        fetchMyCourses();
    }, []);

    if (loading) return <Container className="text-center py-5"><Spinner animation="border" /></Container>;
    if (error) return <Container className="py-5"><Alert variant="danger">{error}</Alert></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">My Enrolled Courses</h1>
            {enrollments.length === 0 ? (
                <Alert variant="info">You haven't enrolled in any courses yet.</Alert>
            ) : (
                <Row>
                    {enrollments.map(enrollment => (
                        <Col key={enrollment._id} sm={12} md={6} lg={4} className="mb-4">
                            <Card className="h-100 shadow-sm border-primary">
                                <Card.Body>
                                    <Card.Title>{enrollment.course?.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{enrollment.course?.category}</Card.Subtitle>
                                    <Card.Text>Progress: {enrollment.progress}%</Card.Text>
                                    <div className="progress mb-2">
                                        <div className="progress-bar" style={{ width: `${enrollment.progress}%` }}></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default MyCoursesPage;
