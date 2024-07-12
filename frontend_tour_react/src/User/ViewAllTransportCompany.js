import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'

export default function ViewAllTransportCompany() {
    const [allTransportCompany,setAllTransportCompany]= useState()
    useEffect(()=>{
        apiServices.customerAllTransportCompany().then(data=>{
            if(data.data.success){
                setAllTransportCompany(data.data.data)
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
    <div>
      <div className="p-5"></div>
        <div className="container-fluid row">
        {ViewAllTransportCompany?.map((data,i)=>(
            <div class="card mx-4" style={{width:"300px"}}  key={i}>
            {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.destination_image} alt="Card image cap"/> */}
            <div class="card-body mx-auto">
              {/* <h5 className='card-title'></h5> */}
                <p class="card-text fs-4">{data.transport_company_name}</p>
                <p class="card-text fs-4">{data.transport_company_description}</p>
                {/* <a href="#" class="btn btn-dark my-2">Book</a> */}
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
