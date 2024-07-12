import React, { useEffect, useState } from 'react'
import apiServices,{BASE_URL_IMG} from '../apiServices'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function UserAllPlaces(){
    const [places,setPlaces] = useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    useEffect(()=>{
        apiServices.customerAllPlaces().then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            setPlaces(data.data.data)
        })
    },[loading])
  return (
    <div>
        <div className='row p-5'></div>
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
         <div className="container-fluid row p-5">
            {places?.map((data,i)=>(
                <div class="card mx-4 my-2" style={{width:"300px"}}  key={i}>
                <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.place_image} alt="Card image cap"/>
                <h5 className='card-title'>{data?.place_name}</h5>
                <div class="card-body mx-auto">
                    {/* <p class="card-text">{data.place_description}</p> */}
                    <Link to={"/user/allhotels/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-auto my-2">View Hotels</a>
                    </Link>
                    {!!sessionStorage.getItem("token")?
                    <Link to={"/user/allplaces/single/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-1 my-2">View</a>
                    </Link>
                    :
                    <Link to={"/allplaces/single/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-1 my-2">View</a>
                    </Link>
                    }
                </div>
                </div>
            ))}
            </div>    
    </div>
  )
}
