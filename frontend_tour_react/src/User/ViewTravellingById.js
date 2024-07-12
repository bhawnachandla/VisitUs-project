import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'

export default function ViewTravellingById() {
    const [travelling,setTravelling]= useState()
    const param= useParams()
    const id= param.id

    useEffect(()=>{
        apiServices.customerViewTravellingById(data).then(data=>{
            if(data.data.success){
                toast.success(data.data.message)
            }else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
        })
    })
  return (
    <div>
       <div className="p-5"></div>
        <div className="container-fluid row">
        {travelling?.map((data,i)=>(
            <div class="card mx-4" style={{width:"300px"}} key={i}>
            {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.} alt="Card image cap"/> */}
            <div class="card-body mx-auto">
                <p class="card-text fs-4">{data.transport_name}</p>
                <a href="#" class="btn btn-dark my-2">Book</a>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
