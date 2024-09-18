import React, { useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import '../pages/Common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import { loginApi } from '../../services/allApi';
import Footer from '../components/Footer';








function SignIn() {
  const navigate = useNavigate()
  const [logindetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })
  console.log(logindetails);

  const handleLogin = async () => {
    const { email, password } = logindetails

    if (!email || !password) {
      toast.info('Please fill the form completely')

    }
    else {
      const result = await loginApi({email,password})
      console.log(result);
       




      if (result.status == 200) {
        toast.success('Login successfull')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        navigate('/')
      } else {
        toast.warning('Login Failed')
      }

    }
  }

  const handleLogin1 = async () => {
    const { email, password } = logindetails

   
   
      const result = await loginApi({email,password})
      console.log(result);
       




      if (result.status == 200) {
        toast.success('Login successfull')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        navigate('/')
      } else {
        toast.warning('Login Failed')
      }

    
  }


  


 

  return (
    <>
    <Header />
      <Row className='sign_bg'>
      

        <Col md='6'>
          <Row className='mt-5'>
            <Col md='2'></Col>
            <Col md='8'>
              <h1 className='fs-1  mt-5 '><b>Sign in to</b></h1>
              <h3 className=''>Panther Grievance Portal</h3>
            </Col>
            <Col md='2'></Col>
          </Row>

          <Row>
            <Col md='2'></Col>
            <Col md='4'>
              <p className=' mt-5 icons2' >If you don't have an account register</p>
              <p className='icons2'>You can <Link className='text-decoration-none text-white' to={'/signup'}>Register here!</Link></p>
            </Col>
            <Col md='6'>
            <img
                className='img3'
                src="/panther1-removebg-preview.png" height={'420px'}
                alt="Illustration"
              />
            </Col>
          </Row>

        </Col>

        <Col md='4' className='flex-column align-items-center justify-content-center'>
          <h5 className='text-center mt-5'>Sign In</h5>
          <TextField id="outlined-basic" label="Enter Email" variant="outlined" className='w-100 mb-3 mt-4 inpcolor' onChange={(e) => { setLoginDetails({ ...logindetails, email: e.target.value }) }} />
          {/* <TextField id="outlined-basic" label="Create User name" variant="outlined" className='w-100 mb-3 inpcolor'/> */}
          <TextField id="outlined-basic" label="Password" variant="outlined" className='w-100 mb-3 inpcolor' onChange={(e) => { setLoginDetails({ ...logindetails, password: e.target.value }) }} />
          {/*<Link className='text-decoration-none'><p className='text-end '>Forgot password ?</p></Link>*/}
          {/* <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='w-100 inpcolor'/>*/}
          <Button variant="contained" className='w-100 py-3 mt-4' onClick={handleLogin}>Login</Button>

          <p className='mt-5 text-center text100'>Or continue with</p>
          <Row className='mt-5 ' id='icons1' >
            <Col md={1}></Col>
            <Col md={5} xs={12} sm={5}  className='d-flex justify-content-center justify-content-center '>
              <div>
                <FontAwesomeIcon icon={faFacebook} size="2xl" className='facebook' style={{ color: "#74C0FC" }} />
                {/* Facebook Login component should be used here */}
                <div className='fb' style={{ width: '55px' }}>
                <LoginSocialFacebook
                    appId=" 473708898979821"
                    onResolve={(response)=>{
                      console.log(response);
                      console.log(response.data);
                      logindetails.email = response.data.email
                
                      logindetails.password = response.data.id
                
                    handleLogin1()
                
                
                
                    }}
                    onReject={(error)=>{
                      console.log(error);
                
                    }}
                    >
                    <FacebookLoginButton/>
                  </LoginSocialFacebook>
                
                            </div>
              </div>
            </Col>
            
            <Col  xs={12} sm={6}  md={5} className='d-flex justify-content-center justify-content-center mt-5'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="no image" style={{ width: '34px', height: '34px' }} className='google' />
              <div className='goog'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  logindetails.email = decoded.email
              
                  logindetails.password = decoded.given_name
              
                  handleLogin1()
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />

             </div>


            </Col>

          
          </Row>
        </Col>
        <Col md='2'></Col>



      </Row>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    <Footer/>
    </>
  )
}

export default SignIn