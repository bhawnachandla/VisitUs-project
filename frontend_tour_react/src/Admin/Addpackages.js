import { useEffect, useState } from "react";
import apiServices from "../apiServices";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import ClipLoader from 'react-spinners/ClipLoader';
export default function Addpackages() {
    const [pName,setpName]= useState()
    const [packageCost,setPackageCost]= useState()
    const [carPrice,setCarPrice]=useState()
    const [bikePrice,setBikePrice]=useState()
    const [trainPrice,setTrainPrice]=useState()
    const [flightPrice,setFlightPrice]=useState()
    const [tPeople,settPeople]= useState()
    const [destId,setDestId]= useState()
    const [destinations,setAllDestinations]= useState()
    const [placeId,setPlaceId]=useState()
    const [places,setAllPlaces]=useState()
    const [transportId,setTransportId]=useState()
    const [transports,setAllTransport]=useState() 
    const [loading,setLoading]= useState(true)
  
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"35%",
      "zIndex":"1",  
      }

    const destination=(e)=>{
        setDestId(e.target.value)
    }
    const place=(e)=>{
        setPlaceId(e.target.value)
    }
    const transport=(e)=>{
        setTransportId(e.target.value)
    }
    const totalPeople=(e)=>{
        settPeople(e.target.value)
    }
    const packageName=(e)=>{
        setpName(e.target.value)
    }
    useEffect(()=>{
          setTimeout(()=>{
              setLoading(false)
          },1000)
        apiServices.allDestination().then(data=>{
            setAllDestinations(data.data.data)
        })
        if(destId==""||destId==undefined|| destId==null)
        {
          apiServices.allTransport().then(data=>{
            setAllTransport(data.data.data)
          })
          apiServices.allPlaces().then(data=>{
            setAllPlaces(data.data.data)
          })
      }
      else{
        var data_id={
          destinationId: destId
        }
        apiServices.allPlaces(data_id).then(data=>{
          setAllPlaces(data.data.data)
        })
        var data_dest ={
          to_destination:destId
        }
        apiServices.allTransport(data_dest).then(data=>{
          setAllTransport(data.data.data)
        })
      }
    },[destId])
    const handlePackageForm=(e)=>{
        e.preventDefault()
        let transport=[
          {transport_name:'Car',cost:carPrice},
          {transport_name:'Bike',cost:bikePrice},
          {transport_name:'Flight',cost:flightPrice},
          {transport_name:'Train',cost:trainPrice},
        ]
        console.log(transport)
        let data={
          package_name:pName,
          no_of_person:tPeople,
          destinationId: destId,
          placeId: placeId,
          package_cost: packageCost,
          transport: transport
        }
        // let data= new FormData()
        // data.append("package_name",pName)
        // data.append("package_cost",price)
        // data.append("no_of_person",tPeople)
        // data.append("destinationId",destId)
        // data.append("placeId",placeId)
        // data.append("TransportId",transportId)
        
        let transport_data={
          // from_city:
        }
        apiServices.addPackages(data).then(data=>{
            if(data.data.success){
              toast.success(data.data.message)
                console.log(data.data.data)
                setpName("")
                settPeople("")
                setDestId("")
                setPlaceId("")
                setPackageCost("")
              
            }
            else{
                console.log(data.data.data)
                toast.error(data.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    }
    return (
        <>
        <div className='container p-5'>
          <div className="p-5"></div>
          <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
        <div className='col-md-10 mx-auto my-5'>
          <form>
          <div className="form-row row">
              <div class="form-group col-md-6 ">
                <label className='form-label'>Package Name</label>
                <input type="text" class="form-control" value={pName} onChange={packageName} required/>
              </div>
            <div class="form-group col-md-6">
              <label className='form-label'>Destination</label>
              <select className='form-control py-0' value={destId} onChange={destination} required>
                <option disabled selected value={""}>Choose Destination</option>
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Place</label>
                <select className='form-control py-0' value={placeId} onChange={place} required>
                <option disabled selected value={""} >Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id}>{el?.place_name}</option>
                ))}
              </select>
              </div>
              <div class="form-group col-md-6">
                <label className='form-label'>Number of persons</label>
                <input type="text" class="form-control" value={tPeople} onChange={totalPeople} required/>
              </div>
            </div>
            <div class="form-row row ">
              <div class="mb-3 col-md-6">
                <label  class="form-label">Car Price</label>
                <input class="form-control" type="text" required  value={carPrice} onChange={(e)=>{setCarPrice(e.target.value)}} />
              </div>
              <div class="mb-3 col-md-6">
                <label  class="form-label">Train Price</label>
                <input class="form-control" type="text" required  value={trainPrice} onChange={(e)=>{setTrainPrice(e.target.value)}} />
              </div>
            </div>
            <div class="form-row row ">
              <div class="mb-3 col-md-6">
                <label  class="form-label">Flight Price</label>
                <input class="form-control" type="text" required  value={flightPrice} onChange={(e)=>{setFlightPrice(e.target.value)}} />
              </div>
              <div class="mb-3 col-md-6">
                <label  class="form-label">Bike Price</label>
                <input class="form-control" type="text" required  value={bikePrice} onChange={(e)=>{setBikePrice(e.target.value)}} />
              </div>
            </div>
            <div class="form-row row ">
              <div class="mb-3 col-md-6">
                <label  class="form-label">Package Cost</label>
                <input class="form-control" type="text" required  value={packageCost} onChange={(e)=>{setPackageCost(e.target.value)}} />
              </div>
            </div>
          <br/>
            <button class="btn btn-dark col-4 offset-md-4" onClick={handlePackageForm}>Save</button>
        </form>  
        </div>
        </div>
        </>
    )
}