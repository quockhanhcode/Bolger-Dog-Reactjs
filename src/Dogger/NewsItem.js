import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class NewsItem extends Component {
    constructor(props) {
        super(props);
        
    }
    chuyenDoiUrl = (str) =>
    {
      str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }
    render() {
        return (
          <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={this.props.delay}>
            <div className="d-lg-flex blog-entry">
          <figure className="mr-4">
            <a href="single.html"><img src={this.props.img} alt="Image" className="img-fluid" /></a>
          </figure>
          <div className="blog-entry-text">
        <h3> <Link to={"/single" + this.chuyenDoiUrl(this.props.title) + "." + this.props.id + ".html"}>{this.props.title}</Link></h3>
            <span className="post-meta mb-3 d-block">{this.props.thoigian}</span>
        <p>{this.props.content}</p>
            <p><a href="#" className>Read More..</a></p>
          </div>
        </div>
        </div>
        );
    }
}

export default NewsItem;