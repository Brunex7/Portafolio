import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import reactImg from "../media/react_svg.svg";
import Navbar from "./Navbar";



const Hero = () => {

  const CustomTitle = styled(Typography)(({ theme }) =>({
    color: 'white',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '2.5rem',
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
        background: `url(${reactImg}) center center/cover`,
        minHeight: '800px',
      }}
      >
        <Navbar />
    <Box
      sx={{mt: 16, mb: 12, maxWidth: '1000px', mx: 'auto'}}
      id = 'home'
    >
      <Typography sx={{ color: 'white', textAlign:'center', md: 2}} variant="h6">
        BIENVENIDOS.
      </Typography>
      <CustomTitle variant = 'h4'>
        Soy Bruno Romero, programador <span style={{ color: 'rgba(0,199,255,255)'}}>Full Stack Developer</span>{' '}
        y <span style={{ color: 'rgba(0,199,255,255)'}}> Diseñador Grafico </span> jr.
      </CustomTitle>

      <Box
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:'1rem',
          mt: 16,
        }}>
          <Button sx={{border: '2px solid'}} href="/RomeroBrunoCv.pdf" download>Download CV</Button>
          <Button sx={{border: '2px solid'}} href="/Portafolio.pdf" download>Download Portfolio</Button>
        </Box>
    </Box>
</Container>

  );
};

export default Hero;
