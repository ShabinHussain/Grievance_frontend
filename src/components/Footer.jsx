import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='row w-101 p-3 bg-dark border border-warning'>


    <div className="col-md-4 p-4 ms-md-5">
        <h4 className='text-warning'>Panther</h4>
        <p style={{textAlign:'justify'}} className='mt-4 text-white'>An innovative space designed to cut through red tape and make it easier for you to voice your issues and seek resolution. We believe that every grievance is an opportunity for improvement and justice.</p>
    </div>

    <div className="col-md-2 p-4 justify-content-center d-flex">
        <div>
            <h4 className='text-light'>Links</h4>
            <p className='mt-4'><Link to={'/'} className='text-decoration-none text-white'>Home Page</Link></p>
            <p><Link to={'/aboutus'} className='text-decoration-none text-white'>About us</Link></p>
          

        </div>

    </div>

    <div className="col-md-2 p-4 justify-content-center d-flex" >
        <div>
            <h4 className='text-light'>User</h4>
            <p className='mt-4 text-light'><Link to={'/signin'} className='text-decoration-none text-white'>SignIn</Link></p>
            <p className='text-light'><Link to={'/signup'} className='text-decoration-none text-white'>SignUp</Link></p>
        </div>
        


    </div>

    <div className="col-md-3 p-4">
        <h4 className='text-light'>Contact Us</h4>
        
        <div className="d-flex mt-4 justify-content-between">
        <FontAwesomeIcon icon={faInstagram} size='2xl' color='white'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'  color='white'/>
        <FontAwesomeIcon icon={faTwitter} size='2xl'  color='white'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'  color='white'/>



        </div>

    </div>
    <div className="col-md-1"></div>

</div>
  )
}

export default Footer