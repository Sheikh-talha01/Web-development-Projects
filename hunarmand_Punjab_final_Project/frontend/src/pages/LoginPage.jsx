import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', { email, password });
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials');
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1 className="mb-4 text-center">Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={submitHandler}>
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

                        <Button type="submit" variant="primary" className="w-100 mt-2">Sign In</Button>
                    </Form>
                    <Row className="py-3">
                        <Col className="text-center">
                            New Student? <Link to="/register">Register</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
