import { Navigate, Outlet } from "react-router-dom";
import Adminheader from "./Adminheader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Adminmaster(){
    const authenticate=sessionStorage.getItem("authenticateAdmin")
    if(!authenticate){
        // sessionStorage.setItem("message", "Please Login!!")
        return <Navigate replace to="/adminlogin" />
    }
    return(
        <>
       <Adminheader/>
       <Outlet/>
       <ToastContainer/>
        </>
    )
}