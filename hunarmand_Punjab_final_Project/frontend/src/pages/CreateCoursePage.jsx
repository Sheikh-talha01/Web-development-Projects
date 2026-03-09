import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const CreateCoursePage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await API.post('/courses', { title, description, category, price });
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create course');
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <h1 className="mb-4">Create New Course</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Web Development"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price ($)</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Enter course description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="success" className="w-100">Create Course</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateCoursePage;
