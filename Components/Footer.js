import React from 'react';
import { Divider } from '@material-ui/core';
import styles from '../styles/Footer.module.css';

function Footer() {
  const year = new Date();
  return (
    <div>
      <Divider />
      <div className={styles.copyright}>
        &copy; {year.getFullYear()} Daniel Olasehinde
      </div>
    </div>
  );
}

export default Footer;
