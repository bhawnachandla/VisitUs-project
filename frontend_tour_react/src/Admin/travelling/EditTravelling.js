import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


export default function EditTravelling() {
    const [cityId,setCityId]= useState()
    const [cities,setCities]= useState()
    const [dest,setDest]= useState()
    const [toDestination,setToDestination]= useState()
    const [travellingDistance,setTravellingDistance]=useState()
    const [modeOfTravel,setModeOfTravel]= useState()
    let param= useParams()
    let id = param.id

    const city=(e)=>{
        setCityId(e.target.value)
    }
    const destination=(e)=>{
        setToDestination(e.target.value)
    }
    const distance=(e)=>{
        setTravellingDistance(e.target.value)
    }
    const travelMode=(e)=>{
        setModeOfTravel(e.target.value)
    }
    useEffect(()=>{
        apiServices.allDestination().then(data=>{
           setDest(data.data.data)
        })
        apiServices.viewAllCity().then(data=>{
          setCities(data.data.data)
        })
        let data={
            _id:id
        }
        apiServices.viewAllTravellingById(data).then(data=>{
            if(data.data.success){
                setCityId(data.data.data.from_city)
                setModeOfTravel(data.data.data.to_destination)
                setToDestination(data.data.data.mode_of_travel)
                setTravellingDistance(data.data.data.travellingDistance)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went Wrong !! Try Again later")
        })
      },[])

      const addTravellingForm=(e)=>{
        e.preventDefault()
        let data =new FormData()
        data.append("from_city",cityId)
        data.append("to_destination",toDestination)
        data.append("mode_of_travel",modeOfTravel)
        data.append("travelling_distance",travellingDistance)
        data.append("_id",id)

        apiServices.updateTravelling(data).then(data=>{
            console.log(data.data)
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
    <div>
         <div  className='container p-5'>
        <div className='col-md-10 mx-auto my-5'>
          <form onSubmit={addTravellingForm}>
          <div className="form-row row">
            <div class="form-group col-md-6">
              <label className='form-label'>Destination ID</label>
              <select className='form-control py-0' value={toDestination} onChange={destination} required>
                <option disabled selected>Choose Destination</option>
                {dest?.map((el,index)=>(
                  <option key={index} value={el?.destination_name}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Mode of Travel</label>
                <input type="text" class="form-control" value={modeOfTravel} onChange={travelMode} required/>
              </div>
              <div class="form-group col-md-6">
                <label className='form-label'>Travelling Distance</label>
                <input type="text" class="form-control" value={travellingDistance} onChange={distance} required/>
              </div>
            </div>
            <div class="form-row row ">
            <div class="form-group col-md-6 ">
                <label className='form-label'>City ID</label>
                <select className='form-control py-0' value={cityId} onChange={city}  required>
                <option disabled >Choose City</option>
                {cities?.map((el,index)=>(
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
      
      
    </div>
  )
}
