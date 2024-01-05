import React from 'react'
import { Button } from 'react-bootstrap'
// import { Table , Row, Col} from 'react-bootstrap'
import { Input } from 'semantic-ui-react'

const UserDashboard = () => {
  return (
    <div  className="container">
        <h1 style={{marginTop:'100px'}} className="fw-bold">
        User Dashboard
        </h1>
        <div className='shifa  border m-auto mb-4 p-3'>
        <div className=' d-flex justify-content-between ' >
        <h2>Patient Appointments </h2>
        <Input icon='users' iconPosition='right' placeholder='Search Appointments...' focus className='w-50 h-25' />
        </div>
        <div className='d-flex justify-content-between fw-bold border-bottom'>
            <h4>Doctor Name</h4>
            <h4>Date & Time</h4>
            <h4>Appointment Status</h4>

        </div>
        <div className='d-flex justify-content-between border-bottom '>
            <h5>Dr.Javed Iqbal</h5>
            <h5>10:00 PM Monday</h5>
            <h5>Done Appointment</h5>
            
        </div>
        <div className='d-flex justify-content-between  border-bottom'>
            <h5>Dr.Smith</h5>
            <h5>10:00 PM Monday</h5>
            <h5>Cancel Appointment</h5>

            
        </div>
        <div className='d-flex justify-content-between  border-bottom'>
            <h5>Dr.Ismail</h5>
            <h5>10:00 PM Monday</h5>
            <h5>Done Appointment</h5>
        </div>
        <div className='d-flex justify-content-between '>
            <h5>Dr.Khurram</h5>
            <h5>10:00 PM Monday</h5>
            <h5>Done Appointment</h5>
            
        </div>
        </div>
        <div className='shifa  border m-auto mb-4 p-3 d-flex justify-content-between'>
            <h4>Pending Appointment</h4>
            <Button>Cancel Appointment</Button>
        </div>
       
        


    </div>

  )
}

export default UserDashboard