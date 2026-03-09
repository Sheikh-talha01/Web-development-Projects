import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Spinner, Alert, Row, Col, Card } from 'react-bootstrap';
import API from '../services/api';

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            const { data } = await API.get('/users');
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load users');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await API.delete(`/users/${id}`);
                fetchUsers();
            } catch (err) {
                alert('Failed to delete user');
            }
        }
    };

    if (loading) return <Container className="text-center py-5"><Spinner animation="border" /></Container>;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Manage Users</h1>

            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center bg-primary text-white p-3">
                        <h5>Total Students</h5>
                        <h3>{users.filter(u => u.role === 'Student').length}</h3>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center bg-success text-white p-3">
                        <h5>Total Instructors</h5>
                        <h3>{users.filter(u => u.role === 'Instructor').length}</h3>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center bg-dark text-white p-3">
                        <h5>Total Users</h5>
                        <h3>{users.length}</h3>
                    </Card>
                </Col>
            </Row>

            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ROLE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
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

export default UserListPage;
