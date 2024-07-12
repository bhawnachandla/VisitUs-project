import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { BASE_URL_IMG} from '../apiServices'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';
export default function ViewAllHotels() {
    const [allhotels,setAllHotels]= useState()
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
        apiServices.customerAllHotels().then(data=>{
            setAllHotels(data.data.data)
        })
    },[loading])
  return (
    <div>
        <div className='p-5'></div>
        <div className='p-5 '></div>
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
      

         <div className="container-fluid row">
            {allhotels?.map((data,i)=>(
                <div class="card mx-4" style={{width:"300px"}}  key={i}>
                <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.hotel_image} alt="Card image cap"/>
                <h5 className='card-title'>{data?.hotel_name}</h5>
                <div class="card-body mx-auto">
                    {/* <p class="card-text text-center">{data.hotel_description}</p> */}
                    <p class="card-text text-center">{data.hotel_address}</p>
                    <Link to={"/user/addbooking/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark  my-1 mx-1">Book</a>
                    </Link>
                    <Link to={"/user/allhotels/single/"+`${data?._id}`}>
                    <a href="" class="btn btn-dark my-1 mx-1">View More</a></Link>
                </div>
                </div>
            ))}
            </div>  
    
    </div>
  )
}
