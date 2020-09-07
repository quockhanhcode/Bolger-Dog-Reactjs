import React, { Component } from 'react';

class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Photo Gallery</h2>
        </div>
      </div>
        );
    }
}

class Phanduoi extends Component {
    render() {
        return (
            <a className="col-6 col-md-6 col-lg-4 col-xl-3 gal-item d-block" data-aos="fade-up" data-aos-delay={100} href={this.props.move} data-fancybox="gal"><img src={this.props.img} alt="Image" className="img-fluid" /></a>
        );
    }
}


class Gallery extends Component {
    render() {
        return (
            <section className="site-section" id="gallery-section">
        <div className="container-fluid">
            <Phantren/>
            <div className="row no-gutters">
                <Phanduoi img="vender/images/dogger_img_sm_1.jpg" move="vender/images/dogger_img_sm_1.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_2.jpg" move="vender/images/dogger_img_sm_2.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_3.jpg" move="vender/images/dogger_img_sm_3.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_4.jpg" move="vender/images/dogger_img_sm_4.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_5.jpg" move="vender/images/dogger_img_sm_5.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_6.jpg" move="vender/images/dogger_img_sm_6.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_1.jpg" move="vender/images/dogger_img_sm_1.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_2.jpg" move="vender/images/dogger_img_sm_2.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_3.jpg" move="vender/images/dogger_img_sm_3.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_4.jpg" move="vender/images/dogger_img_sm_4.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_5.jpg" move="vender/images/dogger_img_sm_5.jpg"/>
                <Phanduoi img="vender/images/dogger_img_sm_6.jpg" move="vender/images/dogger_img_sm_6.jpg"/>
      </div>
        </div>
        </section>
        );
    }
}

export default Gallery;