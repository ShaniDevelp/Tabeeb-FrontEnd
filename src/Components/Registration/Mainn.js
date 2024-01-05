import React, { useState, useEffect } from "react";
import shifa from "../../images/download2.png";
import map from "../../images/8350944451595341180-128.png";
import { Button } from "react-bootstrap";
import zee from "../../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg";
import axios from "../../axios/Axios";

import { Link } from "react-router-dom";
// /  open booking cancel method  /
// import { Axios } from "axios";

import Table from "react-bootstrap/Table";
import { useLocation, useParams } from "react-router-dom";


// /  close booking cancel method / 
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [doctorError, setDoctorerror] = useState("");
  // open booking cancel method /
  const [phonebook, setPhonebook] = useState([])
  // useEffect(() => {
  //   Axios.get('http://localhost:8080/get-phone').then(res => {
  //     setPhonebook(res.data.data.phoneNumbers)
  //   })
  // },[])

  const [appointment, setAppointment] = useState({});
  const params = useParams();
  useEffect(() => {
    getBookingDetail();
  }, []);
  const getBookingDetail = async () => {
    try {
      const response = await axios.get(`/mainn/${params.id}`);
      setAppointment(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // close booking cancel method / / 

  // Hospital Details /////////////////////////
  const [hospitals, setHospitals] = useState([]);
  const [hospitalFile, setHospitalFile] = useState(null);

  const [hospitalDetails, setHospitalDetails] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    // image:""
  });

  const hospitalFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setHospitalFile(file);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails({ ...hospitalDetails, [name]: value });
  };
  const hospitalhandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", hospitalDetails.name);
    formData.append("city", hospitalDetails.city);
    formData.append("address", hospitalDetails.address);
    formData.append("phone", hospitalDetails.phone);
    formData.append("file", hospitalFile);
    try {
      const response = await axios.post("/hospital", formData);
      let result = response.data;
      setHospitalFile(response.data.image);
      alert("Hospital Details added");
      getHospitals();
      setHospitalDetails({
        name: "",
        city: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    getHospitals();
    getDoctors();
  }, []);

  const getHospitals = async () => {
    try {
      const response = await axios.get("/hospital");
      setHospitals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHospital = async (id) => {
    try {
      const response = await axios.delete(`/hospital/${id}`);
      console.log(response.data);
      getHospitals();
    } catch (error) {
      console.error(error);
    }
  };

  // Doctors Details //////////////
  const [doctorFile, setDoctorFile] = useState(null);
  const doctorFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDoctorFile(file);
    }
  };

  const [doctors, setDoctors] = useState([]);
  const [doctorsDetails, setDoctorsDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    field: "",
    experience: "",
  });

  const doctorHandleChange = (e) => {
    const { name, value } = e.target;
    setDoctorsDetails({ ...doctorsDetails, [name]: value });
  };
  const doctorhandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", doctorsDetails.firstName);
    formData.append("lastName", doctorsDetails.lastName);
    formData.append("gender", doctorsDetails.gender);
    formData.append("field", doctorsDetails.field);
    formData.append("experience", doctorsDetails.experience);
    formData.append("file", doctorFile);

    try {
      const response = await axios.post("/doctor", formData);
      let result = response.data;
      alert("Doctor Details added");
      getDoctors();
      setDoctorsDetails({
        firstName: "",
        lastName: "",
        gender: "",
        field: "",
        experience: "",
      });
    } catch (error) {
      console.error(error);
      setDoctorerror(error.response.data.message);
    }
  };
  const getDoctors = async () => {
    try {
      const response = await axios.get("/doctor");
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteDoctor = async (id) => {
    try {
      const response = await axios.delete(`/doctor/${id}`);
      console.log(response.data);
      getDoctors();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ marginTop: "109px" }}>
        {hospitals?.map((item, idx) => (
          <div
            key={idx}
            className="shifa w-75 border  mb-4    "
            style={{
              display: "flex",
              paddingLeft: "10px",
              justifyContent: "space-between",
              padding: "10px ",
              margin: "30px auto ",
              // marginTop: "100px",
            }}
          >
            <div className="shifa-1 d-flex">
              <div
                className="img my-auto"
                style={{ borderRadius: "50%", border: "2px solid orange" }}
              >
                <img
                  // src={shifa}
                  src={`http://localhost:4000/${item.image}`}
                  alt="uploaded image"
                  className="img-fluid my-auto"
                  style={{ borderRadius: "50%" }}
                  crossOrigin="anonymous"
                ></img>
              </div>

              <div className="text my-auto">
                <h2>{item.name}</h2>
                <h6>{item.address}</h6>
                <button
                  className="btn text-white w-75"
                  style={{ backgroundColor: "#0b65af" }}
                >
                  Call Helpline
                </button>
              </div>
            </div>
            <div
              className="shifa-2 my-auto p-2"
              style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
            >
              <div className="">
                <div className="d-flex p-3">
                  <img src={map} class="mx-3" style={{ height: "40px" }}></img>
                  <h5>{item.city}</h5>
                </div>
                <Link to={`/updateHospital/${item.id}`}>
                  <div className=" h-100 ">
                    <Button className=" w-100 h-100">Edit Hospital</Button>
                  </div>{" "}
                </Link>

                <div className=" h-100 ">
                  <Button
                    onClick={() => deleteHospital(item.id)}
                    className="bg-danger mt-2 w-100 h-100"
                    style={{ border: "none" }}
                  >
                    Delete Hospital
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MDBContainer
        fluid
        className=" w-75 rounded "
        style={{
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <MDBRow className=" d-flex justify-content-center align-items-center h-70 ">
          <MDBCol>
            <MDBCard className="shifa my-4 bg-silver ">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    style={{ height: "100%" }}
                    src="https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais"
                    alt="Sample photo"
                    className="rounded"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5  fw-bold">Add Hospital Details</h3>

                    <MDBRow>
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Hospital Name"
                        label="Hospital Name"
                        size="lg"
                        id="form5"
                        type="text"
                        name="name"
                        value={hospitalDetails.name}
                        onChange={handleChange}
                      />
                    </MDBRow>

                    <MDBRow></MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital City"
                      label="Hospital City"
                      size="lg"
                      id="form4"
                      type="text"
                      name="city"
                      value={hospitalDetails.city}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital Address"
                      label="Hospital Address"
                      size="lg"
                      id="form5"
                      type="text"
                      name="address"
                      value={hospitalDetails.address}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital Contact Number"
                      label="Hospital Contact Number"
                      size="lg"
                      id="form5"
                      type="text"
                      name="phone"
                      value={hospitalDetails.phone}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital Picture"
                      label="Hospital Picture"
                      size="lg"
                      id="form6"
                      type="file"
                      onChange={hospitalFileInputChange}
                    />
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
                    <div className="d-flex justify-content-end pt-3">
                      {/* <MDBBtn color='light' size='lg'>Reset all</MDBBtn> */}
                      {/* <MDBBtn className='ms-2' color='warning' size='lg'>Submit Doctor form</MDBBtn> */}
                      <Button
                        onClick={hospitalhandleSubmit}
                        className="btn btn-warning "
                        size="lg"
                      >
                        Add Hospital
                      </Button>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className=" w-75 rounded mb-5 mt-5">
        <MDBRow className="d-flex justify-content-center align-items-center h-70 ">
          <MDBCol>
            <MDBCard className="my-4 shifa ">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    style={{ height: "100%" }}
                    src="https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais"
                    alt="Sample photo"
                    className="rounded"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5  fw-bold">Add Doctors In Tabeeb</h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First Name"
                          size="lg"
                          id="form1"
                          type="text"
                          name="firstName"
                          value={doctorsDetails.firstName}
                          onChange={doctorHandleChange}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last Name"
                          size="lg"
                          id="form2"
                          type="text"
                          name="lastName"
                          value={doctorsDetails.lastName}
                          onChange={doctorHandleChange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio
                        name="gender"
                        id="inlineRadio1"
                        value="female"
                        label="Female"
                        inline
                        onChange={doctorHandleChange}
                      />
                      <MDBRadio
                        name="gender"
                        id="inlineRadio2"
                        value="male"
                        label="Male"
                        inline
                        onChange={doctorHandleChange}
                      />
                    </div>

                    <MDBRow></MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Specialist Field"
                      size="lg"
                      id="form4"
                      type="text"
                      name="field"
                      value={doctorsDetails.field}
                      onChange={doctorHandleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Years Experience"
                      size="lg"
                      id="form5"
                      type="number"
                      name="experience"
                      value={doctorsDetails.experience}
                      onChange={doctorHandleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Doctor Img"
                      size="lg"
                      id="form6"
                      type="file"
                      onChange={doctorFileInputChange}
                    />
                    {doctorError && (
                      <div
                        className="mt-2 alert alert-light text-danger fw-bold alert-dismissible fade show"
                        role="alert"
                      >
                        {doctorError}
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    )}
                    <div className="d-flex justify-content-end pt-3">
                      <Button
                        onClick={doctorhandleSubmit}
                        className="btn btn-warning "
                        size="lg"
                      >
                        Add Doctor
                      </Button>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {doctors?.map((curElem, indx) => (
        <div
          key={indx}
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
                src={`http://localhost:4000/${curElem.image}`}
                alt="uploaded file"
                className="img-fluid my-auto"
                style={{ borderRadius: "50%" }}
                crossOrigin="anonymous"
              ></img>
            </div>

            <div className="test my-auto">
              <h2>
                {curElem.firstName} {curElem.lastName}
              </h2>
              <h6>{curElem.field}</h6>
              {/* <h6>MBBS, MRCPS (UK), MD (USA)</h6> */}

              <div className="experience d-flex justify-content-around">
                <div className="years ">
                  <h5>{curElem.experience} Years</h5>
                  <p>Experience</p>
                </div>
                <div
                  className="  "
                  style={{
                    height: "70px",
                    width: "2px",
                    border: "1px solid orange",
                  }}
                >
                  {" "}
                </div>
                <div className="reviews ">
                  <h5> 90% Reviews</h5>
                  <p>Satisfied Patients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-50 " style={{ position: "relative" }}>
            <div
              className="text-right "
              style={{
                position: "absolute",
                marginBottom: "10px",
                right: "0",
                bottom: "0",
              }}
            >
              <Link to={`/updateDoctor/${curElem.id}`}>
                <button
                  className="btn  px-5 mb-3 w-100 text-white "
                  style={{ backgroundColor: "blue", height: "50px" }}
                >
                  Edit Doctor
                </button>
              </Link>
              <button
                onClick={() => deleteDoctor(curElem.id)}
                className="btn text-white px-5  w-100 "
                style={{ backgroundColor: "red", height: "50px" }}
              >
                Delete Doctor{" "}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Responsive for mobile */}

      <div
        className="shifa-m  abc  border m-auto mb-4     "
        style={{
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
              src={zee}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="test my-auto">
            <h2>Dr.Javed Iqbal</h2>
            <h6>Diabetologist, Consultant Physician, Endocrinologist</h6>
            <h6>MBBS, MRCPS (UK), MD (USA)</h6>

            <div className="experience d-flex justify-content-around">
              <div className="years ">
                <h5>15 Years</h5>
                <p>Experience</p>
              </div>
              <div
                className="  "
                style={{
                  height: "70px",
                  width: "2px",
                  border: "1px solid orange",
                }}
              >
                {" "}
              </div>
              <div className="reviews ">
                <h5> 90% Reviews</h5>
                <p>Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="acc w-100 ">
          <div className="text-right ">
            <button
              className="btn   mt-4 w-100 text-white "
              style={{ backgroundColor: "blue", height: "50px" }}
            >
              Edit Doctor
            </button>
            <button
              className="btn  text-white mt-2 w-100 "
              style={{ backgroundColor: "red", height: "50px" }}
            >
              Delete Doctor
            </button>
          </div>
        </div>
      </div>

      {/* booking delete process-open */}
      {phonebook.map((val,key) => {
          return <div key={key} className="phone" >
           <Table striped bordered hover size="xl" className="text-center">
          <thead>
            <tr>
              <th>Patient Name</th>
              <td>{appointment.name}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Patient Number</th>
              <td>{appointment.phone}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Date</th>
              <td>{appointment.date} 2023</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Time</th>
              <td>{appointment.time}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <td>
                {appointment.doctorName}
              </td>
            </tr>
          </thead>
          
        </Table>
          </div>
        })
      }
      {/* booking delete process-closs */}

    </>
  );
}

export default App;
