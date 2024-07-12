import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllReview() {
    const [allReview,setAllReview]=useState()
    const [loading,setLoading]= useState()
    const navigate= useNavigate()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }

    useEffect(()=>{
        apiServices.allReviews().then(data=>{
          setTimeout(()=>{
            setLoading(false)
        },1500)
            console.log(data.data.data)
            if(data.data.success){
                setAllReview(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    },[loading])
    const changeStatus=(id,status)=>{
      setLoading(true)
      if(status==true){
        var upstatus=false
        console.log(upstatus)
       }
       else{
        var upstatus=true
       }
       let data={
        _id:id,
        review_status: upstatus
      }
      apiServices.changeReviewStatus(data).then(data=>{
        setTimeout(()=>{
          setLoading(false)
      },2000)
        if(data.data.success){
          toast.success(data.data.message)
          navigate("/admin/allreview")
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
           
        <div className='table-responsive col-md-10 offset-md-1 p-5'>
        <h2 className='text-center mt-3  '>Reviews</h2>
              <table className='table table-bordered my-3'>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>Review</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allReview?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data?.review}</td>
                      {data?.review_status?<td>Active</td>:<td>In-active</td>}
                      <td style={{width:"300px"}}>
                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(data?._id,data?.review_status)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        

    </div>
  )
}
