import { useState } from "react"
import apiServices from "../apiServices"
import { toast } from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader';
export default function Addlocation() {
    const [locationName,setLocationName]= useState()
    const [image,setImage]= useState()
    const [loading,setLoading]= useState()
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"35%",
        "zIndex":"1",  
        }
    const location=(e)=>{
        setLocationName(e.target.value)
    }
    const img=(e)=>{
        setImage(e.target.files[0])
        console.log(image)
    }
    const saveDestination=(e)=>{
        e.preventDefault()
        let data= new FormData()
        data.append("destination_name",locationName)
        data.append("destination_image",image)

        apiServices.addDestination(data).then(data=>{
            // setTimeout(()=>{
            //     setLoading(false)
            // },1500)
            console.log(data) 
            
            if(data.data.success){
                toast.success(data.data.message)
                setLocationName("")
                setImage("")
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
        <>
            <div className="container-fluid p-5 ">
               
                <div className="row m-5 color-b">
             

                    <div className="col-md-8 mt-5 mx-auto mb-5 p-5 ">
                        <div className="card color-m" >
                            <div className="card-body">
                                <h5 className="card-title">Add Destination Form</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form>
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



                                        </form>
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