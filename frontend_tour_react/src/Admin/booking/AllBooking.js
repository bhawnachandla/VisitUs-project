import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllBooking() {
    const [allBooking,setAllBooking]= useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    const navigate= useNavigate()
    let param= useParams()
    let id = param.id
    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
      },2000)
        apiServices.allBooking().then(data=>{
            console.log(data.data.data)
            if(data.data.success){
                setAllBooking(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
        })
    },[loading])
    const changeStatus=(id,status)=>{
      setLoading(true)
      let data={
        _id:id,
        booking_status: status
      }
      apiServices.changeStatusBooking(data).then(data=>{
        setTimeout(()=>{
          setLoading(false)
      },2000)
        if(data.data.success){
          toast.success(data.data.message)
          navigate("/admin/viewbooking")
        }else{
          toast.error(data.data.message)
        }
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
      })
    }
  return (
    <div>
            <div className='p-5'></div>
              <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>
              <div className='table-responsive col-md-10 offset-md-1 p-3'>
              <h2 className='text-center my-4 mt-5 '>Bookings</h2>

              <table className='table table-bordered my-5'>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>User</th>
                    <th>Destination</th>
                    <th>Hotel</th>
                    <th>Package</th>
                    <th>Place</th>
                    <th>No of Days</th>
                    <th>No of People</th>
                    <th>Price Per Day</th>
                    <th>Total Price</th>
                    <th>Payment Mode</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allBooking?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data.userId?.name}</td>
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
                      <td style={{width:"300px"}}>
                      {data?.booking_status==1?
                      <>
                        <button type="submit" onClick={()=>{changeStatus(data?._id,2)}} className='btn btn-outline-success mx-2'>Accept</button>
                        <button type="submit" onClick={()=>{changeStatus(data?._id,3)}} className='btn btn-outline-danger mx-2'>Reject</button>
                      </>
                      :
                      <>
                      {data?.booking_status==1? "Pending":data?.booking_status==2?"Accepted":"Rejected"}
                      </>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
      
  )
}
