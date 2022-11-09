import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpenText, FaEye, FaEyeSlash } from "react-icons/fa"


import './StyleAuth.css'

function Login() {
    let [passState, setPassState] = useState('false');
    let passToggle = () => {
        setPassState(!passState);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [responsedata,setResponsedata] = useState([]);
    let [responsestatus,setResponsestatus] = useState([]);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( email === '' || password === '') {
            setError(true);
        } else {
            
            setSubmitted(true);
            submitdata();
            setError(false);
        }
    };
    async function submitdata(){
        var requestdata = {
           
            email: email,
            password: password,

        };
        var formData = new FormData();
        formData.append('json', JSON.stringify(requestdata));
        
        var requestOptions = {
            method: 'POST',
            body: formData
        };
        var resp = await fetch("http://3.20.64.228/control_panel/api/auth/signin",requestOptions);
        var data = await resp.json(); 
        console.log(data);
        setResponsedata(data.data);
        setResponsestatus(data.status);
        if(data.status==1){
            localStorage.setItem("customer_id", data.data.id);
            localStorage.setItem("firstname", data.data.firstname);
            localStorage.setItem("lastname", data.data.lastname);
            localStorage.setItem("email", data.data.email);
            var checkcart = localStorage.getItem('availableCartProductIds');
            if(checkcart==null){
                window.location.href = window.location.origin + '/account';
            }else{
                window.location.href = window.location.origin + '/checkout';
            }
            
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        //setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
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
  return (
    <>

        <div className="position-relative">
            <div className="row g-0">
              <div className="col-xl-6 d-xl-block d-none position-relative log-image1">
                <div className="cover-image " data-bs-image-src="assets/img/login-bg.jpg"></div>
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
                            <a className="header-brand" href="index.html">
                                <img src={window.location.origin +"/assets/img/logo.png"}  className="header-brand-img custom-logo" alt="Beamontlogo" />
                            </a>
                        </div>
                        <div className="card-body">
                            <h2 className="mb-2">Login</h2>
                            <p className="text-muted">Sign In to your account</p>
                            
                            {responsedata.length > 0 ? 
                            <div className="error alert d-flex align-items-center alert-danger">{responsedata} </div>
                            : 
                            ''}
                            <div className="messages">
                                
                                {/* {emailError} */}
                                {errorMessage()}
                            
                            </div>
                        </div>
                        <div className="card-body pt-3" id="login" name="login">
                            <div className="form-group">
                                <label className="form-label">Mail or Username</label>
                                <div className="input-group mb-4">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FaEnvelopeOpenText />
                                        </span>
                                        <input className="form-control" placeholder="Email" onChange={handleEmail} value={email} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-group mb-4">
                                    <div className="input-group" id="Password-toggle">
                                        <span className="pass input-group-text" onClick={passToggle}>
                                            { passState ?
                                            <FaEye />
                                            :
                                            <FaEyeSlash />
                                            }
                                        </span>
                                        <input className="form-control" onChange={handlePassword} value={password}  type={ passState ? "password" : 'text' } placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" />
                                    <span className="custom-control-label">Remeber me</span>
                                </label>
                            </div>
                            <div className="submit">
                                <button onClick={handleSubmit} className="btn btn-default mt-3 btn-block" type="submit">
                                    Submit
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <p className="mb-2"><a href="/">Forgot Password</a></p>
                                <p className="text-dark mb-0">Don't have account?<Link className="text-primary ms-1" to="/registration">Register</Link></p>
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

export default Login