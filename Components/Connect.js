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
        <EmailIcon className={styles.Mui} />
        <GitHubIcon className={styles.Mui} />
        <LinkedInIcon className={styles.Mui} />
        <TwitterIcon className={styles.Mui} />
      </div>
    </div>
  );
}

export default Connect;
