import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




//register
export const registerApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqbody,"")
}

//login
export const loginApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqbody,"")
}


//add complaint
export const addComplaintApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addcomplaint`,reqBody,reqHeader)
}

//edit Profile
export const editProfileApi =async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-profile`,reqBody,reqHeader)
}

//user complaint
export const userComplaintApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/usercomplaint`,"",reqHeader)
}