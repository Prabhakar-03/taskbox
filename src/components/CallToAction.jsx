import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cta.module.css';

function Cta({ title, description, buttonText, buttonLink, imageSrc, onClick }) {
 return (
    <div className={styles.cta}>
      <section className={styles.section}>
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{description}</p>
          <div className={styles.button}>
            <a
              href={buttonLink}
              className={styles.buttonLink}
              onClick={onClick}
            >
              {buttonText}
            </a>
          </div>
        </div>
        <img
          alt="Student"
          src={imageSrc}
          className={styles.image}
        />
      </section>
    </div>
 );
}

// Add propTypes, defaultProps, and export the component here
Cta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
};

Cta.defaultProps = {
  title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
  buttonText: 'Explore here',
  buttonLink: '#',
  imageSrc: 'https://th.bing.com/th/id/OIP.yEl_470Zp3e3aTN8CWZRiQHaE8?rs=1&pid=ImgDetMain',
  
};

export default Cta;