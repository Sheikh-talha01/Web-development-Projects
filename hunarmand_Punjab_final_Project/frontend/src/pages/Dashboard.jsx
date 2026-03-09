import React, { useContext } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const renderStudentDashboard = () => (
        <Col>
            <h3>Student Portal</h3>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Welcome, {user.name}!</Card.Title>
                    <Card.Text>Track your learning progress and enrolled courses here.</Card.Text>
                    <Button as={Link} to="/my-courses" variant="outline-primary">My Courses</Button>
                </Card.Body>
            </Card>
        </Col>
    );

    const renderInstructorDashboard = () => (
        <Col>
            <h3>Instructor Panel</h3>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Course Management</Card.Title>
                    <Card.Text>Create and manage your educational content.</Card.Text>
                    <Button as={Link} to="/instructor/create-course" variant="success" className="me-2">Create Course</Button>
                    <Button as={Link} to="/instructor/my-courses" variant="primary">Manage Courses</Button>
                </Card.Body>
            </Card>
        </Col>
    );

    const renderAdminDashboard = () => (
        <Col>
            <h3>Administrator Dashboard</h3>
            <Row>
                <Col md={6}>
                    <Card className="mb-4 bg-light">
                        <Card.Body>
                            <Card.Title>User Controls</Card.Title>
                            <Card.Text>Manage all registered users and roles.</Card.Text>
                            <Button as={Link} to="/admin/userlist" variant="dark">User Management</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 bg-light">
                        <Card.Body>
                            <Card.Title>Platform Overview</Card.Title>
                            <Card.Text>View all courses and system analytics.</Card.Text>
                            <Button as={Link} to="/admin/courselist" variant="dark">Course Management</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Col>
    );

    if (!user) {
        return <Container className="py-5 text-center"><h3>Please login to view dashboard.</h3></Container>;
    }

    return (
        <Container className="py-5">
            <h1 className="mb-4">Dashboard</h1>
            <Row>
                <Col md={3}>
                    <Card className="shadow-sm">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-primary text-white">Profile Info</ListGroup.Item>
                            <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
                            <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                            <ListGroup.Item><strong>Role:</strong> {user.role}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={9}>
                    {user.role === 'Student' && renderStudentDashboard()}
                    {user.role === 'Instructor' && renderInstructorDashboard()}
                    {user.role === 'Admin' && renderAdminDashboard()}
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
