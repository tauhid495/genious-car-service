import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passWordRef = useRef('');

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const passWord = passWordRef.current.value;

        console.log(email, passWord);
    }

    // const navigateRagister = event => {
    //     navigate('/register')
    // }

    return (
        <div className='mt-5 container w-50 mx-auto'>
            <div className='border rounded-3 p-5 shadow'>
                <h2 className='text-primary text-center'>Please Login</h2>
                <Form onClick={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passWordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='' variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>New to Genious Car? <Link to='/register' className='text-danger pe-auto text-decoration-none' >Please Register</Link > </p>
                </Form>
            </div>
        </div>
    );
};

export default Login;