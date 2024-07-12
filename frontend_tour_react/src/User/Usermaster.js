import { Navigate, Outlet } from "react-router-dom";
import Userheader from "./Userheader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Usermaster(){
   
    return(
        <>
        <Userheader/>
       <Outlet/>
        <ToastContainer/>
        
        </>
    )
}