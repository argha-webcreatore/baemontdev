import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='container-fluid'>
      <div className="row justify-content-center">
          <div className="col-lg-4 py-5">
              <div className="text-center">
                  <img src="assets/img/file-searching.svg" height="90" alt="File not found Image" />

                  <h1 className="text-error mt-4">404</h1>
                  <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                  <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</p>

                  <Link className="btn btn-outline-dark mt-3" to="/">Return Home</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Error404
