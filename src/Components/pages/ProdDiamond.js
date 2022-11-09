import React, { useRef, useState, useEffect } from 'react'
import { Link, useParams, useSearchParams, useNavigate,Navigate,Route,useLocation } from 'react-router-dom'

import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaTimes } from "react-icons/fa"
import { Modal, Card, CardActions, CardContent, Tab, Tabs, Typography, Box } from '@mui/material';

import { PropTypes } from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./Prodslide.css"
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"
import Settings from './Settings';
import GoToTop from '../parts/GoToTop'
///import {Redirect} from 'react-router-dom';



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


  let modalDesign = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 60 + '%',
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 1.5,
    pt: 2,
    px: 4,
    pb: 3,
  }

  const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

function ProdDiamond() {
    const {id} = useParams();
    
    let [responsedata,setResponsedata] = useState([]);
    var formData = new FormData();
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
    let [tabtext2, setTabtext2] = useState([]);
    let [tabcss2, setTabcss2] = useState([]);
    

    let [tabtext1, setTabtext1] = useState([]);
    let [tabcss1, setTabcss1] = useState([]);


    useEffect(()=>{
        getproductdetails();
        var ringdata = localStorage.getItem("ringId");
        if(ringdata!=null){
            setTabtext1("SETTING");  
            setTabtext2("DIAMOND"); 
            setTabcss1("active--bcso0"); 
            setTabcss2(""); 
        }else{
            setTabtext2("SETTING");  
            setTabtext1("DIAMOND");  
            setTabcss1(""); 
            setTabcss2("active--bcso0"); 
        }
    },[responsedata])
    //Tabs
    const [value, setValue] = React.useState(0);

    const onTabChange = (event, newValue) => {
        setValue(newValue);
    };
    // end Tabs

    
    //Start Modal
    const [open, setModalstate] = React.useState(false);
    const modalOpen = () => {
        setModalstate(true);
    };
    const modalClose = () => {
        setModalstate(false);
    };
    //End Modal

    async function getproductdetails(){
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
        // console.log(data);
        //console.log("Nilanjan");
        setResponsedata(data.data);
        //console.log(responsedata);
        // console.log(data.data);
    }
  let navigate = useNavigate()
  const selectDiamond = (value) => {
        localStorage.setItem("diamondId",value);
        console.log(value);
        var ringdata = localStorage.getItem("ringId");
        console.log(ringdata)
        if(ringdata!=null){
            navigate('/product-details');
        }else{
            navigate('/settings-ring');
        }
       
        //navigate('/settings-ring');
        // navigate(path)
  };
  return (
    <>
        <Modal
            className='modalStep'
            open={open}
            onClose={modalClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...modalDesign, width: 65 + '%', paddingInline: 2 +'em' }}>
                <div className="position-relative">
                    <FaTimes className='modal-close' onClick={modalClose} />
                </div>
                <div className="text-center">
                    <h4 id="parent-modal-title" className='text-uppercase fw-normal'>Move to the next step</h4>
                    <p id="parent-modal-description" className='mb-5'>
                        Choose one of the options below
                    </p>
                </div>
                <div className="d-flex flex-column">
                    <Link to='/settings-ring' className="btn rounded-0 btn-dark text-uppercase mb-3">Add A Ring Setting</Link>
                    <Link to='/settings-ring' className="btn rounded-0 btn-outline-dark text-uppercase mb-3">Add A Pendant</Link>
                    <button className="btn rounded-0 btn-outline-dark text-uppercase" disabled='disabled'>Add To Cart</button>
                </div>
                
            </Box>
        </Modal>
      <section className='filter-sec'>
        <div className="container">

            <div className="row">
                <div className="col-12">
                    
                    <div className="funnelCenter" pagetype="GalleryPage">
                        <div className="funnelContainer" data-qa="funnel_container">
                            <div className={"funnelPart--Omb4B  stepOne--aNhFm " + tabcss2} data-qa="funnel_step_stone">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI  stepOne--RZqJG">
                                        <div className="stepNumber--Vl0cC">1</div>
                                        <div className="stepTitle--VTN7H" data-qa="funnel_step_title_stone" >
                                            <div className="stepTitleFirst--WuFot">Choose a</div>
                                            <div className="stepTitleSecond--I3t9t" data-qa="funnel_step_title_stone">{tabtext1}</div>
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
                            <div className={"funnelPart--Omb4B stepTwo--q5xNF "+tabcss1} data-qa="funnel_step_jewel">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI stepTwo--IYEDY">
                                        <div className="stepNumber--Vl0cC">2</div>
                                        <div className="stepTitle--VTN7H" data-qa="funnel_step_title_jewel" >
                                            <div className="stepTitleFirst--WuFot">Choose a</div>
                                            <div className="stepTitleSecond--I3t9t" data-qa="funnel_step_title_jewel">{tabtext2}</div>
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
                            <div className="funnelPart--Omb4B stepThree--KVTLO notAvailable--_EGWR" data-qa="funnel_step_complete">
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
                                <SwiperSlide>
                                <img src={responsedata.front_image_url} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={responsedata.lab_pdf} alt='' />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <video>
                                        <source src={responsedata.video_url} type="video/mp4"/>
                                    </video>
                                </SwiperSlide>   
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
                                <SwiperSlide>
                                <img src={responsedata.front_image_url} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={responsedata.lab_pdf} alt='' />
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <video>
                                        <source src={responsedata.video_url} type="video/mp4"/>
                                    </video>
                                </SwiperSlide>   
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
                        <SwiperSlide>
                        <img src={responsedata.front_image_url} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={responsedata.lab_pdf} alt='' />
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <video>
                                <source src={responsedata.video_url}  type="video/mp4"/>
                            </video>
                        </SwiperSlide>   
                    </Swiper>
                </div>
                <div className="col-md-5 prod-dtlCont">
                    
                    <h4 className='fw-normal'>{responsedata.shape} | {responsedata.carat}ct | {responsedata.color} | {responsedata.clarity} {responsedata.cut} </h4>
                    <p className="text-muted">{responsedata.carat} Total Carat Weight</p>
                    

                    <div className="pricePack">
                        <div className="total">
                            <span className="old-price">RM {responsedata.price_pc}</span>
                            <span className="now-price">RM {responsedata.total_price}</span>
                        </div>
                        <span>(Subtotal)</span>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary text-uppercase flex-fill text-uppercase me-2"   value={responsedata.id} onClick={e => selectDiamond(e.target.value)}>Select this Diamond</button>
                        <button className="btn btn-outline-dark btn-addWishlist" onClick={wishToggle}>
                            { isActive ? 
                                <FaRegHeart />
                                :
                                <FaHeart color={'#8b2845'} />
                            }
                        </button>
                    </div>
                    <div className="d-block mt-3">
                        <Link to='/product-details'>Go to review</Link>
                    </div>
                    
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <h5>Product Description</h5>
                    <span className="sku text-muted mb-3 d-block">SKU {responsedata.sku}</span>
                    {/* <p>Classic and refined, this piece offers understated elegance and unsurpassed comfort while highlighting the center diamond or gemstone you select. Designed with smaller carat weight diamonds in mind, it is sophisticated and petite without sacrificing stability.</p> */}
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <Box className='infos' sx={{ width: '100%' }}>
                        <Box className='info-tabs' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={onTabChange} aria-label="basic tabs example">
                                <Tab label="Product Specifications" {...a11yProps(0)} />
                                <Tab label="Product Parameters" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel className='info-dtls' value={value} index={0}>
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="d-block mb-2">Diamond</span>
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Shape</div>
                                            <div className="cell">{responsedata.shape}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Quantity</div>
                                            <div className="cell">{responsedata.instock}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Total Carat</div>
                                            <div className="cell">{responsedata.carat}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Color</div>
                                            <div className="cell">{responsedata.color}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Clarity</div>
                                            <div className="cell">{responsedata.clarity}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <span className="d-block mb-2"><br />{/* Ring Information */}</span>
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Cut</div>
                                            <div className="cell">{responsedata.cut}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Polish</div>
                                            <div className="cell">{responsedata.polish}</div>
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
                                            <div className="cell">Measurement</div>
                                            <div className="cell">L: {responsedata.length} x W: {responsedata.width} x H: {responsedata.height}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Depth<b>(%)</b></div>
                                            <div className="cell">{responsedata.depth}%</div>
                                        </li>
                                        <li>
                                            <div className="cell">Table<b>(%)</b></div>
                                            <div className="cell">{responsedata.table_value}%</div>
                                        </li>
                                        <li>
                                            <div className="cell">Girdle</div>
                                            <div className="cell">{responsedata.gridle_min}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Crown Angle</div>
                                            <div className="cell">{responsedata.crown_angle}°</div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="col-md-6">
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">S Length</div>
                                            <div className="cell">{responsedata.length}</div>
                                        </li>
                                        <li>
                                            <div className="cell">Pavilion Angle</div>
                                            <div className="cell">{responsedata.pavilion_angle}°</div>
                                        </li>
                                        <li>
                                            <div className="cell">Pavilion Height</div>
                                            <div className="cell">{responsedata.pavillion_height}°</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Card sx={{ borderRadius: 0, }}>
                        <Typography sx={{ fontSize: 15, fontWeight: '500', textTransform: 'uppercase', backgroundColor: '#8a2846', color: '#fff', px: 2.5, py: 2 }} color="text.secondary" gutterBottom>
                            Our Assurance
                        </Typography>
                        <CardContent>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <h5>GIA Certified Diamonds</h5>
                                    <Typography sx={{ fontSize: 14, color: '#393939' }}>
                                        All BAEMONT diamonds are graded and certified by GIA (Gemological Institute of America). GIA is a world-renowned institute that first established the standards of grading diamonds using the 4Cs.
                                    </Typography>
                                </div>
                                <div className="col-md-6">
                                    <h5>Price Matching (Diamonds Only)</h5>
                                    <Typography sx={{ fontSize: 14, color: '#393939' }}>
                                    We believe that our diamond prices are very competitive in our markets. If found otherwise, we are happy to review and offer to match the price. Please reach out to our team at <ButtonMailto label='hello@baemont.com' mailto='mailto:hello@baemont.com' />.
                                    </Typography>
                                </div>
                                <div className="col-md-6">
                                    <h5>Quality and Craftmanship</h5>
                                    <Typography sx={{ fontSize: 14, color: '#393939' }}>
                                        We strive to maintain a high standard of our design and craftmanship including sourcing of quality natural diamonds to the finest crafters and designers.
                                    </Typography>
                                </div>
                                <div className="col-md-6">
                                    <h5>Ethical Sourcing</h5>
                                    <Typography sx={{ fontSize: 14, color: '#393939' }}>
                                        In our line of business, ethics are most highly regarded. We are committed in ensuring that our diamonds are sourced responsibly and are 100% conflict-free.
                                    </Typography>
                                </div>
                                <div className="col-md-6">
                                    <h5>Detailed High-Definition Viewing</h5>
                                    <Typography sx={{ fontSize: 14, color: '#393939' }}>
                                        We use cutting edge technology to provide a different experience of viewing diamonds up-close in 360 degree and displaying its clarity on your screen.
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
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

export default ProdDiamond