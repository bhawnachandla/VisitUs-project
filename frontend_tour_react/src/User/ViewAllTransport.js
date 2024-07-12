import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import ClipLoader from 'react-spinners/ClipLoader';

export default function ViewAllTransport() {
    const [transport,setTransport]= useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
    },1500)
        apiServices.customerAllTransport().then(data=>{

            setTransport(data.data.data) 
        }) 
    },[loading])  
  return (
    <div>
       <div className="p-5"></div>
        <div className="container-fluid row p-5">
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
        {transport?.map((data,i)=>(
            <div class="card mx-4 my-3" style={{width:"300px"}}  key={i}>
            {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.destination_image} alt="Card image cap"/> */}
            <div class="card-body mx-auto">
              {/* <h5 className='card-title'></h5> */}
                <p class="card-text fs-5">{data.from_city[0]?.city_name} to {data.to_destination[0]?.destination_name}</p>  
                <p class="card-text fs-5 text-center">Mode: {data.mode_of_transport[0]?.transport_name}</p>
                <p class="card-text fs-5 text-center">Cost: {data.mode_of_transport[0]?.transport_cost}</p>
                {/* <a href="#" class="btn btn-dark my-2">Book</a> */}
            </div>
            </div>
        ))}
        </div>

      
    </div>
  )
}
