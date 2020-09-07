import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NewsItem from '../NewsItem';
import dulieu from '../dulieu.json';
class Phantren extends Component {
    render() {
        return (
            <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-6 text-center heading-section mb-5">
          <div className="paws">
            <span className="icon-paw" />
          </div>
          <h2 className="text-black mb-2">Dogger Blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
        );
    }
}

class Phanduoi extends Component {
    render()
    {
          return (
                dulieu.map((value,key) =>
                {
                    return(
                        <NewsItem key={key}
                        id={value.id}
                    title={value.title}
                    thoigian={value.thoigian}
                    content={value.content}
                    img={value.img}
                    />
                    )

                })  
      );
    }
}


class BlogD extends Component {
    render() {
        return (
            <section className="site-section" id="blog-section">
        <div className="container">
            <Phantren/>
            <div className="row">
                <Phanduoi/>
            </div>
        </div>
        </section>
        );
    }
}

export default BlogD;