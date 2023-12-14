// Hero.js
import React from 'react';
import PropTypes from 'prop-types';
import './custom-styles.css';

function Hero({ title, description, getStartedLink, learnMoreLink, buttonText }) {
 return (
    <div className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button-container">
          <a href={getStartedLink} class="button b1">
            {buttonText}
          </a>
          <a href={learnMoreLink} className="button b1">
            Learn More
          </a>
        </div>
      </div>
    </div>
 );
}

Hero.propTypes = {
 title: PropTypes.string,
 description: PropTypes.string,
 getStartedLink: PropTypes.string,
 learnMoreLink: PropTypes.string,
 buttonText: PropTypes.string,
};

Hero.defaultProps = {
 title: 'Understand User Flow. Increase Conversion.',
 description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
 getStartedLink: '/get-started',
 learnMoreLink: '/about',
 buttonText: 'Get Started',
};

export default Hero;