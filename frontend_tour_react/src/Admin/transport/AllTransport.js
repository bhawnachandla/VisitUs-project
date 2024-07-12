import React, { useEffect, useState } from 'react';
import apiServices from '../../apiServices';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllTransport() {
    const [allTransport,setAllTransport]=useState()
    const [loading,setLoading] =useState()
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
    },2000)
        apiServices.allTransport().then(data=>{
            if(data.data.success){
                setAllTransport(data.data.data)
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
      if(status==true){
        var upstatus=false
       }
       else{
        var upstatus=true
       }
       let data={
         _id:id, 
         transport_status: upstatus
       }
       apiServices.changeTransportStatus(data).then(data=>{
        if(data.data.success){
          toast.success(data.data.message)
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
        
        <div className='table-responsive mx-auto col-md-8 '>
        <div className='pt-5  mx-auto'>
       <Link to="/admin/addtransport">
                           <button type="" className='btn btn-dark my-2'>Add Transport</button>
                   </Link>
       </div>
              <table className='table table-bordered mx-auto'>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>From City </th>
                    <th>Destination</th>
                    {/* <th>Travelling Distance</th> */}
                    <th>Mode of Transport(Transport Name)</th>
                    <th>Mode of travel(Transport Cost)</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allTransport?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data.from_city[0]?.city_name}</td>
                      <td>{data?.to_destination[0]?.destination_name}</td>
                      {/* <td>{data?.travelling_distance}</td> */}
                      <td>{data.mode_of_transport[0]?.transport_name}</td>
                      <td>{data.mode_of_transport[0]?.transport_cost}</td>
                      {/* <td>{data?.mode_of_travel}</td> */}
                      {data?.transport_status?<td>Active</td>:<td>In-active</td>}
                      <td style={{width:"200px"}}>
                        <Link to={"/admin/alltransport/edit/"+`${data?._id}`}> 
                        <button type="submit" className='btn btn-outline-success mx-2 my-1'>Update</button>
                        </Link>
                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(data?._id,data?.transport_status)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      

    </div>
  )
}
