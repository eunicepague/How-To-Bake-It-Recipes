import { useContext, useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../UserContext';

import './Register.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn, setUsername } = useContext(UserContext);

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
        setIsLoggedIn(true); // Update isLoggedIn state here
        setUsername(response.data.user.username); // Use the username from the response
        alert('Successfully Logged In!');
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
            <Col className="login-container-box">
              <Form onSubmit={handleSubmit} className="login-form">
                {/* Email */}
                <Form.Group as={Col} controlId="validationEmail">
                  <h1> Register.</h1>
                  <Form.Label>Email Address*</Form.Label>
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
                  <Form.Label>Password*</Form.Label>
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

                <Form.Group className="mt-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedbackType="invalid"
                    className="no-line-through"
                  />
                </Form.Group>
                <button type="submit" id="login-btn">
                  Submit form
                </button>
              </Form>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Login;
