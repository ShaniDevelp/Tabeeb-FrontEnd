import React from "react";
import axios from "../axios/Axios";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import shifa from "../images/download2.png";
import complex from "../images/download (4).jfif";
import PIMS from "../images/download (8).jfif";
import { Button } from "react-bootstrap";
import map from "../images/8350944451595341180-128.png";
import doc from "../images/12336740611595341300-128.png";
import { useState, useEffect } from "react";

const Rawalpindi = () => {
  // const [hospitalDetails, setHospitalDetails] = useState([]);

  // useEffect(() => {
  //   getHospitals();
  // }, []);

  // const getHospitals = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.get("/hospital");

  //     setHospitalDetails(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div>
      <div
        class="w-75 mb-5  d-none d-sm-none d-lg-block d-md-block d-xl-block   "
        style={{
          height: "470px",
          margin: "100px auto",
          backgroudAttachment: "fixed",
        }}
      >
        <h1 class="">Hospitals in Rawalpindi </h1>

        <img
          class="img-fluid pt-2 pb-5 w-100 h-100 "
          style={{ backgroundAttachment: "fixed" }}
          src="https://media.istockphoto.com/id/1197077400/photo/flying-birds-over-the-mosque.jpg?b=1&s=170667a&w=0&k=20&c=N1ribtFgMCVSaGc2K_0U_hwCfBOr40lJuwhtQsOYwAY="
        ></img>
      </div>
      {/* Responsive for Mobile */}
      <div
        class="  mb-5  d-block d-sm-block d-lg-none d-md-none d-xl-none "
        style={{
          height: "320px",
          width: "96%",
          margin: "100px auto",
          backgroudAttachment: "fixed",
        }}
      >
        <h3 class="ml-2">Hospitals in Rawalpindi </h3>

        <img
          class="img-fluid pt-2 pb-5 w-100 h-100 "
          style={{ backgroundAttachment: "fixed" }}
          src="https://media.istockphoto.com/id/1197077400/photo/flying-birds-over-the-mosque.jpg?b=1&s=170667a&w=0&k=20&c=N1ribtFgMCVSaGc2K_0U_hwCfBOr40lJuwhtQsOYwAY="
        ></img>
      </div>
      {/* Al-Shifa-Hospital */}

      {/* Responsive for mobile */}
      <div
        className="shifa-m  border m-auto mb-4     "
        style={{
          paddingLeft: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px ",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={shifa}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="text my-auto">
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            <Button>View details</Button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Al-shifa-close */}
      {/* Complex-open */}
      <div
        className="shifa w-75 border m-auto mb-4    "
        style={{
          display: "flex",
          paddingLeft: "10px",
          justifyContent: "space-between",
          padding: "10px ",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={complex}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="text my-auto">
            <h2>Al-Shifa Hospital</h2>
            <h6>F-10 Centorus Mall Islamabad</h6>
            <Button>View details</Button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive for mobile */}
      <div
        className="shifa-m  border m-auto mb-4     "
        style={{
          paddingLeft: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px ",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={complex}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="text my-auto">
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            <Button>View details</Button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Complex-Close */}
      {/* PIMS-Open */}
      <div
        className="shifa w-75  m-auto mb-4    "
        style={{
          display: "flex",
          paddingLeft: "10px",
          justifyContent: "space-between",
          padding: "10px ",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={PIMS}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="text my-auto">
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            <Button>View details</Button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive for mobile */}
      <div
        className="shifa-m  border m-auto mb-4     "
        style={{
          paddingLeft: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px ",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={PIMS}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="text my-auto">
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            <Button>View details</Button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>
      {/* -Close */}
    </div>
  );
};

export default Rawalpindi;
