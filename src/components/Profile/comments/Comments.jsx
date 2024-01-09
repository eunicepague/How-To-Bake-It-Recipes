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
      await axios.post(`${import.meta.env.VITE_PHP}`, {
        ...formData,
        category: recipeId,
      });
      // Fetch comments again after posting a new comment
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_PHP}?category=${recipeId}`
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
            {/* <div>
              <p>Recipe Review</p>
              <p>stars</p>
            </div> */}

            <Form onSubmit={handleSubmit} id="comments-form">
              <div>
                <h6>Comments</h6>
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
                <h6>Name</h6>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlName"
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
                <h6>Email</h6>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <button type="submit" id="comments-submit-btn">
                Post Comment
              </button>
            </Form>
          </Col>
        </Row>

        <div className="comments-commentSection">
          <h2 style={{ fontWeight: 'bold' }}>{comments.length} comments</h2>
          {comments
            .slice()
            .reverse()
            .map((comment, index) => (
              <div key={index} className="comments-box-container">
                <h3>{comment.name}</h3>
                <p>{new Date(comment.created_at).toLocaleString()}</p>
                <p id="comments-comment">{comment.comment}</p>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default Comments;
