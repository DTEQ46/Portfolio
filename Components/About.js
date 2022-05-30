import React from 'react';
import Divider from './Divider';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div>
      <Divider name="About Me" />
      <div className={styles.about}>
        I am a Physicist turned programmer. I badged a bachelors degree in
        physics and electronics but ended up falling in love with programming.
      </div>
    </div>
  );
}

export default About;
