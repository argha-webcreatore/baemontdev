import React from 'react'

function Faq() {
  return (
    <div>
      
  <section id="breadcrumbRow">
    <h2>FAQs | How Can We Help?</h2>
       <div className="container">
    <div className="row pageTitle m0">
      <div className="col-12">
          <h4 className="fleft">FAQs | How Can We Help?</h4>
          <ul className="breadcrumb fright">
             <li><a href="index.html">home</a></li>
             <li className="active">FAQs | How Can We Help?</li>
          </ul>

      </div>
       </div>
    </div>
 </section>

 <section className="my-5">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="w-100 me-3" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                  </div>
                  <div className="faq-text">
                    <h3>Payment</h3>

                    <div className="accordion" id="payment">
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button title-faq" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What payment options are available? 
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#payment">
                            <div className="accordion-body">
                              We accept most major credit/debit cards (ie. VISA, MasterCard, American Express, UnionPay) and direct bank transfers.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Will I receive a discount if I pay via direct bank transfer? 
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#payment">
                            <div className="accordion-body">
                              Yes. For bank transfers, customers will enjoy a rebate of 2% from their final order price. Customers choosing this option will be shown instructions upon checkout. Please take note that bank transfers usually take 2-3 days for clearance/processing time before a payment is received on our end.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can I pay using 2 or more separate payment options in one transaction? 
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#payment">
                            <div className="accordion-body">
                              Yes. We do offer such flexible payment options for customers who needs it. Please reach out to us at hello@baemont.com before placing your order so our team can further assist.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingfour">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                How is refund processed? 
                            </button>
                          </h2>
                          <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#payment">
                            <div className="accordion-body">
                              Once your requests for return or cancellation has been approved, our team will send you further instructions via email on how to proceed with refunds.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingfive">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                Will I be charged custom duties or taxes?
                            </button>
                          </h2>
                          <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#payment">
                            <div className="accordion-body">
                              Once your requests for return or cancellation has been approved, our team will send you further instructions via email on how to proceed with refunds.
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="faq-text">
                    <h3>Delivery</h3>

                    <div className="accordion" id="deliver">
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdelione">
                            <button className="accordion-button title-faq" type="button" data-bs-toggle="collapse" data-bs-target="#delione" aria-expanded="true" aria-controls="delione">
                                How do you do delivery? 
                            </button>
                          </h2>
                          <div id="delione" className="accordion-collapse collapse show" aria-labelledby="headingdeliOne" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                <p>
                              We use only trusted courier service for safe and secured delivery. All our orders are insured up to the full value for our customers’ convenience and peace of mind. Tracking number and estimated delivery date will be provided once order is processed and ready for delivery.
                                </p>
                                <p>
                              All our delivery will require signature upon receival for insurance purposes. For security reasons, we do not deliver to any P.O. Boxes and Locked Bag.
                                </p>
                                
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdelitwo">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#delitwo" aria-expanded="false" aria-controls="delitwo">
                                Do you offer free delivery?
                            </button>
                          </h2>
                          <div id="delitwo" className="accordion-collapse collapse" aria-labelledby="headingdelitwo" data-bs-parent="#deliver">
                            <div className="accordion-body">
                              Yes. We provide free delivery for all local orders. For international orders, please refer to our international shipping policy here.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdeliThree">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#deliThree" aria-expanded="false" aria-controls="deliThree">
                                Do you offer international shipping?
                            </button>
                          </h2>
                          <div id="deliThree" className="accordion-collapse collapse" aria-labelledby="headingdeliThree" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                <p> 
                              Yes. We use FeDex as our trusted courier service for all international delivery. Customers will be responsible for the shipping cost. For your convenience, we have made available a shipping calculator for an estimated shipping costs to your respective country. Please click here for more about estimating international shipping costs.
                                </p>
                                <p> 
                              Please take note that customs office of the destination country may impose duties and taxes on international orders. We do not have control over custom duties and taxes as it varies by country. For this reason, we would not be able to reimburse you for duties and taxes incurred upon delivery.
                                </p>
                                <p> 
                              For international delivery transit times, you will receive a tracking number and estimated delivery date from our trusted courier once your order has been fully processed and shipping is booked. You can refer to this link for more information on estimated transit time.
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdelifour">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#delifour" aria-expanded="false" aria-controls="delifour">
                                How long does delivery take after I’ve placed an order?
                            </button>
                          </h2>
                          <div id="delifour" className="accordion-collapse collapse" aria-labelledby="headingdelifour" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                <p>
                              Generally, an order requires 15 business days processing time after completion of final payment. Deliveries are made throughout the week during business hours between 8am to 5pm. Our courier will send out notification a day prior to delivery for address confirmation as provided in the order.
                                </p>
                                <p>
                              For international orders, please refer to our international shipping policy here.
                                </p>
                                <p>
                                 <strong>** Due to Covid-19, our processing time will be prolonged and we expect an extended period of up to 3-4 weeks.</strong>
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdelifive">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#delifive" aria-expanded="false" aria-controls="delifive">
                                Can I collect my order in-person?
                            </button>
                          </h2>
                          <div id="delifive" className="accordion-collapse collapse" aria-labelledby="headingdelifive" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                Yes. This can be arranged separately. Please reach out to our customer service if you would like to request for self pick-up of your order(s).
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdelisix">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#delisix" aria-expanded="false" aria-controls="delisix">
                                Is your delivery fully insured?
                            </button>
                          </h2>
                          <div id="delisix" className="accordion-collapse collapse" aria-labelledby="headingdelisix" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                Yes. All our orders are insured right up to the declared value of final order price.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingdeliseven">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#deliseven" aria-expanded="false" aria-controls="deliseven">
                                Can you deliver to an address different from billing address?
                            </button>
                          </h2>
                          <div id="deliseven" className="accordion-collapse collapse" aria-labelledby="headingdeliseven" data-bs-parent="#deliver">
                            <div className="accordion-body">
                                Yes. We could arrange for this however for security purposes, our team may request for additional verification documents to validate the transaction.
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="faq-text">
                    <h3>Return, Refund and Cancellation</h3>

                    <div className="accordion" id="return">
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingreturnone">
                            <button className="accordion-button title-faq" type="button" data-bs-toggle="collapse" data-bs-target="#returnone" aria-expanded="true" aria-controls="returnone">
                                What is your return or exchange policy?
                            </button>
                          </h2>
                          <div id="returnone" className="accordion-collapse collapse show" aria-labelledby="headingreturnOne" data-bs-parent="#return">
                            <div className="accordion-body">
                                <p>
                                  At BAEMONT, we do our best to ensure our customers are given the opportunity and assurance of shopping at our online store safely and securely. As such, all our sales made are final.
                                </p>
                                <p>
                                  However, we understand that there are unfavourable circumstances that requires our attention to ensure we fulfil customer requests accordingly. In the unfortunate event that you are concerned with your order (for example, damages, defects or incorrect engraving), please inform our customer service team at Whatsapp (+6010-3630 0881) or email at hello@baemont.com for immediate assistance.
                                </p>
                                <p>
                                  The request for return must be within 7 working days from date received. Upon agreement, any returning items should be in its original packaging accompanied by original documentations.
                                </p>
                                
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingreturntwo">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returntwo" aria-expanded="false" aria-controls="returntwo">
                              How do I return your product, if accepted?
                            </button>
                          </h2>
                          <div id="returntwo" className="accordion-collapse collapse" aria-labelledby="headingreturntwo" data-bs-parent="#return">
                            <div className="accordion-body"> 
                              <p>
                                In order to avoid any possible delays in your accepted returns, please do follow the procedures/instructions as indicated by our customer service representative.
                              </p>
                              <p>
                                Generally, you will be given a Return Reference Number to be attached to your packaging. We will then arrange for our courier to have the package picked up from your designated address and time of the day.</p>
                              <p>
                                Please note that all accepted returns must be in its original packaging as received. Should the returning item not meet our return guidelines, BAEMONT reserves the right to refuse receipt upon delivery and have item re-shipped back to customers.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingreturnThree">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnThree" aria-expanded="false" aria-controls="returnThree">
                              Do you allow placed orders to be cancelled and refunded?
                            </button>
                          </h2>
                          <div id="returnThree" className="accordion-collapse collapse" aria-labelledby="headingreturnThree" data-bs-parent="#return">
                            <div className="accordion-body">
                                <p> 
                                  If you want to make any changes to your placed orders, promptly reach out to our customer service hotline at +6010 3630 0881 or send an email to hello@baemont.com for further assistance.
                                </p>
                                <p> 
                                  Depending on the progress of your order, we cannot promise a guaranteed cancellation but are committed to making any reasonable adjustments wherever possible.
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingreturnfour">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returnfour" aria-expanded="false" aria-controls="returnfour">
                              Do you offer an upgrade or exchange?
                            </button>
                          </h2>
                          <div id="returnfour" className="accordion-collapse collapse" aria-labelledby="headingreturnfour" data-bs-parent="#return">
                            <div className="accordion-body">
                                <p>
                                  Yes. For more information, please refer to our LifeTime Upgrade policy here.
                                </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="faq-text">
                    <h3>Order, Ring and Packaging</h3>

                    <div className="accordion" id="order">
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingorderone">
                            <button className="accordion-button title-faq" type="button" data-bs-toggle="collapse" data-bs-target="#orderone" aria-expanded="true" aria-controls="orderone">
                              Can I custom-design my own Engagement Ring?
                            </button>
                          </h2>
                          <div id="orderone" className="accordion-collapse collapse show" aria-labelledby="headingorderOne" data-bs-parent="#order">
                            <div className="accordion-body">
                                <p>
                                  Yes. We do offer the opportunity for our customers to provide their own desired custom design ring. We usually require a clearly taken picture/sketch/mock-up of the ring to be submitted to our designers before moulding.
                                </p>
                                <p>
                                  If you prefer to use your own custom-design for your diamond settings, please reach out directly to our Customer Service Rep for help.
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingordertwo">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ordertwo" aria-expanded="false" aria-controls="ordertwo">
                              Can I resize my ring after I’ve purchased them? 
                            </button>
                          </h2>
                          <div id="ordertwo" className="accordion-collapse collapse" aria-labelledby="headingordertwo" data-bs-parent="#order">
                            <div className="accordion-body"> 
                              <p>
                                Yes. We offer a one-time complimentary ring resizing for any BAEMONT ring purchased within the first year, including free return shipping. 
                              </p>
                              <p>
                                Take note that most rings are usually re-sizable but there are designs and styles that may not be suitable for re-sizing.
                              </p>
                              <p>
                                If you need to resize a BAEMONT ring outside of the first year, a small fee of RMxx will apply. Please contact our customer service rep to make the necessary arrangement.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingorderThree">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#orderThree" aria-expanded="false" aria-controls="orderThree">
                              How do I find my ring size?
                            </button>
                          </h2>
                          <div id="orderThree" className="accordion-collapse collapse" aria-labelledby="headingorderThree" data-bs-parent="#order">
                            <div className="accordion-body">
                                <p> 
                                  We provide a free ring-sizer for your convenience. Please click here to download.
                                </p>
                                <p> 
                                  We also have a conversion chart that you can use to understand the different ring sizes for different countries. Please click here to download.
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingorderfour">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#orderfour" aria-expanded="false" aria-controls="orderfour">
                              Do you offer engraving services on my ring?
                            </button>
                          </h2>
                          <div id="orderfour" className="accordion-collapse collapse" aria-labelledby="headingorderfour" data-bs-parent="#order">
                            <div className="accordion-body">
                                <p>
                                  Yes. Upon checkout, please let us know what engraving would you like on your selected BAEMONT ring.
                                </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item faq-item">
                          <h2 className="accordion-header" id="headingorderfive">
                            <button className="accordion-button title-faq collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#orderfive" aria-expanded="false" aria-controls="orderfive">
                              I like a setting from your website, but I have my own loose diamonds. Can you set my diamond into a BAEMONT ring?
                            </button>
                          </h2>
                          <div id="orderfive" className="accordion-collapse collapse" aria-labelledby="headingorderfive" data-bs-parent="#order">
                            <div className="accordion-body">
                                <p>
                                  We may be able to cater for such request but will require further engagement to understand the diamonds to be set. Please contact us at hello@baemont.com so our team can assist in your request.
                                </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
            </div>
            <div className="col-md-4">
              <div className="right-faq-sec">
                <a href="#" className="btn faq-btn">
                  Chat Now
                </a>
                <p>Get instant answers to your questions.</p>
              </div>
              <div className="right-faq-sec">
                <a href="#" className="btn faq-btn">
                  Email Us
                </a>
                <p>Email us at hello@baemont.com and we’ll try our best to address all the questions within two business days.</p>
              </div>
              <div className="right-faq-sec">
                <a href="#" className="btn faq-btn">
                  Call Us
                </a>
                <p>Tel: +6011 3630 0881.</p>
              </div>


            </div>
        </div>
    </div>
 </section>

    </div>
  )
}

export default Faq