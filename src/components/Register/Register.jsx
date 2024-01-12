import { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
// import './Register.css';

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  // const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      form.firstName === '' ||
      form.lastName === '' ||
      form.username === '' ||
      form.email === '' ||
      form.password === '' ||
      form.password !== confirmPassword
    ) {
      setPasswordMatch(form.password === confirmPassword);
      setValidated(true);
    } else {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REGISTER}`, {
          first_name: form.firstName,
          last_name: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
        });

        if (response.status === 201) {
          alert(response.data.message); // Show success message
          // You can also redirect the user to another page here
          //Reset the form and confirmation password
          setForm({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
          });
          setConfirmPassword('');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Container className="register-container">
      <section className="register-content">
        <Row>
          <Col lg={6}>
            <div>
              <h2>Join today and start saving your favorite recipes</h2>
              <p>Create a free account to save your favorite recipes!</p>

              <Form
                noValidate
                validated={validated && passwordMatch}
                onSubmit={handleSubmit}
                className="register-form"
              >
                <Col>
                  <Row>
                    {/* First name */}
                    <Form.Group as={Col} controlId="validationFirst">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    {/* Last name */}
                    <Form.Group as={Col} controlId="validationLast">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  {/* Username */}
                  <Form.Group as={Col} controlId="validationUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        aria-describedby="inputGroupPrepend"
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group as={Col} controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-describedby="inputGroupPrepend"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Row>
                    {/* password */}
                    <Form.Group as={Col} controlId="validationPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        isInvalid={!passwordMatch}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Must contain at least one number and one uppercase and
                        lowercase letter, and at least 8 or more characters
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* confirmPassword */}
                    <Form.Group as={Col} controlId="validationConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                        isInvalid={!passwordMatch}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Passwords must match
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </Col>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
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
  );
};

export default Register;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   const passwordMatch = password === confirmPassword;
//   setPasswordMatch(passwordMatch);

//   setValidated(true);
// };
