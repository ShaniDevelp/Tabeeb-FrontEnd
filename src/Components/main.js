import React, { useState } from "react";
import "./main.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import doc from "../images/bruno-rodrigues-279xIHymPYY-unsplash-removebg.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic from "../images/istockphoto-174674040-612x612.jpg";
import check from "../images/check-mark.png";
import Select from "react-select";
import axios from "../axios/Axios";
import { Link } from "react-router-dom";
const options = [
  { value: "Islamabad", label: "Islamabad" },
  { value: "Rawalpindi", label: "Rawalpindi" },
];

const Main = () => {
  const [doctor, setDoctor] = useState([]);
  const searchHandle = async (e) => {
    let key = e.target.value;
    console.log(key);
    if (key) {
      let res = await axios.get(`/doctor/search/${key}`);
      console.log(res.data);
      const result = res.data;
      if (result) {
        setDoctor(result);
      }
    } else {
      setDoctor([]);
    }
  };
  return (
    <div>
      <main className="App-main" style={{ display: "flex" }}>
        <div className="main-1" style={{ width: "50%" }}>
          <div className="ab">
            <div
              className="heading d-sm-none d-none d-xl-block d-lg-block d-md-block"
              style={{ marginTop: "130px" }}
            >
              <h1>
                Book <span style={{ color: "#ff9e15" }}>best doctors </span>{" "}
                near you
              </h1>
            </div>
            <div
              className="heading d-xl-none d-lg-none d-md-none d-sm-block d-block"
              style={{ marginTop: "100px" }}
            >
              <h4>
                Book <span style={{ color: "#ff9e15" }}>best doctors </span>{" "}
                near you
              </h4>
            </div>

            <div className="location">
              {/* <input type='text' className='location-bar' placeholder='Enter City' style={{ marginTop: '30px'}} /> */}
              <Select
                className="select"
                placeholder="Select City"
                options={options}
              />
            </div>
            <div className="Search">
              <input
                type="text"
                className="search-bar"
                placeholder="Search doctors & deases"
                style={{ marginTop: "30px" }}
                onChange={searchHandle}
              />
            </div>
            <ul class="cards d-flex">
              {doctor?.map((item, idx) => (
                <li
                  key={idx}
                  class="card search_card"
                  style={{ boxShadow: "1px 1px 7px 1px rgba(0, 0, 0, 0.2)" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={`http://localhost:4000/${item.image}`}
                      className="img-fluidd rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                      crossOrigin="anonymous"
                    ></img>
                    <div class="card-content">
                      <h3
                        className=" text-center"
                        style={{ marginTop: "30px", marginRight: "-25px" }}
                      >
                        {item.firstName} {item.lastName}
                      </h3>
                      <p style={{ marginTop: "-5px", marginRight: "-25px" }}>
                        {item.experience} Years Experience
                      </p>
                      <p style={{ marginTop: "-20px", marginRight: "-25px" }}>
                        {item.field}
                      </p>
                    </div>
                  </div>
                  <div class="card-link-wrapper">
                    <Link to={`/select_time/${item.id}`} class="card-link">
                      Book Appointment
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Row className="rrow w-100 m-auto ">
            <Col className="box d-flex ">
              <div>
                <div className="mt-3 mb-5">
                  <b>
                    <p>Emergency Ward</p>
                  </b>
                  <p>
                    <img src={check} className="ttt"></img>Best Wards in City
                  </p>
                </div>
                <Button
                  className="aaa mt-3"
                  style={{ width: "150px", background: "#0b65af" }}
                >
                  Book Now
                </Button>
              </div>
              <div className="er">
                <img
                  src={pic}
                  className="img-fluid d-sm-block d-md-block d-lg-block d-xl-block"
                  style={{ height: "200px" }}
                ></img>
              </div>
            </Col>
            <Col className="box d-flex">
              <div>
                <div className="mt-3 mb-5 ">
                  <b>
                    <p>Book Appointment</p>
                  </b>
                  <p>
                    <img src={check} className="ttt"></img>PMC Verified Doctors
                  </p>
                </div>

                <Button
                  className="aaa mt-3"
                  style={{ width: "150px", background: "#0b65af" }}
                >
                  Book Now
                </Button>
              </div>
              <div className="er">
                <img
                  src={pic}
                  className="img-fluid d-sm-block d-md-block d-lg-block d-xl-block"
                  style={{ height: "200px" }}
                ></img>
              </div>
            </Col>
          </Row>
        </div>
        <div className="main-2" style={{ width: "50%", marginTop: "50px" }}>
          <img
            src={doc}
            className="img-fluid d-xl-none"
            style={{ width: "100%", marginTop: "20px" }}
            alt="adc"
          ></img>
          <img
            src={doc}
            className="img-fluid d-md-none d-sm-none d-none d-xl-block"
            alt="adc"
            style={{ width: "100%", height: "100vh" }}
          ></img>
        </div>
      </main>

      {/* responsive */}

      <Row className="eee w-100 m-auto  mt-4">
        <Col className="box d-flex ">
          <div>
            <div className="mt-3 mb-5">
              <b>
                <p>Emergency Ward</p>
              </b>
              <p>
                <img src={check} className="ttt"></img>Best Wards in City
              </p>
            </div>
            <Button
              className="aaa mt-3 d-none d-sm-none d-md-block d-lg-block d-xl-block "
              style={{ background: "#0b65af" }}
            >
              Book Now
            </Button>
            <Button
              className="aaa mt-1    mb-3 "
              style={{ width: "100px", background: "#0b65af" }}
            >
              Book Now
            </Button>
          </div>
          <div>
            <img
              src={pic}
              className="res img-fluid  d-sm-block d-md-block d-lg-block d-xl-block"
              style={{ height: "200px", margin: "10px" }}
            ></img>
          </div>
        </Col>
        <Col className="box d-flex">
          <div>
            <div className="mt-3 mb-5 ">
              <b>
                <p>Book Appointment</p>
              </b>
              <p>
                <img src={check} className="ttt"></img>PMC Verified Doctors
              </p>
            </div>

            <Button
              className="aaa mt-3 d-none d-sm-none d-md-block d-lg-block d-xl-block "
              style={{ background: "#0b65af" }}
            >
              Book Now
            </Button>
            <Button
              className="aaamt-1    mb-3 "
              style={{ width: "100px", background: "#0b65af" }}
            >
              Book Now
            </Button>
          </div>
          <div>
            <img
              src={pic}
              className="res img-fluid d-sm-block d-md-block d-lg-block d-xl-block"
              style={{ height: "200px" }}
            ></img>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
