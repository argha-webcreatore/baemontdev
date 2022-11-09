import React, { useState, useEffect,useRef } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaTimes, FaGripLines, FaRedoAlt } from "react-icons/fa"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import './Setting.css'
import Slider, { Range } from 'rc-slider/lib/Slider'
import GoToTop from '../parts/GoToTop'

import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

import 'rc-slider/assets/index.css'
// import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';



const style = { margin: "40px 8px" };
const style1 = { margin: "40px 8px" };
const labelStyle = { minWidth: '60px', display: 'inline-block' };
//const PATH = 'http://localhost/baemont-dev/api/server';
  const marks = {
    0: {
        style: {
            transform: "translateX(-3px)",
        },
        label: "Excellent"
    },
    33.333333: 'Very Good',
    66.6667: 'Good',
    100: {
        style: {
            right: 0,
            left: "unset",
            transform: "translateX(3px)",
        },
        label: "Fair"
    },
  };

  const dmdColor = {
    0: {
        style: {
            transform: "translateX(-3px)",
        },
        label: "M"
    },
    11.1111111: 'L',
    22.1111111: 'K',
    33.1111111: 'J',
    44.2222222: 'I',
    55.3333333: 'H',
    66.6666666: 'G',
    77.5555555: 'F',
    88.6666666: 'E',
    100: {
        style: {
            right: 0,
            left: "unset",
            transform: "translateX(3px)",
        },
        label: "D"
    },
  };




  const dmdClarity = {
    0: {
        style: {
            transform: "translateX(-3px)",
        },
        label: "I1"
    },
    11.1111111: 'SI2',
    22.1111111: 'SI1',
    33.1111111: 'VS2',
    44.2222222: 'VS1',
    55.3333333: 'VVS2',
    66.6666666: 'VVS1',
    77.5555555: 'IF',
    88.6666666: 'FL',
    100: {
        style: {
            right: 0,
            left: "unset",
            transform: "translateX(3px)",
        },
        label: "D"
    },
  };



  /*== Start ResponsiveFilter ==*/

function addClass(arr,element)
{
    if(arr.length > 0)
    {
        for(var i = 0; i <  arr.length; i++)
        {
            document.querySelector(`${element}`).classList.add(arr[i]);
        }
    }
}
function removeClass(arr, element)
{
    if(arr.length > 0)
    {
        for(var i = 0; i <  arr.length; i++)
        {
            document.querySelector(`${element}`).classList.remove(arr[i]);
        }
    }
}

  
var angle = 0;
var half_of_height = (window.innerHeight / 2);
var pop_up = document.querySelector('.pop-up');

// $(pop_up).draggable();

function btn_click()
{
    if(window.matchMedia("(max-width: 767px)").matches)
    {
        var postModalBody = document.querySelector('.popModal-body');
        //*******************//
        addClass(['filterPopMobile'],'body');
        var pop_up = document.querySelector('.pop-up');
        pop_up.classList.remove('pop-up-top-100');
        pop_up.classList.add('pop-up-bottom-0');
    }
    else
    {
        alert("your device width to high");
    }
}

function close_popup() {
    var pop_up = document.querySelector('.pop-up');
    pop_up.removeAttribute('style');
    pop_up.removeAttribute('data-x');
    pop_up.removeAttribute('data-y');
    pop_up.classList.add('pop-up-top-100');
    pop_up.classList.remove('pop-up-bottom-0');
    removeClass(['filterPopMobile'],'body');
}
  /*== End ResponsiveFilter ==*/
  /* componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        this.setState({
            loading: false,
            users
        });
    });
    } */

