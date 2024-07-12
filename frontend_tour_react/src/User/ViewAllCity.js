import React, { useState } from 'react'
import apiServices from '../apiServices'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function ViewAllCity() {
    const [allCity,setAllCity]= useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    apiServices.customerAllCity().then(data=>{
      setTimeout(()=>{
        setLoading(false)
    },1500)
      setAllCity(data.data.data)
    })
  return (
    <div>
        <div className='p-5'></div>
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
         <div className="container-fluid row my-5">
            {allCity?.map((data,i)=>(
                <div class="card mx-4 my-3" style={{width:"300px"}}  key={i}>
                <div class="card-body mx-auto">
                    <p class="card-text fs-3">{data?.city_name},{data.state_name}</p>
                    <Link to={"/user/viewDestination/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-auto my-2">View</a>
                    </Link>
                </div>
                </div>
            ))}
            </div> 
    </div>
  )
}
