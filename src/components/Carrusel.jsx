import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import PhoneCase from '../media/PhoneCase.jpg';
import promo from '../media/Promo 1 historia.jpg';
import DF from '../media/DF cadete.jpg';
import df from '../media/DF san valentin.jpg';
import preguntas from '../media/flyer preguntas frecuentes.jpg';
import MyM from '../media/folleto MyM 2.jpg';
import mym from '../media/postres mym.jpg';
import sandwich from '../media/sandwich mym.jpg';
import primate from '../media/Logo primate (fondo Blanco).jpg';
import bl from '../media/logo BL accesorios.jpg';
import root from '../media/LOGO (marron).jpg';
import Root from '../media/flyer publicitario.jpg';
import { useMediaQuery } from '@mui/material';





const images = [
  PhoneCase,
  promo,
  DF,
  preguntas,
  df,
  bl,
  primate,
  root,
  Root,
  mym,
  sandwich,
  MyM,
];

const Carousel = () => {

    const [currentImage, setCurrentImage] = useState(2);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
      let timerId;
    
      if (autoplay) {
        timerId = setTimeout(() => {
          handleNext();
        }, intervalTime);
      }
    
      return () => {
        clearTimeout(timerId);
      };
    }, [currentImage, autoplay]);
    
  
    const handleNext = () => {
      setAutoplay(false); 
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        setAutoplay(true); 
      }, 100); 
    };
    
    const handlePrev = () => {
      setAutoplay(false); 
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
        setAutoplay(true); 
      }, 100);
    };
    

    const isMobile = useMediaQuery('(max-width:900px)');
    const intervalTime = 3000;

    
    const visibleImages = isMobile ? [images[currentImage]] : [
      images[(currentImage - 2 + images.length) % images.length],
      images[(currentImage - 1 + images.length) % images.length],
      images[currentImage],
      images[(currentImage + 1) % images.length],
      images[(currentImage + 2) % images.length]
    ];

    

  
    return (
      <Box onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
        <Typography sx={{ color: 'white', textAlign:'center', md: 2,}} variant="h5">
          Mis trabajos como Diseñador Grafico
        </Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={1} sx={{mt: 16, mb: 12,}} >
        <Grid item xs={1} sx={{width: '200px'}}>
          <Button sx={{height: '200px'}} onClick={handlePrev}>
            <KeyboardArrowLeft />
          </Button>
        </Grid>
        {visibleImages.map((image, index) => (
        <Grid item key={index}>
          <img
          src={image}
          alt={`Imagen ${index + 1}`}
          style={{
            width: isMobile ? '300px' : '200px',
            filter: isMobile ? 'none' : index === 2 ? 'none' : 'blur(8px)',
            transition: 'opacity 0.5s ease-in-out',
          }}/>
        </Grid>
        ))}
        <Grid item xs={1}>
          <Button sx={{height: '200px'}} onClick={handleNext}>
            <KeyboardArrowRight />
          </Button>
        </Grid>
      </Grid>
      </Box>
    );
  };

export default Carousel  