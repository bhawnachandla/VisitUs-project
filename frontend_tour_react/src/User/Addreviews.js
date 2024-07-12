import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'




export default function Addreviews() {
    const [review,setReview]= useState()
    const [userId,setUserId]= useState()
    const [placeId,setPlaceId] = useState()
    const [places,setAllPlaces] = useState()
    const [hotelId,setHotelId]= useState()
    const [hotels,setAllHotels]= useState()
    const [destinationId,setDestinationId]= useState()
    const [destinations,setAllDestinations]= useState()
    const authenticate=sessionStorage.getItem("authenticate")
    const navigate= useNavigate()
    if(!authenticate){
      navigate("/userlogin")        
    }
    const user=e=>{
          setUserId(e.target.value)
      }
    const place=e=>{
          setPlaceId(e.target.value)
      }
    const hotel= e=>{
          setHotelId(e.target.value)
      }
    const destination=e=>{
          setDestinationId(e.target.value)
      }
    const Review=e=>{
          setReview(e.target.value)
      }
    useEffect(()=>{
    apiServices.customerAllDestination().then(data=>{
      setAllDestinations(data.data.data)
    })
        if(destinationId==""||destinationId==undefined|| destinationId==null)
        {
          apiServices.customerAllHotels().then(data=>{
            setAllHotels(data.data.data)
          })
           
          apiServices.customerAllPlaces().then(data=>{
            setAllPlaces(data.data.data)
          })
      }
      else{
        var data_id={
          destinationId: destinationId
        }
        apiServices.customerAllPlaces(data_id).then(data=>{
          setAllPlaces(data.data.data)
        })
        var data_hotel={
          placesId: placeId
        }
        apiServices.customerAllHotels(data_hotel).then(data=>{
          setAllHotels(data.data.data)
        })
      }
      let user= sessionStorage.getItem("userId")
      let userName= sessionStorage.getItem("userName")
      console.log(user)
      setUserId(user)
    },[destinationId,placeId])
    let user_Id= sessionStorage.getItem("userId")
    const reviewSend=()=>{
      let data={
        review: review,
        userId:user_Id,
        destinationId:destinationId,
        hotelId: hotelId,
        placeId: placeId
      }
      apiServices.customerAddReview(data).then(data=>{
        if(data.data.success){
          toast.success(data.data.message)
          setReview("")
          setUserId("")
          setDestinationId("")
          setHotelId("")
          setPlaceId("")
        }
        else{
          toast.error(data.data.message)
        }
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
      })
    }
  return (
    <div>
       <div  className='container p-5 border border-3' >
        <div className='p-5'></div>
        <div className='pt-5 pl-5'>
        <Link to="/user/allreview">
            <button type="" className='btn btn-dark my-2'>All Review</button>
        </Link>
        </div>
        <div className='col-md-10 mx-auto my-5'>
          <div className="form-row row">
          {/* <div class="form-group col-md-6">
              <label className='form-label'>User ID</label>
              <input class="form-control" type="text" readOnly required onChange={user} value={userId} />
            </div> */}
            <div class="form-group col-md-12">
              <label className='form-label'>Destination </label>
              <select className='form-control py-0' value={destinationId} onChange={destination} required>
                <option disabled selected >Choose Destination</option> 
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Place</label>
                <select className='form-control py-0' value={placeId} onChange={place} required>
                <option disabled selected >Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.place_name}</option>
                ))}
              </select>
              </div>
              <div class="form-group col-md-6 ">
                <label className='form-label'>Hotel</label>
                <select className='form-control py-0' value={hotelId} onChange={hotel}  required>
                <option disabled selected >Choose Hotel</option>
                {hotels?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.hotel_name}</option>
                ))}
              </select>
              </div>
            </div>
            <div class="form-row row ">
              <div class="mb-3 col-md-12">
                <label  class="form-label">Review</label>
                <input type="text"  class="form-control" onChange={Review} value={review}  required/>
              </div>
            </div>
          <br/>
            <button onClick={reviewSend} class="btn btn-dark col-4 offset-md-4">Save</button>
          
        </div>
        </div>
      
      
    </div>
  )
}
