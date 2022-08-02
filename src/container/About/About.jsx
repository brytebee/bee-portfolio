import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
const abouts = [
  {
    title: 'Frontend development',
    description: 'I am a good frontend engineer',
    imageUrl: images.about01,
  },
  {
    title: 'Backend Development',
    description: 'I am a good backend engineer',
    imageUrl: images.about02,
  },
  {
    title: 'Web designer',
    description: 'I possess great web design skills and taste',
    imageUrl: images.about03,
  },
  {
    title: 'Ruby/Rails Stack',
    description: 'Intermediate user of Ruby/Rails Stack',
    imageUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        {' '}
        I know that <span>Good Design</span> means <span>Good Business</span>{' '}
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            {/* <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p> */}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

// Frontend:

// HTML (Jade)
// CSS (SASS/LESS)
// Javascript (Angular.js, jQuery, CoffeeScript, Backbone.js, React.js)
// Database:

// Postgresql 9.4
// MongoDB
// MySql
// Backend:

// Node.js
// Ruby On Rails
// PHP
// Python
// Tools:

// GIT
// GULP
// ATOM
// SUBLIME
// AWS
// HEROKU
// SITEPRISM
// Web Design:

// Photoshop
// Illustrator
