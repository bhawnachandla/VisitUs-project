import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import { BASE_URL_IMG } from '../apiServices'
import { Link } from 'react-router-dom'

export default function ViewDestinationById() {
    const [destination,setDestination]= useState()
    const naviagte= useNavigate()
    const param = useParams()
    const id= param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        apiServices.customerDestinationById(data).then(data=>{
            if(data.data.success){
                toast.success(data.data.message)
                setDestination(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    })
  return (
    <>
     <div className='p-5'></div>
         <div className="container-fluid row">
            {destination?.map((data,i)=>(
                <div class="card mx-4" style={{width:"300px"}}  key={i}>
                <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.destination_image} alt="Card image cap"/>
                <h5 className='card-title'>{data?.destination_name}</h5>
                <div class="card-body mx-auto">
                    {/* <p class="card-text">{data.hotel_description}</p> */}
                    <Link to={"/user/viewplaces/"+`${data?._id}`}>
                    <a href="#" class="btn btn-dark mx-auto my-2">View Places</a>
                </Link>
                </div>
                </div>
            ))}
            </div>  
      
    </>
  )
}
