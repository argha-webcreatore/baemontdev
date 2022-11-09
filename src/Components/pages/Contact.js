import React from 'react'

function Contact() {
  return (
    <div>
      
  <section id="breadcrumbRow">
    <h2>Contact us</h2>
       <div className="container">
    <div className="row pageTitle m0">
      <div className="col-12">
          <h4 className="fleft">Contact us</h4>
          <ul className="breadcrumb fright">
             <li><a href="index.html">home</a></li>
             <li className="active">Contact us</li>
          </ul>

      </div>
       </div>
    </div>
 </section>


<section id="contactRow" className=" contentRowPad">
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <div className="row m0">
                    <h4 className="contactHeading heading">contact form style</h4>
                </div>
                <div className="row g-4 contactForm">
                            <div className="col-sm-6">
                                <label htmlFor="name">Name *</label>
                                <input type="text" className="form-control" name="name" id="name"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="email">Email *</label>
                                <input type="email" className="form-control" name="email" id="email"/>
                            </div>
                          <div className='col-12 col-sm-6'>
                            <label htmlFor="subject">subject *</label>
                            <input type="text" className="form-control" name="subject" id="subject"/>
                          </div>
                        <div className='col-12 col-sm-6'>
                            <label htmlFor="message">your message</label>
                            <textarea name="message" id="message" className="form-control"></textarea>
                        </div>
                        <div className='col-12 captchaRow'>
                            <img src="images/captcha.png" alt=""/><br/>
                            <label htmlFor="captcha">Enter the above text</label>
                            <input type="text" className="form-control" name="captcha" id="captcha"/>
                        </div>
                        <div className='col-12 d-flex'>
                        <button className="btn btn-primary btn-lg flex-fill" type="submit">send message</button>   
                        </div>
                    <div id="success">
                            <span className="green textcenter">
                                Your message was sent successfully! I will be in touch as soon as I can.
                            </span>
                    </div>
                    <div id="error">
                        <span>
                            Something went wrong, try refreshing and submitting the form again.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row m0">
                    <h4 className="contactHeading heading">contact info style</h4>
                </div>
                <div className="media contactInfo">
                    <div className="media-left">
                        <i className="fas fa-map-marker"></i>
                    </div>
                    <div className="media-body">
                        <h5 className="heading">where to reach us</h5>
                        <p>You can reach us at the following address:</p>
                        <h5>404/2 Design Street, Australia</h5>
                    </div> 
                </div> 
                <div className="media contactInfo">
                    <div className="media-left">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="media-body">
                        <h5 className="heading">Email us @</h5>
                        <p>Email your issues and suggestion for the following email addresses: </p>
                        <h5>info@Defatch.com</h5>
                    </div>
                </div>
                <div className="media contactInfo">
                    <div className="media-left">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                        <h5 className="heading">need to call us?</h5>
                        <p>From Monday to Friday,10:00 AM - 8:00 PM, call us at:</p>
                        <h5>1000-1234-5678</h5>
                    </div>
                </div>
                <div className="media contactInfo">
                    <div className="media-left">
                        <i className="fas fa-question"></i>
                    </div>
                    <div className="media-body">
                        <h5 className="heading">we have great support</h5>
                        <p>We provide the best Quality of products to you.We are always here to help our lovely customers.We ship our products anywhere with more secure. We provide the best Quality of products to you.</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Contact