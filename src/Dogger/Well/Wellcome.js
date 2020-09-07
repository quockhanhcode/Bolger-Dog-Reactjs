import React, { Component } from "react";

class Well extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row hover-1-wrap mb-5 mb-lg-0">
        <div className="col-12">
          <div className="row">
            <div
              className={"mb-4 mb-lg-0 col-lg-6" + this.props.Bleft}
              data-aos="fade-right"
            >
              <a href="#" className="hover-1">
                <img src={this.props.img} alt="Image" className="img-fluid" />
              </a>
            </div>
            <div
              className="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1"
              data-aos="fade-left"
            >
              <h2 className="text-black">{this.props.tieude}</h2>
              <p className="mb-4">{this.props.noidung}</p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <section className="site-section" id="about-section">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-5 align-self-center mr-auto text-left heading-section mb-5">
              <div className="paws ml-4">
                <span className="icon-paw" />
              </div>
              <h2 className="text-black mb-3">About Us</h2>
              <p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="text-muted mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <ul className="list-unstyled ul-paw primary mb-0">
                <li>A small river named Duden flows</li>
                <li>It is a paradisematic country</li>
                <li>Roasted parts of sentences fly</li>
              </ul>
            </div>
            <div className="col-lg-6 text-left heading-section mb-5" data-aos="fade-up" data-aos-delay={100}>
              <a data-fancybox data-ratio="1.5" href={this.props.video} className="video-img">
                <span className="play">
                  <span className="icon-play" />
                </span>
                <img src={this.props.img} alt="Image" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


class Wellcome extends Component {
  render() {
    return (
      <section className="site-section">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-6 text-center heading-section mb-5">
              <div className="paws">
                <span className="icon-paw" />
              </div>
              <h2 className="text-black mb-2">Welcome to Dogger Pet Care</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          <Well Bleft=" order-lg-2" img="vender/images/dogger_img_sm_3.jpg" tieude="Love & Care" noidung="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
          <Well Bleft=" order-lg-1" img="vender/images/dogger_img_sm_1.jpg" tieude="Fearsome" noidung="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
          <Well Bleft=" order-lg-2" img="vender/images/dogger_img_sm_2.jpg" tieude="Beautiful" noidung="Far far away, behind the word mountains, Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
          <About video="https://vimeo.com/317571768" img="vender/images/dogger_img_big_1.jpg"/>
        </div>
      </section>
    );
  }
}

export default Wellcome;
