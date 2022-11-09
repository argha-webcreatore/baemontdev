import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom'

import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaPlus, FaTimes } from "react-icons/fa"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { PropTypes } from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';


import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./Prodslide.css"
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./Cart"
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"
import GoToTop from '../parts/GoToTop'



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function ProdDtls(props) {
    
    //console.log(props.val+"Hello would")
    let [responsedata,setResponsedata] = useState([]);
    let [responsedataring,setResponsedataring] = useState([]);
    let [thumbsSwiper, setThumbsSwiper] = useState();
    const [ringsize, setRingsize] = React.useState('');
    const handleChange = (event) => {
        setRingsize(event.target.value);
    };
    let [rating, setRating] = useState(null);
    let [hover, setHover] = useState(null);
    let [isActive, setActive] = useState("false");
    let wishToggle = () => {
        setActive(!isActive);
    }
    let [ringtext,setRingtext] = useState([]);
    let [ringfont,setRingfont] = useState([]);
    let [ringsizeprice,setRingsizeprice] = useState([0]);
    let [ringsizes,setRingsizes] = useState([0]);
    // const { addItem } = useCart();
    const [cart,setCart] = useState([]);
    const [showCart,setShowCart] = useState(false)
    let navigate = useNavigate()
    var get_index_value = localStorage.getItem('indexvalue');
    const addToCart=(productdiamond,productring=null) => {
        let selectedChkbox = {
            diamond : productdiamond,
            ring : productring,
            product_type : "compound",
            ring_size : localStorage.getItem("ringsize"),
            diamondId : localStorage.getItem("diamondId"),
            ringId : localStorage.getItem("ringId"),
        };
        if(get_index_value == null)
        {
            props.setCartItem([...props.cartVal, selectedChkbox])
        }
        else
        {
            var updateItem = {
                index : get_index_value,
                item : selectedChkbox
            }
            console.log(updateItem);
            props.updateCartItem(updateItem);
        }

        
        localStorage.removeItem("ringsize")
        localStorage.removeItem("diamondId")
        localStorage.removeItem("ringId")
        navigate('/cart')
        
    }

    useEffect(()=>{
        getproductdetails();
        getringtdetails();
        var inceptionText = localStorage.getItem("ringText");
        var inceptionringfont = localStorage.getItem("ringfont");
        var ringsize = localStorage.getItem("ringsize");
        var get_index_value = localStorage.getItem("indexvalue");
        setRingsizes(ringsize);
        if(ringsize>=13 && ringsize<=15.5){
            console.log("nilanjan")
            setRingsizeprice(100);
        }else if(ringsize>15.5 ){
            setRingsizeprice(400);
        }
        setRingtext(inceptionText);
        setRingfont(inceptionringfont);
    },[])
    //Tabs
    const [value, setValue] = React.useState(0);

    const onTabChange = (event, newValue) => {
        setValue(newValue);
    };
    // end Tabs

    // Start Custom Tooltip
    const [openTooltip, setTooltipOpen] = React.useState(false);
    let [fontInscrip, setFontInscrip] = useState(false);
    const handleTooltipClose = (e) => {
        e.stopPropagation();
        setTooltipOpen(false);
    };
    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };
    let fontToggle = () => {
        setFontInscrip(!fontInscrip);
    }


    async function getproductdetails(){
        var formData = new FormData();
        var id = localStorage.getItem("diamondId");
        var requestdata = {
            id: id,
        };
        formData.append('json1', JSON.stringify(requestdata));
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify({ product_id: id })
        };
        var resp = await fetch("http://3.20.64.228/control_panel/api/server/product_details",requestOptions);
        var data = await resp.json();
        setResponsedata(data.data);
    } 
    async function getringtdetails(){
        var formData = new FormData();
        var id = localStorage.getItem("ringId");
        var requestdata = {
            id: id,
        };
        formData.append('json1', JSON.stringify(requestdata));

        

        var requestOptions = {
            method: 'POST',
            body: formData
        };
        var resp = await fetch("http://3.20.64.228/control_panel/api/server/ring_details",requestOptions);
        var data = await resp.json();
        setResponsedataring(data.data);
    } 
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 50,
          minWidth: 25 + 'em',
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));
      var ringprice = 0;
      var diamondprice = 0;
      var old_diamond_price = 0;
    if(responsedataring.length>0){
        ringprice = parseInt(responsedataring['0'].sellprice);
    }
    if(responsedata.length>0){
        diamondprice = parseFloat(responsedata.total_price);
        console.log(responsedata.total_price+"diamondprice ")
        old_diamond_price = responsedata.price_pc;
    }
    // End Custom Tooltip
    var total_price = parseInt(ringprice)+parseFloat(diamondprice) + parseInt(ringsizeprice);
    const metal_arr = [];
    metal_arr["18k_white_gold"] = "18K White Gold";
    metal_arr["18k_yellow_gold"] = "18K Yellow Gold";
    metal_arr["18k_rose_gold"] = "18K Rose Gold";
    metal_arr["platinum"] = "Platinum";
    
  return (
    <>
      <section className='filter-sec'>
        <div className="container">

            <div className="row">
                <div className="col-12">
                    
                    <div className="funnelCenter" pagetype="GalleryPage">
                        <div className="funnelContainer" data-qa="funnel_container">
                            <div className="funnelPart--Omb4B stepOne--aNhFm" data-qa="funnel_step_stone">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI stepOne--RZqJG">
                                        <div className="stepNumber--Vl0cC">1</div>
                                        <div className="stepTitle--VTN7H" data-qa="funnel_step_title_stone" >
                                            <div className="stepTitleFirst--WuFot">Choose a</div>
                                            <div className="stepTitleSecond--I3t9t" data-qa="funnel_step_title_stone">diamond</div>
                                        </div>
                                    </div>
                                    <div className="stepData--lAuzk stone--biv4R">
                                        <div className="funnelTypeIconWrapper--ormUy">
                                            <span >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.94 12.42">
                                                    <path d="M13.46,0h-11L0,3.16l8,9.26,8-9.26L13.46,0ZM8,9.55,2.62,3.38,3.77,1.76h8.4l1.15,1.62Z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="funnelRightChevron--pcUVq"></div>
                                </div>
                            </div>
                            <div className="funnelPart--Omb4B stepTwo--q5xNF" data-qa="funnel_step_jewel">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI stepTwo--IYEDY">
                                        <div className="stepNumber--Vl0cC">2</div>
                                        <div className="stepTitle--VTN7H" data-qa="funnel_step_title_jewel" >
                                            <div className="stepTitleFirst--WuFot">Choose a</div>
                                            <div className="stepTitleSecond--I3t9t" data-qa="funnel_step_title_jewel">setting</div>
                                        </div>
                                    </div>
                                    <div className="stepData--lAuzk stepTwo--cP9f4">
                                        <div className="funnelTypeIconWrapper--ormUy">
                                            <span >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 17.87">
                                                    <path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="funnelRightChevron--pcUVq"></div>
                                </div>
                            </div>
                            <div className="funnelPart--Omb4B active--bcso0 stepThree--KVTLO notAvailable--_EGWR" data-qa="funnel_step_complete">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI">
                                        <div className="stepNumber--Vl0cC">3</div>
                                        <div className="stepTitle--VTN7H" data-qa="funnel_step_title_complete" >
                                            <div className="stepTitleFirst--WuFot">Complete</div>
                                            <div className="stepTitleSecond--I3t9t" data-qa="funnel_step_title_complete">ring</div>
                                        </div>
                                    </div>
                                    <div className="completeStepData--p92Ok">
                                        <div className="funnelTypeIconWrapper--Y0LBw">
                                            <span >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30">
                                                        <g>
                                                            <g>
                                                                <path fill="#c6c8ce" d="M17.27 19.336c0-4.13-3.286-7.477-7.34-7.477-4.053 0-7.34 3.348-7.34 7.477 0 4.13 3.287 7.477 7.34 7.477 4.054 0 7.34-3.347 7.34-7.477zM12.416 9.204c4.257 1.152 7.4 5.166 7.401 9.946 0 5.68-4.436 10.285-9.909 10.285-5.472 0-9.908-4.605-9.908-10.285 0-4.913 3.32-9.019 7.759-10.038L4.896 5.906l1.28-1.523 3.915 4.079 3.912-4.08 1.359 1.524-2.945 3.298zm-2.326-1.92L4.91 2.25 6.523.53h7.136l1.611 1.718z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                    </div>
                                    <div className="funnelRightChevron--pcUVq"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row g-4">
            <div className="col-md-7">
                    <div className="row g-1">
                        <div className="col-2">
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                direction={"vertical"}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiperLeft"
                            >
                                
                            </Swiper>
                        </div>
                        <div className="col-10">
                            <Swiper
                                style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {
                                 responsedataring.length>0?   
                                responsedataring.map( (jd) => (
                                    <>
                                    <SwiperSlide key={jd.img_id}>
                                    <img src={"http://3.20.64.228/control_panel/uploads/product/"+jd.image} alt='' />
                                    </SwiperSlide>
                                    {/* <SwiperSlide>
                                    <img src="/assets/img/prod-ring/Solitaire-Estella-2.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img src="/assets/img/prod-ring/Solitaire-Estella-3.png" alt='' />
                                    </SwiperSlide> */}
                                    </>
                                
                                )):''
                                }
                                
                            </Swiper>
                        </div>
                    </div>
                    
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiperBottom"
                    >
                         {  responsedataring.length>0?
                                responsedataring.map( (jd) => (
                                    <>
                                    <SwiperSlide key={jd.img_id}>
                                    <img src={"http://3.20.64.228/control_panel/uploads/product/"+jd.image} alt='' />
                                    </SwiperSlide>
                                    {/* <SwiperSlide>
                                    <img src="/assets/img/prod-ring/Solitaire-Estella-2.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img src="/assets/img/prod-ring/Solitaire-Estella-3.png" alt='' />
                                    </SwiperSlide> */}
                                    </>
                                
                                )):''
                        }
                        
                    </Swiper>
                </div>
                <div className="col-md-5 prod-dtlCont">
                    
                    <h4 className='fw-normal'>{
                    responsedataring.length>0?
                    responsedataring['0'].product_name
                    :''
                    }</h4>
                    <p className="text-muted">{responsedata.carat} Carat Weight</p>
                    <ul className="choosenList-dtl">
                        <li className='choosenItem'>
                            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14.9 17.87"><path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path></svg>
                            <div className="main-cont">
                                <Link className="item-title" to='/'>{responsedataring.length > 0 ?metal_arr[responsedataring['0'].metal_type] +" "+ responsedataring['0'].width +" mm Comfort Fit Engagement Ring":''}</Link>
                                <div className="itemDtl-customize">
                                    {/* <span className='sku'>SKU {responsedataring.length > 0 ? responsedataring['0'].sku_code:'' } </span> */}
                                    <span className="price">
                                        {/* <span className="price-lineThrough">$570</span> */}
                                        <span className="buy-price">RM {ringprice}</span>
                                    </span>
                                    <Link to='/settings-ring'>Change</Link>
                                </div>
                            </div>
                            
                        </li>
                        <li className='choosenItem'>
                            <svg className="card-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.94 12.42"><path d="M13.46,0h-11L0,3.16l8,9.26,8-9.26L13.46,0ZM8,9.55,2.62,3.38,3.77,1.76h8.4l1.15,1.62Z"></path></svg>
                            <div className="main-cont">
                                <Link className="item-title" to='/'>Lab-Created {responsedata.carat} Carat {responsedata.color} {responsedata.cut} Cut {responsedata.shape} Diamond</Link>
                                <div className="itemDtl-customize">
                                    {/* <span className='sku'>SKU 14487390</span> */}
                                    <span className="price">
                                        <span className="price-lineThrough">RM {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(old_diamond_price)}</span>
                                        {/* <span className="buy-price">$1,440</span> */}
                                        <span className="buy-price">RM {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(diamondprice)}</span>
                                    </span>
                                    <Link to='/settings-diamond'>Change</Link>
                                </div>
                            </div>
                            
                        </li>
                        <li className='choosenItem'>
                            <div className="itemDtl-customize">
                                <span className="price">
                                    
                                    {/* <span className="buy-price">$1,440</span> */}
                                    <span className={"inscriptionText "+ringfont}>Incription: {ringtext}</span>
                                </span>
                            </div>
                        </li>
                        <li className='choosenItem'>
                            <div className="itemDtl-customize">
                                <span className="price">
                                    
                                    {/* <span className="buy-price">$1,440</span> */}
                                    <span className={"inscriptionText "+ringfont}>Ring Size: {ringsizes} </span>
                                    <span className=" buy-price">RM {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 6 }).format(ringsizeprice)}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    
                    
                    <div className="pricePack">
                        <div className="total">
                            {/* <span className="old-price">$2,010</span> */}
                            <span className="now-price">RM {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(total_price)}</span>
                        </div>
                        <span>(Subtotal)</span>
                    </div>
                    {/* <Cart cart={cart}></Cart> */}
                    <div className="d-flex">
                        {/* <Link className="btn btn-primary text-uppercase flex-fill me-2" to='#' >Add To Cart</Link> */}
                        <button className="btn btn-primary text-uppercase flex-fill me-2" onClick={()=>addToCart(responsedata,responsedataring[0])}>{get_index_value==null?"Add to cart":'Update cart'}</button>
                        <button  className="btn btn-outline-dark btn-addWishlist" onClick={wishToggle}>
                            { isActive ? 
                                <FaRegHeart />
                                :
                                <FaHeart color={'#8b2845'} />
                            }
                        </button>
                    </div>
                    
                </div>
            </div>

            {/* <div className="row mt-4">
                <div className="col-12">
                    <h5>Product Description</h5>
                    <span className="sku text-muted mb-3 d-block">SKU 17740W14</span>
                    <p>Classic and refined, this piece offers understated elegance and unsurpassed comfort while highlighting the center diamond or gemstone you select. Designed with smaller carat weight diamonds in mind, it is sophisticated and petite without sacrificing stability.</p>
                </div>
            </div> */}

            <div className="row mt-4">
                <div className="col-12">
                    <Box className='infos' sx={{ width: '100%' }}>
                        <Box className='info-tabs' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={onTabChange} aria-label="basic tabs example">
                                <Tab label="Product Details" {...a11yProps(0)} />
                                <Tab label="Can Be Set With" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel className='info-dtls' value={value} index={0}>
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="d-block mb-2">Ring Information</span>
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Metal</div>
                                            <div className="cell">{responsedataring.length > 0 ? responsedataring['0'].metal_type:'' }</div>
                                        </li>
                                        <li>
                                            <div className="cell">Width</div>
                                            <div className="cell">{responsedataring.length > 0 ? responsedataring['0'].width:'' }</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <span className="d-block mb-2">Diamond</span>
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Shape</div>
                                            <div className="cell">{responsedata.length >0?responsedata.shape:''}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Quantity</div>
                                            <div className="cell">{responsedata.length >0?responsedata.stock:''}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Total Carat</div>
                                            <div className="cell">{responsedata.length >0?responsedata.carat:''}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Color</div>
                                            <div className="cell">{responsedata.length >0?responsedata.color:''}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Clarity</div>
                                            <div className="cell">{responsedata.length >0?responsedata.clarity:''}</div>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                            </div>
                        </TabPanel>
                        <TabPanel className='info-dtls' value={value} index={1}>
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <span className="d-block mb-2">Ring Information</span> */}
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Round</div>
                                            <div className="cell">0.50 - 6.00</div>
                                        </li>
                                        <li>
                                            <div className="cell">Oval</div>
                                            <div className="cell">0.50 - 6.00</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
            <div className='offer-banner'>
            <div className='row'>
                <div className='col-md-8 offer-text'>
                    <h4>Your Order</h4>
                    <h1>Includes</h1>
                    <div className='d-flex offer-points'>
                    <ul>
                        <li>BAEMONT Exclusive Gift Packaging</li>
                        
                        <li>Diamond Certificate of Authenticity</li>
                        <li>Product Lifetime Warranty</li>
                    </ul>
                    <ul className='mx-5'>
                        <li>Lifetime Upgrade</li>
                        <li>Free Engraving</li>
                        <li>Free Shipping (Local Orders)</li>
                    </ul>
                    </div>
                </div>
                <div className='col-md-4 offer-img'>
                    <img className='img-fluid' src='/assets/img/ring_engagement.png' alt='' />
                </div>
            </div>
            </div>

        </div>
      </section>
      <GoToTop />
    </>
  )
}

export default ProdDtls
