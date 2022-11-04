import React from 'react';

import pageStyles from '../styles/pageStyles.module.css';

function Projects () {

  return (
    <section className={pageStyles.content}>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://www.github.com/stephanie-thai/spotify-playlist-converter" target="_blank" rel="noopener noreferrer">Spotify playlist Converter</a>
        </li>
        <ul>
          <li>Python script that converts a Spotify playlist to an .M3U file using the Spotify web API</li>
        </ul>
      </ul>
      <br />
      <p>Check back later for more!</p>
    </section>
  );
}

export default Projects;