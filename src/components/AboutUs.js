import React from 'react';
import '../styles/main.css';
import './About.css';
import NavigationMenu from '../assets/NavigationMenu';
import edward from '../../public/Images/edward.jpg';
import Footer from '../assets/Footer';

const AboutUs = () => {
  return (
    <div className="about-body">
      <NavigationMenu />
      <main>
        <h1 className="animated">About Us</h1>
        <div className="contents">
          <section id="company-background">
            <div className="main-content">
              <h2>Brief Company Background</h2>
              <p>
                SEKTA TECH. SOLUTIONS was pioneered by two great thinkers, Mr. Eddieson S. & K.K. Winters, in 2018.
                They started as ICT trainers in Mukono Town Council and by 2020, decided to invest bigger by transforming themselves into tech generals in Mukono district.
                Eddieson is the co-founder of this great company.
              </p>
            </div>
          </section>
          <section id="ceo-profile">
            <div className="main-content">
              <h4>Company CEO</h4>
              <div className="image-text-wrapper">
                <img src={edward} alt="Eddieson S., CEO of SEKTA TECH. SOLUTIONS" className="ceo-image" />
                <p>
                  Eddieson S. has been instrumental in the growth and vision of SEKTA TECH. SOLUTIONS, leading the company with innovation and dedication.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;