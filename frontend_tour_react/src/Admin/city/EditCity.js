import React from 'react'
import apiServices from '../../apiServices'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function EditCity() {
    const [city,setCity]= useState()
    const [state,setState]=useState()
    const navigate= useNavigate()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }

    let param=useParams()
    let id= param.id
    const addCity=(e)=>{
        setCity(e.target.value)
    }
    const addState=(e)=>{
        setState(e.target.value)
    }
    useEffect(()=>{
        let data={
            "_id": id
        }
        apiServices.viewcitiesById(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            if(data.data.success){
                setCity(data.data.data.city_name)
                setState(data.data.data.state_name)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    },[loading])
    const handleCityData=(e)=>{  
        e.preventDefault()
        let data = {
            city_name: city,
            state_name: state,  
            _id: id
        }
        apiServices.updateCity(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                navigate("/admin/allcity")
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
    <div className="container-fluid p-5">
               
                <div className="row color-b">
                <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
                    <div className="col-md-8 mt-5 mx-auto ">
                        <div className="card color-m" >
                            <div className="card-body">
                                <h5 className="card-title">Add City Form</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Name</label>
                                                    <input type='text' className="form-control my-3" value={city} onChange={addCity} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>State Name</label>
                                                    <input type='text' className="form-control" value={state} onChange={addState} />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">
                                                        <button type="submit" className="btn btn-style bg-info m-3" onClick={handleCityData}>Save And Add
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
