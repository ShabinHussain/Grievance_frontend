import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from 'react-toastify';
import { addComplaintApi } from '../../services/allApi';
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import Footer from '../components/Footer';











function Grievance() {

    // Define the custom navigation component within the same file
const NavigateComponent = ({ to }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate(to);
    }, [navigate, to]);

    return null; // This component doesn't render anything
};


// Define a custom component to handle logout
const LogoutComponent = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        sessionStorage.removeItem("existingUser");
        sessionStorage.removeItem("token");
        navigate('/'); // Redirect to login or homepage
    }, [navigate]);

    return null; // This component doesn't render anything
};




    const navigate = useNavigate()
    const [complaintDetails, setComplaintDetails] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",

        time: "",
        location: "",
        description: "",
        documents: "",
        resolution: "",
        comment: ""
    })
    //date picker
    const [date, setDate] = useState(new Date());
    const [token, setToken] = useState("")


    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setComplaintDetails({ ...complaintDetails, documents: e.target.files[0] })
    }



    console.log(complaintDetails);
    console.log(date);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    console.log(token);



    const handleAdd = async (e) => {
        e.preventDefault()

        const { name, email, phone, address, time, location, description, documents, resolution, comment, date } = complaintDetails
        if (!name || !email || !phone || !address || !location || !description || !documents || !resolution || !comment) {
            toast.info('please fill the form completely')
        } else {
            //api
            //inorder to send uploaded content use formData class
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("email", email)
            reqBody.append("phone", phone)
            reqBody.append("address", address)
            reqBody.append("time", time)
            reqBody.append("location", location)
            reqBody.append("description", description)
            reqBody.append("documents", documents)
            reqBody.append("resolution", resolution)
            reqBody.append("comment", comment)
            reqBody.append("date", date)

            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}` //to send to backend
                }

                const result = await addComplaintApi(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    toast.success('complaint uploaded successfully')

                    setTimeout(() => {
                        navigate('/')
                    }, 2000)


                }

            }
            else {
                alert('please login')
            }
        }
    }


    const handleLogout = () => {
        sessionStorage.removeItem("existingUser");
        sessionStorage.removeItem("token");
        navigate('/'); // Redirect to login or homepage
      };


     // Define the steps for the chatbot
     const steps = [
        {
            id: 'Greet',
            message: 'Hello, welcome to our website',
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, please select from the below options.',
            trigger: 'issues',
        },
        {
            id: 'issues',
            options: [
                { value: 'cmpl', label: 'About Us', trigger: 'NavigateToGrievance' },
                { value: 'log', label: 'Logout', trigger: 'log' },
              
            ],
        },
        {
            id: 'NavigateToGrievance',
            component: <NavigateComponent to="/aboutus" />, // Navigate to the Grievance route
            asMessage: true, // Ensures it is treated as a message
            end: true,
        },
        {
            id: 'log',
            component: <LogoutComponent />, // Handle logout
            asMessage: true,
            end: true,
        },
       
    ];









    return (
        <>
            <div className='' style={{ height: '100vh' }}>
                <Row>
                    

                    <Col md='12'>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col md='1'></Col>
                    <Col md='8'>
                        <div className=''>

                            <form className='p-3'>
                                <p><b>1.Personal Information</b></p>
                                <div className='mb-3'>
                                    {/*<label htmlFor="name" className='form-label'>Name</label> */}
                                    <input type="text" id='name' placeholder='Name' className='form-control' onChange={(e) => setComplaintDetails({ ...complaintDetails, name: e.target.value })} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" placeholder='Email Address' className='form-control' onChange={(e) => setComplaintDetails({ ...complaintDetails, email: e.target.value })} />

                                </div>
                                <div className='mb-3'>
                                    <input type="text" placeholder='Phone Number' className='form-control' onChange={(e) => setComplaintDetails({ ...complaintDetails, phone: e.target.value })} />
                                </div>
                                <div className='mb-3'>
                                    <textarea placeholder='Address' className='form-control' rows={'3'} onChange={(e) => setComplaintDetails({ ...complaintDetails, address: e.target.value })}></textarea>

                                </div>

                                <p><b>2. Grievance Details</b></p>
                                <div className='mb-3'>
                                    <label htmlFor="date">Date of Incident : </label>
                                    <DatePicker selected={date} id='date' onChange={(date) => setDate(date)} />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="time">Time of Incident : </label>

                                    <input aria-label="Time" type="time" id='time' onChange={(e) => setComplaintDetails({ ...complaintDetails, time: e.target.value })} />

                                </div>
                                <div className='mb-3'>
                                    <input type="text" placeholder='Location of Incident' className='form-control' onChange={(e) => setComplaintDetails({ ...complaintDetails, location: e.target.value })} />
                                </div>
                                <div className='mb-3'>
                                    <textarea placeholder='Description of the Grievance' className='form-control' rows={'4'} onChange={(e) => setComplaintDetails({ ...complaintDetails, description: e.target.value })}></textarea>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="docu">Supporting Documents (Attach any relevant documents or evidence that support your grievance. You can upload files such as photos, emails, or official documents.)</label>
                                    <input type="file" id='docu' onChange={(e) => handleFile(e)} />
                                </div>

                                <p><b>4. Desired Resolution</b></p>
                                <div className='mb-3'>
                                    <textarea placeholder='What resolution or action are you seeking? [Large Text Field] (Please specify what outcome you are hoping for or any steps you would like the organization to take.)' className='form-control' rows={'4'} onChange={(e) => setComplaintDetails({ ...complaintDetails, resolution: e.target.value })}></textarea>
                                </div>
                                <p><b>6. Additional Comments</b></p>
                                <div className='mb-3'>
                                    <textarea placeholder='Additional Comments or Information' className='form-control' rows={'4'} onChange={(e) => setComplaintDetails({ ...complaintDetails, comment: e.target.value })}></textarea>
                                </div>

                                <div className='mb-3'>
                                    <Link to='/' className='text-decoration-none text-white'>
                                        <Button type='button' variant="dark" className='border text-white' style={{ width: '70px' }}>
                                            Close
                                        </Button>
                                    </Link>
                                    <Button type='button' variant="dark" className='border text-white ms-2' style={{ width: '70px' }} onClick={handleAdd}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md='3'>
                        <Segment className='mt-5 '>
                            <Chatbot steps={steps} />
                        </Segment>
                    </Col>
                </Row>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        
        </>
        
    )
}

export default Grievance