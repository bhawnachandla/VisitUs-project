import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { BASE_URL_IMG } from '../apiServices'
import { toast } from 'react-toastify'

export default function UserViewAllTravelling() {
    const [allTravelling, setAllTravelling] = useState()
    useEffect(()=>{
        apiServices.customerViewAllTravelling().then(data=>{
            if(data.data.success){
                setAllTravelling(data.data.data)
            }else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    })
  return(
    <>
        <div className="p-5"></div>
        <div className="container-fluid row p-5">
        {allTravelling?.map((data,i)=>(
            <div class="card mx-4 my-3" style={{width:"400px"}}  key={i}>
            {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.destination_image} alt="Card image cap"/> */}
            <div class="card-body mx-auto">
                <p class="card-text fs-4">{data.from_city[0]?.city_name} to {data.to_destination[0]?.destination_name}</p>
                <p class="card-text fs-5">Travelling Distance: {data.travelling_distance}</p>
                <p class="card-text fs-5">Mode Name: {data.mode_of_travel[0]?.mode_name}</p>
                <p class="card-text fs-5">Mode Name: {data.mode_of_travel[0]?.price_per_person}</p>
                {/* <a href="#" class="btn btn-dark my-2">Book</a> */}
            </div>
            </div>
        ))}
        </div>
    </>
  )
}
