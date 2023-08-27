import{ useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);


  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <img
                src="/logobkk.png"
                alt="Logo"
                width="200"
                height="100"
              />
            </div>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
        
              Login
           
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
