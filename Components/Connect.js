import { Grid } from '@mui/material';
import React from 'react';
import Divider from './Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../styles/Connect.module.css';

function Connect() {
  return (
    <div>
      <Divider name="Let's Connect" />
      <div className={styles.icons}>
        <a
          target="_blank"
          href="mailto:olasehindedaniel109@gmail.com"
          rel="noopener noreferrer"
        >
          <EmailIcon className={styles.Mui} />
        </a>
        <a
          target="_blank"
          href="https://github.com/DTEQ46"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={styles.Mui} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/olasehinde-daniel-89399b1b6/"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className={styles.Mui} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/danitex46"
          rel="noopener noreferrer"
        >
          <TwitterIcon className={styles.Mui} />
        </a>
      </div>
    </div>
  );
}

export default Connect;
