import React from 'react'

function LoginPage() {
  return (
    <section>
    {/*!-- breadcrumb area start --*/}
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <h1>login / register</h1>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">login / register</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*!-- breadcrumb area end --*/}
    <div className="login-register-wrapper pb-0">
            <div className="container">
                <div className="member-area-from-wrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-reg-form-wrap">
                                <h2>Sign In</h2>
                                <form action="#" method="post">
                                    <div className="single-input-item">
                                        <input type="email" placeholder="Email or Username" />
                                    </div>
                                    <div className="single-input-item">
                                        <input type="password" placeholder="Enter your Password" />
                                    </div>
                                    <div className="single-input-item">
                                        <div
                                            className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                            <div className="remember-meta">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                                    <label className="custom-control-label" htmlFor="rememberMe">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <a href="#" className="forget-pwd">Forget Password?</a>
                                        </div>
                                    </div>
                                    <div className="single-input-item">
                                        <button className="btn btn__bg">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*-- Login Content End --*/}

                        {/*-- Register Content Start --*/}
                        <div className="col-lg-6">
                            <div className="login-reg-form-wrap sign-up-form">
                                <h2>Singup Form</h2>
                                <form action="#" method="post">
                                    <div className="single-input-item">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="single-input-item">
                                        <input type="email" placeholder="Enter your Email" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="password" placeholder="Enter your Password" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="password" placeholder="Repeat your Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-input-item">
                                        <div className="login-reg-form-meta">
                                            <div className="remember-meta">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="subnewsletter" />
                                                    <label className="custom-control-label" htmlFor="subnewsletter">Subscribe
                                                        Our Newsletter</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-input-item">
                                        <button className="btn btn__bg">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*-- Register Content End --*/}
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default LoginPage