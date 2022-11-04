import React from 'react';

import aboutStyles from '../styles/aboutStyles.module.css';
import pageStyles from '../styles/pageStyles.module.css';

function About () {

  return (
    <section className={pageStyles.content}>
      <h2>About</h2>
      <p>Hi! I’m Stephanie, a Computer Science graduate from The University of New South Wales.</p>
      <p>I’ve always been interested in technology since a young age which is why I enjoy coding.</p>
      <p>Some of my hobbies include drawing, cooking, and analog photography. I like creating things in my spare time to balance the logical nature of coding.</p>
      <p>Skills:</p>
      <ul>
        <li><b>Languages:</b> C, Python, Java, web development (HTML/CSS/JavaScript/React)</li>
        <li><b>Tools:</b> Git, database systems (PostgreSQL, SQLite)</li>
      </ul>
      <br />
      <p className={aboutStyles.contactPara}><b>Contact me at: </b><a href="mailto:stephaniethai72@gmail.com">stephaniethai72@gmail.com</a></p>
    </section>
  );
}

export default About;