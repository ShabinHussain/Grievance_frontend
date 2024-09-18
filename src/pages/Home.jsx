import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import Panther from '../assets/Panther'
import Feb from '../assets/Feb'
import '../pages/Common.css'
import { Environment, OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei';
import Footer from '../components/Footer'














function Home() {


 

  return (
    <>
      <div className='bg-dark' style={{ width: '100', height: '100vh' }}>
        <Header/>
        <div className="row">
          {/* <img src="public/PngItem_1291723.png" alt="no image" className='square'/> */}

          <div className="col-md-6 text-warning">
            <h1 className='head1 text-center mt-5 head1'><b>Panther</b></h1>
            <h1 className='text-center'>The Man Without Fear</h1>
            <p className='text-center text-white mt-5 fs-3'>Welcome to the Panther Grievance Hub!</p>

          </div>
          <div className="col-md-6">
        <Canvas>

        <ambientLight />
        <OrbitControls autoRotate />
        <PerspectiveCamera makeDefault position={[0, 0, -900]} /> {/* Adjust the position here */}

        <Suspense fallback={null}>
         <Feb />
        </Suspense>
        </Canvas>
          </div>


        </div>

      </div>
      <Row>
       
        <Col md='6' className='bg-black story1'>
        <p className='fs-5 text-white'>In a bustling city where towering skyscrapers touch the clouds and every street corner hums with life, a new kind of hero has emerged. Meet Panther, a guardian not just of justice, but of voices lost in the clamor of everyday chaos. Panther isn't your typical superhero. His superpower? The ability to cut through the noise and shine a spotlight on the issues that matter most.But even heroes need a hand from time to time. That's where you come in.
        In a world where injustices and grievances often go unheard, Panther has taken on a crucial mission. He knows that every concern, every complaint, and every cry for help deserves to be heard and addressed. His quest is simple yet profound: to provide a platform where your grievances are not just acknowledged but acted upon with the seriousness they deserve.</p>

        </Col>
        <Col md='6' className='bg-light shadow d-flex align-items-center justify-content-center'>
       
          <h1 className='show2 rounded border px-4 shadow'>Panther</h1>
        
       
        </Col>
        

      </Row>
      <Row>
       
        <Col md='6' className='bg-light shadow d-flex align-items-center justify-content-center'>
        <h1 className='show3 rounded border px-4 shadow'>The Man Without Fear</h1>

        </Col>
        <Col md='6' className='bg-black story1'>
        <p className='fs-5 text-white'>
        Panther's quest is to make sure that every concern, no matter how small or large, gets the attention it deserves. Our Superhero Grievance Hub is his base of operations—an innovative space designed to cut through red tape and make it easier for you to voice your issues and seek resolution. We believe that every grievance is an opportunity for improvement and justice.Here’s how our hub works:
        Voice Your Concern: Share your grievance with us. Whether it’s a troubling customer service experience, a bureaucratic hurdle, or any other issue, we’re here to listen.Championing Your Cause: Panther and his team will review your concern with the utmost attention. We strive to address your issue with the seriousness it deserves and ensure that you receive a fair and timely resolution.</p>

        </Col>
        
      </Row>
      
   <Footer/>
    </>
  )
}

export default Home