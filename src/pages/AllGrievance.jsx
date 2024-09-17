import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { userComplaintApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import Footer from '../components/Footer'






function AllGrievance() {
    const [userComplaint, setUserComplaint] = useState([])

   {/* const getUserComplaint = async () => {
        if (sessionStorage.getItem("token")) {
          const token = sessionStorage.getItem("token")
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
          const result = await userComplaintApi(reqHeader)
          setUserComplaint(result.data);
        }
      }
      console.log(userComplaint); */}

      const getUserComplaint = async () => {
        if (sessionStorage.getItem("token")) {
          const token = sessionStorage.getItem("token");
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          };
          
          try {
            const result = await userComplaintApi(reqHeader);
            console.log('API Response:', result); // Log API response
            setUserComplaint(result.data);
          } catch (error) {
            console.error('API Error:', error); // Log any errors
          }
        }
      };
      



      useEffect(() => {
        getUserComplaint()
        
      }, [])

  return (
    <>
      <Header/>

     
    
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column ' style={{height:'100%'}}>
     <h5 className='fs-2 mt-5'>Submitted Grievances</h5>

     {userComplaint?.length>0 ?
     userComplaint?.map((item)=>(<div className='container w-50 bg-white rounded justify-content-center align-items-center p-5 mt-5 shadow'>
      <ol>
            <li>Name:{item.name}</li>
            <li>Email Address:{item.email}</li>
            <li>Phone Number:{item.phone}</li>
            <li>Address:{item.address}</li>
            <li>Date of Incident :{item.date}</li>
            <li>Time of Incident:{item.time}</li>
            <li>Location of Incident:{item.location}</li>
            <li>Description of the Grievance:{item.description}</li>
            <li>Desired Resolution:{item.resolution}</li>
            <li>Additional Comments:{item.comment}</li>
            <li>Uploaded Document: <img src={`${serverUrl}/uploads/${item.documents}`} alt="no image" height={'150px'}/></li>
        </ol>

      </div>)) :
      
      <p>No Grievance submitted</p>}

      

     

      

      

      </div>  
      <Footer/>

    </>
  )
}

export default AllGrievance