import React from 'react'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='col-md-9'
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    className: 'align-items-start',
  };
}

function Guarantee() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mediumViewport = useMediaQuery('(min-width:767px)');


  return (
    <div>
      
  <section className="bg-light py-2">
    <div className="container">
      <div className="row pageTitle">
        <div className="col-12">
          
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="theme-color text-uppercase d-block" href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Guarantee</li>
            </ol>
          </nav>
          <h4 className="text-uppercase mb-0">The Baemont Guarantee</h4>

        </div>
      </div>
    </div>
  </section>

<section className="guaranteeList py-5">
  <div className="container">
    <div className="row">
      <div className="col-12">
      <Box className='row g-0' sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }} >
        <Tabs
          className='col-md-3'
          //orientation="vertical"
          orientation={ mediumViewport ? "vertical" : "horizontal"}
          //variant="scrollable"
          variant={mediumViewport ? "" : "scrollable"}
          scrollButtons="auto"
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label="Guarantee Tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="24/7 Customer Service" {...a11yProps(0)} />
          <Tab label="Lifetime Warranty" {...a11yProps(1)} />
          <Tab label="Free Shipping Worldwide" {...a11yProps(2)} />
          <Tab label="1 Year Free Resizing" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
          <h4 className="theme-color">24/7 Customer Service</h4>
                <p>Our ravely-reviewed Customer Service team of non-commissioned diamond and jewelry experts is here for you 24/7.</p>
                
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
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <h4 className="theme-color">Lifetime Warranty</h4>

            <p>We are committed to ensuring the quality of your purchase; we stand behind everything that we sell and warrant that all items will be free from any manufacturing defects at the time of delivery. We will repair and maintain your jewelry for a lifetime.</p>

            <p>All of our jewelry is manufactured using the highest quality materials and is inspected prior to shipment. Our lifetime warranty offers free prong tightening, re-polishing, rhodium plating and cleaning services.</p>

            <p>To take advantage of these services, you can either mail your jewelry to our offices, or you can take it to a qualifying Jared service center to receive complimentary jewelry maintenance and repairs. Click here to learn more information and find a location near you.</p>

            <p>In the event that there is ever a problem with your jewelry or you are in need of other services that are not covered under our lifetime warranty, your jewelry can be mailed back to our office for evaluation*. Once inspected, should charges apply, you will be notified prior to any work being done to service your jewelry.</p>

            <p>Please Contact Us if you have any questions or would like to return your item(s) to take advantage of our free lifetime warranty or request additional repair work needed to service your Baemont jewelry.</p>

            <p>*To send us your ring, U.S. customers may purchase a fully insured shipping label for $30. International customers will be subject to return shipping cost applicable to their order. We will ship your item back to you free of charge.</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
          <div id="LeftShippingPane1">
                  <h4 className="theme-color">Free Shipping Worldwide</h4>
                  <p>Purchase any item and we will ship it to you anywhere for free.
                      We provide fast, free shipping and insurance to all our shipping destinations, regardless of the order amount. All items are securely packaged and fully insured while in transit to your home or office.</p>
                  <p>Items showcased on our website can be purchased in-store and delivered directly to your home.
                  </p>
                  <p className="guarantee-title-shipping">Shipping Methods</p>
                  <p>US orders greater than $500 in value are shipped via FedEx Priority Overnight.
                      International orders over $500 in value are shipped via FedEx International Priority.
                      US orders under $500 in value are shipped via FedEx Two Day Saver.
                      International orders under $500 in value are shipped via FedEx Economy or USPS.
                      Order status and tracking information are available from the <a href="#">baemont.com</a> website by <a container="#WidePane" href="my-account/">clicking here</a>.<br/><br/>
                      Please note: We only ship your order once it has passed through our thorough quality control. Loose diamonds are shipped immediately after passing inspection. All other jewelry and engagement rings will be shipped in one to three weeks, depending on the production schedule of the item(s).</p>
                  <p className="guarantee-title-shipping">For your protection, Baemont always:</p>
          
                  <ul>
                      <li>1. Insures and registers all items for their full value</li>
                      <li>2. Uses only FedEx services for all orders, in order to deliver high value packages in the fastest and safest manner.</li>
                      <li>3. Requires that all deliveries be made to a physical business or home address</li>
                      <li>4. Disallows delivery to PO Box addresses</li>
                      <li>5. Requires a signature for the package</li>
                      <li>6. Allows for an alternative shipping address</li>
                  </ul>
                  <p>We suggest that any credit card order be shipped to a valid address on file with the
                      credit card company, although alternate addresses are acceptable. We can also arrange to have your package
                      shipped to a local FedEx station for pick-up. You may call our offices at any time for assistance locating the
                      nearest FedEx facility.</p>
                  <p className="guarantee-title-shipping">
                      Additional Info about International Shipping
                  </p>
                  <p>International customers will be responsible for any duties, VAT, taxes or surcharges levied or charged by their country, so please check with local authorities prior to placing your order to confirm taxes and duties.</p>
                </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className="risk-free-inner-content">
                  <h4 className="theme-color">1 Year Free Resizing</h4>
                  <p >
                      We will resize your ring once for free within the first year of your purchase, including free return shipping within the U.S. and Canada for the first resize. International customers pay a small return shipping fee of $50. If more than one resize is needed or outside of the first year, a $25 fee applies to resize white, yellow, and rose gold rings, and $50 for platinum. The return shipping fee is $30 for US customers and $50 for international customers. We do not charge to ship the ring back to you, so that service is always free. 
                  </p>
                  <p >
                      During the resize process small amounts of metal will be added or removed to increase or decrease the size to adjust for the new size needed. As a result, your ring may be slightly thicker or thinner when completed. This is a minor difference, and may or may not be discernible to you. Your resized ring will be inspected by quality assurance to ensure that our high standards are met, and that your ring has been fitted to the size that you need. 
                  </p>
                  <p >
                      *Some rings cannot be resized. This may be due to a size restriction, falling outside of the recommended range, or due to the design style. During our 30-day return policy you will not be charged if your ring needs to be remanufactured. Outside our 30-day return policy and during our 1 Year Free Resizing policy a fee will apply if your ring must be remanufactured. It is important to know that your new ring may not look ‘exactly’ like the original, as minor variations can occur. Upon receipt and inspection of your ring you will be notified prior to any work being done to discuss the charge to replace your ring (Effective 03/11/2019).
                  </p>
                  <p >
                      Please <a href="#" container="#GuaranteeRightPane">Contact Us</a>
                      if you have any questions about this policy, your ring, or would like to take advantage of this service.
                  </p>
                </div>
        </TabPanel>
      </Box>
      </div>
    </div>
    
    
  </div>
</section>

    </div>
  )
}

export default Guarantee