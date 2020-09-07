import React, { Component } from 'react';

class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Frequently Ask Questions</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
        );
    }
}
class Benphai extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay>
        <img src={this.props.img} alt="Image" className="img-fluid rounded" />
      </div>
        );
    }
}

class Bentrai extends Component {
    render() {
        return (
            <div className="accordion-item">
        <h3 className="mb-0 heading">
          <a className="btn-block" data-toggle="collapse" href={this.props.collapse} role="button" aria-expanded={this.props.up} aria-controls={this.props.control}>{this.props.tieude}<span className="icon" /></a>
        </h3>
        <div id={this.props.control} className={"collapse" + this.props.show} aria-labelledby="headingOne" data-parent="#accordion">
          <div className="body-text">
        <p>{this.props.noidung}</p>
          </div>
        </div>
      </div>
        );
    }
}



class Question extends Component {
    render() {
        return (
            <section className="site-section" id="faq-section">
        <div className="container" id="accordion">
            <Phantren/>
            <div className="row accordion justify-content-center block__76208">
                <Benphai img="vender/images/dogger_img_sm_1.jpg"/>
                <div className="col-lg-5 mr-auto order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                    <Bentrai active="true" show="show" tieude="Should I stop letting my dog sleep with me at night?"
                    noidung="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    collapse="#collapseFive" control="collapseFive"
                    />

                    <Bentrai active="false" show="" tieude="Is it okay to dress up your dog?"
                    noidung="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    collapse="#collapseSix" control="collapseSix"
                    />

                    <Bentrai active="false" show="" tieude="Why do dogs like belly rubs so much?"
                    noidung="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                    collapse="#collapseSeven" control="collapseSeven"
                    />

                    <Bentrai active="false" show="" tieude="Is a warm dry nose a sign of illness in dogs?"
                    noidung="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
                    collapse="#collapseEight" control="collapseEight"
                    />

      </div>
      </div>
        </div>
        </section>
        );
    }
}

export default Question;