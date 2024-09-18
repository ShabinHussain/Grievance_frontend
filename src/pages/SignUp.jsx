import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';
import '../pages/Common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import { registerApi } from '../../services/allApi';
import Footer from '../components/Footer';




// Ensure you have the correct import for GoogleLogin and other components if they are used
// import GoogleLogin from 'path-to-google-login-component'; 






function SignUp() {
  

  // Creating state to hold data from input fields
  const [inputdata, setInputData] = useState({
    email: "",
    username: "",
    password: ""
  });
  const [cpassword, setCPswd] = useState("");

  const registerhandle = async () => {
    const { email, username, password } = inputdata;

    if (!email || !username || !password || !cpassword) {
      toast.info('Please fill the form completely');
    } else {
      if (password === cpassword) {
        console.log('Password matches successfully');

        const result = await registerApi(inputdata);
        console.log(result);
        if (result.status === 200) {
          toast.success('Registration successful');
        } else {
          toast.warning(result.response.data);
        }
      } else {
        console.log('Password not matching');
        toast.warning('Password not matching');
      }
    }
  };


  const registerhandle1 = async () => {
    const { email, username, password } = inputdata;

  
  

        const result = await registerApi(inputdata);
        console.log(result);
        if (result.status === 200) {
          toast.success('Registration successful');
        } else {
          toast.warning(result.response.data);
        }
      
    
  };



  
 

  
  


  

  return (
    <>
      <Header/>
      <Row className='sign_bg' >
    

        <Col md='2'></Col>
        <Col md='4' className='flex-column align-items-center justify-content-center'>
          <h5 className='text-center mt-5'>Sign Up</h5>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            className='w-100 mb-3 mt-4 inpcolor'
            onChange={(e) => setInputData({ ...inputdata, email: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Create User name"
            variant="outlined"
            className='w-100 mb-3 inpcolor'
            onChange={(e) => setInputData({ ...inputdata, username: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className='w-100 mb-3 inpcolor'
            onChange={(e) => setInputData({ ...inputdata, password: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            className='w-100 inpcolor'
            onChange={(e) => setCPswd(e.target.value)}
          />
          <Button
            variant="contained"
            className='w-100 py-3 mt-3'
            id='buttn'
            onClick={registerhandle}
          >
            Register
          </Button>

          <p className='mt-5 text-center'>Or continue with</p>
          <Row className='mt-5' id='icons1'>
           <Col md={1}></Col>
            <Col xs={12} sm={6} md={5} className='d-flex justify-content-center justify-content-center '>
              <FontAwesomeIcon icon={faFacebook} size="2xl" className='facebook1 ' style={{ color: "#74C0FC" }} />
              {/* Facebook Login component should be used here */}
              
            
              <div className='fb1' style={{width:'55px'}}>
                <LoginSocialFacebook
                  appId="502735645814320"
                  onResolve={(response)=>{
                    console.log(response);
                    console.log(response.data);
                    inputdata.email = response.data.email
                    inputdata.username = response.data.name
                    inputdata.password = response.data.id
                    setCPswd(response.data.id)
                    registerhandle1()
                    
                
                  }}
                  onReject={(error)=>{
                    console.log(error);
                
                  }}
                  >
                  <FacebookLoginButton/>
                </LoginSocialFacebook>
              </div>
            </Col>
           
            <Col xs={12} sm={6} md={5} className='d-flex justify-content-center justify-content-center '>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                style={{ width: '34px', height: '34px' }}
                className='google1'
              />
              <div className='goog1'>
                {/* GoogleLogin component should be used here */}
                <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  inputdata.email = decoded.email
                  inputdata.username = decoded.name
                  inputdata.password = decoded.given_name
                  setCPswd(decoded.given_name)
                  registerhandle1()
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              

              </div>
            </Col>
          
          </Row>
        </Col>

        <Col md='6'>
          <Row>
            <Col md='2'></Col>
            <Col md='8'>
              <h1 className='fs-1 mt-5'><b>Sign Up to</b></h1>
              <h3>Panther Grievance Portal</h3>
            </Col>
            <Col md='2'></Col>
          </Row>

          <Row>
            <Col md='2'></Col>
            <Col md='4'>
              <p className='mt-5 icons2'>If you already have an account</p>
              <p className='icons2'>You can <Link className='text-decoration-none text-white' to={'/signin'}>Login here!</Link></p>
            </Col>
            <Col md='6'>
              <img
                className='img3'
                src="/panther1-removebg-preview.png" height={'500px'}
                alt="Illustration"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      <Footer/>
    </>
  );
}


export default SignUp;
