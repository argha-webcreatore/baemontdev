import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart, FaTimes, FaGripLines, FaRedoAlt } from "react-icons/fa"
import './Setting.css'
import Slider, { Range } from 'rc-slider/lib/Slider'
//import { Slider, Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

const style = { margin: "40px 8px" };
const style1 = { margin: "40px 8px" };
const labelStyle = { minWidth: '60px', display: 'inline-block' };
    
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


function Settings() {
    const [value, setValue] = useState(null);
    const [isActive, setActive] = useState("false");
    const [isGrid, setGrid] = useState("false");
    let [tabtext2, setTabtext2] = useState([]);
    let [tabcss2, setTabcss2] = useState([]);
    

    let [tabtext1, setTabtext1] = useState([]);
    let [tabcss1, setTabcss1] = useState([]);
    //const [isList, setList] = useState("false");
    let [showPop, setPop] = useState(0);
    let [jesdada, setJesdata] = useState([]);
    let [jescnt, setJescnt] = useState([]);
    let [pricerange, setPricerange] = useState(0);
    let [pricerangemin, setPricerangemin] = useState(0);
    const [lowerBound,SetlowerBound] = useState(0);
    const [upperBound,SetupperBound] = useState(20000);
    const [Value,SetValue] = useState([0,20000]);
    let [catres, setCatres] = useState([]);
    let [category, setCategory] = useState([]);
    let [metal, setMetal] = useState([]);
    let [price,setPrice] = useState([]);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(0);
    let [shapes,setShapes] = useState([]);
    var ids;
    var flag=0;
    var metal_ids;
    const categories = useRef(null);
    function getimgpath(id){
        var requestdata = {
            product_id: id,
        };
        var formData = new FormData();
        formData.append('json', JSON.stringify(requestdata));
        let requestOptions = {
            method: 'POST',
            body: formData // body data type must match "Content-Type" header
        };
        fetch("http://3.20.64.228/control_panel/api/server/product_image",requestOptions)
        .then((response) => response.json())
        .then((response) => {
            var imgresponse = response.data;
            document.getElementById(`img_${id}`).src = "http://3.20.64.228/control_panel/uploads/product/"+imgresponse.image;
        });
        
        
      }
    const wishToggle = () => {
        setActive(!isActive);
    }
    const gridToggle = () => {
        setGrid(!isGrid);
    }
    let [radioshape, setRadioshape] = useState("round")
    function shapeDetect(ev) {
        setRadioshape(ev.target.value);
    }
    async function putData(ev) {
        //const id = shape.current.value;
        ids = ev.target.value;
        console.log(ids);
        setCategory(ids);
        getRingdatas();
    }
    async function setData(ev) {
        //const id = shape.current.value;
        metal_ids = ev.target.value;
        console.log(metal_ids);
        setMetal(metal_ids);
        getRingdatas();
    }
    const onSliderChange = (value) => {
        SetValue(value);
        
        setPrice(value)
        
        getRingdatas();
    };
    useEffect(()=>{
        getRingdatas();
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
    },[category,metal,price,jescnt])
    var formData = new FormData();
    const [dftPricerange, setdfltPrice] = useState([])
    async function getRingdatas(){
        
        if(category.length > 0){
            flag=1;        
            var requestdata = {
                categories: category,
            };
            formData.append('json', JSON.stringify(requestdata));
        }
        if(metal.length > 0){
            flag=1;        
            var requestdata1 = {
                metal: metal,
            };
            formData.append('json1', JSON.stringify(requestdata1));
        }
        if(price.length > 0){
            flag=1;        
            var requestdata2 = {
                sell_price: price,
            };
            formData.append('json2', JSON.stringify(requestdata2));
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
   
        var catresponse = await fetch('http://3.20.64.228/control_panel/api/server/getsubcat',requestOptions);

        var datas = await catresponse.json();
        setCatres(datas.data);
        var response = await fetch("http://3.20.64.228/control_panel/api/server/getRings",requestOptions);
        var resp = await response.json();
        setJesdata(resp.data);
        //console.log(resp.data);
        var respmaxmin = await fetch("http://3.20.64.228/control_panel/api/server/maxringprice",requestOptions);
        var datamaxmin = await respmaxmin.json();
        setPricerange(datamaxmin.data.max_price);
        setPricerangemin(datamaxmin.data.min_price);
        setdfltPrice([0,parseInt(datamaxmin.data.max_price)]);
        
        //console.log(datamaxmin.data.max_price)
        //setPageCount(Math.ceil(jescnt/perPage));


    }

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
                            <input className='d-none' type="radio" name="stoneShape" id="round" defaultChecked />
                            <label htmlFor="round"><img className='img-fluid list-img' src="assets/img/icon/shapes/round.png" alt="" /><span className="text-center">Round</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="princess" />
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
                    <div className="ring-shape hover-label filter-iconList">
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="round" defaultChecked />
                            <label htmlFor="round"><img className='img-fluid list-img' src="assets/img/icon/metal/14K_White_Gold.svg" alt="" /><span className="text-center">Round</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="princess" />
                            <label htmlFor="princess"><img className='img-fluid list-img' src="assets/img/icon/metal/14K_Yellow_Gold.svg" alt="" /><span className="text-center">Princess</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="cushion" />
                            <label htmlFor="cushion"><img className='img-fluid list-img' src="assets/img/icon/metal/14K_Rose_Gold.svg" alt="" /><span className="text-center">Cushion</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="emerald" />
                            <label htmlFor="emerald"><img className='img-fluid list-img' src="assets/img/icon/metal/18K_White_Gold.svg" alt="" /><span className="text-center">Emerald</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="oval" />
                            <label htmlFor="oval"><img className='img-fluid list-img' src="assets/img/icon/metal/18K_Yellow_Gold.svg" alt="" /><span className="text-center">Oval</span></label>
                        </div>

                        <div className='iconList-item'>
                            <input className='d-none' type="radio" name="stoneShape" id="rediant" />
                            <label htmlFor="rediant"><img className='img-fluid list-img' src="assets/img/icon/metal/Platinum.svg" alt="" /><span className="text-center">Rediant</span></label>
                        </div>
                    </div>
                    :
                    (showPop == 3) ? 
                    <div className="price-range w-100">
                        <div style={style}>
                            <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span>
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
                            <div className={"funnelPart--Omb4B  stepOne--aNhFm " + tabcss1} data-qa="funnel_step_stone">
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
                <div className="col-12">
                    <div className='ringType filter-iconList'>{
                    catres.map( (jd) => (
                        <div className='iconList-item'>
                            <input onChange={(e)=>{putData(e); }} ref={categories} value={jd.id} className='d-none' type="radio" name="jemsCheck" id={jd.category_name} />
                         <label htmlFor={jd.category_name}><img className='img-fluid list-img' src="assets/img/diamond.svg" alt="" /><span className="text-center">{jd.category_name}</span></label>
                        </div>))
                    }
                        
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-2' htmlFor="">Metal</label>
                    <div className="ring-metal hover-label filter-iconList">
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" onChange={(e)=>{setData(e); shapeDetect(e)}}  name="stoneShape" value="18k_white_gold" id="18k_white_gold" defaultChecked />
                            <label htmlFor="18k_white_gold"><img className='img-fluid list-img' src="assets/img/icon/metal/18K_White_Gold.svg" alt="" /><span className="text-center">18K White Gold</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" value="18k_yellow_gold" onChange={(e)=>{setData(e); shapeDetect(e)}} name="stoneShape" id="18k_yellow_gold" />
                            <label htmlFor="18k_yellow_gold"><img className='img-fluid list-img' src="assets/img/icon/metal/18K_Yellow_Gold.svg" alt="" /><span className="text-center">18K Yellow Gold</span></label>
                        </div>
                        <div className='iconList-item'>
                            <input className='d-none' type="radio" value="18k_rose_gold" name="stoneShape" onChange={(e)=>{setData(e); shapeDetect(e)}} id="18k_rose_gold" />
                            <label htmlFor="18k_rose_gold"><img className='img-fluid list-img' src="assets/img/icon/metal/18K_Rose_Gold.svg" alt="" /><span className="text-center">18K Rose Gold</span></label>
                        </div>


                        <div className='iconList-item'>
                            <input className='d-none' type="radio" value="platinum" name="stoneShape" onChange={(e)=>{setData(e); shapeDetect(e)}} id="platinum" />
                            <label htmlFor="platinum"><img className='img-fluid list-img' src="assets/img/icon/metal/Platinum.svg" alt="" /><span className="text-center">Platinum</span></label>
                        </div>

                        {/* <div className='iconList-item'>
                            <input className='d-none' type="radio" value="Rose_Gold" name="stoneShape" onChange={(e)=>{setData(e); shapeDetect(e)}} id="Rose_Gold" />
                            <label htmlFor="Rose_Gold"><img className='img-fluid list-img' src="assets/img/icon/metal/Platinum.svg" alt="" /><span className="text-center">Rose Gold</span></label>
                        </div> */}
                        
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label className='me-3' htmlFor="">Price</label>
                    <div className="price-range w-100">
                        <div style={style}>
                            
                            {
                            // console.log(parseInt(pricerange)+" PRICE")
                            //console.log(dftPricerange[0],dftPricerange[1])
                            /* <label style={labelStyle}>Value: </label>
                            <span>{this.state.value}</span> */}
                            <Slider
                                range
                                allowCross={true}
                                //step={33.333333}
                                //pushable={33.333333}
                                //marks={marks}
                                min={lowerBound}
                                max={upperBound}
                                reverse={false}
                                defaultValue={[lowerBound, upperBound]}
                                value = {Value}
                                draggableTrack
                                onChange={onSliderChange}
                                //onChange={log}
                            />
                            <div className='row justify-content-between mt-2'>
                                <div className="col-md-4">
                                    <input readOnly className="form-control" type="a" value={price[0]} onChange={onSliderChange} />
                                </div>
                                <div className="col-md-4">
                                    <input readOnly className="form-control" type="a" value={price[1]} onChange={onSliderChange} />
                                </div>
                            </div>
                            
                            {/* <Range 
                            allowCross={false} 
                            min={0}  
                            max={20000} 
                            defaultValue={[lowerBound, upperBound]}
                            value={Value} 
                            step={100} 
                            pushable={true,500} 
                            onChange={val=>SetValue(val)}
                            />
                            <input className="form-control" onChange={e=>SetlowerBound(Number(e.target.value))} value={lowerBound}/>
                            <input className="form-control" onChange={e=>SetupperBound(Number(e.target.value))} value={upperBound}/>
                             */}
                        </div>
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
            <div className="row mt-3">
                <div className="col-md-9 mx-auto text-center">
                    <h5 className="main-title-text fw-normal">
                        Engagement Rings Settings <b>- Viewable In 360° HD</b>
                    </h5>
                    <small data-qa="description_results-gallery" className="description">
                        <p>Our selection of engagement ring settings includes every metal and every style. Yellow gold, white gold, platinum, and rose gold; vintage, modern, classic or trendy, Baemont has the perfect engagement ring setting for you. Whether you are choosing a timeless diamond or a colorful gemstone, we have the ideal engagement ring setting that will shine as bright. A momentous moment deserves nothing less than pure excellence, our collection of engagement ring settings ensures that you are able to present the ideal ring.</p>
                    </small>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 fltrPlod-list">
                    
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="allItem" data-bs-toggle="tab" data-bs-target="#allItem-pane" type="button" role="tab" aria-controls="allItem-pane" aria-selected="true">ALL Rings <span>({jescnt})</span></button>
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
                                <div className='col-md-3'>
                                    <div className="card prodItem-card">
                                        <div className="card-body dimond-grid-item-body">
                                            <div className="prodImg-wrap">
                                                {/* <img className="img-fluid" src="assets/img/diamond-2.jpg" alt="" /> */}
                                                {getimgpath(jd.id)}
                                                <img className="img-fluid" id={'img_'+jd.id}  src="assets/img/diamond-2.jpg" alt="" />
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
                                                    <Link to={"/product-ring/" + jd.id}>
                                                        <p className='mb-0'>{jd.product_name}</p>
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
                                                    <span className='fw-bold'>{jd.currency} {jd.sellprice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )):''}
                                </>
                                :
                                <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Actual Photo</th>
                                            
                                            <th>Metal Type</th>
                                            <th>Weight</th>
                                            
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { 
                                    (jesdada.length>0) ?
                                    jesdada.map( (jd) => (  
                                        
                                        <tr>
                                            <td>
                                                <div className='grid-item-img d-flex'>
                                                {/* <img className="img-fluid" src="assets/img/diamond-2.jpg" alt="" /> */}
                                                {getimgpath(jd.id)}
                                                <img className="img-fluid" id={'img_'+jd.id}  src="assets/img/diamond-2.jpg" alt="" />
                                                <div className='grid-product-detail'>
                                                    <Link to='/product-ring'>{jd.product_name}</Link>
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
                                                <div className="d-block"><span className="fw-bold">{jd.currency} {jd.sellprice}</span></div>
                                                
                                                </div>
                                                
                                                </div>
                                            </td>
                                            <td>{jd.metal_type}</td>
                                            <td>{jd.weight}</td>
                                            
                                          
                                        </tr>
                                        )):''}
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
    </>
  )
}

export default Settings
