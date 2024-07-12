import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader';

export default function AddTransport() {
    const [fromCity,setFromCity]=useState()
    const [cities,setAllCities]=useState()
    const [toDestination,setToDestination] =useState()
    const [destinations,setAllDestinations] =useState()
    const [transportName1,setTransportName1] =useState()
    const [transportName2,setTransportName2] =useState()
    const [transportName3,setTransportName3] =useState()
    const [transCost1,setTransCost1] = useState()
    const [transCost2,setTransCost2] = useState()
    const [transCost3,setTransCost3] = useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    const city=(e)=>{
        setFromCity(e.target.value)
    } 
    const destination=(e)=>{
        setToDestination(e.target.value)
    }
    const transportN1=(e)=>{
        setTransportName1(e.target.value)
    }
    const transportC1=(e)=>{
      setTransCost1(e.target.value)
      }
      const transportN2=(e)=>{
        setTransportName2(e.target.value)
      }
      const transportC2=(e)=>{
        setTransCost2(e.target.value)
        }
      const transportN3=(e)=>{
          setTransportName3(e.target.value)
      }
        const transportC3=(e)=>{
          setTransCost3(e.target.value)
          }
    useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },2000)
        apiServices.allDestination().then(data=>{
           setAllDestinations(data.data.data)
        })
        apiServices.viewAllCity().then(data=>{
          setAllCities(data.data.data)
        })
      },[loading])
    
    const handleTransportForm=()=>{
        // e.preventDefault()
        // let data= new FormData()
        // data.append("from_city",fromCity)
        // data.append("to_destination",toDestination)
        // data.append("transport_name",transportName)
        // data.append("transport_cost",transCost)
        let data={
          from_city: fromCity,
          to_destination: toDestination,
          // mode_of_transport: mode
        }
        
        apiServices.addTransport(data).then(data=>{
              setTimeout(()=>{
                setLoading(false)
            },2000)
            if(data.data.success){
                toast.success(data.data.message)
                setFromCity("")
                setToDestination("")
                // setTransportName("")
                // setTransCost("")
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
    <div>
        <div  className='container p-5'>
        <div className='col-md-10 mx-auto my-5'>
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
          <div className="form-row row">
            <div class="form-group col-md-12">
              <label className='form-label'>Destination</label>
              <select className='form-control py-0' required value={toDestination} onChange={destination}>
                <option disabled selected >Choose Destination</option>
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
            <div class="form-row row ">
            <div class="form-group col-md-12">
                <label className='form-label'>From City</label>
                <select className='form-control py-0' value={fromCity} onChange={city}  required>
                <option disabled selected >Choose City</option>
                {cities?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.city_name}</option>
                ))}
              </select>
              </div>
              </div>
              <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Transport Name</label>
                <input type="text" class="form-control py-0" value={transportName1} onChange={transportN1} required/>
              </div>
          <div class="form-group col-md-6">
                <label className='form-label'>Transport cost</label>
                <input type="text" class="form-control py-0" value={transCost1} onChange={transportC1} required/>
              </div>
            </div>
            <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Transport Name</label>
                <input type="text" class="form-control py-0" value={transportName2} onChange={transportN2} required/>
              </div>
          <div class="form-group col-md-6">
                <label className='form-label'>Transport cost</label>
                <input type="text" class="form-control py-0" value={transCost2} onChange={transportC2} required/>
              </div>
            </div>
            <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Transport Name</label>
                <input type="text" class="form-control py-0" value={transportName3} onChange={transportN3} required/>
              </div>
          <div class="form-group col-md-6">
                <label className='form-label'>Transport cost</label>
                <input type="text" class="form-control py-0" value={transCost3} onChange={transportC3} required/>
              </div>
            </div>
          <br/>
            <button type="submit" onClick={handleTransportForm} class="btn btn-dark col-4 offset-md-4">Save</button>  
        </div>
        </div>
                    

      
    </div>
  )
}
