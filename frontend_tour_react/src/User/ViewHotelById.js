import React, { useEffect, useState } from 'react'
import apiServices from '../apiServices'
import { BASE_URL_IMG} from '../apiServices'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';
export default function ViewHotelById() {
    const [allhotels,setAllHotels]= useState()
    const [loading,setLoading] = useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }
    let param= useParams()
    let id= param.id
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        let data={
            _id: id
        }
        apiServices.customerViewHotelById(data).then(data=>{
            setAllHotels(data.data.data)
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
                        <h1 className="text-center text-dark">Hotel</h1>
                        <div className="container ">
                            <div className="card text-capitalize p-5 mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={BASE_URL_IMG+`${allhotels?.hotel_image}`} className="card-img"/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body"> 
                                            <p className="text-primary fs-2 font-weight-bold">{allhotels?.hotel_name}</p>
                                            <h4 className="card-text">Address- {allhotels?.hotel_address}</h4>
                                            <h4>Location- {allhotels?.hotel_location}</h4>
                                            <p>Email- {allhotels?.hotel_email}</p>
                                            <p className="card-text text-danger">Hotel description- {allhotels?.hotel_description}</p>
                                            <Link to={"/user/addbooking/"+`${allhotels?._id}`}>
                                            <a href="#" class="btn btn-dark  my-3 ">Book</a>
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
