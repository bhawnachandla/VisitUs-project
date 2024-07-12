import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { BASE_URL_IMG } from '../apiServices'
import ClipLoader from 'react-spinners/ClipLoader';
export default function ViewPlaceById() {
    const [place,setPlace]= useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    const param= useParams()
    const id= param.id
    console.log(id)
    useEffect(()=>{
        let data={
            _id:id
        }
        apiServices.customerViewPlaceById(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            if(data.data.success){
                // toast.success(data.data.message)
                setPlace(data.data.data)
                // console.log(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    },[loading])
  return (
    <div>
           <div className="d-flex justify-content-center">
            <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
        <div className="p-5">
        </div>
        <div className={loading?"disabled-screen-full":"my-5"}>   
            <main id="main">
                <section className="intro-single">
                    <div className="container border border-dark border-2 rounded pt-2">
                        <h1 className="text-center text-dark">Place</h1>
                        <div className="container ">
                            <div className="card text-capitalize p-5 mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={BASE_URL_IMG+`${place?.place_image}`} className="card-img"/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body"> 
                                            <p className="text-primary fs-2 font-weight-bold">{place?.place_name}</p>
                                            {/* <h4>Location- {allhotels?.hotel_location}</h4>
                                            <p>Email- {allhotels?.hotel_email}</p> */}
                                            <p className="card-text text-danger">Place description- {place?.place_description}</p>
                                            <Link to={"/user/allhotels/"+`${place?._id}`}>
                                            <a href="" class="btn btn-dark mx-auto my-2">View Hotels</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
  )
}
