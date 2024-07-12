import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';
export default function AllTransportCompany() {
  const [viewTransport,setViewTransport]=useState()
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
    setTimeout(()=>{
      setLoading(false)
  },1000)
    apiServices.viewAllTransportCompany().then(data=>{
      if(data.data.success){
        // toast.success(data.data.message)
        console.log(data.data.data)
        setViewTransport(data.data.data)
      }else{
        toast.error(data.data.message)
      }
    }).catch(err=>{
      console.log(err)
      toast.error("Something went wrong")
    })
  },[loading])
  const changeStatus=(id,status)=>{
    setLoading(true)
    console.log(id)
    console.log(status)
    if(status==true){
      setLoading(true)
      var upstatus=false
     }
     else{
      var upstatus=true
     }
     let data={
       _id:id, 
       transport_company_status: upstatus
     }
     apiServices.changeTransportCompanyStatus(data).then(data=>{
            setTimeout(()=>{
              setLoading(false)
          },2000)
            if(data.data.success){
              toast.success(data.data.message)
              navigate("/admin/alltransportcompany")
          }
          else{
            console.log(data.data)
              toast.error(data.data.message)
          }
     }).catch(err=>{
       toast.error("Something Went Wrong")
     })
  }

  return (
    <div>
       <div className='p-5'></div>
       <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
        <div className='table-responsive mx-auto col-md-8'>
        <div className='pt-5  mx-auto'>
       <Link to="/admin/addtransportcompany">
                           <button type="" className='btn btn-dark my-2 me-2'>Add Transport company</button>
                   </Link>
                   {/* <Link to="/admin/alltransportcompanyorder">
                           <button type="" className='btn btn-dark my-2 mx-3'>Transport company Order</button>
                   </Link> */}
                   <Link to="/admin/alltransportcompanypricing">
                           <button type="" className='btn btn-dark my-2'>Transport company Pricing</button>
                   </Link>
       </div>
              <table className='table table-bordered '>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>Transport Company Name</th>
                    <th>Transport Company Description</th>
                    <th>Transport Company status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {viewTransport?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data?.transport_company_name}</td>
                      <td>{data?.transport_company_description}</td>
                      {data?.transport_company_status?<td>Active</td>:<td>In-active</td>}
                      <td>
                        <Link to={"/admin/alltransportcompany/edit/"+`${data?._id}`}> 
                        <button type="submit" className='btn btn-outline-success mx-2 my-1'>Update</button>
                        </Link>
                        <button type="submit" className='btn btn-outline-danger border border-danger ' onClick={()=>{changeStatus(data?._id,data?.transport_company_status)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
    </div>
  )
}