function DiamondSetting() {
    const [value1, setValue1] = useState([10, 20]);
    const [isActive, setActive] = useState("false");
    const [isGrid, setGrid] = useState("false");
    let [isAdvance, setAdvance] = useState("false")
    let [showPop, setPop] = useState(0)

    //const [isList, setList] = useState("false");
    const wishToggle = () => {
        setActive(!isActive);
    }
    const gridToggle = () => {
        setGrid(!isGrid);
    }
    const onAdvance = () => {
        setAdvance(!isAdvance)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };    
const shape = useRef(null);
const cut = useRef(null);
var ids;
//const ids = useRef(null);
var formData = new FormData();
let [jesdada, setJesdata] = useState([]);
let [jescnt, setJescnt] = useState([]);
let [cutrange, setCutrange] = useState([]);
let [color, setColor] = useState([]);
let [carat, setCarat] = useState([]);
let [clarity, setClarity] = useState([]);
let [polish, setPolish] = useState([]);
let [symmetry, setSymmetry] = useState([]);
let [price,setPrice] = useState([]);
let [shapes,setShapes] = useState([]);
let [rqstdata, setrequestdata] = useState();
var flag=0;
let [tabtext2, setTabtext2] = useState([]);
let [tabcss2, setTabcss2] = useState([]);


let [tabtext1, setTabtext1] = useState([]);
let [tabcss1, setTabcss1] = useState([]);
/* const [currentPage, setCurrentPage] = useState(1);// No of Records to be displayed on each page   
const [recordsPerPage] = useState(10);
const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
// Records to be displayed on the current page
const currentRecords = jesdada.slice(indexOfFirstRecord, indexOfLastRecord);
const nPages = Math.ceil(jesdada.length / recordsPerPage)
const pageNumbers = [...Array(nPages + 1).keys()].slice(1) */
const [offset, setOffset] = useState(0);
const [perPage] = useState(20);
const [pageCount, setPageCount] = useState(0)
const [playerData, setPlayerData] = useState([]);
const [loading, setLoading] = useState(true);
 const handlePageClick = async (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage*perPage)
    setOffset(selectedPage*perPage)
  }
