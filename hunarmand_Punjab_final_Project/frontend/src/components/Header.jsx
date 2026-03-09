import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/">Hunar Punjab LMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        {user ? (
                            <NavDropdown title={user.name} id="username">
                                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        )}
                        {user && user.role === 'Instructor' && (
                            <NavDropdown title="Instructor" id="instructormenu">
                                <NavDropdown.Item as={Link} to="/instructor/create-course">Create Course</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/instructor/my-courses">Manage My Courses</NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {user && user.role === 'Admin' && (
                            <NavDropdown title="Admin" id="adminmenu">
                                <NavDropdown.Item as={Link} to="/admin/userlist">Users</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/admin/courselist">All Courses</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
