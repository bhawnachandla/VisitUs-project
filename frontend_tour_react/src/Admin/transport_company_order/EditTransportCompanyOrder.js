import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'


export default function EditTransportCompanyOrder() {
    const [pricingId,setPricingId]= useState()
    const [noOfPerson,setNoOfPerson] =useState()
    const [totalCharges,setTotalCharges]= useState()
    const [userId,setUserId] = useState()
    const [transportCompanyId,setTransportCompanyId]=useState()
    let param = useParams()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    let id = param.id

    const pricing =e=>{
        setPricingId(e.target.value)
    }
    const person=e=>{
        setNoOfPerson(e.target.value)
    }
    const charges=e=>{
        setTotalCharges(e.target.value)
    }
    const user= e=>{
        setUserId(e.target.value)
    }
    const company=e =>{
        setTransportCompanyId(e.target.value)
    }
    useEffect(()=>{
        apiServices.viewAllTransportCompanyPricing().then(data=>{
            setPricingId(data.data.data)
        })
        apiServices.viewAllTransportCompany().then(data=>{
            setTransportCompanyId(data.data.data)
        })
        let data= {
            _id: id
        }
        apiServices.viewTransportOrdersById(data).then(data=>{
            if(data.data.success){
                setPricingId(data.data.data.pricingId)
                setNoOfPerson(data.data.data.noOfPerson)
                setTotalCharges(data.data.data.totalCharges)
                setTransportCompanyId(data.data.data.userId)
                setUserId(data.data.data.transportCompanyId)
            }else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            toast.error("Something went Wrong")
        })
    },[])

    const handleOrderForm=(e)=>{

        let data = new FormData()
        data.append("pricingId",pricingId)
        data.append("noOfPerson",noOfPerson)
        data.append("totalCharges",totalCharges)
        data.append("userId",userId)
        data.append("_id",id)
        data.append("transportCompanyId",transportCompanyId)
        apiServices.addTransportOrder().then(data=>{
            if(data.data.success){
                console.log(data.data.data)
                toast.success(data.data.message)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Somehing went Wrong")
        })
        
    }
  return (
    <div>
        
        <div  className='container p-5'>
        <div className='col-md-10 mx-auto my-5'>
          <form onSubmit={handleOrderForm}>
          <div className="form-row row">
            <div class="form-group col-md-6">
              <label className='form-label'>Pricing ID</label>
              <select className='form-control'required>
                <option disabled value={pricingId} onChange={pricing}>Pricing</option>
                {pricingId?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.transportCompanyId}</option>
                ))}
              </select>
            </div>
            <div class="form-group col-md-6">
              <label className='form-label'>Transport Company ID</label>
              <select className='form-control py-0' value={transportCompanyId} onChange={company} required>
                <option disabled selected >Transport Company ID</option>
                {transportCompanyId?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.transport_company_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
          <div class="form-group col-md-6">
                <label className='form-label'>No of Persons</label>
                <input type="text" class="form-control" value={noOfPerson} onChange={person} required/>
              </div>
              <div class="form-group col-md-6">
                <label className='form-label'>Total Charges</label>
                <input type="text" class="form-control" value={totalCharges} onChange={charges} required/>
              </div>
            </div>
            <div class="form-row row ">
            <div class="form-group col-md-6 ">
                <label className='form-label'>User ID</label>
                <select className='form-control'  required>
                <option disabled value={userId} onChange={user}>User ID</option>
                {userId?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.username}</option>
                ))}
              </select>
              </div>
              </div>
          <br/>
            <button type="submit" class="btn btn-dark col-4 offset-md-4">Save</button>
        </form>  
        </div>
        </div>

      
      
    </div>
  )
}
