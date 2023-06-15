import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const cardStyle = {
  backgroundColor: 'rgb(26,26, 26)',
  border: '5px solid rgb(26, 26, 26)'
};


const Project = ({ image, title, description, tags, deployLink, codeLink }) => {
  return (
    <Card style={cardStyle}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="Project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
          <Typography variant="body2" color="rgba(0,199,255,255)">
            {tags.join(', ')}
          </Typography>
        </CardContent>
      <CardActions>
        <Button href={deployLink} target="_blank" rel="noopener noreferrer">
          Deploy
        </Button>
        <Button href={codeLink} target="_blank" rel="noopener noreferrer">
          Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
