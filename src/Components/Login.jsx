import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Cookies from "universal-cookie";

import logooo from "../images/lloogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "../axios/Axios";

const cookies = new Cookies();
// import { Circle } from 'react-bootstrap-icons';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", login);
      let result = res.data;
      console.log(result);
      cookies.set("user", result, { path: "/" });
      if (result.user.role === "admin") {
        alert("Admin Successfully Login In Tabeeb");
        window.location.href = "/mainn";
      } else {
        alert("User Successfully Login In Tabeeb");
        window.location.href = "/";
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => {
    animate();
  }, []);

  function animate() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const particles = [];
    const particleSize = 8;
    const maxParticles = 375;
    const threshold = 0;

    for (let i = 0; i < maxParticles; i++) {
      let particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random(),
        vy: Math.random(),
      };
      particles.push(particle);
    }

    function line(particle, particle2) {
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle2.x, particle2.y);
      context.stroke();
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < maxParticles; i++) {
        let particle = particles[i];
        context.fillRect(
          particle.x - particleSize / 2,
          particle.y - particleSize / 2,
          particleSize,
          particleSize
        );
        for (let j = 0; j < maxParticles; j++) {
          if (i !== j) {
            let particle2 = particles[j];
            let distanceX = Math.abs(particle.x - particle2.x);
            let distanceY = Math.abs(particle.y - particle2.y);
            if (distanceX < threshold && distanceY < threshold) {
              context.lineWidth =
                (threshold * 2 - (distanceX + distanceY)) / 50;
              let color = 200 - Math.floor(distanceX + distanceY);
              context.strokeStyle =
                "rgb(" + color + "," + color + "," + color + ")";
              line(particle, particle2);
            }
          }
        }
        particle.x = particle.x + particle.vx;
        particle.y = particle.y + particle.vy;
        if (
          particle.x > canvas.width - particleSize ||
          particle.x < particleSize
        )
          particle.vx = -particle.vx;
        if (
          particle.y > canvas.height - particleSize ||
          particle.y < particleSize
        )
          particle.vy = -particle.vy;
      }
      window.requestAnimationFrame(animate);
    }

    context.fillStyle = "white";
    animate();
  }
  const canvasRef = useRef();

  return (
    <center>
      <canvas
        ref={canvasRef}
        width={1583}
        height={900}
        style={{ backgroundColor: "Orange" }}
      ></canvas>
      <Container
        style={{
          zIndex: "0",
          top: "10px",
          left: "150px",
          position: "absolute",
        }}
      >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card
              style={{ marginTop: "85px" }}
              className="px-4  bg-primary text-white"
            >
              <Card.Body>
                <div className="mb-3 md-2">
                  <h2 className="fw-bold mb-0 text-center  ">
                    <h1>
                      <img
                        src={logooo}
                        style={{
                          height: "100px",
                          marginTop: "10px",
                          marginRight: "-20px",
                        }}
                      ></img>
                      Login In Tabeeb
                    </h1>
                  </h2>
                  <div className="mb-3">
                    <Form>
                      {/* <Form.Group className="mb-3" controlId="Name">
                         <Form.Label className='text-right'>Name</Form.Label>
                         <Form.Control type="text" style={{height:'47px'}} placeholder="Enter Name" />
                      </Form.Group> */}

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          style={{ height: "47px" }}
                          placeholder="Enter email"
                          name="email"
                          value={login.email}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          style={{ height: "47px" }}
                          placeholder="Password"
                          name="password"
                          value={login.password}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        {/* <Link to="/User"> */}
                        <Button
                          variant="warning"
                          className="mt-2 w-100"
                          style={{ height: "50px" }}
                          type="submit"
                          onClick={handlesubmit}
                        >
                          Login
                        </Button>
                        {errorMessage && (
                          <div
                            className="mt-2 alert alert-light text-danger fw-bold alert-dismissible fade show"
                            role="alert"
                          >
                            {errorMessage}
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                          </div>
                        )}
                        {/* </Link> */}
                      </div>
                      <p className="mt-2">
                        Don,t have an account?
                        <Link className="text-white ms-1" to="/Singup">
                          Signup
                        </Link>
                      </p>
                    </Form>
                    {/* <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div> */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </center>
  );
};

export default Login;
