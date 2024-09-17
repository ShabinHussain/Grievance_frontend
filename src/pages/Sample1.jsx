import React, { useState } from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../pages/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { loginApi } from '../../services/allApi';

function SignIn() {
  const navigate = useNavigate();
  const [logindetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    const { email, password } = logindetails;

    if (!email || !password) {
      toast.info('Please fill the form completely');
    } else {
      const result = await loginApi({ email, password });
      console.log(result);

      if (result.status === 200) {
        toast.success('Login successful');
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        navigate('/');
      } else {
        toast.warning('Login Failed');
      }
    }
  };

  const handleLogin1 = async () => {
    const { email, password } = logindetails;

    const result = await loginApi({ email, password });
    console.log(result);

    if (result.status === 200) {
      toast.success('Login successful');
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
      sessionStorage.setItem("token", result.data.token);
      navigate('/');
    } else {
      toast.warning('Login Failed');
    }
  };

  return (
    <>
      <Header />
      <Row className='sign_bg'>
        <Col md={6} className='d-flex flex-column justify-content-center'>
          <Row className='mt-5'>
            <Col md={12} className='text-center'>
              <h1 className='fs-1 mt-5'><b>Sign in to</b></h1>
              <h3>Panther Grievance Portal</h3>
            </Col>
          </Row>

          <Row>
            <Col md={12} className='text-center mt-5'>
              <p>If you don't have an account register</p>
              <p>You can <Link className='text-decoration-none text-white' to={'/signup'}>Register here!</Link></p>
            </Col>
          </Row>

          <Row className='text-center'>
            <Col md={12}>
              <img
                className='img3'
                src="/panther1-removebg-preview.png"
                height={'420px'}
                alt="Illustration"
              />
            </Col>
          </Row>
        </Col>

        <Col md={6} className='d-flex flex-column align-items-center justify-content-center'>
          <h5 className='text-center mt-5'>Sign In</h5>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            className='w-100 mb-3 mt-4 inpcolor'
            onChange={(e) => setLoginDetails({ ...logindetails, email: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className='w-100 mb-3 inpcolor'
            onChange={(e) => setLoginDetails({ ...logindetails, password: e.target.value })}
          />
          <Button variant="contained" className='w-100 py-3 mt-4' onClick={handleLogin}>Login</Button>

          <p className='mt-5 text-center text100'>Or continue with</p>
          <Row className='mt-5 justify-content-center'>
            <Col xs={6} sm={4} md={3} className='d-flex justify-content-center mb-3'>
              <LoginSocialFacebook
                appId="473708898979821"
                onResolve={(response) => {
                  logindetails.email = response.data.email;
                  logindetails.password = response.data.id;
                  handleLogin1();
                }}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <FacebookLoginButton className='social-button'/>
              </LoginSocialFacebook>
            </Col>

            <Col xs={6} sm={4} md={3} className='d-flex justify-content-center'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  logindetails.email = decoded.email;
                  logindetails.password = decoded.given_name;
                  handleLogin1();
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                render={({ onClick }) => (
                  <Button className='social-button' onClick={onClick}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google logo" className='social-logo' />
                    Sign in with Google
                  </Button>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default SignIn;
