import {
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_RESET,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,CLEAR_ERRORS, REGISTER_SUCCESS, REGISTER_FAIL,LOADUSER_FAIL,LOADUSER_REQUEST,LOADUSER_SUCCESS,LOGOUT_FAIL,LOGOUT_SUCCESS,UPDATEUSER_FAIL,UPDATEUSER_REQUEST,UPDATEUSER_RESET,UPDATEUSER_SUCCESS
    } from "../constants/userconstant"
import axios from "axios" 
//login
export const login = (email,password)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config ={headers:{"Content-Type":"application/json"}}
        const {data} =await axios.post(`/api/v1/login`,{email,password},config
        )
  
    
    dispatch({type:LOGIN_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    }
}
//load user
export const loaduser = ()=>async(dispatch)=>{
    try{
        dispatch({type:LOADUSER_REQUEST})
       
        const {data} =await axios.get(`/api/v1/me`)
        
  
    
    dispatch({type:LOADUSER_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:LOADUSER_FAIL,payload:error.response.data.message})
    }
}

//logout user
export const  logout= ()=>async(dispatch)=>{
    try{
     
       await axios.get(`/api/v1/logout`)
    dispatch({type:LOGOUT_SUCCESS}
        )
    }catch(error){
dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
}


// get all users:-
export const  getallusers= ()=>async(dispatch)=>{
    try{
    dispatch({type:ALL_USERS_REQUEST})
     const {data} =  await axios.get(`/api/v1/admin/users`)
    dispatch({type:ALL_USERS_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:ALL_USERS_FAIL,payload:error.response.data.message})
    }
}

//get user details:-
export const  getuserdetails= (id)=>async(dispatch)=>{
    try{
    dispatch({type:USER_DETAILS_REQUEST})
     const {data} =  await axios.get(`/api/v1/admin/users${id}`)
    dispatch({type:USER_DETAILS_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:USER_DETAILS_FAIL,payload:error.response.data.message})
    }
}


//register
export const register = (userData)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config ={headers:{"Content-Type":"multipart/form-data"}}
        
  const {data} =await axios.post(`/api/v1/register`,userData,config);
  dispatch({type:REGISTER_SUCCESS,payload:data.user})
    
    dispatch({type:LOGIN_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:REGISTER_FAIL,payload:error.response.data.message})
    }
}
//  update profile
export const updateprofile = (userData)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATEUSER_REQUEST})
        const config ={headers:{"Content-Type":"multipart/form-data"}}
        
  const {data} =await axios.put(`/api/v1/me/update`,userData,config);
  dispatch({type:UPDATEUSER_SUCCESS,payload:data.success})
 
    }catch(error){
dispatch({type:UPDATEUSER_FAIL,payload:error.response.data.message})
    }
}
//CLEARING THE ERRORS

export const updateuser=(id,userdata)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_USER_REQUEST})
        const config ={headers: {"Content-Type" :"application/json"}}
        const {data} =await axios.put(`/api/v1/admin/users/${id}`,config,userdata)
        dispatch({type:UPDATE_USER_SUCCESS,payload:data.success})




    }catch(error){
        dispatch({
            type:UPDATE_USER_FAIL,
            payload:error.response.data.message
        })

    }
}
//delete user
export const deleteuser=(id)=>async(dispatch)=>{
    try{
        dispatch({type:DELETE_USER_REQUEST})

        const {data} =await axios.delete(`/api/v1/admin/users/${id}`)
        dispatch({type:DELETE_USER_SUCCESS,payload:data.success})




    }catch(error){
        dispatch({
            type:DELETE_USER_FAIL,
            payload:error.response.data.message
        })

    }
}
export const clearerrors =()=> async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}

    