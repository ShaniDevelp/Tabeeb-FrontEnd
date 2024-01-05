import React from 'react'
import { Button } from 'react-bootstrap';
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
   
  }
  from 'mdb-react-ui-kit';


const HospitalRegister = () => {
  return (
    <div>
        
    <MDBContainer fluid className=' w-75 rounded ' style={{marginTop:'100px' , marginBottom:"50px"}}>

<MDBRow className='d-flex justify-content-center align-items-center h-70 '>
  <MDBCol>

    <MDBCard className='my-4 bg-silver '>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          <MDBCardImage style={{height:'100%'}} src='https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais' alt="Sample photo" className="rounded" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5  fw-bold">Add Hospital Details</h3>

            <MDBRow>
            <MDBInput wrapperClass='mb-4'placeholder='Hospital Name' label='Hospital Name' size='lg' id='form5' type='text'/>

            

            </MDBRow>

        
            <MDBRow>


            </MDBRow>

            <MDBInput wrapperClass='mb-4' placeholder='Hospital City' label='Hospital City' size='lg' id='form4' type='text' style={{color:'white'}}/>
            <MDBInput wrapperClass='mb-4' placeholder='Hospital Address' label='Hospital Address' size='lg' id='form5' type='text'/>
            <MDBInput wrapperClass='mb-4' placeholder='Hospital Picture' label='Hospital Picture' size='lg' id='form6' type='file'/>

            <div className="d-flex justify-content-end pt-3">
              {/* <MDBBtn color='light' size='lg'>Reset all</MDBBtn> */}
              {/* <MDBBtn className='ms-2' color='warning' size='lg'>Submit Doctor form</MDBBtn> */}
              <Button className='btn btn-warning ' size='lg'>Add Doctor</Button>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer >
    </div>
  )
}

export default HospitalRegister