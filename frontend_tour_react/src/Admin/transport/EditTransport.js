import React from 'react'
import { useState,useEffect } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

export default function EditTransport() {
  const [fromCity,setFromCity]=useState()
  const [toDestination,setToDestination]=useState()
  const [modeOfTransport,setModeOfTransport]=useState()
  const [transportName,setTransportName]= useState()
  const [transCost,setTransportCost]= useState()
  let param= useParams()
  let id= param.id

  // let mode= []
  

  const city=(e)=>{
      setFromCity(e.target.value)
  }
  const destination=(e)=>{
      setToDestination(e.target.value)
  }
  const transportN=(e)=>{
      setTransportName(e.target.value)
  }
  const transportC=e=>{
    setTransportCost(e.target.value)
  }
  useEffect(()=>{
    let data ={
      _id:id
    }
    apiServices.viewTransportById(data).then(data=>{
      if(data.data.success){
        setFromCity(data.data.data.from_city)
        setToDestination(data.data.data.to_destination)
        setModeOfTransport(data.data.data.transport_name)
        setModeOfTransport(data.data.data.transport_cost)
      }else{
        toast.error(data.data.message)
      }
    }).catch(err=>{
      console.log(err)
      toast.error("Something Went Wrong")
    })
  })
    const handleTransportForm=(e)=>{
      e.preventDefault()
      let data = {
        from_city: fromCity,
        to_destination:toDestination,
        mode_of_transport:modeOfTransport,
        _id:id
      }

      apiServices.updateTransport(data).then(data=>{
          if(data.data.success){
              toast.success(data.data.message)
          }
          else{
              toast.error(data.data.message)
          }
      }).catch(err=>{
          console.log(err)
          toast.error("Something Went Wrong")
      })
  }

  return (
  
      <>
        <div  className='container p-5'>
        <div className='col-md-10 mx-auto my-5'>
          <form onSubmit={handleTransportForm}>
          <div className="form-row row">
            <div class="form-group col-md-12">
              <label className='form-label'>Destination</label>
              <select className='form-control' value={toDestination} onChange={destination} required>
                <option disabled selected>Choose Destination</option>
                {toDestination?.map((el,index)=>(
                  <option key={index} value={el?.destination_name}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Transport Name</label>
                <input type="text" class="form-control py-0" value={transportName} onChange={transportN} required/>
              </div>
          <div class="form-group col-md-6">
                <label className='form-label'>Transport cost</label>
                <input type="text" class="form-control py-0" value={transCost} onChange={transportC} required/>
              </div>
            </div>
            <div class="form-row row">
            <div class="form-group col-md-12 ">
                <label className='form-label'>From City</label>
                <select className='form-control py-0' value={fromCity} onChange={city}  required>
                <option disabled selected>Choose City</option>
                {fromCity?.map((el,index)=>(
                  <option key={index} value={el?.city_name}>{el?.city_name}</option>
                ))}
              </select>
              </div>
              </div>
          <br/>
            <button type="submit" class="btn btn-dark col-4 offset-md-4">Save</button>
        </form>  
        </div>
        </div>
        
      
    </>

  )
}
