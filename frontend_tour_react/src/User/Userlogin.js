import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import apiServices from "../apiServices";
import {toast} from "react-toastify";
export default function Userlogin() {
    const navigate= useNavigate()
    const [email, setEmail]=useState()
    const [pass, setPassword]=useState()
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const password=(e)=>{
        setPassword(e.target.value)
    }
    const handleForm=(e)=>{
        e.preventDefault()
        let data= {
            email:email,
            password:pass
        }
        apiServices.userLogin(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                sessionStorage.setItem("user-token", data.data.token)
                sessionStorage.setItem("userName", data.data.data.name)
                sessionStorage.setItem("userId", data.data.data._id)
                sessionStorage.setItem("authenticate",true)
                toast.success(data.data.message)
                navigate("/user/userhome") 
            }
            else{
                console.log(data.data.message)
                toast.error(data.data.message)
                navigate("/userlogin")
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
        <div className="container my-5 p-5">
            {/* <!-- main content --> */}
            <div className="w3l-form-info">
                <div className="w3_info text-center">
                    <h2>USER - LOGIN</h2>
                    <form action="#" method="post">
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Username or Email" onChange={changeEmail} value={email}  required=""/>
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" onChange={password} value={pass} required=""/>
                        </div>
                        <div className="form-row bottom">
                            <div className="form-check">
                                <input type="checkbox" id="remenber" name="remenber" value="remenber"/>
                                {/* <label for="remenber"> Remember me?</label> */}
                            </div>
                            {/* <a href="#url" className="forgot">Forgot password?</a> */}
                        </div>
                        <Link to="/User/Userdashboard">  <button className="btn btn-primary btn-block" type="submit" onClick={handleForm}>Login</button></Link>
                        
                    </form>
                    {/* <p className="continue"><span>or Login with</span></p> */}
                    <div className="social-login">
                        {/* <a href="#facebook">
                            <div className="facebook">
                                <span className="fab fa-facebook-f" aria-hidden="true"></span>

                            </div>
                        </a>
                        <a href="#twitter">
                            <div className="twitter">
                                <span className="fab fa-twitter" aria-hidden="true"></span>
                            </div>
                        </a>
                        <a href="#google">
                            <div className="google">
                                <span className="fab fa-google" aria-hidden="true"></span>
                            </div>
                        </a> */}
                    </div>
                    <p className="account">Don't have an account? 
                    <Link to="/userregister"><a href="#signup">Register</a></Link></p>
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        
    </div>

    </>
  )
}