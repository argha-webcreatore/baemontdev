import React from 'react'
import { Link, useParams, useSearchParams, useNavigate,Navigate,Route,useLocation } from 'react-router-dom'
function Success(props) {
  const {id} = useParams('id');
  console.log(id)
  localStorage.removeItem("indexvalue");
  localStorage.removeItem("availableCartProductIds");
  localStorage.removeItem("productsbag");
  props.setCartItem([]);
  return (
    <>
    <section id="breadcrumbRow">
        <h2>Success</h2>
        <div className="container">
            <div className="row pageTitle m0">
                {/* <div className="col-12">
                    <h4 className="fleft">About us</h4>
                    <ul className="breadcrumb fright">
                        <li><a href="index.html">home</a></li>
                        <li className="active">About us</li>
                    </ul>

                </div> */}
            </div>
        </div>
    </section>
    <section className='py-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center text-success'>
                    <h3 className=''>Your order no. is {id}</h3>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Success