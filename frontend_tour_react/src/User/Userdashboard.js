export default function Userdashboard() {

    return (

        <>
     

     <div className="container-fluid">
                <div className="row mydashrow ">
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Packages</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
                                    4
                                </p>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    <div className="col-md-4 mt-5 p-5">
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h ">
                                <h5 class="card-title">Total Orders Placed</h5>
                            </div>
                            <ul class="list-group list-group-flush card-b ">
                                <p className="text-center m-5 display-3 card-t">
                                  30
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5 mycol" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Your Previous Packages</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                               15
                                </p>
                            </ul>
                            
                        </div>
                    
                    </div>
                </div>

            </div>
            </>
    )
}