import React from 'react';
import styles from '../styles/Navigation.module.css';
import Technologies from './Technologies';
import About from './About';
import Connect from './Connect';
import Footer from './Footer';
import ProjectGrid from './ProjectGrid';
import Banner from './Banner';

function Navigation() {
  return (
    <div className={styles.container}>
      <div>
        <Banner />
        <ProjectGrid />
        <Technologies />
        <About />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}

export default Navigation;
