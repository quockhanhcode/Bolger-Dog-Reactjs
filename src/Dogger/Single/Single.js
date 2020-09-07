import React, { Component } from 'react';

import dulieu from '../dulieu.json';

class Single extends Component {
    render() {
      console.log(this.props.match.params.id)
        return (
            <div>
        <div className="site-blocks-cover bg-light" data-aos="fade">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 mt-lg-5 text-center">
                {
                  dulieu.map((value,key) =>{
                    if(value.id === parseInt(this.props.match.params.id))
                    {
                      return(
                      <h1> {value.title} </h1>
                      )
                    }
                    else{return;}
                  })
                }
                <p className="post-meta">April 17, 2019 • Posted by <a href="#">Admin</a> in <a href="#">Events</a></p>
              </div>
            </div>
          </div>
        </div>  
        <section className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 blog-content">
                <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.</p>
                <div className="row mb-5">
                  <div className="col-lg-12">
                    <figure><img src="vender/images/dogger_img_sm_1.jpg" alt="Image" className="img-fluid" />
                      <figcaption>This is an image caption</figcaption></figure>
                  </div>
                  <div className="col-lg-12">
                    <figure><img src="vender/images/dogger_img_sm_2.jpg" alt="Image" className="img-fluid" />
                      <figcaption>This is an image caption</figcaption></figure>
                  </div>
                </div>
                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero tempora aliquam excepturi labore, ad soluta voluptate necessitatibus. Nulla error beatae, quam, facilis suscipit quaerat aperiam minima eveniet quis placeat.</p></blockquote>
                <p>Eveniet deleniti accusantium nulla natus nobis nam asperiores ipsa minima laudantium vero cumque cupiditate ipsum ratione dicta, expedita quae, officiis provident harum nisi! Esse eligendi ab molestias, quod nostrum hic saepe repudiandae non. Suscipit reiciendis tempora ut, saepe temporibus nemo.</p>
               
                <div className="pt-5">
                  <p>Categories:  <a href="#">Design</a>, <a href="#">Events</a>  Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
                </div>
              </div>
              <div className="col-md-4 sidebar">
                <div className="sidebar-box">
                  <form action="#" className="search-form">
                    <div className="form-group">
                      <span className="icon fa fa-search" />
                      <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                    </div>
                  </form>
                </div>
                <div className="sidebar-box">
                  <div className="categories">
                    <h3>Categories</h3>
                    <li><a href="#">Dog <span>(12)</span></a></li>
                    <li><a href="#">Dog Food <span>(22)</span></a></li>
                    <li><a href="#">Vetenirarian <span>(37)</span></a></li>
                    <li><a href="#">Events<span>(42)</span></a></li>
                  </div>
                </div>
                <div className="sidebar-box">
                  <img src="vender/images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                  <h3>About The Author</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                  <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>
                </div>
                <div className="sidebar-box">
                  <h3>Paragraph</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        );
    }
}

export default Single;