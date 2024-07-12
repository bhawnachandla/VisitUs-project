import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AllTransportCompanyOrder() {
    const [viewAllOrder,setViewAllOrder]= useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }

    useEffect(()=>{
        apiServices.viewAllOrders().then(data=>{
            setViewAllOrder(data.data.data)
        })
    })
    const changeStatus=(id,status)=>{
      if(status==true){
        var upstatus=false
       }
       else{
        var upstatus=true
       }
       let data={
         _id:id, 
         transportOrderStatus: upstatus
       }
       apiServices.changeTransportOrderStatus(data).then(data=>{
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
        
        <div className='table-responsive mx-auto col-md-8 '>
        <div className='pt-5  mx-auto'>
       {/* <Link to="/admin/addtransportcompanyorder">
                           <button type="" className='btn btn-dark my-2'>Add Transport Company Order</button>
                   </Link> */}
       </div>
              <table className='table table-bordered '>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>Pricing ID</th>
                    <th>No of persons</th>
                    <th>Total Charges</th>
                    <th>User ID</th>
                    <th>Transport Company ID </th>
                    <th>Order status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {viewAllOrder?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data?.pricingId}</td>
                      <td>{data?.noOfPerson}</td>
                      <td>{data?.totalCharges}</td>
                      <td>{data?.userId}</td>
                      <td>{data?.transportCompanyId}</td>
                      {data?.transportOrderStatus?<td>Active</td>:<td>In-active</td>}
                      <td style={{width:"300px"}}>
                        <Link to={"/admin/alltransportcompanyorder/edit/"+`${data?._id}`}>
                        <button type="submit" className='btn btn-outline-success mx-2'>Update</button>
                        </Link>
                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(data?._id,data?.transportOrderStatus)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    </div>
  )
}
