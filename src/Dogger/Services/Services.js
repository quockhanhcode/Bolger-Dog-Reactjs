import React, { Component } from 'react';

class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Our Services</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
        );
    }
}

class Phanduoi extends Component {
    render() {
        return (
            <div className="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay>
        <div className="block_service">
          <img src={this.props.img} alt="Image mb-5" />
          <h3>Dog Checkup</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        </div>
      </div>
        );
    }
}


class Services extends Component {
    render() {
        return (
            <section className="site-section " id="services-section">
        <div className="container">
            <Phantren/>
            <div className="row">
                <Phanduoi img="vender/images/dogger_checkup.svg"/>
                <Phanduoi img="vender/images/dogger_dermatology.svg"/>
                <Phanduoi img="vender/images/dogger_bones.svg"/>
                <Phanduoi img="vender/images/dogger_veterinary.svg"/>
                <Phanduoi img="vender/images/dogger_dryer.svg"/>
                <Phanduoi img="vender/images/dogger_veterinarian.svg"/>
      </div>
        </div>
        </section>
        );
    }
}

export default Services;