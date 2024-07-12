import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function ViewPackages() {
    const [userPackage,setUserPackage]= useState()
    const [loading,setLoading] = useState()
    const authenticate=sessionStorage.getItem("authenticate")
    let navigate= useNavigate()
    if(!authenticate){
      navigate("/userlogin")        
    }
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    useEffect(()=>{
      let data={
        packageStatus:true
      }
        apiServices.customerViewPackage(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
           if(data.data.success){
            setUserPackage(data.data.data)
           } else{
            // toast.error(data.data.message)
           }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    },[loading])
  return (
    <div>
        <div className='p-5'></div>
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
         <div className="container-fluid row p-5">
            {userPackage?.map((data,i)=>(
                <div class="card mx-4 my-3" style={{width:"300px"}}  key={i}>
                {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.destination_image} alt="Card image cap"/> */}
                <h5 className='card-title fs-3'>{data?.package_name}</h5>
                <div class="card-body mx-auto">
                    <p class="card-text text-center fs-5">Package Cost: {data.package_cost}</p>
                    <p class="card-text fs-5 text-center">No of Persons: {data.no_of_person}</p>
                    {/* <a href="#" class="btn btn-dark my-2">Book</a> */}
                </div>
                </div>
            ))}
            </div> 
    </div>
  )
}
