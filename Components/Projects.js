import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

function Projects({ project }) {
  return (
    <Card>
      <a target="_blank" href={`${project.source}`} rel="noopener noreferrer">
        <CardActionArea>
          <CardContent>
            <Typography style={{ fontWeight: 'bold' }}>
              {project.name}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={project.image}
            title={project.name}
          ></CardMedia>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default Projects;
