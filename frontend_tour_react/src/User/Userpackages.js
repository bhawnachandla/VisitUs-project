export default function Userpackages() {
    return (
        <>
            <div className="container-fluid p-5">
               
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">BOOK A PACKAGE</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Package Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 ">
                                                    <label>Date of Booking</label>
                                                    <br/>
                                                    <label>FROM</label>
                                                    <input className="form-control  my-3 " />
                                                    <input type="datetime-local" id="form-control my-3" name="birthdaytime"></input>
                                                </div>

                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-md-6 ">
                                                    <label>Date of Booking</label>
                                                    <br/>
                                                    <label>TO</label>
                                                    <input className="form-control my-3  " />
                                                    <input type="datetime-local" id="form-control my-3" name="birthdaytime"></input>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 my-3 ">
                                                    <label>Select Category</label>

                                                    <select className="form-control">
                                                        <option value="Italian">Standard-Goa</option>
                                                        <option value="French">Standard-Gujrat</option>
                                                        <option value="MiddelEasten"> Standard-Kashmir</option>
                                                        <option value="Indian">Standard-Delhi</option>
                                                        <option value="Indian">Standard-Assam</option>
                                                        <option value="Indian">Standard-Kerela</option>


                                                    </select>
                                                </div>
                                                </div>
                                           
                                            <div className="row">
                                                <div className="col-md-6 ">
                                                    <label>Price</label>
                                                    <input className="form-control my-3  " placeholder="" />



                                                </div>
                                                <div className="col-md-6 ">
                                                    <label>Total People</label>
                                                    <input className="form-control my-3  " placeholder="" />
                                                </div>
                                            </div>
                                            
                                            
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">

                                                        <button type="submit" class="btn btn-style bg-info m-3"> PAYMENT
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