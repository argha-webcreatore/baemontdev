import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'owl.carousel/dist/assets/owl.carousel.css'
import OwlCarousel from 'owl.carousel'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

function Home() {

    React.useEffect(()=>{
        var script = document.createElement('script');
        script.src = "assets/js/init.js";
        
        document.head.appendChild(script);
    }, [])
    
    return (
      <>
            
        <div id="home" className="hero-slider owl-carousel owl-theme">
            <div className="single-hs-item item-bg1">
                <div className="d-table">
                    <div className="d-tablecell">
                        <div className="hero-text">
                            <h1>Its Time to Create <br/>Your Perfection</h1>
                        
                            <div className="slider-btn mt-5">
                            <Link to="/settings-ring" className="custom-btn1">Start With a Setting</Link>
                            <Link to="/settings-diamond" className="custom-btn1">Start With a Diamond</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-hs-item item-bg2">
                <div className="d-table">
                    <div className="d-tablecell">
                        <div className="hero-text">
                            <h1>Its Time to Create <br/>Your Perfection</h1>
                        
                            <div className="slider-btn mt-5">
                            <Link to="/settings-ring" className="custom-btn1">Start With a Setting</Link>
                            <Link to="/settings-diamond" className="custom-btn1">Start With a Diamond</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row g-5 m-0 my-5">
                <div className="col-md-3">
                    <div className="card text-white">
                        <img src="assets/img/cate-1.jpg" className="img-fluid" alt="..." />
                        <div className="card-img-overlay btn-text">
                            <a className="btn cate-btn" href="#">ENGAGEMENT RINGS</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white">
                        <img src="assets/img/cate-2.jpg" className="img-fluid" alt="..." />
                        <div className="card-img-overlay btn-text">
                            <a className="btn cate-btn" href="#">WEDDING BANDS</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white">
                        <img src="assets/img/cate-3.jpg" className="img-fluid" alt="..." />
                        <div className="card-img-overlay btn-text">
                            <a className="btn cate-btn" href="#">FINE JEWELLERY</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white">
                        <img src="assets/img/cate-4.jpg" className="img-fluid" alt="..." />
                        <div className="card-img-overlay btn-text">
                            <a className="btn cate-btn" href="#">WEDDING BANGLES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="create-ring-sec">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-6 create-ring-bg">
                        <img className="img-fluid" src="assets/img/diamond-1.png" alt="" />
                    </div> */}
                    <div className="col-md-6  diamond_j_cont">
                        <div className="diamond_j"></div>
                        <div className="diamond_b">
                            <img alt="" className="img-fluid" src="/assets/img/ring.png" />
                        </div>
                    </div>
                    <div className="col-md-6 engagement-ring-create">
                        <h6>DESIGN YOUR OWN</h6>
                        <h1>ENGAGEMENT RING</h1>
                        <p>Design your engagement ring your way. Start
                        with o ring setting and then odd the perfect
                        center stone - or vice verso. It’s really up to you!</p>
                        <div className="ring-create-btn mt-5 d-flex justify-content-end">
                        <Link to="/settings-ring" className="custom-btn1">Start With a Setting</Link>
                        <p>Or</p>
                        <Link to="/settings-diamond" className="custom-btn1">Start With a Diamond</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="custom-offer-sec my-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6 custom-offer-benner" data-aos="fade-right">
            <AnimatedOnScroll animationIn="bounceInLeft" >
                <div className="card text-white">
                    <img  src="assets/img/offer-banner-1.jpg" className="card-img img-fluid" alt="..." />
                    <div className="card-img-overlay me-3">
                    <h5 className="card-title custom-offer-title">CHOOSE YOUR<br/>
                        OWN</h5>
                    <p className="card-text custom-offer-sub-title">CUSTOM- MADE ENGAGEMENT RING</p>
                    
                    </div>
                </div>
            </AnimatedOnScroll>
                </div>
                <div className="col-md-6 custom-offer-benner" data-aos="fade-left">
            <AnimatedOnScroll animationIn="bounceInRight" >
                <div className="card text-white">
                    <img src="assets/img/offer-banner-2.jpg" className="card-img img-fluid" alt="..." />
                    <div className="card-img-overlay me-3">
                    <h5 className="card-title custom-offer-title">YOUR IDEAL<br/>
                        EVERYTHING</h5>
                    <p className="card-text custom-offer-sub-title">MOMENTISE YOURSELF WITH<br/>
                        OUR BEST COLLECTIONS</p>
                    
                    </div>
                </div>
            </AnimatedOnScroll>
                </div>
            </div>
            </div>
        </section>

        <section id="shopRings">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sectionTitle">
                            <h5>Your Pick</h5>
                            <h3>YOUR IDEAL EVERYTHING</h3>
                            <p>Momenlise yourself with our best collections</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="d-carousel-cener owl-carousel">
                <div className="dc-inner">
                    <a href="single-product.html">
                    <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/1.png" />
                    <div className="dc-containt">
                        <h2>Cushion</h2>
                        <p>Bar Set Anniversary Ring</p>
                    </div>
                    </a>
                </div>
                <div className="dc-inner">
                    <a href="single-product.html">
                    <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/2.png" />
                    <div className="dc-containt">
                        <h2>Round</h2>
                        <p>Bar Set Anniversary Ring</p>
                    </div>
                    </a>
                </div>
                <div className="dc-inner">
                    <a href="single-product.html">
                    <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/3.png" />
                    <div className="dc-containt">
                        <h2>Pear</h2>
                        <p>Bar Set Anniversary Ring</p>
                    </div>
                    </a>
                </div>
                <div className="dc-inner">
                    <a href="single-product.html">
                    <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/4.png" />
                    <div className="dc-containt">
                        <h2>Radiant</h2>
                        <p>Bar Set Anniversary Ring</p>
                    </div>
                    </a>
                </div>
                <div className="dc-inner">
                    <a href="single-product.html">
                    <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/5.png" />
                    <div className="dc-containt">
                        <h2>Ovel</h2>
                        <p>Bar Set Anniversary Ring</p>
                    </div>
                    </a>
                </div>
            </div>
        </section>


        <section className="rush-sec my-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6 no-rush-img">
                <AnimatedOnScroll animationIn="bounceInLeft">
                    <img className="img-fluid" src="assets/img/diamond-2.jpg" alt="" />
                </AnimatedOnScroll>

                </div>
                <div className="col-md-6 no-rush">
                <h5>NO RUSH, NO FUSS</h5>
                <h2>DETAILED DIAMOND VIEWING</h2>
                <p>Picking that special stone for that special someone
                    requires time.
                    It requires chemistry. It requires that andrenaline
                    rush to know 'That's the One!’
                    
                    At BAEMONT, your time is of your essence.
                    Simmer yourself with the sparkles of each diamond.
                    NO squinting of eyes. No rush for sales. No promo-
                    tion that is running away.
                    
                    Just your time, your favourite drink and your decision!
                </p>
                <a className="btn" href="#">EXPERIENCE IT NOW</a>
                </div>
            </div>
            </div>
        </section>

        <section className="detail-dimond-bg my-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6 detail-dimond">
                <h5>NO RUSH, NO FUSS</h5>
                <h2>DETAILED DIAMOND VIEWING</h2>
                <p>Picking that special stone for that special someone
                requires time.
                It requires chemistry. It requires that andrenaline
                rush to know 'That's the One!’
                
                At BAEMONT, your time is of your essence.
                Simmer yourself with the sparkles of each diamond.
                NO squinting of eyes. No rush for sales. No promo-
                tion that is running away.
                
                Just your time, your favourite drink and your decision!
                </p>
                <a className="btn" href="#">EXPERIENCE IT NOW</a>
            </div>
            <div className="col-md-6">
                <AnimatedOnScroll animationIn="bounceInRight">
                    <img src="assets/img/detail-dimond-img.jpg" alt="" className="img-fluid" />
                </AnimatedOnScroll>
            </div>
            </div>
        </div>
        </section>

        <section id="shopRings">
        <div className="sectionTitle">
            <h5>Tying it Altogether</h5>
            <h3>WEDDING BANDS</h3>
            <p>We believe what you believe too, the everlasting love</p>
        </div>
        <div className="d-carousel-cener owl-carousel">
            <div className="dc-inner">
                <a href="single-product.html">
                <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/1.png" />
                <div className="dc-containt">
                    <h2>Cushion</h2>
                    <p>Bar Set Anniversary Ring</p>
                </div>
                </a>
            </div>
            <div className="dc-inner">
                <a href="single-product.html">
                <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/2.png" />
                <div className="dc-containt">
                    <h2>Round</h2>
                    <p>Bar Set Anniversary Ring</p>
                </div>
                </a>
            </div>
            <div className="dc-inner">
                <a href="single-product.html">
                <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/3.png" />
                <div className="dc-containt">
                    <h2>Pear</h2>
                    <p>Bar Set Anniversary Ring</p>
                </div>
                </a>
            </div>
            <div className="dc-inner">
                <a href="single-product.html">
                <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/4.png" />
                <div className="dc-containt">
                    <h2>Radiant</h2>
                    <p>Bar Set Anniversary Ring</p>
                </div>
                </a>
            </div>
            <div className="dc-inner">
                <a href="single-product.html">
                <img alt="ring" src="http://veepixel.com/tf/html/d-shine/images/carousel/5.png" />
                <div className="dc-containt">
                    <h2>Ovel</h2>
                    <p>Bar Set Anniversary Ring</p>
                </div>
                </a>
            </div>
        </div>
        </section>

        <section className="crafted-design-bg my-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6 crafted-design-text">
                <h4>THE FINEST CRAFTMANSHIP<br/>
                Elegantly Designed and Carefully Crafted</h4>
                <p>Every piece of jewellery is designed by our gifted
                    designers and hand-crafted by our skilled artisans.
                </p>
                <p> Our crafters are very passionate about the art of
                    jewellery making, requiring their full attention to
                    detail in producing the finest of quality.</p>
                    
                    <a className="btn" href="">EXPERIENCE IT NOW</a>

            </div>
            <div className="col-md-6">

            </div>
            </div>
        </div>
        </section>


        <section className="my-5">
        <div className="container">
            <div className="row g-3">
            <div className="blog-sectionTitle">
                <h5>Tying it Altogether</h5>
                <h3>WEDDING BANDS</h3>
                <p>We believe what you believe too, the everlasting love</p>
            </div>
            <div className="col-md-3">
                <div className="card text-white">
                <img src="assets/img/blog-1.jpg" className="card-img" alt="..." />
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white">
                <img src="assets/img/blog-2.jpg" className="card-img" alt="..." />
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white">
                <img src="assets/img/blog-3.jpg" className="card-img" alt="..." />
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white">
                <img src="assets/img/blog-4.jpg" className="card-img" alt="..." />
                </div>
            </div>
            
            </div>
        </div>
        </section>

        <section className="my-5">
        <div className="container">
            <div className="row">
            <div className="customer-logos slider">
            <div className="slide"><img src="assets/img/partner-1.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-2.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-3.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-4.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-5.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-6.jpg" /></div>
            <div className="slide"><img src="assets/img/partner-7.jpg" /></div>
        </div>
            
            </div>
        </div>
        </section>

      </>
    )
}

export default Home
