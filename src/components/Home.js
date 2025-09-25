import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import './Home.css';
import NavigationMenu from '../assets/NavigationMenu';
import Footer from '../assets/Footer';
// Import your product images
import touchTech from "../../public/Images/touch-tech.jpg";
import webServices from "../../public/Images/webservices.jpeg";

const Home = () => {
  return (
    <div className="home-body">
      <NavigationMenu />
      <div className="header">
        <h1 className="animated">Welcome To Sekta Tech. Solutions</h1>
      </div>
      <div className="contents">
        <section className="intro-section section">
          <div className="intro-content">
            <p><b>SEKTA TECH. SOLUTIONS</b> is your one-stop destination for all things tech. Whether you're a tech enthusiast, a professional looking for the latest gadgets, or a business seeking innovative solutions, we've got you covered.</p>
            <p>We provide cutting-edge tech solutions to solve your technological and business challenges.</p>
            <h3>Featured Services/Products:</h3>
            <p>Discover the latest in technology with our innovative products and services</p>
            <Link to="/service-product" className="link">Explore Products</Link>
            <h3>Our Mission: Empowering Your Digital Journey</h3>
            <p>At SEKTA TECH. SOLUTIONS, our mission is to empower individuals and businesses on their digital journey.
              We strive to provide innovative tech solutions that inspire creativity, enhance productivity, and simplify the complexities of modern technology.
              Our commitment to excellence drives us to continuously evolve and adapt, ensuring that we always deliver cutting-edge products and services that exceed your expectations.
              Join us and embark on a digital adventure where possibilities are limitless!</p>
          </div>
        </section>

        <section className="services-section section">
          <h3>Our Services</h3>
          <div className="service">
            <h4>Web Development</h4>
            <p>From basic websites to complex web applications, we create tailored solutions to meet your needs.</p>
            <h4>Digital Marketing</h4>
            <p>Grow your online presence with our strategic digital marketing services.</p>
          </div>
        </section>

        <section className="products-section section">
          <h3>Featured Products</h3>
          <div className='product-grid'>
            <div className="product-item">
              <img src={touchTech} alt="Touch Tech Product" />
              <h4>Product 1</h4>
              <p>Description of Product 1.</p>
              <button className="btn">Buy Now</button>
            </div>

            <div className='product-item'>
              <img src={webServices} alt="Web Services Product" />
              <h4>Product 2</h4>
              <p>Description of Product 2.</p>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </section>

        <section className="newsletter-section section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay up-to-date with the latest tech trends and promotions.</p>
          <p>Register with us <Link to="/registration-form" className='link'>Here</Link></p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;