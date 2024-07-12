import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import apiServices from "../apiServices";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Adminlogin() {
    const navigate= useNavigate()
    const [email, setEmail]=useState()
    const [pass, setPassword]=useState()
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const password=(e)=>{
        setPassword(e.target.value)
    }
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"35%",
        "zIndex":"1",  
        }
    const handleForm=(e)=>{
        e.preventDefault()
        let data= {
            email:email,
            password:pass
        }
        apiServices.adminLogin(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                console.log(data.data.token)
                console.log(data.data.data)
                sessionStorage.setItem("token", data.data.token)
                sessionStorage.setItem("authenticateAdmin",true)
                toast.success(data.data.message)
                navigate("/admin") 
            }
            else{
                toast.error(data.data.message)
                navigate("/adminlogin")
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
        })
    }
    return (
      <>
<div className="signinform">
        {/* <h1>Service Login Form</h1> */}
        {/* <!-- container --> */}
        <ToastContainer/>
        
        <div className="container   ">
            {/* <!-- main content --> */}
            <div className="w3l-form-info ">
                <div className="w3_info text-center">
                    <h2>ADMIN LOGIN</h2>
                    <form action="#" method="post">
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Username or Email" value={email} onChange={changeEmail} required=""/>
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" value={pass} onChange={password} required=""/>
                        </div>
                        <div className="form-row bottom">
                            <div className="form-check">
                                <input type="checkbox" id="remenber" name="remenber" value="remenber"/>
                                {/* <label for="remenber"> Remember me?</label> */}
                            </div>
                            {/* <a href="#url" className="forgot">Forgot password?</a> */}
                        </div>
                         <button className="btn btn-primary btn-block" onClick={handleForm} type="submit">Login</button>
                        
                    </form>
                    {/* <p className="continue"><span>or Login with</span></p> */}
                    
                    
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        
    </div>

    </>
  )
}