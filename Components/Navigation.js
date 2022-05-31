import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';
import data from '../utils/data';
import styles from '../styles/Navigation.module.css';
import Divider from './Divider';
import Projects from './Projects';
import Technologies from './Technologies';
import About from './About';
import Connect from './Connect';
import Footer from './Footer';

function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <img src="/images/logo.svg"></img>
          </div>
          <div className={styles.links}>
            <NextLink href="#home" passHref>
              <Link style={{ textDecoration: 'none' }}>Home</Link>
            </NextLink>
            <NextLink href="#home" passHref>
              <Link style={{ textDecoration: 'none' }}>Projects</Link>
            </NextLink>
            <NextLink href="#home" passHref>
              <Link style={{ textDecoration: 'none' }}>About</Link>
            </NextLink>
          </div>
          <div className={styles.buttonCon}>
            <button>Let's Talk</button>
          </div>
        </div>
        <div className={styles.intro}>
          <div className={styles.write}>
            <div className={styles.hello}>Hello, I'm</div>
            <div className={styles.name}>DANIEL</div>
            <div className={styles.description}>
              I am persionate about web development and internet of things. I
              care about writing effective, clean and reusable codes. I am
              always open to learning new technologies too.
            </div>
          </div>
          <div className={styles.picture}>
            <img src="/images/picture.png"></img>
          </div>
          <div className={styles.animation}>
            <img src="/images/react.svg" className={styles.react}></img>
            <img src="/images/figma.svg" className={styles.figma}></img>
            <img src="/images/node.svg" className={styles.node}></img>
          </div>
        </div>
      </div>
      <Divider name="Projects" />
      <Grid container spacing={4} style={{ marginBottom: '90px' }}>
        {data.map((project) => (
          <Grid item md={6} key={project.name}>
            <Projects project={project} />
          </Grid>
        ))}
      </Grid>
      <Technologies />
      <About />
      <Connect />
      <Footer />
    </div>
  );
}

export default Navigation;
