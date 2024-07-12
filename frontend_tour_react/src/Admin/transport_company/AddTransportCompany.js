import React, { useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'

export default function AddTransportCompany() {
    const [transportCompanyName,setTransportCompanyName]= useState()
    const [transportCompanyDescription,setTransportCompanyDescription]= useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }

    const name=(e)=>{
        setTransportCompanyName(e.target.value)
    }
    const description=(e)=>{
        setTransportCompanyDescription(e.target.value)
    }

    const handleTransportCompanyForm=(e)=>{
        // let data = new FormData()
        let data={
          transport_company_name: transportCompanyName,
          transport_company_description: transportCompanyDescription
        }
        // data.append("transport_company_name",transportCompanyName)
        // data.append("transport_company_description",transportCompanyDescription)
        apiServices.addTransportCompany(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                setTransportCompanyName("")
                setTransportCompanyDescription("")
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)  
            toast.error("Something Went Wrong")
        })
    }
    
  return (
    <div>
       <div  className='container p-5'>
        <div className='col-md-8 mx-auto my-5'>
        <h5 class="card-title">Add Transport Company</h5>
        <hr />
          <div className="form-row row">
          <div className="form-group col-md-12">
                <label className='form-label'>Transport Company Name</label>
                <input type="text" class="form-control" value={transportCompanyName} onChange={name} required/>
              </div>
            </div>
          <div className="form-row row">
          <div className="form-group col-md-12">
                <label className='form-label'>Transport Company Description</label>
                <input type="text" class="form-control" value={transportCompanyDescription} onChange={description} required/>
              </div>
              </div>
          <br/>
            <button type="submit" onClick={handleTransportCompanyForm} className="btn btn-dark col-4 offset-md-4">Save</button>
        
        </div>
        </div>
    </div>
  )
}
