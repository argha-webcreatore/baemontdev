import React from 'react'

function Failure() {
  return (
    <>
    <section id="breadcrumbRow">
        <h2>Failed</h2>
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
                <div className='col-12 text-center text-danger'>
                    <h3 className=''>Your order no. is Failure </h3>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Failure