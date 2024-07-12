import React, { useState } from 'react'
import apiServices from '../../apiServices'
import { toast } from 'react-toastify'

export default function AddCity() {

    const [city,setCity]= useState()
    const [state,setState]=useState()
    const addCity=(e)=>{
        setCity(e.target.value)
    }
    const addState=(e)=>{
        setState(e.target.value)
    }
    const handleCityData=(e)=>{  
        e.preventDefault()
        let data={
            city_name: city,
            state_name: state
        }
        // let data = new FormData()
        // data.append("city_name",city)
        // data.append("state_name",state)
        apiServices.addCity(data).then(data=>{
            console.log(data.data)
            if(data.data.success){
                toast.success(data.data.message)
                setCity("")
                setState("")
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
                                                    <div className="submit text-center m-3">
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
