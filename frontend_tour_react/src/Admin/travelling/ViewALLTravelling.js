import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function ViewAllTravelling() {
    const [viewAllData,setViewAll]= useState()
    const [loading,setLoading] = useState()
    const navigate= useNavigate()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
    },1500)
        apiServices.viewAllTravelling().then(data=>{
            console.log(data.data.data)
            if(data.data.success){
                setViewAll(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    },[loading])
    const changeStatus=(id,status)=>{
      setLoading(true)
      if(status==true){
        var upstatus=false
       }
       else{
        var upstatus=true
       }
       let data={
         _id:id, 
         travelling_status: upstatus
       }
       apiServices.changeStatusTravelling(data).then(data=>{
          setTimeout(()=>{
              setLoading(false)
          },1500)
          if(data.data.success){
          toast.success(data.data.message)
          navigate("/admin/alltravelling")
            }
          else{
            console.log(data.data)
              toast.error(data.data.message)
         } 
       }).catch(err=>{
        console.log(err)
        toast.error("Something Went Wrong")
       })
    }
  return (
    <div>
          <div className='p-5'></div>
          <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
           </div>
         <div className='table-responsive mx-auto col-md-8 '>
         <div className='pt-5  mx-auto'>
        <Link to="/admin/addtravelling">
                            <button type="" className='btn btn-dark my-2'>Add Travelling</button>
                    </Link>
        </div>

              <table className='table table-bordered '>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>From City</th>
                    <th>Destination</th>
                    <th>Travelling Distance</th>
                    <th>Mode of travel(Mode Name)</th>
                    <th>Mode of travel(Price Per Person)</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {viewAllData?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data?.from_city[0]?.city_name}</td>
                      <td>{data?.to_destination[0]?.destination_name}</td>
                      <td>{data?.travelling_distance}</td>
                      <td>{data?.mode_of_travel[0]?.mode_name}</td>
                      <td>{data?.mode_of_travel[0]?.price_per_person}</td>
                      {data?.travelling_status?<td>Active</td>:<td>In-active</td>}
                      <td style={{width:"700px"}}>
                        <Link to={"/admin/alltravelling/edit/"+`${data?._id}`}>
                        <button type="submit" className='btn btn-outline-success mx-2'>Update</button>
                        </Link>
                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(data?._id,data?.travelling_status)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
  )
}
