import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import piii from "../images/lloogo.png";
// import firebase from '../firebase';
import Cookies from "universal-cookie";
import "react-phone-number-input/style.css";
import axios from "../axios/Axios";

const cookies = new Cookies();

const Header = () => {
  const [modal, setmodal] = useState(false);
  const user = cookies.get("user");
  // console.log(user);
  const logout = () => {
    console.log(user);
    axios
      .post("/auth/logout", { refreshToken: user?.tokens?.refresh?.token })

      .then((res) => {
        cookies.remove("user", { path: "/" });
        // window.location.reload();
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err?.response?.data?.message);
      });
  };
  //OTP_NEW_open

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }
  // configureCaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       onSignInSubmit();
  //       console.log('Recaptca varified')
  //     },
  //     defaultCountry: 'PK'
  //   });
  // }
  // onSignInSubmit = (e) => {
  //   e.preventDefault()
  //   this.configureCaptcha()
  //   const phoneNumber = '+92' + this.state.mobile
  //   console.log(phoneNumber)
  //   const appVerifier = window.recaptchaVerifier;
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       console.log('OTP has been sent')
  //       // ...
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //       console.log('sms not sent')
  //     });
  // }

  //OTP_close

  // const [email, setEmail] = useState();
  // const [password, setpassword] = useState();

  // const submitForm = () => {
  //   console.log(email + '' + password)
  //   http.post('./login', { email: email, password: password }).then((res) => {
  //     console.log(res.data);
  //   })
  // }
  // setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       this.onSignInSubmit();
  //     }
  //   });
  // }

  // onSignInSubmit = (event) => {
  //   event.preventDefault();
  //   const phoneNumber = +9203070582931;
  //   const appVerifier = window.recaptchaVerifier;
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //     });
  // }

  // OTP login

  // const [error, setError] = useState("");
  // const [number, setNumber] = useState("");
  // const [flag, setFlag] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [result, setResult] = useState("");
  // const { setUpRecaptha } = useUserAuth();
  // const navigate = useNavigate();

  // const getOtp = async (e) => {
  //   e.preventDefault();
  //   console.log(number);
  //   setError("");
  //   if (number === "" || number === undefined)
  //     return setError("Please enter a valid phone number!");
  //   try {
  //     const response = await setUpRecaptha(number);
  //     setResult(response);
  //     setFlag(true);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const verifyOtp = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (otp === "" || otp === null) return;
  //   try {
  //     await result.confirm(otp);
  //     navigate("/home");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // OTP-Login-Close

  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 position-fixed"
          style={{
            backgroundColor: "#1177ca",
            top: "0",
            height: "80px",
            width: "100%",
            zIndex: "1",
          }}
        >
          <Container fluid>
            <Navbar.Brand className="text-white ">
              <Link to="/" class="text-white text-decoration-none">
                <img
                  src={piii}
                  style={{ height: "50px", marginRight: "-8px" }}
                ></img>
                Tabeeb
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="bg-light"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tabeeb
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{ backgroundColor: "#1177ca", border: "none" }}
                    >
                      Doctors
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-content">
                      <div>
                        <h6>Find doctor by speciality</h6>

                        <div className="doclist">
                          <p>
                            <a href="#">Dermatologist</a>
                          </p>
                          <p>
                            <a href="#">Neurologist</a>
                          </p>
                          <p>
                            <a href="#">Child Specialist</a>
                          </p>
                          <p>
                            <a href="#">Gynecologist</a>
                          </p>
                          <p>
                            <a href="#">Psychiatrist</a>
                          </p>
                          <p>
                            <a href="#">General Physician</a>
                          </p>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{ backgroundColor: "#1177ca", border: "none" }}
                    >
                      Cities
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div>
                        <h6>Find doctor by name</h6>

                        <div className="doclist">
                          <p>
                            <Link to="/islamabad">Islamabad</Link>
                          </p>
                          <p>
                            <Link to="/rawalpindi">Rawalpindi</Link>
                          </p>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link to="/mainn">
                    <Nav.Link href="#action1" className="text-white">
                      {" "}
                      Hospital Dashboard
                    </Nav.Link>
                  </Link>
                  <Link to="/User">
                    <Nav.Link href="#action1" className="text-white">
                      User Dashboard
                    </Nav.Link>
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <Modal
                    size="md"
                    isOpen={modal}
                    toggle={() => setmodal(!modal)}
                  >
                    <ModalHeader
                      toggle={() => setmodal(!modal)}
                      style={{ background: "#1177ca", color: "white" }}
                    >
                      Welcome to Tabeeb
                    </ModalHeader>
                    <ModalBody>
                      {/* <form onSubmit={this.onSignInSubmit}> */}
                      <form>
                        <div id="sign-in-button"> </div>
                        <Row>
                          <Col>
                            <div>
                              <label>Patient Name</label>
                              <input
                                style={{ height: "40px" }}
                                type="text"
                                className="form_control w-100 my-2 "
                                //  placeholder='Enter Your Phone Number'
                              ></input>
                              <label>Patient Phone Number</label>
                              <input
                                style={{ height: "40px" }}
                                type="number"
                                name="mobile"
                                className="form_control w-100 my-2 "
                                // required onChange={this.handleChange}
                                //  placeholder='Enter Your Phone Number'
                              ></input>

                              <Button
                                className="w-100 mb-1 mt-3 bg-warning  "
                                style={{
                                  height: "50px",
                                  border: "none",
                                  color: "black",
                                  fontSize: "21px",
                                }}
                              >
                                Login
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </ModalBody>
                  </Modal>
                  {!user ? (
                    <>
                      <Link to="/Singup">
                        <Button
                          className="jbf btn"
                          style={{ background: "#fd9940", border: "none" }}
                        >
                          Signup
                        </Button>
                      </Link>
                      <Link to="/Login">
                        <Button
                          className="jbf btn mx-2"
                          style={{ background: "#fd9940", border: "none" }}
                        >
                          Login
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Button
                      onClick={logout}
                      className="jbf btn"
                      style={{ background: "#fd9940", border: "none" }}
                    >
                      Logout
                    </Button>
                  )}

                  {/* Popup-close */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
