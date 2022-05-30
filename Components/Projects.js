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
      <NextLink href={`${project.source}`} passHref>
        <CardActionArea>
          <CardContent>
            <Typography variant="h4">{project.name}</Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={project.image}
            title={project.name}
          ></CardMedia>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}

export default Projects;
