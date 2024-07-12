import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTransportCompanyPricing() {
    const [transportCompanyId,setTransportCompanyId]= useState()
    const [fromCity, setFromCity]= useState()
    const [toCity,setToCity]= useState()
    const [chargesPerPerson,setChargesPerPerson]= useState()
    const [transportType,setTransportType]= useState()
    let param= useParams()
    let id = param.id
    const navigate= useNavigate()

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
            setTransportCompanyId(data.data.data)
        })
        apiServices.viewAllCity().then(data=>{
            setFromCity(data.data.data)
        })
        apiServices.allPlaces().then(data=>{
            setToCity(data.data.data)
        })
        let data= {
            _id:id
        }
        apiServices.viewTransportCompanyPricingById(data).then(data=>{
            if(data.data.success){
                setTransportCompanyId(data.data.data.transportCompanyId)
                setFromCity(data.data.data.fromCity)
                setToCity(data.data.data.toCity)
                setChargesPerPerson(data.data.data.chargesPerPerson)
                setTransportType(data.data.data.transportType)
            }else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    },[])
    const handlePricingForm=e=>{
        e.preventDefault()
        let data= new FormData()
        data.append("transportCompanyId",transportCompanyId)
        data.append("formCity",fromCity)
        data.append("toCity",toCity)
        data.append("chargesPerPerson",chargesPerPerson)
        data.append("transportType",transportType)
        data.append("_id",id)
        apiServices.updateTransportCompanyPricing(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                navigate("/admin/alltransportcompanypricing")
                
            }else{
                
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    }
  return (
    <>
         <div className='container p-5'>
        <div className='col-md-8 mx-auto my-5'>
          <div className="form-row row">
          <div class="form-group col-md-6">
              <label className='form-label'>Destination</label>
              <select className='form-control py-0' value={transportCompanyId} onChange={company} required>
                <option disabled selected>Choose Company</option>
                {transportCompanyId?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.transport_company_name}</option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label className='form-label'>From City</label>
              <select className='form-control'required>
                <option disabled value={fromCity} onChange={place}>Choose City</option>
                {fromCity?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.city_name}</option>
                ))}
              </select>
            </div>
            </div>
          <div className="form-row row">
          <div class="form-group col-md-6">
              <label className='form-label'>Destination</label>
              <select className='form-control'required>
                <option disabled value={toCity} onChange={city}>Choose Place</option>
                {toCity?.map((el,index)=>(
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
                <input type="text" class="form-control" value={transportType} onChange={transport} required/>
              </div>
          <br/>

            <button type="submit" onClick={handlePricingForm} className="btn btn-dark col-4 offset-md-4">Save</button>

        </div>

        </div>
        
    </>
  )
}
