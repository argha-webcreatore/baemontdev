import React, { useRef, useState, useEffect } from 'react'
import { Link,useParams, useSearchParams,Navigate ,useNavigate,useLocation} from 'react-router-dom'
import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaStar, FaPlus, FaTimes } from "react-icons/fa"
import GoToTop from '../parts/GoToTop'

import Modal from '@mui/material/Modal';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { PropTypes } from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./Prodslide.css"


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"





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
    width: 400,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 1.5,
    pt: 2,
    px: 4,
    pb: 3,
  }


function ProdRing() {
    const {id} = useParams();
    let [responsedata,setResponsedata] = useState([]);
    let [slug,setSlug] = useState([]);
    let [itext, setItext] = useState(null);
    var formData = new FormData();
    let [thumbsSwiper, setThumbsSwiper] = useState();
    const [ringsize, setRingsize] = React.useState('');
    const handleChange = (event) => {
        setRingsize(event.target.value);
        localStorage.setItem("ringsize",event.target.value);
    };
    let [rating, setRating] = useState(null);
    let [hover, setHover] = useState(null);
    let [isActive, setActive] = useState("false");
    let wishToggle = () => {
        setActive(!isActive);
    }
    let [tabtext2, setTabtext2] = useState([]);
    let [tabcss2, setTabcss2] = useState([]);
    
    let [metal, setMetal] = useState([]);
    let [tabtext1, setTabtext1] = useState([]);
    let [tabcss1, setTabcss1] = useState([]);
    const [error, setError] = useState(false);
    //const [selectMetal, setSelectMetal] = useState('');

    useEffect(()=>{
        getproductdetails();
        var inceptionText = localStorage.getItem("ringText");
        //console.log(inceptionText);
        setItext(inceptionText);
        var diamondId = localStorage.getItem("diamondId");
        if(diamondId!=null){
            setTabtext2("SETTING");  
            setTabtext1("DIAMOND"); 
            setTabcss2("active--bcso0"); 
            setTabcss1(""); 
        }else{
            setTabtext1("SETTING");  
            setTabtext2("DIAMOND");  
            setTabcss2(""); 
            setTabcss1("active--bcso0"); 
        }
    },[metal,slug])
    //Tabs
    async function getproductdetails(){
        var requestdata = {
            id: id,
        };
        formData.append('json1', JSON.stringify(requestdata));
        if(metal.length > 0){
            var flag=1;        
            var requestdata = {
                metal: metal
            };
            formData.append('json2', JSON.stringify(requestdata));
            var requestdata1 = {
                slug: slug,
            };
            formData.append('json3', JSON.stringify(requestdata1));
        }
        var requestOptions = {
            method: 'POST',
            body: formData
        };
        var resp = await fetch("http://3.20.64.228/control_panel/api/server/ring_details",requestOptions);
        var data = await resp.json();
        setResponsedata(data.data);
        setSlug(data.data['0'].slug);
        //console.log(slug)
        //console.log(responsedata);
        // console.log(data.data);
    }
    let [radioshape, setRadioshape] = useState("round")
    function shapeDetect(ev) {
        setRadioshape(ev.target.value);
    }
    const [value, setValue] = React.useState(0);

    const onTabChange = (event, newValue) => {
        setValue(newValue);
    };
    // end Tabs

    // Start Custom Tooltip inscription
    let [inscriptionInput, setInscriptionInput] = useState();
    const [openTooltip, setTooltipOpen] = React.useState(false);
    let [fontInscrip, setFontInscrip] = useState(false);
    const handleTooltipClose = (e) => {
        e.stopPropagation();
        setTooltipOpen(!openTooltip);
    };
    const handleTooltipOpen = () => {
        setTooltipOpen(!openTooltip);
    };
    let addFontOne = () => {
        var element = document.querySelector(".inscriptionText");
        element.classList.add('font1');
        element.classList.remove('font2');
    } 
    let addFontTwo = () => {
        //setFontInscrip(!fontInscrip);
        var element = document.querySelector(".inscriptionText");
        element.classList.add('font2');
        element.classList.remove('font1');
    } 
    const getValue=() => { 
        var ringincriptionval = document.getElementById("ringData").innerHTML; 
        localStorage.setItem("ringText",ringincriptionval);
        let classValue = Array.from(document.getElementById("inscriptionId").classList);
        console.log(classValue['1']);
        localStorage.setItem("ringfont",classValue['1']);
        setTooltipOpen(!openTooltip);
        setItext(ringincriptionval);
    }
    const injectTxt = (ev) => {
        ev.stopPropagation();
        //setInscriptionInput(ev.target.value);
        document.getElementById("ringData").innerHTML = ev.target.value; 
        
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
    // End Custom Tooltip inscription
    var metal_ids;
    async function setData(ev) {
        //console.log("Nilanjan");
        //const id = shape.current.value;
        metal_ids = ev.target.value;
        console.log(metal_ids);
        setMetal(metal_ids);
        getproductdetails();
    }
    
    //Start Modal
    const [open, setModalstate] = React.useState(false);
    const modalOpen = () => {
        setModalstate(true);
    };
    const modalClose = () => {
        setModalstate(false);
    };
    //End Modal
    let navigate = useNavigate()
    const selectRing = (value) => {
        
        localStorage.setItem("ringId",value);
        //console.log(value);
        var diamondId = localStorage.getItem("diamondId");
        //console.log(diamondId)
        if(ringsize===''){
            setError(true);
        }else{
            setError(false);
            if(diamondId!=null){
                navigate('/product-details');
            }else{
                navigate('/settings-diamond');
            }
        }
  };
const errorMessage = () => {
    return (
        <>
        {error ?
        <div className="error alert d-flex align-items-center alert-danger">
            Please select Ring Size 
        </div>
        :
        ''}
        </>
    );
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
                    <Link to='/settings-diamond' className="btn rounded-0 btn-dark text-uppercase mb-3">Add a Diamond</Link>
                    <Link to='/settings-diamond' className="btn rounded-0 btn-outline-dark text-uppercase mb-3">Add A Gemstone</Link>
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
                            <div className={"funnelPart--Omb4B  stepOne--aNhFm " + tabcss1} data-qa="funnel_step_stone">
                                <div className="funnelPartContent--Tenfk">
                                    <div className="stepHead--mnSYI stepOne--RZqJG">
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
                            <div className={"funnelPart--Omb4B stepTwo--q5xNF "+tabcss2} data-qa="funnel_step_jewel">
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
            {errorMessage()}  
            <div className="row g-4">
                <div className="col-md-7">
                    <div className="row g-1">
                        <div className="col-2">
                            
                        </div>
                        <div className="col-10" >
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
                                responsedata.length>0?
                                responsedata.map( (jd) => (
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
                        className="mySwiperBottom">
                        {   
                            responsedata.length>0?
                            responsedata.map( (jd) => (
                                <>
                                <SwiperSlide key={jd.img_id}>
                                <img src={"http://3.20.64.228/control_panel/uploads/product/"+jd.image} alt='' />
                                </SwiperSlide>
                                </>
                            
                            )):''
                        }
                        
                    </Swiper>
                </div>
                <div className="col-md-5 prod-dtlCont">
                    <h4 className='fw-normal'>
                    {
                        responsedata.length>0?
                        responsedata['0'].product_name
                    :''
                    }
                    </h4>
                    <p className="text-muted">{
                    responsedata.length>0?
                    responsedata['0'].weight
                    :''
                    }</p>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <label className='me-2' htmlFor="">Metal: {
                    responsedata.length>0?
                    responsedata['0'].metal_type
                    :''
                    }</label>
                            <div className="ring-shape hover-label filter-iconList">
                                <div className='iconList-item'>
                                    <input className='d-none' onChange={(e)=>{setData(e); shapeDetect(e)}}  type="radio"  name="stoneShape" value="18k_white_gold" id="18k_white_gold"  />
                                    <label htmlFor="18k_white_gold"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/18K_White_Gold.svg"} alt="" /></label>
                                </div>
                                <div className='iconList-item'>
                                    <input className='d-none' onChange={(e)=>{setData(e); shapeDetect(e)}} type="radio" name="stoneShape" value="18k_yellow_gold" id="18k_yellow_gold" />
                                    <label htmlFor="18k_yellow_gold"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/18K_Yellow_Gold.svg"} alt="" /></label>
                                </div>
                                <div className='iconList-item'>
                                    <input className='d-none' onChange={(e)=>{setData(e); shapeDetect(e)}}  type="radio" name="stoneShape" value="18k_rose_gold" id="18k_rose_gold" />
                                    <label htmlFor="18k_rose_gold"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/18K_Rose_Gold.svg"} alt="" /></label>
                                </div>

                                <div className='iconList-item'>
                                    <input className='d-none' type="radio" onChange={(e)=>{setData(e); shapeDetect(e)}}  name="stoneShape" value="platinum" id="platinum" />
                                    <label htmlFor="platinum"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/Platinum.svg"} alt="" /></label>
                                </div>
                                {/* <div className='iconList-item'>
                                    <input className='d-none' type="radio" name="stoneShape" id="oval" />
                                    <label htmlFor="oval"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/18K_Yellow_Gold.svg"} alt="" /></label>
                                </div>

                                <div className='iconList-item'>
                                    <input className='d-none' type="radio" name="stoneShape" id="rediant" />
                                    <label htmlFor="rediant"><img className='img-fluid list-img' src={window.location.origin +"/assets/img/icon/metal/Platinum.svg"} alt="" /></label>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="row align-items-center mt-5">
                        {/* <label className='col-12 mb-2' htmlFor="">Choose your Ring size</label> */}
                        <div className="col-md-12">
                            <FormControl sx={{ mt: 1, minWidth: 200 }} size="small">
                                <InputLabel id="demo-select-small">Choose Ring Size</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={ringsize}
                                    label="Choose Ring Size"
                                    onChange={handleChange}
                                >
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={4.5}>4.5</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={5.5}>5.5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={6.5}>6.5</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={7.5}>7.5</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={8.5}>8.5</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={13}>13</MenuItem>
                                </Select>
                            </FormControl>
                                    
                                <HtmlTooltip
                                    title={
                                    <React.Fragment>
                                        <div className="d-flex justify-content-end" onClick={handleTooltipClose}>
                                            <FaTimes />
                                        </div>
                                        
                                        <div className='mb-2 d-flex flex-column'>
                                            <label>Enter Inscription</label>
                                            <input className='form-control' type="text" name="" id="" defaultValue={itext!=null?itext:""} placeholder='Engrave Text' onChange={injectTxt}/>
                                            <small className='text-muted ms-auto'>Characters Left: 20</small>
                                        </div>
                                        <div className="mb-2">
                                            <span className="d-block">Choose Font</span>
                                            <img src={window.location.origin + "/assets/img/inscription/font_1.gif"} alt="" className='img-fluid' onClick={addFontOne} />
                                            <img src={window.location.origin + "/assets/img/inscription/font_2.gif"} alt="" className='img-fluid' onClick={addFontTwo} />
                                        </div>
                                        <div className="d-block">
                                            <div className="inscription-wrapper">
                                                <svg viewBox="0 0 248 120">
                                                    <image className='inscriptionImg' width="246" height="119" href={window.location.origin + "/assets/img/inscription/Inscription.png"}  transform="matrix(1 0 0 1 -0.22 0)">
                                                    </image>
                                                    <path className="inscriptionPath" id="SVGID_x5F_2_x5F_" d="M-0.2,75.8c29.3-9.4,73.3-19.9,127.3-19.4c49.7,0.4,90.5,9.9,118.7,18.9" fill="transparent"></path>
                                                    <text id="inscriptionId" className={ fontInscrip ? 'inscriptionText font2' : 'inscriptionText font1' } textAnchor="middle">
                                                        <textPath href="#SVGID_x5F_2_x5F_" startOffset="50%">
                                                            <tspan className="font_1--xSr3A" id="ringData"> {itext}</tspan>
                                                        </textPath>
                                                    </text>
                                                </svg>
                                            </div>
                                            <small className="text-muted mt-2 mb-3 d-block">A 10x magnifying glass may be required to clearly read the inscription on your jewelry.</small>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-sm btn-dark text-uppercase" onClick={getValue}>Save</button>
                                            </div>
                                        </div>

                                    </React.Fragment>
                                    }
                                    //open={setTooltipOpen}
                                    open={openTooltip}
                                    PopperProps={{
                                        disablePortal: true
                                    }}
                                    disableFocusListener={true}
                                    disableHoverListener={true}
                                    disableTouchListener
                                >
                                    <button className='btn mt-2' onClick={handleTooltipOpen}><FaPlus size={10} /> {itext!=null?itext:"Add free inscription"}</button>
                                </HtmlTooltip>
                            {/* <button className='btn mt-2'><FaPlus size={10} onClick={() => handleTooltipOpen(!openTooltip)} /> Add free inscription</button> */}
                        </div>
                        
                    </div>
                    <div className="pricePack">
                        <div className="total">
                            {/* <span className="old-price">$2,010</span> */}
                            <span className="now-price">{
                                responsedata.length>0?
                                responsedata['0'].currency + responsedata['0'].sellprice
                                :''
                            }</span>
                        </div>
                        <span>(Subtotal)</span>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary text-uppercase flex-fill text-uppercase me-2" value={responsedata.length > 0 ?responsedata['0'].id:''} onClick={e => selectRing(e.target.value)}>Select this Ring</button>
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
                    <span className="sku text-muted mb-3 d-block">{
                    responsedata.length>0?
                    "Sku Code"+ responsedata['0'].sku_code
                    :''
                    }</span>
                    
                </div>
            </div>

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
                                            <div className="cell">{
                    responsedata.length>0?
                     responsedata['0'].metal_type
                    :''
                    }</div>
                                        </li>
                                        <li>
                                            <div className="cell">Width</div>
                                            <div className="cell">{
                    responsedata.length>0?
                    responsedata['0'].width
                    :''
                    }</div>
                                        </li>
                                        <li>
                                            <div className="cell">Weight</div>
                                            <div className="cell">{
                    responsedata.length>0?
                    responsedata['0'].weight
                    :''
                    }</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="col-md-6">
                                    <span className="d-block mb-2">Diamond</span>
                                    <ul className='dtlInfo'>
                                        <li>
                                            <div className="cell">Shape</div>
                                            <div className="cell">Round</div>
                                        </li>
                                        <li>
                                            <div className="cell">Quantity</div>
                                            <div className="cell">24</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Total Carat</div>
                                            <div className="cell">0.18</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Color</div>
                                            <div className="cell">G-H</div>
                                        </li>
                                        <li>
                                            <div className="cell">Average Clarity</div>
                                            <div className="cell">VS2-SI1</div>
                                        </li>
                                    </ul>
                                </div> */}
                                
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

export default ProdRing