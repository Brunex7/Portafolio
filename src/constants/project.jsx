import React from 'react';
import Project from '../components/Project';
import { Grid } from '@mui/material';
import RyM from '../media/portada RyM_page-0001.jpg';
import PI from '../media/portada PI_page-0001.jpg';


const App = () => {
  const projects = [
    {
      image: RyM,
      title: 'Rick and Morty App',
      description: 'Este proyecto se realizo para aplicar los conocimientos del Front-End',
      tags: ['JavaScript', 'React', 'CSS', 'UX/UI', 'API'],
      deployLink: 'https://rick-and-morty-app-sooty.vercel.app/',
      codeLink: 'https://github.com/Brunex7/rick_and_morty',
    },
    {
      image: PI,
      title: 'Henry PI| Videojuegos',
      description: 'Proyecto completo de Front-End y Back-End creando la base de datos y todas sus rutas.',
      tags: ['React', 'Redux', 'JavaScript', 'CSS', 'UX/UI', 'SQL', 'Node.js', 'Express', 'API'],
      deployLink: 'https://example.com/project2-deploy',
      codeLink: 'https://github.com/Brunex7/PI-Videogames-main'
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {projects.map((project, index) => (
    <Grid item key={index} xs={12} sm={6} md={4} style={{ animationDelay: `${index * 0.1}s` }}>
      <Project {...project} />
    </Grid>
  ))}
</Grid>

);
};

export default App;
