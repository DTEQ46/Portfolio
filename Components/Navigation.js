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
import useStyles from '../utils/styles';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" height={50} width={50}></Image>
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
    </div>
  );
}

export default Navigation;
