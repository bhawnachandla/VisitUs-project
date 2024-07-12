import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'

export default function AddHotel() {
    const [hotelName,setHotelName]=useState()
    const [hotelDescription,setHotelDescription]=useState()
    const [hotelPerDayPrice,setHotelPerDayPrice]=useState()
    const [hotelContact,setHotelContact]=useState()
    const [hotelAddress,setHotelAddress]= useState()
    const [hotelEmail,setHotelEmail]=useState()
    const [placesId,setPlacesId]=useState()
    const [places,setAllPlaces]=useState()
    const [destinationId,setDestinationId]=useState()
    const [destinations,setAllDestinations]=useState()
    const [cityId,setCityid]=useState()
    const [cities,setAllCities]=useState()
    const [hotelImage,setHotelImage]=useState()
    const [hotelLocation,setHotelLocation]=useState()

    const name=(e)=>{
        setHotelName(e.target.value)
    }
    const description=(e)=>{
        setHotelDescription(e.target.value)
    }
    const price=(e)=>{
        setHotelPerDayPrice(e.target.value)
    }
    const hotelCont=(e)=>{
        setHotelContact(e.target.value)
    }
    const email=(e)=>{
        setHotelEmail(e.target.value)
    }
    const address=(e)=>{
      setHotelAddress(e.target.value)
    }
    const place=(e)=>{
        setPlacesId(e.target.value)
    }
    const destination=(e)=>{
        setDestinationId(e.target.value)
    }
    const city=(e)=>{
        setCityid(e.target.value)
    }
    const image=(e)=>{
        setHotelImage(e.target.files[0])
    }
    const location=(e)=>{
        setHotelLocation(e.target.value)
    }
    useEffect(()=>{
      apiServices.allDestination().then(data=>{
         setAllDestinations(data.data.data)
      })
      if(destinationId==""||destinationId==undefined|| destinationId==null)
        {
          apiServices.viewAllCity().then(data=>{
            setAllCities(data.data.data)
          })
          apiServices.allPlaces().then(data=>{
            setAllPlaces(data.data.data)
          })
      }
      else{
        var data_id={
          destinationId: destinationId
        }
        apiServices.allPlaces(data_id).then(data=>{
          setAllPlaces(data.data.data)
        })
      }
    },[destinationId])
 const handleForm=(e)=>{
  e.preventDefault()
  // let data= {
  //   hotel_name: hotelName,
  //   hotel_description: hotelDescription,
  //   per_day_price: hotelPerDayPrice,
  //   hotel_contact: hotelContact,
  //   hotel_address:hotelAddress,
  //   hotel_email: hotelEmail,
  //   hotel_location:hotelLocation,
  //   placesId: placesId,
  //   destinationId:destinationId,
  //   cityId: cityId,
  //   hotel_image : hotelImage
  // }
  let data = new FormData()
  data.append("hotel_name",hotelName)
  data.append("hotel_description",hotelDescription)
  data.append("per_day_price",hotelPerDayPrice)
  data.append("hotel_contact",hotelContact)
  data.append("hotel_address",hotelAddress)
  data.append("hotel_email",hotelEmail)
  data.append("hotel_location",hotelLocation)
  data.append("placesId",placesId)
  data.append("destinationId",destinationId)
  data.append("cityId",cityId)
  data.append("hotel_image",hotelImage)

  apiServices.addHotels(data).then(data=>{
    console.log(data.data.data)
    if(data.data.success){
      toast.success(data.data.message)
      setHotelName("")
      setHotelDescription("")
      setHotelEmail("")
      setHotelPerDayPrice("")
      setHotelContact("")
      setHotelAddress("")
      setHotelLocation("")
      setPlacesId("")
      setDestinationId("")
      setCityid("")
      setHotelImage("")
    }
    else{
      console.log(data.data)
      toast.error(data.data.message)
    }

  }).catch(err=>{
    console.log(err)
    toast.error("Something went wrong")
  })

    
  }
  return (
    <div>
        <div  className='container p-5'>
        <div className='col-md-10 mx-auto my-5'>
          <h5 class="card-title">Add Hotels</h5>
          <hr />
          <form onSubmit={handleForm}>
          <div className="form-row row">
              <div class="form-group col-md-6 ">
                <label className='form-label' for="name">Hotel Name</label>
                <input type="text" class="form-control" id="name" value={hotelName} onChange={name} required/>
              </div>
            <div class="form-group col-md-6">
              <label className='form-label'>Destination ID</label>
              <select className='form-control py-0' value={destinationId} onChange={destination} required>
                <option disabled selected>Choose Destination</option>
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Place ID</label>
                <select className='form-control py-0' value={placesId} onChange={place} required>
                <option disabled selected>Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.place_name}</option>
                ))}
              </select>
              </div>
              <div class="form-group col-md-6">
                <label className='form-label'>Hotel Email</label>
                <input type="text" class="form-control" value={hotelEmail} onChange={email} required/>
              </div>
            </div>
            <div class="form-row row ">
            <div class="form-group col-md-6 ">
                <label className='form-label'>City ID</label>
                <select className='form-control py-0' value={cityId} onChange={city} required>
                <option disabled selected value="">Choose City</option>
                {cities?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.city_name}</option>
                ))}
              </select>
              </div>
              <div class="mb-3 col-md-6">
                <label  class="form-label">Per Day Price</label>
                <input class="form-control" type="text" required  value={hotelPerDayPrice} onChange={price} />
              </div>
            </div>
            <div className="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label' for="skills">Hotel Contact No.</label>
                <input type="text" class="form-control" value={hotelContact} onChange={hotelCont}  required />
              </div>
              <div class="mb-3 col-md-6">
                <label for="formFile" class="form-label">Hotel Image</label>
                <input class="form-control" type="file" id="formFile" onChange={image} required/>
              </div>
            </div>
            <div class="form-group col-md-12">
              <label className='form-label' for="description">Hotel Description</label>
              <input type="text" class="form-control" id="description" value={hotelDescription} onChange={description} required/>
            </div>
            <div className='form-row row'>
            <div class="form-group col-md-6">  
              <label className='form-label'>Hotel Address</label>
              <input type="text" class="form-control"  value={hotelAddress} onChange={address} required/>
            </div>
            <div class="form-group col-md-6">  
              <label className='form-label'>Hotel Location</label>
              <input type="text" class="form-control"  value={hotelLocation} onChange={location} required/>
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
