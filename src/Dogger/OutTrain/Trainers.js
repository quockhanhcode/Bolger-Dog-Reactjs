import React, { Component } from 'react';

class PhanTieude extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-7 text-center heading-section mb-5">
          <div className="paws white">
            <span className="icon-paw" />
          </div>
          <h2 className="mb-2 heading">Our Trainers</h2>
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
        <div className="trainer">
          <figure>
            <img src={this.props.img} alt="Image" className="img-fluid" />
          </figure>
          <div className="px-md-3">
        <h3>{this.props.name}</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ul-social-circle">
              <li><a href="#"><span className="icon-twitter" /></a></li>
              <li><a href="#"><span className="icon-instagram" /></a></li>
              <li><a href="#"><span className="icon-facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>
        );
    }
}


class Trainers extends Component {
    render() {
        return (
            <section className="site-section bg-primary trainers" id="trainers-section">
                <div className="container">
                <div className="row">
                    <PhanTieude/>
                    <Phanduoi name="Jessica White" img="vender/images/dogger_trainer_1.jpg"/>
                    <Phanduoi name="Valerie Elash" img="vender/images/dogger_trainer_2.jpg"/>
                    <Phanduoi name="Alicia Jones" img="vender/images/dogger_trainer_3.jpg"/>
                </div>
                </div>
            </section>
        );
    }
}

export default Trainers;