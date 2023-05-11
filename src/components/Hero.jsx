import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import reactImg from "../media/react_svg.svg";
import Navbar from "./Navbar";


const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) =>({
    border: '3px solid white',
    backgroundColor: '#00C7FF',
    color: 'white',
    width: '20%',
    borderRadius: '25px',
    '&:hover':{
      border: '3px solid white',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('md')]:{
      width: '35%',
    },
    [theme.breakpoints.down('sm')]:{
      width: '50%',
    },
  }))
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
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          gap:'1rem',
          mt: 16,
        }}>
          <CustomButton>Download CV</CustomButton>
        </Box>

    </Box>
</Container>

  );
};

export default Hero;
