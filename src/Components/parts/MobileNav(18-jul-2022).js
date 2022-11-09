import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FaSearch, FaRegUser, FaRegHeart, FaCartArrowDown, FaTrash, FaAngleDown, FaTimes } from "react-icons/fa"
import { CgMenuLeft, IconName } from "react-icons/cg";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function MobileNav() {
    let[navstate, setNavstate] = useState("false")
    const navOpen = () => {
        setNavstate(!navstate);
    };
  return (
    <>
        <div className="off-canvas-item">
            <ul className="accordion list-style-none" id="mobNav-menu">
                <li className="accordion-item">
                    <div className="accordion-header" id="engagementRingOne">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">Engagement rings</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#engagementOne" aria-expanded="true" aria-controls="engagementOne"></button>
                        </div>
                    </div>
                    <div id="engagementOne" className="accordion-collapse collapse" aria-labelledby="engagementRingOne" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                            <ul className="accordion list-style-none" id='engagementChildOne'>
                                <li className="accordion-item">
                                    <div className="accordion-header">
                                        <div className="accordion-button d-flex justify-content-between align-items-center">
                                            <Link to="/">Design your own</Link>
                                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#engagementYourDesign" aria-expanded="false" aria-controls="engagementYourDesign"></button>
                                        </div>
                                    </div>
                                    <div id="engagementYourDesign" className="accordion-collapse collapse" data-bs-parent="#engagementChildOne">
                                        <div className="accordion-body">
                                            <ul className="accordion children list-style-none" id=''>
                                                <li className="accordion-item">
                                                    <Link className='accordion-header' to="/settings-ring">
                                                        <img className='img-fluid' src="assets/img/icon/nav_icon.svg" alt="" /> Start With A Ring
                                                    </Link>
                                                </li>
                                                <li className="accordion-item">
                                                    <Link className='accordion-header' to="/settings-diamond">
                                                        <img className='img-fluid' src="assets/img/icon/nav_icon.svg" alt="" /> Start With A Diamond
                                                    </Link>
                                                </li>
                                            </ul>
                                            <img className='img-fluid w-100' src="assets/img/cate-1.jpg" alt="" style={{height: 8 + 'rem', objectFit: 'cover'}} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="widdingRingOne">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">Wedding rings</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#weddingOne" aria-expanded="false" aria-controls="weddingOne"></button>
                        </div>
                    </div>
                    <div id="weddingOne" className="accordion-collapse collapse" aria-labelledby="widdingRingOne" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">Diamond</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"></button>
                        </div>
                    </div>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default MobileNav