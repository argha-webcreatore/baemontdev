import React from 'react'

function Wishlist() {
  return (
    <div>
      
      <section className="bg-light py-2">
        <div className="container">
          <div className="row pageTitle m0">
            <div className="col-12">
              <h4 className="text-uppercase mb-0">Wish List <small className="text-muted text-capitalize">(2 Items)</small></h4>
            </div>
          </div>
        </div>
      </section>

    <section className="wishList py-5">
      <div className="container">
        <div className="row g-3">

          <div className="col-md-4">
            <div className="card card-wishList">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="title">Engagement Ring</h4>
                  <button type="button" className="btn-close" aria-label="Close"></button>
                </div>
                
                <img className="item-img img-fluid rounded" src="assets/img/diamond-1.png" alt=""/>
                <ul className="dtl-list">
                  <li>
                    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14.9 17.87"><path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path></svg>
                    <h5 className="item-title">Solitaire Engagement Ring Embellished With a Four Prong Signature Head</h5>
                  </li>
                  <li>
                    <span className="sku text-muted">SKU S01W14H01W14</span>
                  </li>
                </ul>
                <div className="item-price">
                  <span className="original-item-price">$780</span>
                  <span className="toBpaid">$585</span>
                </div>
                <hr/>
                <div className="actionBtn-list d-flex">
                  <button className="btn btn-outline-default flex-fill me-2">View Item</button>
                  <button className="btn btn-default flex-fill">Select This Setting</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-wishList">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="title">Engagement Ring</h4>
                  <button type="button" className="btn-close" aria-label="Close"></button>
                </div>
                
                <img className="item-img img-fluid rounded" src="assets/img/diamond-1.png" alt=""/>
                <ul className="dtl-list">
                  <li>
                    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14.9 17.87"><path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path></svg>
                    <h5 className="item-title">1.01 Carat I-SI1 Asscher Cut Diamond</h5>
                  </li>
                  <li>
                    <span className="sku text-muted">SKU 14851929</span>
                  </li>
                </ul>
                <div className="item-price">
                  
                  <span className="toBpaid">$585</span>
                </div>
                <hr/>
                <div className="actionBtn-list d-flex">
                  <button className="btn btn-outline-default flex-fill me-2">View Item</button>
                  <button className="btn btn-default flex-fill">Select This Setting</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-wishList">
              <div className="card-body">
                <div className="card-title">
                  <h4 className="title">Engagement Ring</h4>
                  <button type="button" className="btn-close" aria-label="Close"></button>
                </div>
                
                <img className="item-img img-fluid rounded" src="assets/img/diamond-1.png" alt=""/>
                <ul className="dtl-list">
                  <li>
                    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14.9 17.87"><path d="M7.59,2.91,4.64,0l-1,1.09L5.84,3.37a7.33,7.33,0,0,0,1.61,14.5A7.32,7.32,0,0,0,9.34,3.44l2.21-2.35L10.53,0,7.59,2.91ZM7.46,16A5.43,5.43,0,0,1,2,10.66,5.43,5.43,0,0,1,7.47,5.33,5.44,5.44,0,0,1,13,10.66,5.44,5.44,0,0,1,7.47,16Z"></path></svg>
                    <h5 className="item-title">1.01 Carat I-SI1 Asscher Cut Diamond</h5>
                  </li>
                  <li>
                    <span className="sku text-muted">SKU 14851929</span>
                  </li>
                </ul>
                <div className="item-price">
                
                  <span className="toBpaid">$585</span>
                </div>
                <hr/>
                <div className="actionBtn-list d-flex">
                  <button className="btn btn-outline-default flex-fill me-2">View Item</button>
                  <button className="btn btn-default flex-fill">Select This Setting</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    </div>
  )
}

export default Wishlist