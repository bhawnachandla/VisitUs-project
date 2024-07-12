import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom';

export default function AddBooking() {
    const [userId,setUserId]= useState()
    const [placeId,setPlaceId] = useState()
    const [places,setAllPlaces] = useState()
    const [hotelId,setHotelId]= useState()
    const [hotels,setAllHotels]= useState()
    const [allDestinations,setAllDestination]= useState()
    const [destinationId,setDestinationId]= useState()
    const [packageId,setPackageId] = useState()
    const [packages,setAllPackages] = useState()
    const [noOfDays,setNoOfDays] = useState()
    const [noOfPeople,setNoOfPeople] = useState("--")
    const [pricePerDay,setPricePerDay] = useState()
    const [totalPrice,setTotalPrice] = useState("--")
    const [paymentMode,setPaymentMode] = useState()
    const [bookingDate,setBookingDate]= useState()
    const authenticate=sessionStorage.getItem("authenticate")
    const navigate= useNavigate()
    if(!authenticate){
      navigate("/userlogin")        
    }
    const param= useParams()
    const id= param.id
    const place=e=>{
        setPlaceId(e.target.value)
    }
    const hotel= e=>{
        setHotelId(e.target.value)
    }
    const destination=e=>{
      console.log(e.target.value)
        setDestinationId(allDestinations?._id)
        console.log(allDestinations?._id)
    }
    const pack= e=>{
        setPackageId(e.target.value)
    }
    const days=e=>{
        setNoOfDays(e.target.value)
    }
    const people= e=>{
        setNoOfPeople(e.target.value)
    }
    const price=e=>{
        setPricePerDay(e.target.value)
    }
    const tPrice= e=>{
        setTotalPrice(e.target.value)
    }
    const payment=e=>{
        setPaymentMode(e.target.value)
    }
    const booking= e=>{
        setBookingDate(e.target.value)
    }
    
    let user_Id= sessionStorage.getItem("userId")
    const user=e=>{
      setUserId(user_Id)
    }
    useEffect(()=>{
      let data={
        _id: id
      }
      apiServices.customerViewHotelById(data).then(data=>{
          if(data.data.success){
            setAllDestination(data.data.data.destinationId)
            setAllPlaces(data.data.data.placesId)
            setAllHotels(data.data.data)
          }
          else{
            toast.error(data.data.message)
          }
      }).catch(err=>{
        console.log(err)
        toast.error(data.data.message)
      })
      // let data_pack={
      //   // destinationId:allDestinations?._id,
      //   placeId:places?._id
      // }
     
      // apiServices.customerViewPackage(data_pack).then(data=>{
      //   if(data.data.success){
      //     // console.log(data.data.data)
      //     setAllPackages(data.data.data)
      //     setTotalPrice(data.data.data)
      //     setNoOfPeople(data.data.data)
      //   }
      //   else{
      //     toast.error(data.data.message)
      //   }
      // })
      // .catch(err=>{
      //   console.log(err)
      //   toast.error("Something Went Wrong")
      // })
      let user= sessionStorage.getItem("userName")
      setUserId(user)
      
    },[])
    useEffect(()=>{
      let data_pack={
        // destinationId:allDestinations?._id,
        placeId:places?._id
      }
      console.log(data_pack)
      apiServices.customerViewPackage(data_pack).then(data=>{
        if(data.data.success){
          // console.log(data.data.data)
          setAllPackages(data.data.data)
          // setTotalPrice(data.data.data)
          // setNoOfPeople(data.data.data)
        }
        else{
          toast.error(data.data.message)
        }
      })
      .catch(err=>{
        console.log(err)
        toast.error("Something Went Wrong")
      })
    },[places])
    useEffect(()=>{
      let data={
        _id: packageId
      }
      apiServices.customerViewPackagById(data).then(data=>{
        if(data.data.success){
          setNoOfPeople(data.data.data.no_of_person)
          setTotalPrice(data.data.data.package_cost)
          setPricePerDay(data.data.data.package_cost)
        }
        else{
          console.log(data.data.message)
          // toast.error(data.data.message)
        }
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
      })
    },[packageId])
    const getPackageData=(packageId)=>{
      let data={
        _id: packageId
      }
      apiServices.customerViewPackagById(data).then(data=>{
        if(data.data.success){
          setNoOfPeople(data.data.data.no_of_person)
          setTotalPrice(data.data.data.package_cost)
          setPricePerDay(data.data.data.package_cost)
        }
        else{
          console.log(data.data.message)
          // toast.error(data.data.message)
        }
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
      })
    }
    const handleForm=(e)=>{
      e.preventDefault()
      let userid= sessionStorage.getItem("userId")
      let data = {
        userId: userid,
        placeId: places?._id,
        hotelId:hotels?._id,
        destinationId:allDestinations?._id,
        packageId:packageId,
        no_of_days: noOfDays,
        no_of_people:noOfPeople,
        price_per_day: pricePerDay,
        total_price: totalPrice,
        payment_mode: paymentMode,
        booking_date: bookingDate,
      }
      apiServices.customerAddBooking(data).then(data=>{
        if(data.data.success){
          toast.success(data.data.message)
          setUserId("")
          setDestinationId("")
          setHotelId("")
          setPackageId("")
          setPlaceId("")
          setNoOfDays("")
          setNoOfPeople("")
          setPricePerDay("")
          setTotalPrice("")
          setPaymentMode("")
          setBookingDate("")
        }else{
          console.log(data.data.message)
          console.log(data)
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
          <div class="form-group col-md-6">
              <label className='form-label'>User</label>
              <input class="form-control py-0" type="text" readOnly required value={userId} />
            </div>
            <div class="form-group col-md-6">
              <label className='form-label'>Destination</label>
              {/* <input type="text" className="form-control py-0" name="" value={allDestinations?.destination_name} onChange={destination}/> */}
              <select className='form-control py-0' value={destinationId} onChange={destination} required>
                <option value={allDestinations?._id}>{allDestinations?.destination_name}</option>
              </select>
            </div>
          </div>
          <div class="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Place </label>
                <select className='form-control py-0' value={placeId} onChange={place} required>
                <option value={places?._id}>{places?.place_name}</option>
              </select>
              </div>
              <div class="form-group col-md-6">
              <label className='form-label'>Package </label>
              <select className='form-control py-0' value={packageId} onChange={pack}  required>
                <option disabled selected value="">Choose Package</option> 
                {packages?.map((el,index)=>(
                  <option key={index} value={el?._id} selected={packageId==el?._id}>{el?.package_name}</option>
                ))}
              </select>
            </div>
            </div>
            <div class="form-row row">
            <div class="form-group col-md-12">
                <label className='form-label'>Hotel</label>
                <select className='form-control py-0' value={hotelId} onChange={hotel}  required>
                <option selected value={hotels?._id}>{hotels?.hotel_name}</option>
              </select>
              </div>
              {/* <div class="mb-3 col-md-6">
                <label  class="form-label">Price Per Day</label>
                <input type="text"  class="form-control" onChange={price} value={pricePerDay} readOnly required/> */}
                {/* {totalPrice?.map((el,index)=>(
                  <input type="text" key={index} class="form-control" onchange={price} value={el?.package_cost}  required/>
                ))}  */}
              {/* </div> */}
            </div>
            <div className="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Total Price</label>
                <input type="text" onChange={tPrice} class="form-control" value={totalPrice} readOnly required/>
                {/* {totalPrice?.map((el,index)=>(
                  <input type="text" key={index}  onchange={tPrice} class="form-control" value={el?.package_cost} required/>
                ))}  */}
              </div>
              <div class="mb-3 col-md-6">
                <label  class="form-label">No of People</label>
                <input type="text" onChange={people} class="form-control" value={noOfPeople} readOnly required/>
                {/* {noOfPeople?.map((el,index)=>(
                  <input type="text" key={index} onChange={people} class="form-control" value={el?.no_of_person}  required/>
                ))}  */}
              </div>
            </div>
            <div class="form-group col-md-12">
              <label className='form-label' >Booking Date</label>
              <input type="date" class="form-control" value={bookingDate} onChange={booking} required/>
            </div>
            <div className='form-row row'>
            <div class="form-group col-md-6">  
              <label className='form-label'>Payment Mode</label>
              <input type="text" class="form-control"  value={paymentMode} onChange={payment} required/>
            </div>
            <div class="form-group col-md-6">
                <label className='form-label'>No of Days</label>
                <input type="text" class="form-control" value={noOfDays} onChange={days}  required />
                {/* {packageId?.map((el,index)=>(
                  <input type="text" key={index} class="form-control" value={noOfDays} onChange={days}  required />
                ))}  */}
              </div>
            </div>
          <br/>
            <button onClick={handleForm} class="btn btn-dark col-4 offset-md-4">Save</button>
          
        </div>
        </div>
      
    </div>
  )
}
