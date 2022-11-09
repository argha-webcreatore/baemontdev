import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaRegUser, FaRegHeart, FaCartArrowDown, FaAngleDown, FaTimes } from "react-icons/fa"

function Navmain() {
  return (
    <div id="header" className="header header-1">
                <div className="header-main">
                    <div className="menu-outer">
                        {/* <nav className="container"> */}
                            <div className="row">
                                <div className="col-1 col-sm-12 col-md-12 col-lg-12 align-self-center d-menu-col">
                                    <nav className="grid__item" id="AccessibleNav">
                                        <ul id="siteNav" className="site-nav medium center hidearrow">
                                            <li className="lvl1 parent megamenu"><a href="#;">engagement rings <i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-5 col-lg-4">
                                                                    <div>
                                                                         <a href="#" className="site-nav lvl-1 menu-title">design your own engagement ring</a>
                                                                        <ul className="subLinks">
                                                                            <li className="lvl-2"><Link to='/settings-ring' className="site-nav lvl-2">Start With A Setting</Link></li>
                                                                            <li className="lvl-2"><Link to='/settings-diamond' className="site-nav lvl-2">Start With A Diamond</Link></li>
                                                                            <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Gemstone</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">GET INSPIRED BY CUSTOMER'S RINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Round Cut Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Princess Cut Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Cushion Cut Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Men's Engagement Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">All Diamond Engagement Rings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className="lvl-1 col-md-5 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">CUSTOMIZE YOUR ENGAGEMENT RING</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">The Ring Studio <span className="lbl nm_label3">Popular</span></Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">ENGAGEMENT RING STYLES</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Solitaire </Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pavé</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Channel-Set</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Side-Stone</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Tension</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Vintage</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Halo</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Three-Stone</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-5 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">SHOP BY METAL</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Rose Gold </Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">White Gold</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Yellow Gold</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Platinum</Link></li>
                                                                       
                                                                    </ul>

                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><a href="#;">WEDDING RINGS<i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">WOMEN</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Classic Wedding Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Stackable Rings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                         <a href="#" className="site-nav lvl-1 menu-title">MEN</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Classic Wedding Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Carved Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Alternative Metal Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Men's Wedding Bands</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">ANNIVERSARY</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Eternity Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Anniversary Rings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DIAMOND JEWELRY</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Studs</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Pendants</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Tennis Bracelets</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">SHOP BY METAL</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Rose Gold </Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">White Gold</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Yellow Gold</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Platinum</Link></li>
                                                                        
                                                                       
                                                                    </ul>

                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Learn About Wedding Rings </Link></li>    
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><a href="#;">DIAMONDS<i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DESIGN YOUR OWN ENGAGEMENT RING</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Diamond</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Lab-Created Diamond</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Fancy Color Diamond</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Fancy Color Lab-Created Diamond</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Setting</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">The Ring Studio</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                         <a href="#" className="site-nav lvl-1 menu-title">PREMIER DIAMOND COLLECTION</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">True Hearts™ Diamonds</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">LOOSE DIAMONDS</a>
                                                                    <ul className="subLinks cate-link">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Round</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Princess</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Cushion</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Emerald</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pear</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Oval</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Radiant</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Asscher</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Marquise</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Heart</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">FANCY COLOR DIAMONDS</a>
                                                                    <ul className="subLinks cate-link">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Yellow <span className="lbl nm_label5">SALE</span> </Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pink</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Purple</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Blue</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Green</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Orange</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Brown</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Black</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DESIGN YOUR OWN JEWELRY</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Earrings </Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Earth-Created Diamond Pairs</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Lab-Created Diamond Pairs</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pendants</Link></li>
                                                                        
                                                                       
                                                                    </ul>

                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">READY TO SHIP JEWELRY</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Eternity Rings </Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Anniversary Rings </Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Studs </Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Pendants </Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Tennis Bracelets </Link></li>    
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><a href="#;">FINE JEWELRY<i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">EARRINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Studs</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Earrings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Earrings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pearl Earrings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                         <a href="#" className="site-nav lvl-1 menu-title">NECKLACES</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Pendants</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Necklaces</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Necklaces</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pearl Necklaces</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">BRACELETS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Tennis Bracelets</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Bracelets</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Bracelets</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pearl Bracelets</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">RINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Eternity Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Anniversary Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pearl Rings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">CATEGORIES</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Earrings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Necklaces</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Bracelets</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Birthstone Jewelry</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Precious Metal Jewelry</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Shop All Jewelry</Link></li>
                                                                        
                                                                       
                                                                    </ul>

                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DESIGN YOUR OWN</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Design Your Own Earrings</Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Design Your Own Pendant </Link></li>      
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><a href="#;">GEMSTONES<i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DESIGN YOUR OWN ENGAGEMENT RING</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Gemstone</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Start With A Setting</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">The Ring Studio</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                         <a href="#" className="site-nav lvl-1 menu-title">LOOSE GEMSTONES</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Blue Sapphire</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pink Sapphire</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Yellow Sapphire</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Green Sapphire</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Red Ruby</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Green Emerald</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">CUSTOMER'S GEMSTONE RINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Blue Sapphire Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pink Sapphire Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Yellow Sapphire Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Red Ruby Rings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Green Emerald Rings</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Learn About Gemstones</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">DESIGN YOUR OWN</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Earrings</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Matching Gemstone Pairs</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pendants</Link></li>                                                                        
                                                                    </ul>

                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">READY TO SHIP</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Earrings</Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Pendants </Link></li>      
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Bracelets </Link></li>      
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Rings </Link></li>      
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Jewelry</Link></li>      
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><a href="#;">EDUCATION<i className="an an-angle-down-l"></i></a>
                                                <div className="megamenu style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-8">
                                                            <div className="row">
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">LOOSE DIAMONDS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Cut</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Clarity</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Color</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Carat</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Fancy Color Diamond</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Choosing A Diamond</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">ENGAGEMENT RINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Ring Types</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Setting Types</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Ring Sizer</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Metals</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">WEDDING RINGS</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Wedding Ring Style</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Find The Perfect Ring</Link></li>
                                                                    </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="lvl-1 col-md-4 col-lg-4">
                                                                    <div>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">GEMSTONES</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Sapphires</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Green Emerald</Link></li>
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Red Rubies</Link></li>               
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Gemstone Anatomy</Link></li>                                                                        
                                                                    </ul>

                                                                    </div>
                                                                    <div className='mt-3'>
                                                                    <a href="#" className="site-nav lvl-1 menu-title">FINE JEWELRY</a>
                                                                    <ul className="subLinks">
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Studs</Link></li>    
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Diamond Pendants </Link></li>      
                                                                        <li className="lvl-2"><Link to='/' className="site-nav lvl-2">Pearls </Link></li>   
                                                                    </ul>
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-4">
                                                            <div className="row mm-Banners">
                                                                <div className="col-md-12 col-lg-12 imageCol text-center">
                                                                    <div className="menubox position-relative">
                                                                        <Link to='/' className="mb-0"><img className="blur-up lazyload" src="assets/img/cate-1.jpg" data-src="assets/img/cate-1.jpg" alt="image" width="400" height="342"/></Link>
                                                                        <p className="position-absolute bottom-0 start-50 translate-middle-x"><Link to='/' className="title text-uppercase">ENGAGEMENT RINGS</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="lvl1 parent megamenu"><Link to="/faq">FAQ<i className="an an-angle-down-l"></i></Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        {/* </nav> */}
                    </div>
                </div>
            </div>
  )
}

export default Navmain