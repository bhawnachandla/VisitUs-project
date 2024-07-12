export default function Packages(){
    const packages=[
        {
            package_name:"Standard-Kashmir",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        },
        {
            package_name:"Standard-Delhi",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        },
        {
            package_name:"Standard-Gujrat",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        },
        {
            package_name:"Standard-Goa",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        },
        {
            package_name:"Standard-Kerela",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        },
        {
            package_name:"Standard-Kerela",
            price:"30,000",
            image:"sunset.jfif",
            days:"20 days"
        }
    ]
    return(
        <>
            <div className="container table-responsive  ">
                <table className="table table-bordered table-hover table-striped ">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Package name</th>
                            <th>Price</th>
                            <th>Images</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                        {packages.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.package_name}</td>
                                <td>{el.price}</td>
                                <td>
                                    <img src={"assets/img/"+`${el.image}`}
                                    style={{height:"100px"}}/>
                                </td>
                                <td>{el.days}</td>
                            </tr>
                        ))}  
                </table>
            </div>
        </>
    )
}