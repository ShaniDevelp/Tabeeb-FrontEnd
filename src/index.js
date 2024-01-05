// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Islamabad from './Cities/islamabad';
// import Rawalpindi from './Cities/rawalpindi';
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import Shifa from './Hospitals/shifa';

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import Signup from './Components/signup/signup';
// import Timing from './Doctime/timing';
// import Bookpage from './Doctime/bookpage';

// import Mainn from './Components/main';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "islamabad",
//     element: <Islamabad/>,
//   },
//   {
//     path: "rawalpindi",
//     element: <Rawalpindi/>,
//   },
//   {
//     path: "mainn",
//     element: <Mainn/>,
//   },
//   {
//     path: "shifa",
//     element: <Shifa/>,
//   },
//   {
//     path: "signup",
//     element: <Signup/>,
//   },
//
//
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// reportWebVitals();

import React from "react";
// import ReactDOM from 'react-dom'
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  //   document.getElementById("root")
);

reportWebVitals();
