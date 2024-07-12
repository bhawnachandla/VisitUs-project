import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import apiServices from "../apiServices";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
export default function Userregister() {
    const navigate= useNavigate()
    const [email, setEmail]=useState()
    const [pass, setPassword]=useState()
    const [name, setName]=useState()
    const [city, setCity]=useState()
    const [cont,setCont]=useState()
    const [address,setAddress]= useState()
    const [idProof,setIdProof]= useState()
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const password=(e)=>{
        setPassword(e.target.value)
    }
    const Name=(e)=>{
        setName(e.target.value)
    }
    const cit=(e)=>{
        setCity(e.target.value)
    }
    const contact=(e)=>{
        setCont(e.target.value)
    }
    const add=e=>{
        setAddress(e.target.value)
    }
    const image= e=>{
        setIdProof(e.target.files[0])
    }
    const handleForm=()=>{
        let data =new FormData()
        data.append("name",name)
        data.append("email",email)
        data.append("password",pass)
        data.append("contact",cont)
        data.append("address",address)
        data.append("city",city)
        data.append("id_proof",idProof)
        apiServices.userRegister(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                console.log(data.data.data)
                toast.success(data.data.message)
                navigate("/userlogin")
            }
            else{
                toast.error(data.data.message)
                navigate("/userregister")
            }
        }).catch(err=>{
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
                    <h2>USER REGISTER</h2>
                        <div className="input-group">
                            {/* <span><i className="fas fa-user" aria-hidden="true"></i></span> */}
                            <input type="text" placeholder="Name" onChange={Name} value={name} required=""/>
                        </div>
						<div className="input-group">
                            {/* <span><i className="fas fa-at" aria-hidden="true"></i></span> */}
                            <input type="text" placeholder="Email" onChange={changeEmail} value={email} required=""/>
                        </div>
						<div className="input-group">
                            {/* <span><i className="fas fa-key" aria-hidden="true"></i></span> */}
                            <input type="password" placeholder="Password" onChange={password} value={pass} required=""/>
                        </div>
						<div className="input-group">
                            {/* <span><i className="fa fa-phone" aria-hidden="true"></i></span> */}
                            <input type="text" placeholder="Contact" onChange={contact} value={cont} required=""/>
                        </div>
                        <div className="input-group">
                            {/* <span><i className="fas fa-address" aria-hidden="true"></i></span> */}
                            <input type="text" placeholder="Address" onChange={add} value={address} required=""/>
                        </div>
                        <div className="input-group">
                            {/* <span><i className="fas fa-key" aria-hidden="true"></i></span> */}
                            <input type="file" placeholder="Upload Id Proof" onChange={image} required=""/>
                        </div>

                        <div className="form-row bottom">
                            <div className="form-check">
                                <input type="checkbox" id="remenber" name="remenber" value="remenber"/>
                                {/* <label for="remenber"> Remember me?</label> */}
                            </div>
                            {/* <a href="#url" className="forgot">Forgot password?</a> */}
                        </div>
                        <button className="btn btn-primary btn-block" type="submit" onClick={handleForm}  >Login</button>
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
                    {/* <p className="account">Don't have an account? <a href="#signup">Sign up</a></p> */}
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
       
    </div>
      </>

    )
}