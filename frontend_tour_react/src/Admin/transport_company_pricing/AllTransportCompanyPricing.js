import React, { useEffect, useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function AllTransportCompanyPricing() {
    const [viewAllTransportCompanyPricing,setAllTransportCompanyPricing]= useState()

    useEffect(()=>{
        apiServices.viewAllTransportCompanyPricing().then(data=>{
            if(data.data.success){
                setAllTransportCompanyPricing(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
        })
    },[])
    const changeStatus=(id,status)=>{
      console.log(id)
      console.log(status)
      if(status==true){
        var upstatus=false
        
       }
       else{
        var upstatus=true
       }
       let data={
         _id:id, 
         transportCompanyStatus: upstatus
       }
       apiServices.changeTransportCompanyPricingStatus(data).then(data=>{
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
       <Link to="/admin/addtransportcompanypricing">
              <button type="" className='btn btn-dark my-2'>Add Transport Company Pricing</button>
                   </Link>
       </div>
              <table className='table table-bordered'>
                <thead className="thead-dark">
                  <tr>
                    <th>SNo</th>
                    <th>Transport Company ID</th>
                    <th>From City</th>
                    <th>To City</th>
                    <th>Charges Per person</th>
                    <th>Transport Type</th>
                    <th>Transport Company status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {viewAllTransportCompanyPricing?.map((data,i)=>(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data?.transportCompanyId[0]?.transport_company_name}</td>
                      <td>{data?.fromCity[0]?.city_name}</td>
                      <td>{data?.toCity[0]?.city_name}</td>
                      <td>{data?.chargesPerPerson}</td>
                      <td>{data?.transportType}</td>
                      {data?.transportCompanyStatus?<td>Active</td>:<td>In-active</td>}
                      <td style={{width:"300px"}}>
                        <Link to={"/admin/alltransportcompanypricing/edit/"+`${data?._id}`}>
                        <button type="submit" className='btn btn-outline-success mx-2'>Update</button>
                        </Link>
                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(data?._id,data?.transportCompanyStatus)}}>Change Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
    </div>
  )
}
