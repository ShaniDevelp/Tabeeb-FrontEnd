import React from 'react'
import './footer.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div>
        
        <footer className="text-center text-sm-start bg-white text-muted" class='fd'>

  {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="/#" className="me-4 link-secondary">
      <i className="Icon.bi bi-facebook"></i>
      </a>
      <a href="/#" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/#" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="/#" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/#" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/#" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
   
  </section> */}



  <section className="/#">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Tabeeb
          </h6>
          <p>
          Book appointments with the best Doctors and Specialists such as Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc. Avail test services such as MRI, CT scan,
           Ultrasound, X-Ray, etc. and Online Doctor Video Consultations all across Pakistan conveniently.
          </p>
        </div>
     

    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Best Hospitals
          </h6>
          <p>
            <a href="/#!" className="text-reset">Maroof International Hospital</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Shifa International Hospital</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Shifa Medical Centre</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Zobia Hospital G-9 Islamabad</a>
          </p>
        </div>
   

 
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
            Best Doctors
          </h6>
          <p>
            <a href="/#!" className="text-reset">Doctor Ayesha. PMC Verified</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Dr. Munawar Hayat Ahmed. PMC Verified</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Dr. Ajmal Osman</a>
          </p>
          <p>
            <a href="/#!" className="text-reset">Dr Muhammad Asghar Khalil, Medical specialist
</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> CTTI Islamabad Pakistan</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            Tabeeb@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> +92-3070582931</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> +92-3456897909</p>
        </div>
      
      </div>
   
    </div>
  </section>


  
  <div className="text-center p-4" style={{backgroundColor:' rgba(0, 0, 0, 0.025)'}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold">Cttiislamabadpakistan</a>
  </div>
  
</footer>
    </div>
  )
}

export default Footer