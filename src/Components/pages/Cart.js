import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaPlus, FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { styled } from '@mui/material/styles';
//import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import List from '@mui/material/List';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartSummary from './CartSummary';






function Cart(props) {
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
        total_price += parseInt(existing_cart[i]['ring']['sellprice'])+parseInt(existing_cart[i]['diamond']['total_price']) + parseInt(ringsizeprice)
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
  const gotoring=(e,index) => {
      e.preventDefault();
      var id_array = JSON.parse(atob(localStorage.getItem("availableCartProductIds")));
      var item_array = JSON.parse(atob(localStorage.getItem("productsbag")));
      var strArray = id_array[index].split(":");
      
      localStorage.setItem("indexvalue",index)
      localStorage.setItem("diamondId",strArray[0])
      localStorage.setItem("ringId",strArray[1])
      localStorage.setItem("ringsize",item_array[index].ring_size)
      navigate('/settings-ring')
      //console.log(id_array[index])
    //console.log(index)
  }
  const gotodiamond=(e,index) => {
      e.preventDefault();
      var id_array = JSON.parse(atob(localStorage.getItem("availableCartProductIds")));
      var item_array = JSON.parse(atob(localStorage.getItem("productsbag")));
      var strArray = id_array[index].split(":");

      localStorage.setItem("indexvalue",index)
      localStorage.setItem("diamondId",strArray[0])
      localStorage.setItem("ringId",strArray[1])
      localStorage.setItem("ringsize",item_array[index].ring_size)
      navigate('/settings-diamond')
      //console.log(id_array[index])
    //console.log(index)
  }

  const gotoprodtls=(e,index) => {
    e.preventDefault();
    var id_array = JSON.parse(atob(localStorage.getItem("availableCartProductIds")));
    var item_array = JSON.parse(atob(localStorage.getItem("productsbag")));
    var strArray = id_array[index].split(":");

    localStorage.setItem("indexvalue",index)
    localStorage.setItem("diamondId",strArray[0])
    localStorage.setItem("ringId",strArray[1])
    localStorage.setItem("ringsize",item_array[index].ring_size)
    navigate('/product-details')
    //console.log(id_array[index])
  //console.log(index)
}


const swapImage = (_this) => {
  // console.log(_this);
  var shortImageUrl = _this.target.attributes.src.value;
  var prevElementImageSrc = _this.target.previousElementSibling.attributes.src.value;
  _this.target.attributes.src.value = prevElementImageSrc;
  _this.target.previousElementSibling.attributes.src.value = shortImageUrl;
}

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    
    <div>


  <section className="bg-light py-2">
    <div className="container">
      <div className="row pageTitle m0">
        <div className="col-12">
          <Link className="theme-color text-uppercase mb-2" to="/"><small className="d-flex align-items-center"><FaAngleLeft />&nbsp; Continue Shopping</small></Link>
          <h4 className="text-uppercase mb-0">My Cart <small className="text-muted text-capitalize">({existing_cart.length} Items)</small></h4>
        </div>
      </div>
    </div>
  </section>

<section className="cartList py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-8">
      {
        existing_cart.length>0?
        existing_cart.map( (item,index) => (
      
        <div key={item.ring.id} className="card shadow-default border-1 rounded-0 card-cartList mb-2">
          <div className="card-body">
            <div className="card-title">
              {/* <h4 className="title m-0">Engagement Ring</h4> */}
              <div className="actionBtn-group">
                {/* <button type="button" className="btn btn-sm btn-view" data-bs-toggle="tooltip" data-bs-placement="top" title="View Item" aria-label="view"><i className="fas fa-eye"></i></button> */}
                <button type="button" className="btn btn-sm btn-remove" onClick={()=>removecart(index)} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete from Cart" aria-label="remove"><i className="fas fa-trash-alt"></i></button>
              </div>
            </div>
            <hr className="w-100 mt-0"/>
            
            <div className="leftImg-wrapper">
              <img className="item-img img-fluid mask-1 rounded" src={"http://3.20.64.228/control_panel/uploads/product/"+item.ring.image} alt=""/>
              <img className="item-img img-fluid mask-2 rounded" onClick={(e)=>{
                swapImage(e);
              }} src={item.diamond.front_image_url} alt=""/>
            </div>
            
            <div className="dtlGroup flex-grow-1 ps-3">
              <ul className="dtl-list">
                <li className='mb-2'>
                  <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14.9 17.87"><path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path></svg>
                  <div className="d-flex">
                    <h5 className="item-title mb-0">{item.ring.product_name + " " }</h5>
                    <Link className='badge text-bg-dark align-self-end link-primary border ms-2' to='#' onClick={(e) => gotoring(e,index)}><i className='fas fa-file-pen'></i> Change</Link>
                  </div>
                  
                </li>
                <li>
                <svg className="card-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.94 12.42"><path d="M13.46,0h-11L0,3.16l8,9.26,8-9.26L13.46,0ZM8,9.55,2.62,3.38,3.77,1.76h8.4l1.15,1.62Z"></path></svg>
                  <span className="quantity">{item.diamond.carat + "Carat "+item.diamond.color + item.diamond.cut+ "Cut "+item.diamond.shape}</span>
                  {/* <Link to='/settings-diamond'>Change</Link> */}
                  <Link className='badge text-bg-dark link-primary border ms-2' to='#' onClick={(e) => gotodiamond(e,index)}> <i className='fas fa-file-pen'></i> Change</Link>
                </li>
                
                
                {/* <li>
                  <span className="sku text-muted">SKU S01W14H01W14</span>
                </li> */}
              </ul>
              <div className="item-price">
                {/* <span className="original-item-price">$780</span> */}
                <span className="toBpaid">RM {item.product_type=="compound"? parseInt(item.ring.sellprice)+parseInt(item.diamond.total_price) + parseInt(ringsizeprice):0 }</span>
              </div>
              <hr/>
              <div className="actionBtn-list d-flex">
                <button className="btn btn-outline-default flex-fill me-2" onClick={(e) => gotoprodtls(e,index)}>View Item</button>
                <button className="btn btn-default flex-fill">Select This Setting</button>
              </div>
            </div>
            
          </div>
        </div>
        )):''
      }
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

export default Cart