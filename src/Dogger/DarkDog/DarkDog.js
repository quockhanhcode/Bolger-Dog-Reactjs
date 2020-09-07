import React, { Component } from 'react';

class DarkDog extends Component {
    render() {
        return (
            <section className="site-blocks-cover overflow-hidden bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-7 align-self-center text-center text-md-left">
              <div className="intro-text">
                <h1>We Care For <span className="d-md-block">Your Dog</span></h1>
                <p className="mb-4">We always try to provide your dog the best<span className="d-block"> services.</span></p>
              </div>
            </div>
            <div className="col-md-5 align-self-end text-center text-md-right">
              <img src="vender/images/dogger_img_1.png" alt="Image" className="img-fluid cover-img" />
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default DarkDog;