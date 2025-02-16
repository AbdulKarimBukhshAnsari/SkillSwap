import { createContext } from "react";
// import { doctors } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useState } from "react";
export const AppContext = createContext();
import {toast} from "react-toastify";
import { useEffect } from "react";
import Cookies from "js-cookie";

 
const AppContextProvider = (props)=>{
    
    const currencySymbol = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : false);
    const [userData, setUserData] = useState(false);


    const getDoctorsData = async () =>{
        try{
            const data = await axios.get(`${backendUrl}/api/doctor/list`);
            if(data?.data?.status === "success"){
                setDoctors(data?.data?.data);
            }
            else{
                toast.error(data?.response?.data?.message);
            }
        }
        catch(e){
            return(e);
        }
    };

    const loadUserData = async () =>{
        try{
            const data = await axios.get(`${backendUrl}/api/user/getProfile`, {headers : {token}});
            if(data?.data?.status === "success"){
                setUserData(data?.data?.data);
            }
            else{
                toast.error(data?.response?.data?.message);
            }
        }
        catch(e){
            return(e);
        }
    };

    useEffect(() =>{ 
        getDoctorsData();
    }, []);

    useEffect(() =>{ 
        if(token){
            loadUserData();
        }
        else{
            setUserData(false);
        }
    }, [token]);


    const confirmPayment = async (sessionId) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/confirmPaymentAppointment`,{sessionId}, {headers : {token}});
           return(data);
        }
        catch(e){
            return(e);
        }
    };


    const sendEmailOtpForgetPasswordPage = async (email) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/sendOtpForget`,{email});
           return(data);
        }
        catch(e){
            return(e);
        }
    };

    const verifyOtpForgetPasswordPage = async (email, otp) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/verifyOtpForget`,{
                email,
                otp
            });
           return(data);
        }
        catch(e){
            return(e);
        }
    };

    const changePasswordForgetPasswordPage = async (email, password) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/changePasswordForget`,{
                email,
                password
            });
           return(data);
        }
        catch(e){
            return(e);
        }
    };

    const verifyEmailUser = async (email, otp) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/verifyUserEmail`,{
                email,
                otp
            });
           return(data);
        }
        catch(e){
            return(e);
        }
    };


    const verifyAccount = async () =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/verifyAccount`,{}, {headers : {token}});
           return(data);
        }
        catch(e){
            return(e);
        }
    };


    const updateProfile = async (phone,address,gender,dob) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/updateAccount`,{
                phone ,
                address ,
                gender ,
                dob 
            }, {headers : {token}});
            return(data);
        }
        catch(e){
            return(e);
        }
    };


    const feedbackSubmit = async (appId, rating, review) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/user/submitFeedback`,{
                appId, rating, review
            }, {headers : {token}});
            return(data);
        }
        catch(e){
            return(e);
        }
    };

    const downloadSlipt = async (id) =>{
        try{
            const data = await axios.post(`${backendUrl}/api/admin/downloadSlipt`, {id} );
                if(data?.data?.status === "success"){
                    return(data);
                }
                else{
                    toast.error(data?.response?.data?.message);
                }
        }
        catch(e){
            toast.error(e.message);
            return(e);
        }
    };


    const value ={
        doctors,
        currencySymbol,
        getDoctorsData,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserData,
        confirmPayment,
        sendEmailOtpForgetPasswordPage,
        verifyOtpForgetPasswordPage,
        changePasswordForgetPasswordPage,
        verifyEmailUser,
        verifyAccount,
        updateProfile,
        feedbackSubmit,
        downloadSlipt
    };
    return (
        <AppContext.Provider value={value}>
            {props?.children}
        </AppContext.Provider>
    );
}


export default AppContextProvider;