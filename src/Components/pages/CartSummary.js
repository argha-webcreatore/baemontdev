import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaPlus, FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'





const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    borderLeft: '0',
    borderRight: '0',
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<FaAngleRight sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'transparent'
        : 'transparent',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    padding: 0,
    borderBottom: 0
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    //padding: theme.spacing(2),
    //borderTop: '1px solid rgba(0, 0, 0, .125)',
    //paddingRight: 0,
    //paddingLeft: 0,
  }));



function CartSummary(props) {


    //console.log(props.cartitem)
    var existing_cart = localStorage.getItem('productsbag') == null ? [] : JSON.parse(atob(localStorage.getItem('productsbag')));
        var total_price = 0;
        let navigate = useNavigate()
        for(var i = 0; i <  existing_cart.length; i++)
        {
        var ringsizeprice = 0; 
        if(existing_cart[i]['ringsize']>=13 && existing_cart[i]['ringsize']<=15.5){
            //setRingsizeprice(100);
            ringsizeprice = 100;
        }else if(existing_cart[i]['ringsize']>15.5 ){
            ringsizeprice = 400;
        }
            total_price += parseInt(existing_cart[i]['ring']['sellprice'])+parseFloat(existing_cart[i]['diamond']['total_price']) + parseInt(ringsizeprice)
        }
        const removecart = (index) => {
        //console.log(index)
        var available_in_cart = JSON.parse(atob(localStorage.getItem("productsbag")));
        var available_in_cart_id = JSON.parse(atob(localStorage.getItem("availableCartProductIds")));
        
        available_in_cart[index] = "";
        available_in_cart_id[index] = "";
        
        var tempArrayproduct = available_in_cart.filter(function (el) {
            return el != '';
        });
        var tempArrayproductid = available_in_cart_id.filter(function (el) {
            return el != '';
        });
        if(tempArrayproduct.length > 0)
        {
            localStorage.setItem("productsbag",btoa(JSON.stringify(tempArrayproduct)));
        }
        else
        {
            localStorage.setItem("productsbag",btoa(JSON.stringify([])));
        }
        if(tempArrayproductid.length > 0)
        {
            localStorage.setItem("availableCartProductIds",btoa(JSON.stringify(tempArrayproductid)));
        }
        else
        {
            localStorage.setItem("availableCartProductIds",btoa(JSON.stringify([])));
        }

        props.setCartItem(tempArrayproduct);
    }


  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <>
        <div className="card shadow border-0 card-summary">
          <div className="card-body">
            <List className="p-0">
              <li className="d-flex justify-content-between align-items-start mb-2">
                <div className="me-auto">
                  Subtotal
                </div>
                <span className="">{total_price}</span>
              </li>
              <li className="d-flex justify-content-between align-items-start mb-2">
                <div className="me-auto">
                  Mounting fee
                </div>
                <span className="">Free</span>
              </li>
              <li className="d-flex justify-content-between align-items-start mb-2">
                <div className="me-auto">
                  US & Int. Shipping
                </div>
                <span className="">Free</span>
              </li>
              <li className="my-4">

                <Accordion expanded={expanded === 'promoCode'} onChange={handleChange('promoCode')}>
                  <AccordionSummary aria-controls="promoCoded-content" id="promoCoded-header">
                    <Typography>Promo Code</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <small className='text-muted d-block mb-2'>Entering a new promo code will <b>replace</b> the current <b>25% Off sale discount</b>.</small>

                    <div className="d-flex">
                      <input className="form-control me-2" type="text" name="" id="" />
                      <button className="btn btn-primary">Apply</button>
                    </div>
                  </AccordionDetails>
                </Accordion>
              
              </li>
              <li className="d-flex justify-content-between align-items-start mb-3">
                <div className="me-auto">
                  <div className="fw-bold fs-5 text-muted">Total</div>
                </div>
                <span className="fw-bold fs-5 text-muted">{total_price}</span>
              </li>
              <li className="d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div className=""><span className="text-muted">or</span> $634.50 x 6</div>
                  Interest Free Payments <Button>Learn More</Button>
                </div>
                <span className=""></span>
              </li>
              <li><hr /></li>
              <li className="d-flex flex-column">
                <Button className="btn btn-outline-default flex-fill mb-2" href='/checkout'>Checkout</Button>
                <Link className="btn btn-outline-default flex-fill mb-2" to={'/checkout'}>Checkout</Link>
                {/* <span className='d-block text-center'>OR</span>
                <button className="btn btn-default flex-fill fw-bold mt-2">PayPal</button> */}
              </li>
              
              {/* <li className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
              </li> */}
            </List>
            
          </div>
        </div>
    </>
  )
}

export default CartSummary
