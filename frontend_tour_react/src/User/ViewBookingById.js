import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';
import apiServices from '../apiServices';

export default function ViewBookingById() {
    const [allBooking,setAllBooking]= useState()
    const [loading,setLoading] = useState()
    const authenticate=sessionStorage.getItem("authenticate")
    const navigate= useNavigate()
    if(!authenticate){
      navigate("/userlogin")        
    }
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
      const adminToken= sessionStorage.getItem("token")
      const userId= sessionStorage.getItem("userId")
      useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        })
        let data={
          userId: userId
        }
        apiServices.viewBookings(data).then(data=>{
          if(data.data.success){
            console.log(data.data)
            setAllBooking(data.data.data)
          }else{
            toast.error(data.data.messsage)
          }
        }).catch(err=>{
          console.log(err)
          toast.error("Something Went Wrong")
        })
      },[loading])


  return (
    <div>
        <div className='p-5'></div>
              <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>
    <div className='table-responsive col-md-10 offset-md-1 p-3'>

    <table className='table table-bordered my-5'>
    <thead className="thead-dark">
      <tr>
      <th>SNo</th>

      <th>Destination </th>
      <th>Hotel </th>
      <th>Package </th>
      <th>Place </th>
      <th>No of Days</th>
      <th>No of People</th>
      <th>Price Per Day</th>
      <th>Total Price</th>
      <th>Payment Mode</th>
      <th>Booking Date</th>
     <th>Status</th>
      {/* <th>Actions</th> */} 
    </tr>
  </thead>
  <tbody>
    {allBooking?.map((data,i)=>(
      <tr key={i}>
        <td>{i+1}</td>
        <td>{data.destinationId?.destination_name}</td>
        <td>{data.hotelId?.hotel_name}</td>
        <td>{data?.packageId?.package_name}</td>
        <td>{data?.placeId?.place_name}</td>
        <td>{data?.no_of_days}</td>
        <td>{data?.no_of_people}</td>
        <td>{data?.price_per_day}</td>
        <td>{data?.total_price}</td>
        <td>{data?.payment_mode}</td>
        <td>{data?.booking_date}</td>
        {data?.booking_status==1? <td>Pending</td>:data?.booking_status==2?<td>Accepted</td>:<td>Rejected</td>}
      </tr>
    ))}
  </tbody>
</table>
</div>
      
    </div>
  )
}
