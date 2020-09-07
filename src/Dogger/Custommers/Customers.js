import React, { Component } from 'react';

class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Happy Customers</h2>
        </div>
      </div>
        );
    }
}

class KhachHang extends Component {
    render() {
        return (
            <div>
        <div className="block-testimony-1 text-center">
          <blockquote className="mb-4">
        <p>{this.props.noidung}</p>
          </blockquote>
          <figure>
            <img src={this.props.img} alt="Image" className="img-fluid rounded-circle mx-auto" />
          </figure>
        <h3 className="font-size-20 text-black">{this.props.name}</h3>
        </div>
      </div>
        );
    }
}


class Customers extends Component {
    render() {
        return (
            <section className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
        <div className="container">
            <Phantren/>
            <div data-aos="fade-up" data-aos-delay={200}> <div className="owl-carousel nonloop-block-13">
                <KhachHang noidung="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way." img="vender/images/person_4.jpg" name="Ricky Fisher"/>
                <KhachHang noidung="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." img="vender/images/person_1.jpg" name="Ken Davis"/>
                <KhachHang noidung="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth." img="vender/images/person_2.jpg" name="Mellisa Griffin"/>
                <KhachHang noidung="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." img="vender/images/person_3.jpg" name="Robert Steward"/>
        </div>
        </div>
        </div>
        </section>

        );
    }
}

export default Customers;