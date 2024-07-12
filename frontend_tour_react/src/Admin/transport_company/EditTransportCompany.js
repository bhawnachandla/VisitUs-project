import React, { useEffect, useState  } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader';
export default function EditTransportCompany() {
    const [transportCompanyName,setTransportCompanyName]= useState()
    const [transportCompanyDescription,setTransportCompanyDescription]= useState()
    const navigate= useNavigate()
    const [loading,setLoading] = useState()
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
    let param= useParams()
    let id = param.id
    console.log(id)
    useEffect(()=>{
        let data= {
            "_id": id
        }
        apiServices.viewTransportCompanyById(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            if(data.data.success){
                // toast.success(data.data.message)
                setTransportCompanyName(data.data.data.transport_company_name)
                setTransportCompanyDescription(data.data.data.transport_company_description)
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
       const handleTransportCompanyForm=(e)=>{
          e.preventDefault()
        //   let data = new FormData()
        let data={
            transport_company_name: transportCompanyName,
            transport_company_description: transportCompanyDescription,
            _id: id
          }
        //   data.append("transport_company_name",transportCompanyName)
        //   data.append("transport_company_description",transportCompanyDescription)
    apiServices.updateTransportCompany(data).then(data=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        console.log(data.data)
        if(data.data.success){  
            // console.log(data.data)
            toast.success(data.data.message)
            navigate("/admin/alltransportcompany")
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
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
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

