import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import apiServices from '../apiServices'

export default function AllReviews() {
    const [allReview,setAllReview] = useState()
    useEffect(()=>{
        apiServices.customerAllReview().then(data=>{
          setAllReview(data.data.data)
        })
    })
  return (
    <div>
       <div className='p-5'></div>
        <div className='p-5'></div>
         <div className="container-fluid row">
            {allReview?.map((data,i)=>(
                <div class="card mx-4 my-3" style={{width:"300px"}}  key={i}>
                {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.hotel_image} alt="Card image cap"/> */}
                <h5 className='card-title'>{data?.review}</h5>
                <div class="card-body mx-auto">
                    <p class="card-text">{data.hotel_description}</p>
                    <Link to={"/user/allreview/edit/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-auto my-2">Edit Review</a>
                    </Link>
                </div>
                </div>
            ))}
            </div>  
      
    </div>
  )
}
