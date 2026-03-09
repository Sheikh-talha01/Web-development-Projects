import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');

    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/register', { name, email, password, role });
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 className="mb-4 text-center">Register</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="role">
                            <Form.Label>Register as</Form.Label>
                            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="Student">Student</option>
                                <option value="Instructor">Instructor</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100 mt-2">Sign Up</Button>
                    </Form>
                    <Row className="py-3">
                        <Col className="text-center">
                            Have an account? <Link to="/login">Login</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
