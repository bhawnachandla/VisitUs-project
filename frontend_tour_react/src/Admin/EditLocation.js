import React, { useEffect,useState } from 'react'
import apiServices from "../apiServices"
import { toast } from "react-toastify"
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL_IMG } from '../apiServices'

export default function EditLocation() {
    const [locationName,setLocationName]= useState()
    const [image,setImage]= useState()
    let param= useParams()
    let id = param.id
    const navigate =useNavigate()
    const location=(e)=>{
        setLocationName(e.target.value)
    }
    const img=(e)=>{
        setImage(e.target.files[0])
        console.log(image)
    }
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"35%",
        "zIndex":"1",  
        }
    let data={
        _id:id
    }
    useEffect(()=>{
        apiServices.destinationById(data).then(data=>{
            if(data.data.success){
                setLocationName(data.data.data.destination_name)
                setImage(data.data.data.destination_image)
            }else{
                toast.error(data.data.error)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
        })
    },[])
    const saveDestination=()=>{

        let data= new FormData()
        data.append("destination_name",locationName)
        data.append("destination_image",image)
        data.append("_id",id)
        // let data={
        //     destination_name: locationName,
        //     destination_image: image,
        //     _id: id
        // }
        apiServices.updateDestination(data).then(data=>{
            console.log(data) 
            if(data.data.success){
                toast.success(data.data.message)
                navigate("/admin/viewlocation")
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
    <>
         <div className="container-fluid p-5 ">
               
                <div className="row m-5 color-b">
                    <div className="col-md-12 mt-5 mx-auto ">
                        <div className="card color-m" >
                            <div className="card-body">
                                <h5 className="card-title">Edit Destination Form</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Destination Name</label>
                                                    <input className="form-control my-3" value={locationName} onChange={location} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Image</label>
                                                    <input type="file" className="form-control" onChange={img} />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">
                                                        <button type="submit" className="btn btn-style bg-info m-3" onClick={saveDestination}>Save And Add
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>




                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>
      
    </>
  )
}
