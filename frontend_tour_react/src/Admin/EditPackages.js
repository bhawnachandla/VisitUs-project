import { useEffect, useState } from "react";
import apiServices from "../apiServices";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

export default function EditPackages() {
    const [pName,setpName]= useState()
    const [price,setPrice]=useState()
    const [tPeople,settPeople]= useState()
    const [destId,setDestId]= useState()
    const [destinations,setAllDestinations]= useState()
    const [placeId,setPlaceId]=useState()
    const [places,setAllPlaces]=useState()
    const [carPrice,setCarPrice]=useState()
    const [bikePrice,setBikePrice]=useState()
    const [trainPrice,setTrainPrice]=useState()
    const [flightPrice,setFlightPrice]=useState()
    const [packageCost,setPackageCost]= useState()
    const [transportId,setTransportId]=useState()
    const [transports,setAllTransport]=useState()
    const [loading,setLoading] = useState()
    let navigate= useNavigate() 
    let param= useParams()
    let id = param.id
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
    const Price=(e)=>{
        setPrice(e.target.value)
    }
    const packageName=(e)=>{
        setpName(e.target.value)
    }
    useEffect(()=>{
      setLoading(true)
        setTimeout(()=>{
          setLoading(false)
      },1000)
        if(destId=="" || destId==undefined || destId==null)
        {
          apiServices.allDestination().then(data=>{
            setAllDestinations(data.data.data)
        })
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
        apiServices.allDestination().then(data=>{
          setAllDestinations(data.data.data)
      })
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
      apiServices.allTransport().then(data=>{
            setAllTransport(data.data.data)
      })
      
    },[destId])
    useEffect(()=>{
      let data={
        _id: id
      }
      apiServices.viewPackageById(data).then(data=>{
          console.log(data.data.data)
          if(data.data.success){
              setpName(data.data.data.package_name)
              setPrice(data.data.data.package_cost)
              settPeople(data.data.data.no_of_person)
              setDestId(data.data.data.destinationID)
              setPlaceId(data.data.data.placeId)
              setCarPrice(data.data.data.transport[0].cost) 
              setBikePrice(data.data.data.transport[1].cost)
              setFlightPrice(data.data.data.transport[2].cost)
              setTrainPrice(data.data.data.transport[3].cost)
              setPackageCost(data.data.data.package_cost)

          }
          else{
              toast.error(data.data.message)
          }
      }).catch(err=>{
          console.log(err)
          toast.error("Something went wrong")
      })
    },[])
    const handlePackageForm=()=>{
        // let data= new FormData()
        // data.append("package_name",pName)
        // data.append("package_cost",price)
        // data.append("no_of_person",tPeople)
        // data.append("destinationId",destId)
        // data.append("placeId",placeId)
        // data.append("TransportId",transportId)
        // data.append("_id",id)
        let transport=[
          {transport_name:'Car',cost:carPrice},
          {transport_name:'Bike',cost:bikePrice},
          {transport_name:'Flight',cost:flightPrice},
          {transport_name:'Train',cost:trainPrice},
        ]
        let data={
          package_name: pName,
          package_cost: price,
          no_of_person: tPeople,
          destinationId: destId,
          placeId: placeId,
          transport: transport,
          _id: id
        }

        apiServices.updatePackage(data).then(data=>{
            if(data.data.success){
              toast.success(data.data.message)
                console.log(data.data.success)
            }
            else{
                console.log(data.data.message)
                toast.error(data.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    }
   
  return (
    <div>
         <div className='container p-5'>
        <div className="p-5"></div>          
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
      </div>
        <div className='col-md-10 mx-auto'>
          <div className="form-row row">
              <div class="form-group col-md-6 ">
                <label className='form-label'>Package Name</label>
                <input type="text" class="form-control" value={pName} onChange={packageName} required/>
              </div>
            <div class="form-group col-md-6">
              <label className='form-label'>Destination</label>
              <select className='form-control py-0' value={destId} onChange={destination} required>
                <option disabled>Choose Destination</option>
                {destinations?.map((el,index)=>(
                  <option key={index} value={el?._id} selected={destId==el?.destinationId}>{el?.destination_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="form-row row">
              <div class="form-group col-md-6">
                <label className='form-label'>Place</label>
                <select className='form-control py-0' value={placeId} onChange={place} required>
                <option disabled >Choose Place</option>
                {places?.map((el,index)=>(
                  <option key={index} value={el?._id} selected={placeId==el?.placeId}>{el?.place_name}</option>
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
            <button type="submit" onClick={handlePackageForm} class="btn btn-dark col-4 offset-md-4">Save</button>
        
        </div>
        </div>
      
    </div>
  )
}
