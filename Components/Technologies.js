import React from 'react';
import Divider from './Divider';
import styles from '../styles/Technologies.module.css';
import GridViewIcon from '@mui/icons-material/GridView';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Grid } from '@mui/material';

function Technologies() {
  return (
    <div>
      <Divider name="Technologies" />
      <div className={styles.intro}>
        I have worked with a range of technologies in the web development world,
        from backend to design.
      </div>
      <Grid container spacing={4} style={{ marginBottom: '90px' }}>
        <Grid item md={4}>
          <GridViewIcon />
          <div className={styles.techType}>Front-End</div>
          <div className={styles.techTypeDisc}>
            Experience with HTML, CSS, JavaScript, React Js and Next Js
          </div>
        </Grid>
        <Grid item md={4}>
          <StorageIcon />
          <div className={styles.techType}>Back-End</div>
          <div className={styles.techTypeDisc}>
            Experience with Nodejs, Express and databases
          </div>
        </Grid>
        <Grid item md={4}>
          <DesignServicesIcon />
          <div className={styles.techType}>UI/UX</div>
          <div className={styles.techTypeDisc}>Experience with Figma</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Technologies;
