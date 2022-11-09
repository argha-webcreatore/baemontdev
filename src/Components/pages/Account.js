import React from 'react'
import { Link } from 'react-router-dom'
import { FaThList, FaTh, FaSearchPlus, FaRegHeart, FaHeart } from "react-icons/fa"



import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


import './AcStyle.css'




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


function Account() {
    var customer_id = localStorage.getItem("customer_id");
    if(customer_id==null){
        window.location.href = window.location.origin + '/login';
    }  
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const mediumViewport = useMediaQuery('(min-width:767px)');

  return (
    <>
        <main>
        <div className="my-account-wrapper section-padding">
            <div className="container">
                <div className="section-bg-color">
                    <div className="row">
                        <div className="col-12">
                            <Box className='row g-0' sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }} >
                                <Tabs
                                    className='col-md-3'
                                    //orientation="vertical"
                                    orientation={mediumViewport ? "vertical" : "horizontal"}
                                    //variant="scrollable"
                                    variant={mediumViewport ? "" : "scrollable"}
                                    scrollButtons="auto"
                                    allowScrollButtonsMobile
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Section Account"
                                    sx={{ borderRight: 1, borderColor: 'divider' }}
                                >
                                    <Tab label="My Details" {...a11yProps(0)} />
                                    <Tab label="My Orders" {...a11yProps(1)} />
                                    <Tab label="Wish List" {...a11yProps(2)} />
                                    <Tab label="Help And Support" {...a11yProps(3)} />
                                   
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                <div className="row g-3">
                                                    <h3 className='mb-3'>
                                                    Login Details
                                                    </h3>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputName4" className="form-label">First name</label>
                                                        <input type="name" className="form-control" id="inputName4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputname" className="form-label">Last name</label>
                                                        <input type="name" className="form-control" id="inputname" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                    </div>
                                                                    
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputText" className="form-label">My Ring Size</label>
                                                        <input type="text" className="form-control" id="inputText" />
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                        Find your ring size
                                                        </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                    <label className="form-check-label me-3" htmlFor="gridCheck">
                                                    Gender
                                                        </label>
                                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                                    <label className="btn gender-btn me-2" htmlFor="btnradio1">Woman</label>

                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                                    <label className="btn gender-btn" htmlFor="btnradio2">Man</label>
                                                    </div>
                                                    </div>
                                                    <div className="col-12 text-center">
                                                        <button type="submit" className="btn submit-btn">Save</button>
                                                    </div>
                                                    <div className="col-12">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                                    Send me special offers
                                                                    </label>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row g-3">
                                                        <h3 className='mb-3'>
                                                        Change Password
                                                        </h3>
                                                        <div className="col-12">
                                                            <label htmlFor="inputName4" className="form-label">Current Password</label>
                                                            <input type="name" className="form-control" id="inputName4" />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputname" className="form-label">New Password</label>
                                                            <input type="name" className="form-control" id="inputname" />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputEmail4" className="form-label">Confirm Password</label>
                                                            <input type="email" className="form-control" id="inputEmail4" />
                                                        </div>
                                                    
                                                            <div className="col-12 text-center">
                                                                <button type="submit" className="btn submit-btn">Change Password</button>
                                                            </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                        <table className="table orderTable">
                                            <thead>
                                                <tr>
                                                <th scope="col">Order No.</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Order Status	</th>
                                                <th scope="col">Order Date</th>
                                                <th scope="col">Est. ship date</th>
                                                <th scope="col">Insurance</th>
                                                <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">#</th>
                                                <td>00.00</td>
                                                <td>none</td>
                                                <td>none</td>
                                                <td>none</td>
                                                <td>none</td>
                                                <td>none</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                        <div className="row g-3">
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card">
                                                <img src="assets/img/cate-1.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fancy Diamond (Loose)</h5>
                                                    <p className="card-text item-detls">0.30 Carat Fancy Pink Purple-I1 Oval Cut Diamond</p>
                                                    <p className="card-text">SKU 14679933</p>
                                                    <div className='d-flex mt-3'>
                                                        <button href="#" className="btn view-btn">VIEW ITEM</button>
                                                        <button href="#" className="btn slecdimond-btn">SELECT THIS DIAMOND</button>
                                                    </div>
                                                
                                                </div>
                                                </div>
                                        </div>

                                   </div>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                <div className="row my-5">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body suport-details">
                                                    <h4> Help Line Number :</h4>
                                                     <p className='mt-4'>  
                                                     +91 12456389
                                                     </p>
                                                </div>
                                         </div>
                                    </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body suport-details">
                                                    <h4> Email :</h4>
                                                     <p className='mt-4'>  
                                                     User@gmail.com
                                                     </p>
                                                </div>
                                         </div>
                                    </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body suport-details">
                                                    <h4> Address</h4>
                                                     <p className='mt-4'>  
                                                    7-19, Aurobindo Nagar Rd
                                                     </p>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                                    
                                </TabPanel>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>



    </>
  )
}

export default Account