async function getProd(){
    if (shapes) {
        flag=1;
        var requestdata = {
          shape: shapes,
        };
        formData.append('json1', JSON.stringify(requestdata));
    }
    var cutval = cut.current.value;
    if(cutval.length > 0){
        flag=1;   
        var requestdata2 = {
            cut: cutval,
          };
          formData.append('json2', JSON.stringify(requestdata2));
    }
    if(color.length > 0){
        flag=1;
        
        var requestdata3 = {
            color: color,
          };
          formData.append('json3', JSON.stringify(requestdata3));
    }
    if(carat.length > 0){
        flag=1;
        var requestdata4 = {
            carat: carat,
          };
          formData.append('json4', JSON.stringify(requestdata4));
    }
    if(clarity.length > 0){
        flag=1;
        var requestdata5 = {
            clarity: clarity,
          };
          formData.append('json5', JSON.stringify(requestdata5));
    }
    //console.log("Polish"+polish);
    if(polish.length > 0){
        flag=1;        
        var requestdata6 = {
            polish: polish,
        };
        formData.append('json6', JSON.stringify(requestdata6));
    }
    if(symmetry.length > 0){
        flag=1;        
        var requestdata7 = {
            symmetry: symmetry,
        };
        formData.append('json7', JSON.stringify(requestdata7));
    }
    if(price.length > 0){
        flag=1;        
        var requestdata8 = {
            price: price,
        };
        formData.append('json8', JSON.stringify(requestdata8));
    }
    

    let requestOptions = {
        method: 'POST',
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    if( flag==1){

         requestOptions = {
            method: 'POST',
            body: formData // body data type must match "Content-Type" header
        };
    } 

    var requestdatap = {
        offset: offset,
    };
    formData.append('page', JSON.stringify(requestdatap));
    requestOptions = {
        method: 'POST',
        body: formData // body data type must match "Content-Type" header
    };


    var resp = await fetch("http://3.20.64.228/control_panel/api/server/getproduct",requestOptions);
    var data = await resp.json();
    
    setJesdata(data.data);

    var respcnt = await fetch("http://3.20.64.228/control_panel/api/server/count",requestOptions);
    var datacnt = await respcnt.json();
   
    setJescnt(datacnt.data);

    setPageCount(Math.ceil(jescnt/perPage))
    //console.log(jesdada.slice(offset, offset+perPage)+' hererer')
    //setPlayerData(jesdada.slice(offset, offset+perPage))
}

useEffect(()=>{
    getProd();
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
},[shapes,cutrange,color,carat,clarity,polish,symmetry,price,jescnt])
// 
async function putData(ev) {
    //const id = shape.current.value;
    ids = ev.target.value;
    setShapes(ids);
    //if (shape) {
        getProd();
    //}
  }
  //const [isSubscribed, setIsSubscribed] = useState(false);
  async function setData(event) {    
    let selectedChkbox = [...polish];
    if (event.target.checked) 
        selectedChkbox.push(event.target.value);
    else
        selectedChkbox.splice(selectedChkbox.indexOf(event.target.value), 1);
    setPolish(selectedChkbox);
    getProd();
  }
  async function setSymmetryval(event) {    
    let selectedChkbox = [...symmetry];
    if (event.target.checked) 
        selectedChkbox.push(event.target.value);
    else
        selectedChkbox.splice(selectedChkbox.indexOf(event.target.value), 1);
    setSymmetry(selectedChkbox);
    getProd();
  }
  
  const clearPutOutput = () => {
    //setPutResult(null);
  }
  let [radioshape, setRadioshape] = useState("round")
  function shapeDetect(ev) {
    setRadioshape(ev.target.value)
    
  }
  
  const onSliderChange = (value) => {
    
    /* this.setState({
      value,
    }); */
    setCutrange(value)
    
    getProd();
  };
  const onSliderChange1 = (value) => {
    
    /* this.setState({
      value,
    }); */
    setColor(value)
    
    getProd();
  };
  const onSliderChange2 = (value) => {
    
    /* this.setState({
      value,
    }); */
    setCarat(value)
    
    getProd();
  };
  const onSliderChange3 = (value) => {
    
    /* this.setState({
      value,
    }); */
    setClarity(value)
    
    getProd();
  };
  const onSliderChange4 = (value) => {
    
    /* this.setState({
      value,
    }); */
    setPrice(value)
    
    getProd();
  };


  // User is currently on this page
//   const [currentPage, setCurrentPage] = useState(1);// No of Records to be displayed on each page   
//   const [recordsPerPage] = useState(5);

  
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

//   // Records to be displayed on the current page
//   const currentRecords = jesdada.slice(indexOfFirstRecord, indexOfLastRecord);
//   const nPages = Math.ceil(jesdada.length / recordsPerPage)
  

//   const pageNumbers = [...Array(nPages + 1).keys()].slice(1);


    
  return (
    <>
        <div className="pop-up pop-up-top-100">
            <div className="popHead d-flex justify-content-between align-items-center">
                <button className="btn close-pop-up" onClick={close_popup}><FaTimes /> Close</button>
                <button className="btn"><FaGripLines /></button>
                <button className="btn"><FaRedoAlt /> Reset</button>
            </div>
            <div className="mobFltr popModal-body">
                { (showPop == 1) ? 
                    <div className="ring-shape hover-label filter-iconList">
                        <div className='iconList-item'>
                            <input onChange={putData} className='d-none' type="radio" name="stoneShape" id="round" defaultChecked />
                            <label htmlFor="round"><img className='img-fluid list-img' src="assets/img/icon/shapes/round.png" alt="" /><span className="text-center">Round</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input onChange={putData} ref={shape} className='d-none' type="radio" name="stoneShape" id="princess" />
                            <label htmlFor="princess"><img className='img-fluid list-img' src="assets/img/icon/shapes/princess.png" alt="" /><span className="text-center">Princess</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="cushion" />
                            <label htmlFor="cushion"><img className='img-fluid list-img' src="assets/img/icon/shapes/cushion.png" alt="" /><span className="text-center">Cushion</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="emerald" />
                            <label htmlFor="emerald"><img className='img-fluid list-img' src="assets/img/icon/shapes/emerald.png" alt="" /><span className="text-center">Emerald</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="oval" />
                            <label htmlFor="oval"><img className='img-fluid list-img' src="assets/img/icon/shapes/oval.png" alt="" /><span className="text-center">Oval</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="rediant" />
                            <label htmlFor="rediant"><img className='img-fluid list-img' src="assets/img/icon/shapes/rediant.png" alt="" /><span className="text-center">Rediant</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="asscher" />
                            <label htmlFor="asscher"><img className='img-fluid list-img' src="assets/img/icon/shapes/asscher.png" alt="" /><span className="text-center">Asscher</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="marquise" />
                            <label htmlFor="marquise"><img className='img-fluid list-img' src="assets/img/icon/shapes/marquise.png" alt="" /><span className="text-center">Marquise</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="heart" />
                            <label htmlFor="heart"><img className='img-fluid list-img' src="assets/img/icon/shapes/heart.png" alt="" /><span className="text-center">Heart</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="pear" />
                            <label htmlFor="pear"><img className='img-fluid list-img' src="assets/img/icon/shapes/pear.png" alt="" /><span className="text-center">Pear</span></label>
                        </div>
                    </div>
                    :
                    (showPop == 2) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    :
                    (showPop == 3) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    :
                    (showPop == 4) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    :
                    (showPop == 5) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    :
                    (showPop == 6) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                //onChange={log}
                            />
                        </div>
                    </div>
                    : 
                    (showPop == 7) ?
                    <h6 className='text-center'>No Content</h6>
                    : ""
                }
            </div>
            <div className="popModal-footer">
                <button className='btn btn-default w-100'>VIEW 630 Rings</button>
            </div>
        </div>
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

                {/* <div className="col-12 text-center">
                    <div className="diamondCreation" role="group" aria-label="Earth-Created / Lab Created Diamonds">
                        <input type="radio" className="btn-check" name="dimCrtn" id="earthCreated" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="earthCreated">Earth-Created Diamonds</label>

                        <input type="radio" className="btn-check" name="dimCrtn" id="labCreated" />
                        <label className="btn btn-outline-primary" htmlFor="labCreated">Lab-Created diamonds</label>
                    </div>
                </div> */}
            </div>
            <div className="row d-none d-md-flex">
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Shape</label>
                    <div className="ring-shape hover-label filter-iconList" >
                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}} ref={shape} className='d-none' type="radio" name="stoneShape" value="round" checked={ radioshape === "round"} id="round"  />
                            <label htmlFor="round"><img className='img-fluid list-img' src="assets/img/icon/shapes/round.png" alt="" /><span className="text-center">Round</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}} ref={shape} className='d-none' type="radio" name="stoneShape" value="princess" checked={ radioshape === "princess"} id="princess"/>
                            <label htmlFor="princess"><img className='img-fluid list-img' src="assets/img/icon/shapes/princess.png" alt="" /><span className="text-center">Princess</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} className='d-none' type="radio" name="stoneShape" value="cushion" checked={ radioshape === "cushion"} id="cushion" />
                            <label htmlFor="cushion"><img className='img-fluid list-img' src="assets/img/icon/shapes/cushion.png" alt="" /><span className="text-center">Cushion</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} className='d-none' type="radio" name="stoneShape" value="emerald" checked={ radioshape === "emerald"} id="emerald" />
                            <label htmlFor="emerald"><img className='img-fluid list-img' src="assets/img/icon/shapes/emerald.png" alt="" /><span className="text-center">Emerald</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} className='d-none' type="radio" name="stoneShape" value="oval" checked={ radioshape === "oval"} id="oval" />
                            <label htmlFor="oval"><img className='img-fluid list-img' src="assets/img/icon/shapes/oval.png" alt="" /><span className="text-center">Oval</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} className='d-none' type="radio" name="stoneShape" value="rediant" checked={ radioshape === "rediant"} id="rediant" />
                            <label htmlFor="rediant"><img className='img-fluid list-img' src="assets/img/icon/shapes/rediant.png" alt="" /><span className="text-center">Rediant</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} type="radio" name="stoneShape" value="asscher" checked={ radioshape === "asscher"} id="asscher" />
                            <label htmlFor="asscher"><img className='img-fluid list-img' src="assets/img/icon/shapes/asscher.png" alt="" /><span className="text-center">Asscher</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} type="radio" name="stoneShape" value="marquise" checked={ radioshape === "marquise"} id="marquise" />
                            <label htmlFor="marquise"><img className='img-fluid list-img' src="assets/img/icon/shapes/marquise.png" alt="" /><span className="text-center">Marquise</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} type="radio" name="stoneShape" value="heart" checked={ radioshape === "heart"} id="heart" />
                            <label htmlFor="heart"><img className='img-fluid list-img' src="assets/img/icon/shapes/heart.png" alt="" /><span className="text-center">Heart</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' onChange={(e)=>{putData(e); shapeDetect(e)}}  ref={shape} type="radio" name="stoneShape" value="pear" checked={ radioshape === "pear"} id="pear" />
                            <label htmlFor="pear"><img className='img-fluid list-img' src="assets/img/icon/shapes/pear.png" alt="" /><span className="text-center">Pear</span></label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Cut</label>
                    <div className="price-range w-100">
                        <div style={style}>
                            {/* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                step={33.333333}
                                pushable={33.333333}
                                marks={marks}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                onChange={onSliderChange}
                                //onChange={log}
                            />
                        </div>
                        <input type="hidden" ref={cut} id="cut" value={cutrange} />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Color</label>
                    <div className="price-range w-100">
                        <div style={style}>
                            {/* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                step={11.1111111}
                                //pushable={1.333333}
                                marks={dmdColor}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                onChange={onSliderChange1}
                                //onChange={log}
                            />
                        </div>
                        <input type="hidden"  id="color" value={color} />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Carat</label>
                    <div className="price-range w-100">
                        <div style={style1}>
                            {/* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                //step={33.333333}
                                //pushable={33.333333}
                                //marks={marks}
                                //min={this.state.min}
                                //max={this.state.max}
                                reverse={false}
                                defaultValue={[0.1, 100]}
                                min={0.1}
                                max={7}
                                draggableTrack
                                onChange={onSliderChange2}
                                //onChange={log}
                            />
                        </div>
                    </div>
                    <input type="hidden"  value={carat} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Clarity</label>
                    <div className="price-range w-100">
                        <div style={style}>
                            {/* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                step={11.1111111}
                                pushable={11.1111111}
                                marks={dmdClarity}
                                reverse={false}
                                defaultValue={[0, 100]}
                                draggableTrack
                                onChange={onSliderChange3}
                                //onChange={log}
                            />
                        </div>
                    </div>
                    <input type="hidden"  value={clarity} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Price</label>
                    <div className="price-range w-100">
                        <div style={style1}>
                            {/* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                //step={33.333333}
                                //pushable={33.333333}
                                //marks={marks}
                                //min={this.state.min}
                                //max={this.state.max}
                                reverse={false}
                                defaultValue={[100, 1033000]}
                                min={100}
                                max={1033000}
                                draggableTrack
                                onChange={onSliderChange4}
                                //onChange={log}
                            />
                        </div>
                    </div>
                </div>
                <input type="hidden" value={price} />
                <div className="col-md-12 mt-3">
                    <div className="d-flex align-items-center panAdvance" >
                        <span className="btnAdvance" onClick={onAdvance}>Advanced Options {isAdvance ? <FiPlusCircle size={23} /> : <FiMinusCircle size={23} />}</span>
                        {isAdvance ?
                        ''
                        :
                        <div className='ms-3'>
                            <ul className="list-inline m-0">
                                <li className="list-inline-item">
                                    <button className="btn btn-dark rounded-pill py-1 px-3" onClick={handleClick}>Polish</button>
                                    <Menu
                                        id="basic-menu"
                                        className="advncFltr"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between px-3">
                                            <h5 className='m-0'>Polish</h5>
                                            <span className="closeDrop" onClick={handleClose}><FaTimes /></span>
                                        </div>
                                        <FormGroup onChange={setData}>
                                            <FormControlLabel className='px-3' control={<Checkbox value="EX"   />} label="Excellent" />
                                            <FormControlLabel className='px-3' control={<Checkbox value="VG"  />} label="Very Good" />
                                            <FormControlLabel className='px-3' control={<Checkbox value="GD"  />} label="Good" />
                                        </FormGroup>
                                    </Menu>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-dark rounded-pill py-1 px-3" onClick={handleClick1}>Symmetry</button>
                                    <Menu
                                        id="basic-menu1"
                                        className="advncFltr"
                                        anchorEl={anchorEl1}
                                        open={open1}
                                        onClose={handleClose1}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between px-3">
                                            <h5 className='m-0'>Symmetry</h5>
                                            <span className="closeDrop" onClick={handleClose1}><FaTimes /></span>
                                        </div>
                                        <FormGroup onChange={setSymmetryval}>
                                            <FormControlLabel className='px-3' control={<Checkbox value="EX"  />} label="Excellent" />
                                            <FormControlLabel className='px-3' control={<Checkbox value="VG"/>} label="Very Good" />
                                            <FormControlLabel className='px-3' control={<Checkbox  value="GD"/>} label="Good" />
                                            <FormControlLabel className='px-3' control={<Checkbox  value="F"/>} label="Fair" />
                                        </FormGroup>
                                    </Menu>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-dark rounded-pill py-1 px-3" onClick={handleClick2}>Lab</button>
                                    <Menu
                                        id="basic-menu2"
                                        className="advncFltr"
                                        anchorEl={anchorEl2}
                                        open={open2}
                                        onClose={handleClose2}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between px-3">
                                            <h5 className='m-0'>Lab</h5>
                                            <span className="closeDrop" onClick={handleClose2}><FaTimes /></span>
                                        </div>
                                        <FormGroup onChange={setSymmetryval}>
                                            <FormControlLabel className='px-3' control={<Checkbox defaultChecked />} label="GIA" />
                                            {/* <FormControlLabel className='px-3' control={<Checkbox  />} label="AGS" />
                                            <FormControlLabel className='px-3' control={<Checkbox  />} label="IGI" /> */}
                                        </FormGroup>
                                    </Menu>
                                </li>
                            </ul>
                                
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
           
            <div className="row g-2 d-md-none">
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(1);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Shape</label>
                        <small className="text-muted">Round</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(2);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Carat</label>
                        <small className="text-muted">1 - 30</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(3);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Color</label>
                        <small className="text-muted">I - D</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(4);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Clarity</label>
                        <small className="text-muted">Sl1 - FL</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(5);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Cut</label>
                        <small className="text-muted">VG - TH</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(6);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Price</label>
                        <small className="text-muted">All</small>
                    </div>
                </div>
                <div className="col-sm-3 col-4" onClick={() => 
                            {
                                setPop(7);
                                btn_click();
                            }
                        }>
                    <div className="card card-body text-center">
                        <label htmlFor="">Lab</label>
                        <small className="text-muted">All</small>
                    </div>
                </div>

            </div>
            
            <div className="row mt-5">
                <div className="col-md-9 mx-auto text-center">
                    <h5 className="main-title-text fw-normal">
                        <span>Diamonds <b>- Viewable In 360° HD</b> That Match Your Setting</span>
                    </h5>
                    <small data-qa="description_results-gallery" className="description">
                        <p>Pick your perfect <b>diamond</b> with Baemont. Start by choosing a high-quality diamond from our selection of conflict-free diamonds. Baemont offers diamonds in a variety of diamond colors, diamond cuts, and diamond shapes. Then, select your preferred ring setting! All our diamonds are presented in high definition 360° so you know exactly what you are getting.</p>
                    </small>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                        
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 fltrPlod-list">
                    
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="allItem" data-bs-toggle="tab" data-bs-target="#allItem-pane" type="button" role="tab" aria-controls="allItem-pane" aria-selected="true">ALL Diamonds <span>({jescnt})</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="recently-view" data-bs-toggle="tab" data-bs-target="#recently-view-pane" type="button" role="tab" aria-controls="recently-view-pane" aria-selected="false">Recently Viewed</button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button className="nav-link" id="comparison-tab" data-bs-toggle="tab" data-bs-target="#comparison-tab-pane" type="button" role="tab" aria-controls="comparison-tab-pane" aria-selected="false">Comparison</button>
                        </li> */}
                    </ul>
                    <div className="tab-content fltr-itemList" id="">
                        <div className="tab-pane fade show active" id="allItem-pane" role="tabpanel" aria-labelledby="allItem" tabIndex="0">
                            <div className="item-views">
                                <div className="d-flex align-items-center">
                                    <span className='me-2'>Change View</span>
                                    <button className="btn btn-view me-2" onClick={gridToggle} disabled={ isGrid ? 'disabled':''}><FaTh /></button>
                                    <button className="btn btn-view" onClick={gridToggle}  disabled={ isGrid ? '':'disabled'}><FaThList /></button>
                                </div>
                            </div>
                            <div className="row itemList-cont g-2">
                                
                                { isGrid ?
                                <>
                                
                                { 
                                (jesdada.length>0) ?
                                jesdada.map( (jd) => (
                                <div className='col-md-3' key={jd.id}>
                                    <div className="card prodItem-card">
                                        <div className="card-body dimond-grid-item-body">
                                            <div className="prodImg-wrap">
                                                <img className="img-fluid" src={jd.front_image_url} alt="" />
                                                <div className="btnAction">
                                                    <button className="btn btn-addWishlist" onClick={wishToggle}>
                                                    { isActive ? 
                                                        <FaRegHeart />
                                                        :
                                                        <FaHeart color={'red'} />
                                                    }
                                                    </button>
                                                    <button className="btn btn-quickView"><FaSearchPlus /></button>
                                                </div>
                                            </div>
                                            <div className="prod-dtl">
                                                <div className="short-desc">
                                                    <Link to={"/product-diamond/" + jd.id}>
                                                        <p className='mb-0'>{jd.shape} | {jd.carat}ct | {jd.color} | {jd.clarity} {jd.cut} cut  </p>
                                                    </Link>
                                                </div>
                                                {/* <div className='itemParameters'>
                                                    <small className="text-muted">Round </small>
                                                    <small className="text-muted">1.00 </small>
                                                    <small className="text-muted">I </small>
                                                    <small className="text-muted">SI1 </small>
                                                    <small className="text-muted">Very Good </small>
                                                    <small className="text-muted">GIA </small>
                                                    <small className="text-muted">1 </small>
                                                    <small className="text-muted">2 </small>

                                                </div> */}
                                                <div className="d-block">
                                                    <span className='fw-bold'>RM {jd.price_pc}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )):''}
                                
                                
                                {/* <Pagination
                                nPages = { nPages }
                                currentPage = { currentPage } 
                                setCurrentPage = { setCurrentPage }
                                /> */}
                                <div className="col-12">
                                    <nav className='d-flex justify-content-center'>
                                        <ReactPaginate
                                            previousLabel={"Prev"}
                                            nextLabel={"Next"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName={""}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link"}
                                            className={"pagination"}
                                            previousClassName={"page-item"}
                                            nextClassName={"page-item"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}
                                            activeLinkClassName={"active"}
                                            previousLinkClassName={"page-link"}
                                            nextLinkClassName={"page-link"}
                                        />
                                    </nav>
                                </div>
                                
                                </>
                                :
                                <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Actual Photo</th>
                                            <th>Shape</th>
                                            <th>Carat</th>
                                            <th>Color</th>
                                            <th>Clarity</th>
                                            <th>Cut</th>
                                            <th>Lab</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { jesdada.map( (jd) => (
                                        <tr key={jd.id}>
                                            <td>
                                                <div className='grid-item-img d-flex'>
                                                <img className="img-fluid" src="assets/img/diamond-2.jpg" alt="" />
                                                <div className='grid-product-detail'>
                                                    {/* <Link to='/product-diamond'>Excellent Cut Round Diamond</Link> */}
                                                <ul className='list-inline'>
                                                    <li className='list-inline-item'>
                                                        <button className="btn btn-quickView"><FaSearchPlus /></button>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                    <button className="btn btn-addWishlist" onClick={wishToggle}>
                                                    { isActive ? 
                                                        <FaRegHeart />
                                                        :
                                                        <FaHeart color={'red'} />
                                                    }
                                                    </button>
                                                    </li>
                                                    {/* <li className='list-inline-item'>
                                                        <button className="btn btn-quickView"><FaSearchPlus /></button>
                                                    </li> */}
                                                    
                                                </ul>
                                                <div className="d-block"><span className="fw-bold">RM 7,000</span></div>
                                                
                                                </div>
                                                
                                                </div>
                                            </td>
                                            <td>{jd.shape}</td>
                                            <td>{jd.carat}</td>
                                            <td>{jd.color}</td>
                                            <td>{jd.clarity}</td>
                                            <td>{jd.cut}</td>
                                            <td>{jd.lab_name}</td>
                                          
                                        </tr>
                                        ))}
                                    </tbody>
                                    
                                </table>
                                </div>
                                }
                                

                            </div>
                        </div>
                        <div className="tab-pane fade" id="recently-view-pane" role="tabpanel" aria-labelledby="recently-view" tabIndex="0">
                            <div className="item-views">
                                <div className="d-flex align-items-center">
                                    <span className='me-2'>Change View</span>
                                    <button className="btn border border-1 lh-1 me-2"><FaTh /></button>
                                    <button className="btn border border-1 lh-1"><FaThList /></button>
                                </div>
                            </div>
                            <div className="row itemList-cont g-2">
                                <div className="col-md-4 m-auto text-center">
                                    <h3 className='text-muted'>Recently no view</h3>
                                </div>
                            </div>
                            
                        </div>
                        {/* <div className="tab-pane fade" id="comparison-tab-pane" role="tabpanel" aria-labelledby="comparison-tab" tabIndex="0">3</div> */}
                    </div>

                </div>
            </div>
        </div>
      </section>
      <GoToTop />
    </>
  )
}

export default DiamondSetting