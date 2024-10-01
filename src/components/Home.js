import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Elkomy Co.</h1>
        <p className="lead">Your trusted partner in [Services/Product Offerings].</p>
        <hr className="my-4" />
        <p>We offer a variety of services to suit your needs.</p>
        <a className="btn btn-primary btn-lg" href="/services" role="button">Learn More</a>
      </div>
    </div>
    </>
  );
}

export default Home;
