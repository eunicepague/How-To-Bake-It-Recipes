// import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import './Comments.css';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_PHP}/comments`, {
        ...formData,
        recipeId, // use the recipeId prop here
      });
      console.log(res.data);
      //update the comments state with new comment
      setComments([...comments, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PHP}/comments?recipeId=${recipeId}`
      );
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [recipeId]);

  return (
    <Container className="comments-container">
      <section className="comments-content">
        <Row>
          <Col>
            <h1>Leave a comment</h1>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div>
              <p>Recipe Review</p>
              <p>stars</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <div>
                <p>Comments</p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div>
                <p>Name</p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div>
                <p>Email</p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <button type="submit">Post Comment</button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>{comments.length} comments</h1>
            {comments
              .slice()
              .reverse()
              .map((comment, index) => (
                <div key={index} className="comments-box-container">
                  <p>{comment.name}</p>
                  <p>{new Date(comment.created_at).toLocaleString()}</p>
                  <p>{comment.comment}</p>
                </div>
              ))}
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Comments;
