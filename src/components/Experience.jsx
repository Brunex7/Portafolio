import { Box, Button, Container, Typography, styled } from "@mui/material";
import React from "react";
import App, { projects } from "../constants/project";
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
      Aqui puedes ver mis {' '}
      <span style={{color:'rgba(0,199,255,255)'}}>proyectos</span>.
    </Typography>
    <App />
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

      <Typography variant="h4" sx={{color: 'white', textAlign: 'center'}}>
        ¿te interesa trabajar juntos?
      </Typography>
  </Box>
  </Container>
  )
};

export default Experience;
