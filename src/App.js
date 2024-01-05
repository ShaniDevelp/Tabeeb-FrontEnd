import React from "react";
import Header from "./Components/header";
import MainPage from "./Components/MainPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/footer";
import Rawalpindi from "./Cities/rawalpindi";
import Islamabad from "./Cities/islamabad";
import Bookpage from "./Doctime/bookpage";
import Shifa from "./Hospitals/shifa";
import Timing from "./Doctime/timing";
import Mainn from "./Components/Registration/Mainn";
// import Login from './Components/signup/signup';
import UserDashboard from "./Components/Userdashboard/UserDashboard";
import HospitalRegister from "./Components/HospitalRegister/HospitalRegister";
import HospSignUp from "./Components/HospitalRegister/HospSignUp";
import Signup from "./Components/signup/signup";
import Login from "./Components/Login";
import UpdateHospital from "./Components/HospitalRegister/UpdateHospital";
import UpdateDoctor from "./Components/HospitalRegister/UpdateDoctor";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/islamabad" element={<Islamabad />} />
        <Route path="/mainn" element={<Mainn />} />
        <Route path="/rawalpindi" element={<Rawalpindi />} />
        <Route path="/booked/:id" element={<Bookpage />} />
        <Route path="/select_time/:id" element={<Timing />} />
        <Route path="/Shifa/:id" element={<Shifa />} />
        <Route path="/Singup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<UserDashboard />} />
        {/* <Route path="/RegisterHospital" element={<HospitalRegister />} /> */}
        {/* <Route path="/HospSignUp" element={<HospSignUp />} /> */}
        <Route path="/updateHospital/:id" element={<UpdateHospital />} />
        <Route path="/updateDoctor/:id" element={<UpdateDoctor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
