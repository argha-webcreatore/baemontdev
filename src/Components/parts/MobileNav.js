import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FaSearch, FaRegUser, FaRegHeart, FaCartArrowDown, FaTrash, FaAngleDown, FaTimes } from "react-icons/fa"
import { CgMenuLeft, IconName } from "react-icons/cg";
import { GiBigDiamondRing, GiDiamondTrophy, GiCutDiamond, GiTopaz } from "react-icons/gi";

import { Typography, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                            <Box sx={{px: 2.2, py: 2}}>
                                <Link style={{marginBottom: 1.5 + 'rem', display: 'block', fontSize: 1.2 + 'rem', color: '#606060', textDecoration: 'underline', fontWeight: 500}} to='/'>
                                    Engagement rings
                                </Link>
                                
                                <Typography>
                                    Design your own engagement ring
                                </Typography>
                                <List sx={{mb: 2}}>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/settings-ring' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Start With A Setting</Link>
                                    </ListItem>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiCutDiamond />
                                        </ListItemIcon>
                                        <Link to='/settings-diamond' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Start With A Diamond</Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiTopaz />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Start With A Gemstone</Link>
                                    </ListItem>
                                </List>

                                <Typography>
                                    Get Inspired by Customer's Rings
                                </Typography>
                                <List sx={{mb: 2}}>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Round Cut Rings</Link>
                                    </ListItem>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Princess Cut Rings</Link>
                                    </ListItem>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Cushion Cut Rings</Link>
                                    </ListItem>
                                    <ListItem sx={{ mb: 1 }} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>Men's Engagement Rings</Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <GiBigDiamondRing />
                                        </ListItemIcon>
                                        <Link to='/' style={{ fontSize: .85 + 'rem',color: '#646464' }}>All Diamond Engagement Rings</Link>
                                    </ListItem>
                                </List>
                            </Box>
                            
                            <img className='img-fluid w-100' src="assets/img/cate-1.jpg" alt="" style={{height: 8 + 'rem', objectFit: 'cover'}} />
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
                           No Products Available
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="DiamondringThree">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">Diamond</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#DiamondThree" aria-expanded="false" aria-controls="DiamondThree"></button>
                        </div>
                    </div>
                    <div id="DiamondThree" className="accordion-collapse collapse" aria-labelledby="DiamondringThree" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                        No Products Available
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="jewelryringfour">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">FINE JEWELRY</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#jewelryfour" aria-expanded="false" aria-controls="jewelryfour"></button>
                        </div>
                    </div>
                    <div id="jewelryfour" className="accordion-collapse collapse" aria-labelledby="jewelryringfour" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                        No Products Available
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="headingfive">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">GEMSTONES</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive"></button>
                        </div>
                    </div>
                    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                        No Products Available
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="headingsix">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/">EDUCATION</Link>
                            <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix"></button>
                        </div>
                    </div>
                    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#mobNav-menu">
                        <div className="accordion-body">
                        No Products Available
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <div className="accordion-header" id="headingeght">
                        <div className="accordion-button d-flex justify-content-between align-items-center">
                            <Link to="/faq">FAQ</Link>
                            {/* <button className="action-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeght" aria-expanded="false" aria-controls="collapseeght"></button> */}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default MobileNav