import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import './ServiceProduct.css';
import NavigationMenu from "../assets/NavigationMenu";
import Footer from "../assets/Footer";

// Importing images
import edward from '../../public/Images/edward.jpg';
import touchTech from '../../public/Images/touch-tech.jpg';
import webServices from '../../public/Images/webservices.jpeg';

// Data arrays for products, testimonials, case studies, and FAQs
const products = [
  {
    img: edward,
    alt: "Edward Product",
    title: "Product 1",
    desc: "A powerful solution for managing your business operations efficiently.",
    link: "/buy/product1"
  },
  {
    img: touchTech,
    alt: "Touch Technology Product",
    title: "Product 2",
    desc: "Innovative touch technology for modern businesses.",
    link: "/buy/product2"
  },
  {
    img: webServices,
    alt: "Web Services Product",
    title: "Product 3",
    desc: "Comprehensive web services to boost your online presence.",
    link: "/buy/product3"
  }
];

const testimonials = [
  {
    text: "SEKTA TECH. SOLUTIONS transformed our business with their innovative solutions. Their team is incredibly knowledgeable and professional.",
    author: "Client A"
  },
  {
    text: "The custom software developed by SEKTA TECH. SOLUTIONS has streamlined our operations and improved our efficiency significantly.",
    author: "Client B"
  }
];

const caseStudies = [
  {
    title: "Enterprise Resource Planning System",
    desc: "We developed a comprehensive ERP system for a large corporation, which integrated various business processes and improved overall productivity."
  },
  {
    title: "E-Commerce Platform",
    desc: "We created a custom e-commerce platform for a retail client, enabling them to reach a wider audience and increase their sales."
  }
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer IT training, information systems development, custom software development, and IT consultancy services."
  },
  {
    question: "How can I get started?",
    answer: "You can contact us through our website or give us a call to discuss your needs and get a customized solution."
  }
];

const ServicesProducts = () => {
  return (
    <div className="service-product-body">
      <NavigationMenu />
      <div className="header">
        <h1 className="animated">Our Services and Products</h1>
      </div>
      <div className="contents">
        <section className="intro-section section">
          <div className="intro-content">
            <h2>Welcome to the Service/Product Portal</h2>
            <p>We offer a wide range of services and products to cater to your tech needs:</p>
            <ol>
              <li>Training in various IT-related skills</li>
              <li>Develop Information Management Systems</li>
              <li>Custom Software Development</li>
              <li>IT Consultancy</li>
            </ol>
          </div>
        </section>

        <section className="services-section section">
          <h3>Our Services</h3>
          <div className="service">
            <h4>IT Training</h4>
            <p>We provide professional training in various IT skills to help you stay ahead in the tech world.</p>
            <h4>Information Systems Development</h4>
            <p>We specialize in creating custom information management systems tailored to your business needs.</p>
            <h4>Custom Software Development</h4>
            <p>Our team of expert developers can create custom software solutions to meet your unique requirements.</p>
            <h4>IT Consultancy</h4>
            <p>We offer expert IT consultancy services to help you make informed decisions and optimize your tech strategy.</p>
          </div>
        </section>

        <section className="products-section section">
          <h3>Featured Products</h3>
          <div className="product-grid">
            {products.map((product, idx) => (
              <div className="product-item" key={idx}>
                <img src={product.img} alt={product.alt} />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                  <Link to={product.link} className="btn">Buy Now</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials-section section">
          <h3>What Our Clients Say</h3>
          <div className="testimonial-list">
            {testimonials.map((t, idx) => (
              <div className="testimonial" key={idx}>
                <p>"{t.text}" <br /><span className="testimonial-author">- {t.author}</span></p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-studies-section section">
          <h3>Case Studies</h3>
          <div className="case-study-list">
            {caseStudies.map((c, idx) => (
              <div className="case-study" key={idx}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="faqs-section section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div className="faq" key={idx}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesProducts;