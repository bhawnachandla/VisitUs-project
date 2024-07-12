import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'

export default function ViewTransportCompanyPricing() {
    const [pricing,setPricing]= useState()

    useEffect(()=>{
        apiServices.customerTransportCompanyPricing().then(data=>{
            console.log(data.data.message)
            setPricing(data.data.data)
        })
    })
  return (
    <div>
      
    </div>
  )
}
