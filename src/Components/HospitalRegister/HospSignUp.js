// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

// // import logooo from 'F:/farhan-work-place/react/myapp/src/images/lloogo.png';
// import logooo from "../../images/lloogo.png";
// import { Link } from "react-router-dom";

// import React, { Component } from "react";
// // import { Circle } from 'react-bootstrap-icons';

// class HospSignUp extends Component {
//   handlesubmit() {
//     const result = window.confirm("User Successfully Login In Tabeeb");
//     if (result) {
//       window.location.href = "http://localhost:3000/RegisterHospital"; // Replace with your desired URL
//     }
//   }

//   componentDidMount() {
//     this.animate();
//   }

//   animate() {
//     const canvas = this.refs.canvas;
//     const context = canvas.getContext("2d");
//     const particles = [];
//     const particleSize = 8;
//     const maxParticles = 375;
//     const threshold = 0;

//     for (let i = 0; i < maxParticles; i++) {
//       let particle = {
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: Math.random(),
//         vy: Math.random(),
//       };
//       particles.push(particle);
//     }

//     function line(particle, particle2) {
//       context.beginPath();
//       context.moveTo(particle.x, particle.y);
//       context.lineTo(particle2.x, particle2.y);
//       context.stroke();
//     }

//     function animate() {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < maxParticles; i++) {
//         let particle = particles[i];
//         context.fillRect(
//           particle.x - particleSize / 2,
//           particle.y - particleSize / 2,
//           particleSize,
//           particleSize
//         );
//         for (let j = 0; j < maxParticles; j++) {
//           if (i !== j) {
//             let particle2 = particles[j];
//             let distanceX = Math.abs(particle.x - particle2.x);
//             let distanceY = Math.abs(particle.y - particle2.y);
//             if (distanceX < threshold && distanceY < threshold) {
//               context.lineWidth =
//                 (threshold * 2 - (distanceX + distanceY)) / 50;
//               let color = 200 - Math.floor(distanceX + distanceY);
//               context.strokeStyle =
//                 "rgb(" + color + "," + color + "," + color + ")";
//               line(particle, particle2);
//             }
//           }
//         }
//         particle.x = particle.x + particle.vx;
//         particle.y = particle.y + particle.vy;
//         if (
//           particle.x > canvas.width - particleSize ||
//           particle.x < particleSize
//         )
//           particle.vx = -particle.vx;
//         if (
//           particle.y > canvas.height - particleSize ||
//           particle.y < particleSize
//         )
//           particle.vy = -particle.vy;
//       }
//       window.requestAnimationFrame(animate);
//     }

//     context.fillStyle = "white";
//     animate();
//   }

//   render() {
//     return (
//       <center>
//         <canvas
//           ref="canvas"
//           width={1583}
//           height={900}
//           style={{ backgroundColor: "Orange" }}
//         ></canvas>
//         <Container
//           style={{
//             zIndex: "0",
//             top: "10px",
//             left: "150px",
//             position: "absolute",
//           }}
//         >
//           <Row className="vh-100 d-flex justify-content-center align-items-center">
//             <Col md={8} lg={6} xs={12}>
//               <Card
//                 style={{ marginTop: "85px" }}
//                 className="px-4  bg-primary text-white"
//               >
//                 <Card.Body>
//                   <div className="mb-3 md-2">
//                     <h2 className="fw-bold mb-0 text-center  ">
//                       <h1>
//                         <img
//                           src={logooo}
//                           style={{
//                             height: "100px",
//                             marginTop: "10px",
//                             marginRight: "-20px",
//                           }}
//                         ></img>
//                         Hospital SignUp
//                       </h1>
//                     </h2>
//                     <div className="mb-3">
//                       <Form>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label>Hospital Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             style={{ height: "47px" }}
//                             placeholder="Enter Hospital Name"
//                           />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Label>Hospital Email</Form.Label>
//                           <Form.Control
//                             type="email"
//                             style={{ height: "47px" }}
//                             placeholder="Enter Hospital Email"
//                           />
//                         </Form.Group>

//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicPassword"
//                         >
//                           <Form.Label>Password</Form.Label>
//                           <Form.Control
//                             type="password"
//                             style={{ height: "47px" }}
//                             placeholder="Password"
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicPassword"
//                         >
//                           <Form.Label>Confirm Password</Form.Label>
//                           <Form.Control
//                             type="password"
//                             style={{ height: "47px" }}
//                             placeholder="Password"
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicCheckbox"
//                         ></Form.Group>
//                         <div className="d-grid">
//                           <Link to="/User">
//                             <Button
//                               variant="warning"
//                               className="mt-2 w-100"
//                               style={{ height: "50px" }}
//                               type="submit"
//                               onClick={this.handlesubmit}
//                             >
//                               Create Account
//                             </Button>
//                           </Link>
//                         </div>
//                       </Form>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </center>
//     );
//   }
// }

// export default HospSignUp;
