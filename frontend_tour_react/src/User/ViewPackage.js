import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiServices from '../apiServices'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader';

export default function ViewPackageById() {
    const [pack,setPackage]= useState()
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
    useEffect(()=>{
        let data= {
            _id:id
        }
        apiServices.customerViewPackageById().then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            if(data.data.success){
                toast.success(data.data.message)
                setPackage(data.data.data)
            }else{
                toast.error(data.data.message)
            }
        }).catch(err=>{
            console.log(err)
            toast.error("Something went Wrong")
        })
    },[])

  return (
    <div>
         <div className="p-5"></div>
         <div className="d-flex justify-content-center">
            <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
        <div className="container-fluid row">
        {pack?.map((data,i)=>(
            <div class="card mx-4 my-3" style={{width:"300px"}}  key={i}>
            {/* <img class="card-img-top mx-auto" style={{height:"150px", width:"170px"}} src={BASE_URL_IMG+data?.} alt="Card image cap"/> */}
            <div class="card-body mx-auto">
                <p class="card-text fs-4">{data.package_name}</p>
                <a href="#" class="btn btn-dark my-2">Book</a>
            </div>
            </div>
        ))}
        </div> 
    </div>
  )
}
