import { Box, Card,CardMedia, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";



const About = () => {

  const CustomBox = styled(Box)(({ theme }) =>({
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
  }))
  const CustomTitleBox = styled(Box)(({ theme }) =>({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
  }))

  return (
  <Box sx={{maxWidth: '1300px', my: 10, padding: 3, mx: 'auto'}} id='about'>
    <CustomTitleBox>
      <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        Conoce sobre mi
      </Typography>
    </CustomTitleBox>
    

    <CustomBox sx={{ my:7 }}>
    <Card sx={{ width: 'auto', display: 'flex'}}>
      <CardMedia
        component="img"
        image="https://avatars.githubusercontent.com/u/102549340?v=4"
        alt="green iguana"
      />
    </Card>
      <Testimonial />
    </CustomBox>
  </Box>
  )};

export default About;
