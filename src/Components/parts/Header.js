import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FaSearch, FaRegUser, FaRegHeart, FaCartArrowDown, FaTrash, FaAngleDown, FaTimes } from "react-icons/fa"
import { CgMenuLeft, IconName } from "react-icons/cg";

import Navmain from './Navmain'
import './NavStyle.css'
import MobileNav from './MobileNav'

function Header(props) {
    
    var customer_id = localStorage.getItem("customer_id");
    var firstname = localStorage.getItem("firstname");
    var lastname = localStorage.getItem("lastname");

    const [isActive, setActive] = useState("false")
    let[navstate, setNavstate] = useState("false")
    const handleToggle = () => {
        setActive(!isActive);
    };
    
    const navOpen = () => {
        setNavstate(!navstate);
    };
    const sessout=()=>{
        localStorage.removeItem("customer_id"); 
        localStorage.removeItem("firstname"); 
        localStorage.removeItem("lastname"); 
        localStorage.removeItem("email"); 
        window.location.href = window.location.origin + '/login';
    }
    // let [ringsizeprice,setRingsizeprice] = useState([0]);
    let [ringsizes,setRingsizes] = useState([0]);
    var ringsize = localStorage.getItem("ringsize");
    var ringsizeprice = 0; 
    if(ringsize>=13 && ringsize<=15.5){
        // setRingsizeprice(100);
        ringsizeprice = 100;
    }else if(ringsize>15.5 ){
        ringsizeprice = 400;
        // setRingsizeprice(400);
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

    if(props.cartitem.length > 0)
    {
        var existItem = localStorage.getItem('productsbag')== null ? [] : JSON.parse(atob(localStorage.getItem('productsbag')));
        var existItemIdArray = localStorage.getItem('availableCartProductIds') == null ? [] : JSON.parse(atob(localStorage.getItem('availableCartProductIds')));
        var get_index_value = localStorage.getItem('indexvalue');

        if(get_index_value == null)
        {
            var currentId = props.cartitem[props.cartitem.length - 1]['diamond']['id']+":"+props.cartitem[props.cartitem.length - 1]['ring']['id'];
            if(!existItemIdArray.includes(currentId))
            {
                existItem.push(props.cartitem[props.cartitem.length - 1]);
                existItemIdArray.push(currentId);
            }
        }
        else
        {
            console.log('from update');
            var toUpdateItemIndex = props.updateItem.index;
            var toUpdateItemObject = props.updateItem.item;
            console.log(existItem[get_index_value]);
            existItem[get_index_value] = toUpdateItemObject;
            console.log(existItem[get_index_value]);
            var currentId = toUpdateItemObject.diamond.id+":"+toUpdateItemObject.ring.id;
            existItemIdArray[get_index_value] = currentId;

            console.log(existItem);
            console.log(existItemIdArray);
            localStorage.removeItem("indexvalue");
        }
        
        localStorage.setItem("productsbag",btoa(JSON.stringify(existItem)));
        localStorage.setItem("availableCartProductIds",btoa(JSON.stringify(existItemIdArray)));
    }
    
    var existing_cart = localStorage.getItem('productsbag') == null ? [] : JSON.parse(atob(localStorage.getItem('productsbag')));
    var total_price = 0;
    for(var i = 0; i <  existing_cart.length; i++)
    {
    total_price += parseInt(existing_cart[i]['ring']['sellprice'])+parseFloat(existing_cart[i]['diamond']['total_price']) + parseInt(ringsizeprice)
    // console.log(total_price);
    }
    
    return (
        <header className="header_area">
            <div className="header_middel">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-4 col-md-4 drawSearch">
                            <div className="search_btn">
                                <Link className='btn py-2' to="#"><FaSearch fontSize="1em"/></Link>
                                <div className="dropdown_search">
                                    <input placeholder="Search product..." type="text" />
                                    <button type="submit"><FaSearch fontSize="1em"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-none col-md-1 col-2 navOn">
                            <button className='btn border' onClick={navOpen}><CgMenuLeft /></button>
                        </div>
                        <div className="col-lg-4 col-md-2 col-5 siteLogo">
                            <div className="logo p-0">
                                <Link to="/"><img src={window.location.origin + "/assets/img/logo.png"} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-5 rightAction">
                            <div className="middel_right">
                            <div className="dropdown">
                                <Link className="btn" to="#" role="button" id="userPan" data-bs-toggle="dropdown" aria-expanded="false"><FaRegUser /></Link>
                                <ul className="dropdown-menu mt-4" aria-labelledby="userPan">
                                <li><h6 className="dropdown-header">
                                {( customer_id!=null)?firstname+' '+lastname:''}    
                                </h6></li>
                                <li><hr className="dropdown-divider" /></li>
                                {
                               ( customer_id!=null) ? <li><Link className="dropdown-item" to="/account">My Account</Link></li>:
                                                     <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                }
                                
                                {
                               ( customer_id!=null) ? <li><Link className="dropdown-item" to="#">My Order</Link></li>:
                                                     ''
                                }
                                {
                               ( customer_id!=null) ? <li><hr className="dropdown-divider" /></li>:
                                                     ''
                                }
                                
                                {
                               ( customer_id!=null) ? <li><Link className="dropdown-item" onClick={sessout} to="#">Logout</Link></li>:
                                                     ''
                                }
                                
                                </ul>
                            </div>
                            <Link className="btn" to="/wishlist"><FaRegHeart /></Link>
                                <div className="cart_link">
                                    <button to="#" onClick={handleToggle}><FaCartArrowDown className='cartIcon' fontSize="2.2em" /><span className="cart_text_quantity">{total_price}</span></button>
                                    <span className="cart_quantity">{existing_cart.length}</span>
                                    <div className={ isActive ? "mini_cart" : 'mini_cart active'}>
                                        <div className="cart_close">
                                            <div className="cart_text">
                                                <h3>cart</h3>
                                            </div>
                                            <div className="mini_cart_close">
                                                <Link to="#" onClick={handleToggle}><FaTimes /></Link>
                                            </div>
                                        </div>
                                            {
                                                
                                            //total_price =props.cartitem.product_type=="compound" ?  
                                            existing_cart.length>0?
                                                existing_cart.map( (item,index) => (
                                                    <>
                                                        
                                                        <div className="cart_item">
                                                            <div className="cart_img">
                                                                <Link to="#"><img className='img-fluid' src={"http://3.20.64.228/control_panel/uploads/product/"+item.ring.image} alt="" /></Link>
                                                            </div>
                                                            <div className="cart_info">
                                                                <Link to="#">{item.ring.product_name + " " }</Link>
                                                                <span className="quantity">{item.diamond.carat + "Carat "+item.diamond.color + item.diamond.cut+ "Cut "+item.diamond.shape}</span>
                                                                <span className="price_cart">RM {item.product_type=="compound"? parseInt(item.ring.sellprice)+parseInt(item.diamond.total_price) + parseInt(ringsizeprice):0 } </span>
                                                            </div>
                                                            <div className="cart_remove">
                                                                {/* <Link to="#" onClick={()=>removecart(index)}><FaTrash /></Link> */}
                                                                <button onClick={()=>removecart(index)}><FaTrash /></button>
                                                            </div>
                                                        </div>
                                                        
                                                    </>
                                                )):'' 

                                            }
                                        


                                        {/* <div className="cart_item">
                                            <div className="cart_img">
                                                <Link to="#"><img className='img-fluid' src="assets/img/s-product/product2.jpg" alt="" /></Link>
                                            </div>
                                            <div className="cart_info">
                                                <Link to="#">Natural passages</Link>
                                                <span className="quantity">Qty: 1</span>
                                                <span className="price_cart">$69.00</span>
                                            </div>
                                            <div className="cart_remove">
                                                <Link to="#"><FaTrash /></Link>
                                            </div>
                                        </div> */}
                                        <div className="cart_total">
                                            <span>Subtotal:</span>
                                            <span>{total_price}</span>
                                        </div>
                                        <div className="mini_cart_footer">
                                            <div className="cart_button view_cart">
                                                <Link to="cart">View cart</Link>
                                            </div>
                                            <div className="cart_button checkout">
                                                <Link className="active" to="checkout">Checkout</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_bottom sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="main_menu_inner">
                                <div className="logo_sticky">
                                    <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
                                </div>
                                <div className="main_menu"> 
                                    <Navmain />

                                    <div className="mobile-nav-wrapper" role="navigation">
                                        <aside className={ navstate ? "off-canvas-wrapper" : "off-canvas-wrapper active"}>
                                        <div className="off-canvas-inner">
                                            <div className="off-canvas-overlay"></div>
                                                <div className="off-canvas-content">
                                                    <div className="off-canvas-header">
                                                        <div className="close-action">
                                                            <button className="btn-menu-close d-flex align-items-center justify-content-between" onClick={navOpen}>Close menu<FaTimes /></button>
                                                        </div>
                                                    </div>
                                                    <MobileNav />
                                                </div>
                                            </div>
                                        </aside>
                                    </div>

            
                                </div>
                            </div> 
                        </div>
                    
                    </div>
                </div>
            </div>
        </header>
    
    )
    
}

export default Header
