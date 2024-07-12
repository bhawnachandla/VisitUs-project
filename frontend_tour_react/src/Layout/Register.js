export default function Register() {
    return (
      <>
    <div className="signinform">
        {/* <h1>Service Login Form</h1> */}
        {/* <!-- container --> */}
        <div className="container my-5 p-5">
            {/* <!-- main content --> */}
            <div className="w3l-form-info">
                <div className="w3_info text-center">
                    <h2>REGISTER</h2>
                    <form action="#" method="post">
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="text" placeholder="First Name " required=""/>
                        </div>
						<div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="text" placeholder="Last Name" required=""/>
                        </div>
						<div className="input-group">
                            <span><i className="fa fa-at" aria-hidden="true"></i></span>
                            <input type="text" placeholder="Contact" required=""/>
                        </div>
						<div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Email" required=""/>
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" required=""/>
                        </div>
                        <div className="form-row bottom">
                            <div className="form-check">
                                <input type="checkbox" id="remenber" name="remenber" value="remenber"/>
                                {/* <label for="remenber"> Remember me?</label> */}
                            </div>
                            {/* <a href="#url" className="forgot">Forgot password?</a> */}
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    {/* <p className="continue"><span>or Login with</span></p> */}
                    <div className="social-login">
                        {/* <a href="#facebook">
                            <div className="facebook">
                                <span className="fab fa-facebook-f" aria-hidden="true"></span>

                            </div>
                        </a>
                        <a href="#twitter">
                            <div className="twitter">
                                <span className="fab fa-twitter" aria-hidden="true"></span>
                            </div>
                        </a>
                        <a href="#google">
                            <div className="google">
                                <span className="fab fa-google" aria-hidden="true"></span>
                            </div>
                        </a> */}
                    </div>
                    {/* <p className="account">Don't have an account? <a href="#signup">Sign up</a></p> */}
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        {/* <!-- footer --> */}
        <div className="footer">
            {/* <p>&copy; 2020 Service login form. All Rights Reserved | Design by <a href="https://w3layouts.com/" */}
                    {/* target="blank">W3layouts</a></p> */}
        </div>
        {/* <!-- footer --> */}
    </div>
      </>

    )
}