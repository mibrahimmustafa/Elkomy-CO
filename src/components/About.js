import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
<div>
      {/* Start All Title Box */}
      <div className="all-title-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>ABOUT US</h2>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">ABOUT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End All Title Box */}

      {/* Start About Page */}
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-frame"> 
                <img className="img-fluid" src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="noo-sh-title-top">We are <span>Freshshop</span></h2>
              <p>"Sed ut perspiciatis unde omnis iste natus error..."</p>
              <Link className="btn hvr-hover" href="#">Read More</Link>
            </div>
          </div>
          {/* More content can follow here */}
        </div>
      </div>
      {/* End About Page */}
    </div>

  );
}

export default About;
