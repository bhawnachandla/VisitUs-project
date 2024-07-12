import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'

export default function EditReview() {
    const [review,setReview]= useState()
    const [userId,setUserId]= useState()
    const [placeId,setPlaceId] = useState()
    const [places,setAllPlaces] = useState()
    const [hotelId,setHotelId]= useState()
    const [hotels,setAllHotels]= useState()
    const [destinationId,setDestinationId]= useState()
    const [destinations,setAllDestinations]= useState()
    const navigate= useNavigate()
    const param= useParams()
    const id= param.id

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
      apiServices.customerAllHotels().then(data=>{
        setAllHotels(data.data.data)
      })
      apiServices.customerAllPlaces().then(data=>{
        setAllPlaces(data.data.data)
      })
      let user= sessionStorage.getItem("userId")
      let userName= sessionStorage.getItem("userName")
      console.log(user)
      setUserId(user)

      let data= {
        _id: id
      }
      apiServices.customerViewReviewById(data).then(data=>{
        if(data.data.success){
            setReview(data.data.data.review)
            setUserId(data.data.data.userId)
            setDestinationId(data.data.data.destinationId)
            setHotelId(data.data.data.hotelId)
            setPlaceId(data.data.data.placeId)
            navigate("/user/allreview")
        }
      })
    },[])
    let user_id= sessionStorage.getItem("userId")
    const update=()=>{
        let data={
          review: review,
          userId:user_id,
          destinationId:destinationId,
          hotelId: hotelId,
          placeId: placeId,
          _id: id
        }
        apiServices.customerUpdateReview(data).then(data=>{
          if(data.data.success){
            toast.success(data.data.message)
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
        <div className='container p-5'>
        <div className='p-5'></div>
        <div className='col-md-10 mx-auto my-5'>
          <div className="form-row row">
          {/* <div class="form-group col-md-6">
              <label className='form-label'>User ID</label>
              <input class="form-control" type="text" readOnly required onChange={user} value={userId} />
            </div> */}
            <div class="form-group col-md-12">
              <label className='form-label'>Destination ID</label>
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
                <label className='form-label'>Place ID</label>
                <select className='form-control py-0' value={placeId} onChange={place} required>
                <option disabled selected >Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.place_name}</option>
                ))}
              </select>
              </div>
              <div class="form-group col-md-6 ">
                <label className='form-label'>Hotel ID</label>
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
                <input type="text" class="form-control" onChange={Review} value={review}  required/>
              </div>
            </div>
          <br/>
            <button onClick={update} class="btn btn-dark col-4 offset-md-4">Save</button>
          
        </div>
        </div>
      
      
    </div>
  )
}
