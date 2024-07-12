import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'

export default function AddTransportCompanyPricing() {
    const [transportCompanyId,setTransportCompanyId]= useState()
    const [transports,setTransports]= useState()
    const [fromCity, setFromCity]= useState()
    const [cities, setAllcities]= useState()
    const [toCity,setToCity]= useState()
    const [places,setAllPlaces]= useState()
    const [chargesPerPerson,setChargesPerPerson]= useState()
    const [transportType,setTransportType]= useState()

    const company =(e)=>{
        setTransportCompanyId(e.target.value)
    }
    const city=(e)=>{
        setFromCity(e.target.value)
    }
    const place=(e)=>{
        setToCity(e.target.value)
    }
    const charges=e=>{
        setChargesPerPerson(e.target.value)
    }
    const transport=e=>{
        setTransportType(e.target.value)
    }
    useEffect(()=>{
        apiServices.viewAllTransportCompany().then(data=>{
            setTransports(data.data.data)
        })
        apiServices.viewAllCity().then(data=>{
            setAllcities(data.data.data)
        })
        apiServices.allPlaces().then(data=>{
            setAllPlaces(data.data.data)
        })
    },[])

    const handlePricingForm=e=>{
        e.preventDefault()
        let data= {
          "transportCompanyId":transportCompanyId,
        "fromCity":fromCity,
        "toCity":toCity,
        "chargesPerPerson":chargesPerPerson,
        "transportType":transportType
    }
        apiServices.addTransportCompanyPricing(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                setTransportCompanyId("")
                setFromCity("")
                setToCity("")
                setChargesPerPerson("")
                setTransportType("")
            }else{
                
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    }
  return (  
    <div>
       <div className='container p-5'>
        <div className='col-md-8 mx-auto my-5'>
        <h5 class="card-title">Add Pricing</h5>
        <hr />
          <div className="form-row row">
          <div class="form-group col-md-6">
              <label className='form-label'>Transport Company</label>
              <select className='form-control py-0' value={transportCompanyId} onChange={company} required>
                <option disabled selected value={""}>Choose Company</option>
                {transports?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.transport_company_name}</option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label className='form-label'>From City</label>
              <select className='form-control py-0' value={fromCity} onChange={city} required>
                <option disabled selected value={""} >Choose City</option>
                {cities?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.city_name}</option>
                ))}
              </select>
            </div>
            </div>
          <div className="form-row row">
          <div class="form-group col-md-6">
              <label className='form-label'>Place</label>
              <select className='form-control py-0' value={toCity} onChange={place} required>
                <option disabled selected value={""}>Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.place_name}</option>
                ))}
              </select>
            </div>
              <div className="form-group col-md-6">
                <label className='form-label'>Charges Per Person</label>
                <input type="text" class="form-control" value={chargesPerPerson} onChange={charges} required/>
              </div>
              </div>
              <div className="form-group col-md-12">
                <label className='form-label'>Transport Type</label>
                  <select class="form-control py-0" value={transportType} onChange={transport} required>
                    <option selected disabled value={""}>Choose one</option>
                    <option value={1}>Train</option>
                    <option value={2}>Bus</option>
                    <option value={3}>Car</option>
                    <option value={4}>Flight</option>
                  </select>
              </div>
          <br/>

            <button type="submit" onClick={handlePricingForm} className="btn btn-dark col-4 offset-md-4">Save</button>

        </div>

        </div>
        </div>
      
  )
}
