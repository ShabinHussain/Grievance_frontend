import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { editProfileApi } from '../../services/allApi'
import { ToastContainer } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'








function EditProfile() {
    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        username:"",
        email:"", 
        password:""
        
    
      })

      useEffect(()=>{
        if(sessionStorage.getItem("existingUser")){
          const user = JSON.parse(sessionStorage.getItem("existingUser"))
          setUserDetails({...userDetails,username:user.username,email:user.email,password:user.password})
         {/* setExistingImage(user.profile)*/}
        }
        
      },[]) 

      const handleProfileUpdate = async()=>{
        const {username,email,password} = userDetails
        if(!username || !email || !password){
          alert("please fill the input fields")
        }
        else{
          const reqBody = new FormData()
    
          reqBody.append("username",username)
          reqBody.append("email",email)
          reqBody.append("password",password)
    
    
          const token = sessionStorage.getItem("token")
    
            const reqHeader = {
              "Content-Type":"application/json",
              "Authorization":` Bearer ${token}`
            }
            const result = await editProfileApi(reqBody,reqHeader)
            console.log(result);
            if(result.status==200){
              alert('Profile updated successfully')
              sessionStorage.setItem("existingUser",JSON.stringify(result.data))
              
              setTimeout(()=>{
                  navigate('/')},
               2000)
            }else{
              alert('something went wrong')
            }
         
    
        }
      }


  return (
    <>
    <Header/>
    
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column bg-dark' style={{height:'92vh'}}>
    <h5 className='text-white'>Edit-Profile</h5>
        <div className='container w-50 bg-white rounded justify-content-center align-items-center p-5'>
            <form>
                <input type="text" placeholder='username' value={userDetails.username} className='w-100 form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
                <input type="text" value={userDetails.email} className='w-100 mt-5 form-control' placeholder='Email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                <button type='button' className='px-3 mt-5 rounded bg-dark text-white' onClick={handleProfileUpdate}>Submit</button>

            </form>
            

        </div>

    </div>
    <Footer/>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default EditProfile