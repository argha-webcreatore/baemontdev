import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function Footer(props) {
  return (
    <footer className="footer-bg">
            <div className="container">
                <div className="row">
                <div className="col-md-4 about-footer">
                    <h4>About</h4>
                    <p>Co-Founded by 3 close friends who seeks to ‘Redefine
                    ASEAN Diamond and Jewellery Industry‘.
                    </p>
                    <p> Build Locally, Expand Regionally, lmpdct Globally.</p>
                    <a href="">learn more </a>
                </div>
                <div className="col-md-4 customer-service">
                    <h4>THE BAEMONT GUARANTEE</h4>
                    <ul>
                    <li><Link to="/guarantee">20/7 Customer Service</Link></li>
                    <li>Product Lifetime Warranty</li>
                    <li>Lifetime Upgrade</li>
                    <li>Free Shipping</li>
                    <li>Free Resizing</li>
                    <li>Free Engraving</li>
                    <li>Price-Match Guarantee</li>
                    </ul>
                </div>
                <div className="col-md-2 policies">
                    <h4>POLICIES</h4>
                    <ul>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/returns-n-refunds">Returns &amp; Refunds</Link></li>
                    <li><Link to="/shipping-policy">Shipping policy</Link></li>
                    <li><Link to="/t-n-c">Terms &amp; Conditions</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="col-md-2 follow-us">
                    <h4>FOLLOW US</h4>
                    <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href=""><FaFacebookF /></a>
                    </li>
                    <li className="list-inline-item"><a href=""><FaTwitter /></a></li>
                    <li className="list-inline-item"><a href=""><FaInstagram /></a></li>
                    </ul>

                </div>
                </div>
            </div>
        
            <div className="col-12 footer-bottom">
                <p>BAEMONT © 2020-2021. All rights reserved.</p>
            </div>
        </footer>
  )
}

Footer.propTypes = {

}

export default Footer


