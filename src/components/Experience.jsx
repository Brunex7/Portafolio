import { Box, Button, Container, Typography, styled } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";
import cuadrado from "../media/cuadrado.svg";


const Experience = () => {

  const CustomButton = styled(Button)(({ theme }) =>({
    border: '3px solid white',
    borderRadius: '25px',
    color: 'white',
    width: '15%',
    display: 'block',
    '&:hover':{
      border: '3px solid #00C7FF',
    },
    [theme.breakpoints.down('md')]:{
      width: '50%',
    },
    [theme.breakpoints.down('sm')]:{
      width: '75%',
    },
  }))

  return (
  <Container
    maxWidth = 'false'
    disableGutters
    sx={{
      mx: 'auto',
      p: {
        xs: 2,
        sm: 5,
        md: 2,
      },
      background: `url(${cuadrado}) center center/cover`,
      minHeight: '800px',
    }}
    >
  <Box sx={{ maxWidth: '1300px', mx:'auto', my: 12}} id= 'experience'>
    <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', mb: 2}}>
      Let's take a look at what I've{' '}
      <span style={{color:'rgba(0,199,255,255)'}}>built</span> so far
    </Typography>

    <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          img={project.image}
        />
      ))}
    </Box>
    <Stack />
    <div
        style={{
          height: '5px',
          backgroundColor: '#ffff',
          width: '100%',
          border: 0,
          borderRadius: '25px',
        }}
      ></div>

      <Typography variant="h4" sx={{color: 'white', mt: 12, textAlign: 'center'}}>
        ¿te interesa trabajar juntos?
      </Typography>

      <CustomButton variant="outlined" sx={{ mx: 'auto', mt: 3, mb: 8}}>
        Ponte en Contacto
      </CustomButton>
  </Box>
  </Container>
  )
};

export default Experience;
