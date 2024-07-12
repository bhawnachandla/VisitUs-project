import React, { useState,useEffect } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'


export default function AddTravelling() {
    const [cityId,setCityId]= useState()
    const [cities,setAllCities]= useState()
    const [toDestination,setToDestination]= useState()
    const [destinations,setAllDestinations]= useState()
    const [travellingDistance,setTravellingDistance]=useState()
    const [modeOfTravel,setModeOfTravel]= useState()
    const [modeName,setModeName]= useState()
    const [carPrice,setCarPrice]=useState()
    const [bikePrice,setBikePrice]=useState()
    const [trainPrice,setTrainPrice]=useState()
    const [flightPrice,setFlightPrice]=useState()
    const [price,setPrice]= useState()

    const city=(e)=>{
        setCityId(e.target.value)
    }
    const destination=(e)=>{
        setToDestination(e.target.value)
    }
    const distance=(e)=>{
        setTravellingDistance(e.target.value)
    }
    const travelModeName=(e)=>{
        setModeName(e.target.value)
    }
    const pricePer=(e)=>{
      setPrice(e.target.value)
  }
    useEffect(()=>{
        apiServices.allDestination().then(data=>{
           setAllDestinations(data.data.data)
        })
        apiServices.viewAllCity().then(data=>{
          setAllCities(data.data.data)
        })
      },[])

      const addTravellingForm=(e)=>{
        e.preventDefault()
        let mode_of_travel=[
          {mode_name:'car', price_per_person:carPrice },
          {mode_name: 'flight', price_per_Person:flightPrice},
          {mode_name:'bike', price_per_Person: bikePrice }
        ]
        let data= {
          from_city: cityId,
          to_destination:toDestination,
          mode_of_travel:[{
            mode_name: modeName,
            price_per_Person: price
          }],
          travelling_distance: travellingDistance
        }
        // let data =new FormData()
        // data.append("from_city",cityId)
        // data.append("to_destination",toDestination)
        // data.append("mode_of_travel",modeOfTravel)
        // data.append("travelling_distance",travellingDistance)

        apiServices.addTravelling(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                setCityId("")
                // setModeName("")
                // setPrice("")
                setModeOfTravel("")
                setToDestination("")
                setTravellingDistance("")
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
                <option disabled >Choose Destination</option>
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?.destination_name}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-6">
                <label className='form-label'>Mode Name</label>
                <input type="text" class="form-control" value={modeName} onChange={travelModeName} required/>
              </div>
          </div>
          <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>Price Per Person</label>
                <input type="text" class="form-control" value={price} onChange={pricePer} required/>
              </div>
              <div class="form-group col-md-6">
                <label className='form-label'>Travelling Distance</label>
                <input type="text" class="form-control py-0" value={travellingDistance} onChange={distance} required/>
              </div>
            </div>
            <div class="form-row row">
            <div class="form-group col-md-6">
                <label className='form-label'>City ID</label>
                <select className='form-control py-0' value={cityId} onChange={city} required>
                <option disabled selected>Choose City</option>
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
