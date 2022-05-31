import { Grid } from '@mui/material';
import React from 'react';
import Divider from './Divider';
import Projects from './Projects';
import data from '../utils/data';

function ProjectGrid() {
  return (
    <div>
      <Divider name="Projects" />
      <Grid container spacing={4} style={{ marginBottom: '90px' }}>
        {data.map((project) => (
          <Grid item md={6} key={project.name}>
            <Projects project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProjectGrid;
