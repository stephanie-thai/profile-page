import React from 'react';

import aboutStyles from '../styles/aboutStyles.module.css';
import pageStyles from '../styles/pageStyles.module.css';

function About () {

  return (
    <section className={pageStyles.content}>
      <h2>About</h2>
      <p>Hi! I’m Stephanie, a Computer Science student in my final year at The University of New South Wales.</p>
      <p>I’ve always been attracted to technology and designing things which is why I’m interested in frontend development.</p>
      <p>Some of my hobbies include drawing/painting, cooking, sewing and analog photography. I like creating things as a form of self-expression to balance the logical nature of coding.</p>
      <p>Some of my skills include:</p>
      <ul>
        <li><b>Languages:</b> C, Python, Java, C++, web development (HTML/CSS/JavaScript/React), scripting languages (Shell, Perl)</li>
        <li><b>Tools:</b> Git, database systems (PostgreSQL, SQLite)</li>
      </ul>
      <br />
      <p className={aboutStyles.contactPara}><b>Contact me at: </b><a href="mailto:stephaniethai72@gmail.com">stephaniethai72@gmail.com</a></p>
    </section>
  );
}

export default About;