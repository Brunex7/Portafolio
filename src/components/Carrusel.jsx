import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import PhoneCase from '../media/PhoneCase.jpg';
import { useMediaQuery } from '@mui/material';




const images = [
  'https://i.pinimg.com/564x/19/77/de/1977de988785f3068f8b489f5a2d593d.jpg',
  'https://i.pinimg.com/564x/c0/eb/49/c0eb49bf1efa614de271125f9a75e0a8.jpg',
  'https://i.pinimg.com/564x/e0/a1/13/e0a113ca7e4f1c98b7da531934c8d697.jpg',
  'https://i.pinimg.com/236x/ed/69/02/ed690200f40bf1cb7795c49a42f20b10.jpg',
  'https://i.pinimg.com/236x/c4/a3/e9/c4a3e9140074c937a5e78b9d2646bdae.jpg',
  'https://i.pinimg.com/236x/01/50/1d/01501da1c698345988c7082e69a4a24a.jpg',
  'https://i.pinimg.com/236x/ec/b1/43/ecb1439074688451d8b2e609c891ae42.jpg',
  'https://i.pinimg.com/236x/d8/b2/cb/d8b2cb7cfef592873fb55c07b4742fd1.jpg',
  'https://i.pinimg.com/236x/32/72/9c/32729c6892ce548aee615ef231057782.jpg',
  'https://i.pinimg.com/236x/7b/c1/5a/7bc15a27bebf3e2763890cedfc2b3437.jpg',
  PhoneCase,
  // Agrega más imágenes aquí 
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