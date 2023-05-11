import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Pages from "./Pages";




const Footer = () => {
  return <Box 
    sx={{
      maxWidth: '1100px',
      borderTop: '1px solid #7889A8',
      mx: 'auto',
      padding: 3,
      display:'flex',
      justifyContent: 'space-around',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <Typography variant = 'body1' sx={{ color: '#7889A8', fontWeight: 'bold', mb: 2}}>
        PAGES
      </Typography>

      <Link 
        to='home' 
        className="link" 
        smooth 
        style={{ color: 'white', margin: '0.5rem 0', cursor: 'pointer'}}
      >
        Home
      </Link>
      <Link 
        to='experience' 
        className="link" 
        smooth 
        style={{ color: 'white', margin: '0.5rem 0', cursor: 'pointer'}}
      >
        Experiencia
      </Link>
      <Link 
        to='about' 
        className="link" 
        smooth 
        style={{ color: 'white', margin: '0.5rem 0', cursor: 'pointer'}}
      >
        About
      </Link>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    <Typography variant = 'body1' sx={{ color: '#7889A8', fontWeight: 'bold', mb: 2}}>
        SOCIAL
      </Typography>
      <Pages />
    </Box>

  </Box>
};

export default Footer;
