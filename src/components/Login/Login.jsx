// import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        import.meta.env.VITE_LOGIN,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('An unexpected error happened: ', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Container className="login-container">
        <section className="login-content">
          <Row>
            <Col lg={6}>
              <div>
                <Form onSubmit={handleSubmit} className="login-form">
                  <Col>
                    {/* Email */}
                    <Form.Group as={Col} controlId="validationEmail">
                      <Form.Label>Email</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          required
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="validationPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Must contain at least one number and one uppercase and
                        lowercase letter, and at least 8 or more characters
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <div>
                    login to gmail
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <button type="submit">Submit form</button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <h3>already have an account? Log in here</h3>
                <button>Log in</button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Login;
