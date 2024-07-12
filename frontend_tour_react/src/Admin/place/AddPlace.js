import React, { useState,useEffect } from 'react';
import apiServices from '../../apiServices';
import {toast} from "react-toastify";


export default function AddPlace() {
  const [placeName,setPlaceName] = useState()
  const [placeDescription,setPlaceDesciption] =useState()
  const [image,setImage] =useState()
  const [destinationId,setDestinationId] =useState()
  const [cityId,setcityId] =useState([])
  const [dest, setDest]= useState([])
  const [cit,setCit]=useState()

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
    apiServices.allDestination().then(data=>{
    console.log(data.data.data)
      setDest(data.data.data)
    })
    apiServices.viewAllCity().then((data)=>{
      setCit(data.data.data)
    })
  },[])

  const handlePlaceData=(e)=>{
    e.preventDefault()
    // let data= 
    //   {
    //   place_name:placeName,
    //   place_description:placeDescription,
    //   place_image: image,
    //   destinationId:destinationId,
    //   cityId:cityId
    // }
    let data = new FormData()
    data.append("place_name",placeName)
    data.append("place_description",placeDescription)
    data.append("place_image",image)
    data.append("destinationId",destinationId)
    data.append("cityId",cityId)

    apiServices.addPlaces(data).then(data=>{
        console.log(data)
        if(data.data.success){
            toast.success(data.data.message)
            setPlaceName("")
            setPlaceDesciption("")
            setImage("")
            setDestinationId("")
            setcityId("")        
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
                <div className="row color-b">
                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">Add Place Form</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form>
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
                                                <select className='form-control py-0'  value={destinationId} onChange={destination} required>
                                                    <option disabled selected value={""} >Choose Destination</option>
                                                    {dest?.map((element,index)=>(
                                                    <option key={index} value={element?._id}>{element?.destination_name}</option>
                                                    ))}
                                                </select>
                                                
                                                <label className='form-label'>City</label>
                                                <select className='form-control py-0' value={cityId} onChange={city} required>
                                                    <option disabled selected value={""}>Choose City</option>
                                                    {cit?.map((element,index)=>(
                                                    <option key={index} value={element?._id}>{element?.city_name}</option>
                                                    ))}
                                                </select>  
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">
                                                      <button type="submit" class="btn btn-style bg-info m-3" onClick={handlePlaceData}>Save And Add
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
