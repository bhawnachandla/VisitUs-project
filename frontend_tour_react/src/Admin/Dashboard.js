export default function Dashboard() {

    return (

        <>

            <div className="container-fluid">
                <div className="row mydashrow ">
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5 mycol bg-info text-white" >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Packages</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
                                    06
                                </p>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    <div className="col-md-4 mt-5 p-5">
                        <div class="card mt-5 mycol bg-warning text-dark" >
                            <div class="card-body card-h ">
                                <h5 class="card-title">Customers</h5>
                            </div>
                            <ul class="list-group list-group-flush card-b ">
                                <p className="text-center m-5 display-3 card-t">
                                  1,500
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-5 " >
                        <div class="card mt-5 mycol bg-success text-white" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Orders</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                               3000
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5  mycol bg-danger text-white" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Gross Income</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                                 3,60,000
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5 mycol bg-primary text-white" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Total Packages Approved</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                                 430
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 p-5" >
                        <div class="card mt-5 mycol bg-secondary text-white" >
                            <div class="card-body card-h">
                                <h5 class="card-title  ">Total Users</h5>
                            </div>
                            <ul class="list-group list-group-flush card-b  ">
                                <p className="text-center m-5 display-3 card-t text-warning">
                              20
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
