import React from 'react'
import { useState,useEffect } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom' 
import ClipLoader from 'react-spinners/ClipLoader';


export default function EditPlaces() {
  const [placeName,setPlaceName] = useState()
  const [placeDescription,setPlaceDesciption] =useState()
  const [image,setImage] =useState()
  const [destinationId,setDestinationId] =useState()
  const [cityId,setcityId] =useState()
  const [destinations, setAllDestinations]= useState()
  const [cities,setAllCities]=useState()
  const [loading,setLoading]= useState()
  const navigate= useNavigate()
  const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"35%",
    "zIndex":"1",  
    }
  const param =useParams()
  const id= param.id
  const place=(e)=>{
    setPlaceName(e.target.value)
  }
  const description=(e)=>{
    setPlaceDesciption(e.target.value)
  }
  const img=(e)=>{
    setImage(e.target.files[0])
  }
  const destination=(e)=>{
    setDestinationId(e.target.value)
  }
  const city=(e)=>{
    setcityId(e.target.value)
  }
  useEffect(()=>{
          setTimeout(()=>{
            setLoading(false)
        },1000)
        apiServices.allDestination().then(data=>{
        console.log(data.data.data)
        if(data.data.success){
          setAllDestinations(data.data.data)
        }else{
          toast.error(data.data.message)
        }
        }).catch(err=>{
          console.log(err)
          toast.error("Something Went Wrong")
        })
        apiServices.viewAllCity().then((data)=>{
          if(data.data.success){
            setAllCities(data.data.data)
          }else{
            toast.error(data.data.message)
          }
          }).catch(err=>{
            console.log(err)
            toast.error("Something Went Wrong")
          })
        let data={
        _id:id
        }
    apiServices.viewPlaceByID(data).then(data=>{
            if(data.data.success){
            console.log(data.data.data)
            setPlaceName(data.data.data.place_name)
            setPlaceDesciption(data.data.data.place_description)
            setcityId(data.data.data.cityId._id)
            setDestinationId(data.data.data.destinationId._id)
            setImage(data.data.data.place_image)
        }else{
            toast.error(data.data.message)
        }
    }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
    })
  },[loading])
  const handlePlaceData=(e)=>{
    e.preventDefault()
    let data= new FormData()
    data.append("place_name",placeName)
    data.append("place_description", placeDescription)
    data.append("place_image",image)
    data.append("destinationId",destinationId)
    data.append("cityId",cityId)
    data.append("_id",id)
    apiServices.updatePlaces(data).then(data=>{
        console.log(data)
        if(data.data.success){
            toast.success(data.data.message) 
            navigate("/admin/allplace")      
        }
        else{
            toast.error(data.data.message)
        }
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong")
      })
  }
  return (
    <>
      <div className="container-fluid p-5 ">
               
                <div className="row m-5 color-b">
                <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m">
                            <div class="card-body">
                                <h5 class="card-title">Edit Place Form</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Place Name</label>
                                                    <input className="form-control my-3" value={placeName} onChange={place} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Image</label>
                                                    <input type="file" className="form-control" onChange={img} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Place Description</label>
                                                    <textarea className="form-control my-3" value={placeDescription} onChange={description}></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <label className='form-label'>Destination</label>
                                                <select className='form-control py-0' value={destinationId} onChange={destination} required>
                                                    <option disabled>Choose Destination</option>
                                                    {destinations?.map((element,index)=>(
                                                    <option key={index} value={element?._id} selected={destinationId==element?._id}>{element?.destination_name}</option>
                                                    ))}
                                                </select>
                                                <label className='form-label'>City</label>
                                                <select className='form-control py-0' value={cityId} onChange={city} required>
                                                    <option disabled>Choose City</option>
                                                    {cities?.map((element,index)=>(
                                                    <option key={index} value={element?._id} selected={cityId==element?._id}>{element?.city_name}</option>
                                                    ))}
                                                </select>  
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">
                                                      <button type="submit" class="btn btn-style bg-info m-3" onClick={handlePlaceData}>Update and Save
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
