import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaPlus, FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import CartSummary from './CartSummary'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import $ from 'jquery'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    width: 70,
    height: 40,
    '& .MuiSwitch-switchBase': {
        //margin: 1,
        //padding: 0,
        //transform: 'translateX(6px)',
        '&.Mui-checked': {
          right: '10px',
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#8b2845',
          },
        },
        '&:not(.Mui-checked)': {
          filter: 'drop-shadow(0 0 1px #000)',
        },
      },
      '& .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#8b2845',
        borderRadius: 22 / 1,
        width: '100%',
        '&:before, &:after': {
          //content: '""',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '11px',
          fontWeight: 'bold',
          width: 25,
          height: 16,
        },
        '&:before': {
          content: '"ON"',
          color: '#fff',
          textAlign: 'left',
          /* backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`, */
          left: 13,
        },
        '&:after': {
          content: '"OFF"',
          color: '#fff',
          textAlign: 'right',
          //backgroundColor: '#f00',
          /* backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M19,13H5V11H19V13Z" /></svg>')`, */
          right: 11,
        },
      },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#001e3c' : '#ffffff',
    boxShadow: 'none',
    //opacity: 0,
    width: 22,
    height: 22,
    margin: 0,
    marginLeft:0,
  },
}));



function Checkout() {
  var customer_id = localStorage.getItem("customer_id");
  if(customer_id==null){
      window.location.href = window.location.origin + '/login';
  }
  var preemail = localStorage.getItem("email");
  const [emailCheckout, setEmailCheckout] = useState();

  const [finalemail,setFinalemail] = useState();
  const [billadd1,setBilladd1] = useState();
  const [billadd2,setBilladd2] = useState();
  const [billcity,setBillcity] = useState();
  const [shipadd1,setShipadd1] = useState();
  const [shipadd2,setShipadd2] = useState();
  const [shipcity,setShipcity] = useState();
  const [customer,setCustomer] = useState();
  
  let [disable, setDisable] = useState(false);
  const [disableemail, setDisableEmail] = useState(true);
  var emailval = '';
  function checkBlank(){
    emailval = $('#uEmail').val();
    console.log(emailval)
    if(emailval.length > 0)
    {
      $('#checkout_email').val(emailval);
          setFinalemail(emailval)
          setDisable(true)
          setDisableEmail(false)
    }
    else
    {
      $('#uEmail').focus();
    }
    setCustomer(customer_id)
    // if (!emailCheckout ==''){
    //     setDisable(true)
    //     setDisableEmail(false)
    // }
  }

    var existing_cart = localStorage.getItem('productsbag') == null ? [] : JSON.parse(atob(localStorage.getItem('productsbag')));
     var total_price = 0;
    console.log(JSON.stringify(existing_cart))
    var ids=[] ;
    for(var i = 0; i <  existing_cart.length; i++)
    {
        if(existing_cart[i]['product_type']=='compound'){
            ids[i]=existing_cart[i]['ring']['id']+'#'+existing_cart[i]['diamond']['id']+'@'+existing_cart[i]['ring_size'];
        }else{
          
        }    
    }
    console.log('JSON')
    console.log(JSON.stringify(ids))
  /* const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setDisable(!disable);
  }; */
  let [billAdd, setBillAdd] = useState(false);
  let [checkout, setCheckout] = useState(false);
  //const showshipping = () => {
  function showshipping() {
      console.log("nilanjan")
      //$('#shipping').show();
      setBillAdd(!billAdd)
  }
  function handleChange(){
    var billi_address1 = $('#billi_address1').val();
    var billi_address2 = $('#billi_address2').val();
    var billi_city = $('#bill_city').val();

    var ship_address1 = $('#ship_address1').val();
    var ship_address2 = $('#ship_address2').val();
    var ship_city = $('#ship_city').val();


    setBilladd1(billi_address1)
    setBilladd2(billi_address2)
    setBillcity(billi_city)

    setShipadd1(ship_address1)
    setShipadd2(ship_address2)
    setShipcity(ship_city)
    //$('#billiaddress').val(billi_address1)
    console.log(billi_address1)
    setDisable(!disable)
    setCheckout(true)
  }
  return (
    <div>


      <section className="bg-light py-2">
        <div className="container">
          <div className="row pageTitle m0">
            <div className="col-12">
              <Link className="theme-color text-uppercase mb-2" to="/cart"><small className="d-flex align-items-center"><FaAngleLeft />&nbsp; Back to cart</small></Link>
              <h4 className="text-uppercase mb-0">SECURE CHECKOUT</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="cartList py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="row g-4">
                  <div className="col-12">
                      <div className="card shadow-default border-0">
                          <div className="card-body">
                            <h5 className='text-uppercase text-muted mb-2'>Contact information</h5>
                            {disableemail?
                              <>
                                  
                                  <p>Please provide an email address to receive your order confirmation email.</p>
                                  <div className="mb-3">
                                      <label htmlFor="uEmail" className="form-label">Email address</label>
                                      <input type="email" className="form-control" id="uEmail" name="uEmail" defaultValue={preemail} placeholder="name@example.com" onChange={(ev)=>{ setEmailCheckout(ev.target.value) }} />
                                  </div>
                                  <FormControlLabel className='' control={<Checkbox defaultChecked />} label="Sign up for special offers" />
                                  <small className="text-muted d-block mt-3 mb-4">* By signing up you confirm that you have read the <Link target="_blank" to="/privacy-policy/">Privacy Policy</Link> and agree that your email and the provided information will be collected and used by Baemont for the purposes of sending news, promotions and updates via email. You can withdraw your consent at any time by unsubscribing or contacting us via <Link data-ajax-mode="disabled" to="mailto:service@baemont.com">service@baemont.com</Link>.</small>
                                  <div className="d-flex justify-content-end">
                                    <Button className='btn btn-outline-default' onClick={checkBlank}>Continue</Button>
                                  </div>
                                  <hr />
                                  {/* <div className="d-flex justify-content-center mt-3">
                                    <b className='me-2'>OR</b> <Link to="/login">Create an account</Link>
                                  </div> */}


                              </>:''
                            }
                          </div>
                          
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="card shadow-default border-0">
                          <div className="card-body">
                              <h5 className='text-uppercase text-muted'>Shipping & Billing</h5>
                              { disable? 
                              <>
                              <h6 className="sub-title-block mt-5">DELIVERY ADDRESS</h6>
                              <p>Please provide an address where someone over 18 or older will be able to accept and sign for the delivery.</p>
                              <p><b>Unfortunately, we are unable to ship to P.O. boxes.</b></p>

                              <div className="row g-3">
                                {/* <div className="col-md-6">
                                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="inputPassword4" />
                                </div> */}
                                <div className="col-12">
                                  <label htmlFor="inputAddress" className="form-label">Address</label>
                                  <input type="text" className="form-control" id="billi_address1" name="billi_address1"  placeholder="1234 Main St" />
                                </div>
                                <div className="col-12">
                                  <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                  <input type="text" className="form-control" id="billi_address2" name="billi_address2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="inputCity" className="form-label">City</label>
                                  <input type="text" className="form-control" id="bill_city" name="bill_city"  />
                                </div>
                              </div>
                              
                              
                              <ul className="list-group list-group-flush border border-start-0 border-end-0 my-5">
                                <li className="list-group-item">
                                  <FormControlLabel
                                    className='ms-0 justify-content-between w-100'
                                    control={<Android12Switch defaultChecked />}
                                    defaultValue="0"
                                    labelPlacement="start"
                                    label="Include price on receipt"
                                  />
                                </li>
                                <li className="list-group-item">
                                  <FormControlLabel
                                    className='ms-0 justify-content-between w-100'
                                    control={<Android12Switch checked={billAdd} onChange={showshipping} />}
                                    //defaultValue="0"
                                    labelPlacement="start"
                                    label="Use same address for billing"
                                    //defaultChecked
                                    
                                  />
                                </li>
                              </ul>
                              {billAdd ?
                              (
                                <>
                                <div className="row g-3 my-auto">
                                  {/* <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                  </div> */}
                                  <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="ship_address1" name="ship_address1" placeholder="1234 Main St" />
                                  </div>
                                  <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input type="text" className="form-control" id="ship_address2" name='ship_address2' placeholder="Apartment, studio, or floor" />
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="ship_city" name="ship_city"  />
                                  </div>
                                </div>
                                
                                </>
                              )
                              :
                              ''}
                              <details className='mb-3'>
                                <summary className='mb-2'><small className='text-muted ms-2'>Have a Special Instructions?</small></summary>
                                <textarea className='form-control' rows="4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eveniet inventore! Dolores, quo repellendus molestiae maxime odit ad quisquam aspernatur eius ratione laborum voluptas a rerum error autem, recusandae dignissimos.</textarea>
                              </details>
                              <div className="d-flex justify-content-end">
                                <Button className='btn btn-outline-default' onClick={handleChange}>Continue</Button>
                              </div>
                              </>
                              :
                              ''
                              }
                          </div>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="card shadow-default border-0 user-payments">
                          <div className="card-body">
                            <div id="payCard" className="row d-flex justify-content-between">
                              <h5 className='text-uppercase text-muted col-md-8'>Payment Method</h5>
                                <div className="col-4 d-flex">
                                  <img src="assets/img/icon/pay/visa.svg" alt="" className="img-fluid icon-pay" />
                                  <img src="assets/img/icon/pay/master-card.svg" alt="" className="img-fluid icon-pay" />
                                  <img src="assets/img/icon/pay/american-express.svg" alt="" className="img-fluid icon-pay" />
                                  <img src="assets/img/icon/pay/discover.svg" alt="" className="img-fluid icon-pay" />
                                </div>
                            </div>
                              {checkout ?
                              (
                                <>
                                <p className='mt-5'>Please select a payment method.</p>
                                <form action="http://3.20.64.228/control_panel/api/payment/paynow" method="POST">
                                    
                                    <input type="hidden" name="params" defaultValue={JSON.stringify(ids)}></input>
                                    <input type="" name="email" id="checkout_email" defaultValue={finalemail} ></input>
                                    
                                    <input type="" name="billiaddress1" id="billiaddress1" defaultValue={billadd1} ></input>
                                    <input type="" name="billiaddress2" id="billiaddress2" defaultValue={billadd2} ></input>
                                    <input type="" name="billicity" id="billicity" defaultValue={billcity} ></input>

                                    <input type="" name="shipaddress1" id="shipaddress1" defaultValue={shipadd1} ></input>
                                    <input type="" name="shipaddress2" id="shipaddress2" defaultValue={shipadd2} ></input>
                                    <input type="" name="shipcity" id="shipcity" defaultValue={shipcity} ></input>
                                    <input type="" name="customer_id" id="customer_id" defaultValue={customer} ></input>
                                    <Button className='w-100 btn btn-outline-default flex-fill' type="submit">
                                          Pay Online
                                    </Button>
                                </form>
                                </>
                              )
                              :
                              ''}

                              {/* <Accordion expanded={expanded === 'payCard'} onChange={handleChange('payCard')}>
                                <AccordionSummary
                                  //expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1bh-content"
                                  //id="payCard"
                                >
                                  <div className="col-8">
                                    <h5 className="text-uppercase">Credit Card</h5>
                                    <p className="text-muted">Pay securely with our encrypted credit card form.</p>
                                  </div>
                                  <div className="col-4 d-flex">
                                    <img src="assets/img/icon/pay/visa.svg" alt="" className="img-fluid icon-pay" />
                                    <img src="assets/img/icon/pay/master-card.svg" alt="" className="img-fluid icon-pay" />
                                    <img src="assets/img/icon/pay/american-express.svg" alt="" className="img-fluid icon-pay" />
                                    <img src="assets/img/icon/pay/discover.svg" alt="" className="img-fluid icon-pay" />
                                  </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                  
                                  <form action="http://3.20.64.228/control_panel/api/payment/paynow" method="POST">
                                  
                                  <input type="hidden" name="params" defaultValue={JSON.stringify(ids)}></input>
                                  <button type="submit">
                                          Checkout
                                  </button>
                                  </form>
                                  
                                </AccordionDetails>
                              </Accordion> */}
      
                          </div>
                      </div>
                  </div>
              </div>
              
              
              
            </div>
            <div className="col-md-4">
              <CartSummary />
            </div>

          </div>
        </div>
      </section>



    </div>
  )
}

export default Checkout