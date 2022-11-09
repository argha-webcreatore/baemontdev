import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaEnvelopeOpenText, FaEye, FaEyeSlash } from "react-icons/fa"
import validator from 'validator'


import './StyleAuth.css'

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    let [passState, setPassState] = useState('false');
    let passToggle = () => {
        setPassState(!passState);
    }
    let [responsedata,setResponsedata] = useState([]);
    let [responsestatus,setResponsestatus] = useState([]);
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
     
      // Handling the email change
    const handleEmail = (e) => {
    setEmail(e.target.value);
    if (validator.isEmail(e.target.value)) {
        setEmailError("");
    }else{
        setEmailError(<div className="error alert d-flex align-items-center alert-danger">Please enter valid email</div>)
    }
    setSubmitted(false);
    };
    const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
    };
     
      // Handling the password change
    const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    };
    const handleRePassword = (e) => {
    //setPassword(e.target.value);
    //setSubmitted(false);
    console.log('sasa');
        if(password === e.target.value){
            setPassError("")
        }else{
            setPassError(<div className="error alert d-flex align-items-center alert-danger">Please enter valid email</div>)
        }
    };
     
      // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || mobile ==='') {
            setError(true);
        } else {
            console.log(emailError)
            if(emailError==='' && passError===''){
                setSubmitted(true);
                submitdata();
                setError(false);
            }
            
        }
    };
      const errorMessage = () => {
        return (
          <>
            {error ?
            <div className="error alert d-flex align-items-center alert-danger">
                Please enter all the fields
            </div>
            :
            ''}
          </>
        );
      };
      async function  submitdata (){
        //console.log("Nilanjan");
            var requestdata = {
                fullname: name,
                email: email,
                password: password,
                mobile: mobile,
            };
            var formData = new FormData();
            formData.append('json', JSON.stringify(requestdata));
            
            var requestOptions = {
                method: 'POST',
                body: formData
            };
            var resp = await fetch("http://3.20.64.228/control_panel/api/auth/registration",requestOptions);
            var data = await resp.json(); 
            console.log(data);
            setResponsedata(data.data);
            setResponsestatus(data.data);
            
        }

      
  return (
    <>

    <div className="position-relative">
        <div className="row g-0">
            <div className="col-xl-6  d-xl-block d-none position-relative log-image1">
                <div className="cover-image min-vh-100 d-flex align-items-center justify-content-center h-100" data-bs-image-src={window.location.origin + "/assets/img/login-bg.jpg"}></div>
                <div className="cont-main w-100 position-relative">
                    <div className="customlogin-imgcontent">
                        <h2 className="mb-3 fs-35 text-white">Welcome To Baemont</h2>
                        <p className="text-white-50">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 bg-white log-image1">
                <div className="w-75 m-auto">
                    <div className="customlogin-content pt-5 pt-xl-9">
                        <div className="pt-4 card-body">
                            <Link className="header-brand" to="/">
                                <img src={window.location.origin +"/assets/img/logo.png"} className="header-brand-img custom-logo" alt="Beamontlogo" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <h2 className="mb-2">Login</h2>
                            <p className="text-muted">Sign In to your account</p>
                            
                            {responsestatus.length > 0 ? 
                            <div className="error alert d-flex align-items-center alert-success">{responsedata} </div>
                            : 
                            ''}
                            <div className="messages">
                                
                                {emailError}
                                {errorMessage()}
                            {/* {successMessage()} */}
                            </div>
                        </div>
                        <div className="card-body pt-3" id="register" name="register">
                            <div className="form-group">
                                <label className="">Username</label>
                                <div className="input-group mb-4">
                                    <div className="input-group">
                                        <Link to='/' className="input-group-text">
                                            <FaUserAlt />
                                        </Link>
                                        <input className="form-control" onChange={handleName} value={name} placeholder="Fullname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="">Mail or Username</label>
                                <div className="input-group mb-4">
                                    <div className="input-group">
                                        <Link to='/' className="input-group-text">
                                            <FaEnvelopeOpenText />
                                        </Link>
                                        <input className="form-control" placeholder="Email" onChange={handleEmail} value={email} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="">Mobile Number</label>
                                <div className="input-group mb-4">
                                    <div className="input-group">
                                        <Link to='/' className="input-group-text">
                                            <FaEnvelopeOpenText />
                                        </Link>
                                        <input className="form-control" placeholder="Mobile No." onChange={handleMobile} value={mobile} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-group mb-4">
                                    <div className="input-group" id="Password-toggle">
                                        <Link to="#" className="pass input-group-text" onClick={passToggle}>
                                            { passState ?
                                            <FaEye />
                                            :
                                            <FaEyeSlash />
                                            }
                                        </Link>
                                        <input className="form-control" type={passState ? "password" : "text"} placeholder="Password" onChange={handlePassword} value={password}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Re Password</label>
                                <div className="input-group mb-4">
                                    <div className="input-group" id="Password-toggle">
                                        <Link to="#" className="pass input-group-text" onClick={passToggle}>
                                            { passState ?
                                            <FaEye />
                                            :
                                            <FaEyeSlash />
                                            }
                                        </Link>
                                        <input className="form-control" type={ passState ? "password" : "text"} placeholder="Password" onChange={handleRePassword} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" />
                                    <span className="custom-control-label">I agree to the 
                                    <Link to="" className="text-primary">Terms of services</Link> and <Link to="" className="text-primary">Privacy policy</Link></span>
                                </label>
                            </div>
                            <div className="submit">
                                {/* <Link className="btn btn-default mt-3 btn-block" to="/">Create Account</Link> */}
                                <button onClick={handleSubmit} className="btn btn-default mt-3 btn-block" type="submit">
                                    Submit
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-dark mb-0">Already have an account?<Link className="text-primary ms-1" to="/login">LogIn</Link></p>
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

export default Registration