import React, { Component } from 'react';

class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={this.props.delay}>
        <div className="col-lg-7 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="mb-2 text-black heading">Pricing Table</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
        );
    }
}
// bg-primary
class Phanduoi extends Component {
    render() {
        return (
                <div className={"col-12 col-sm-6 col-md-6 "+ this.props.bg +" col-lg-4 p-3 p-md-5"} data-aos="fade-up" data-aos-delay={this.props.delay}>
        <div className="pricing">
        <h3 className="text-center text-white text-uppercase">{this.props.special}</h3>
          <div className="price text-center mb-4 ">
        <span><span>{this.props.giatien}</span> / year</span>
          </div>
          <ul className="list-unstyled ul-check success mb-5">
            <li>Officia quaerat eaque neque</li>
            <li>Possimus aut consequuntur incidunt</li>
            <li className="remove">Lorem ipsum dolor sit amet</li>
            <li className="remove">Consectetur adipisicing elit</li>
            <li className="remove">Dolorum esse odio quas architecto sint</li>
          </ul>
          <p className="text-center">
            <a href="#" className="btn btn-secondary">Buy Now</a>
          </p>
        </div>
      </div>
        );
    }
}


class Pricing extends Component {
    render() {
        return (
        <section className="site-section" id="pricing-section">
        <div className="container">
            <Phantren/>
            <div className="row no-gutters">
                <Phanduoi bg=" bg-primary" special="BASIC" giatien="$47"/>
                <Phanduoi bg=" bg-dark" special="PREMIUM" giatien="$250" delay="100"/>
                <Phanduoi bg=" bg-primary" special="PROFESSIONAL" giatien="$850" delay="200"/>
            </div>
        </div>
        </section>
        );
    }
}

export default Pricing;