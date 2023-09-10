import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import "./LoginForm.css";  
import NavBar from '../components/NavBar';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
   
  return (
  
  <div className='b'> 
  <NavBar/>
    <MDBContainer fluid> 

<MDBRow className='d-flex justify-content-center align-items-center h-100' >
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px', paddingBottom:'140px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h1 className="fw-bold mb-2 text-center">Log in</h1> 

        <MDBInput wrapperClass='mb-4 w-100' label='User ID' id='formControlLg' type='email' size="lg" />
        <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"  />
 
        <h5 className="Forgot password?">Forgot password?</h5>
        
        <MDBBtn size='lg' style={{backgroundColor:'#009688'}}>
          Login
        </MDBBtn> 
 

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>

  </div>
    
  );
}

export default App;